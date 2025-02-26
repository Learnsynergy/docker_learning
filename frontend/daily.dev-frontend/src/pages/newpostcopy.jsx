import React, { useState } from "react";
import Button from "../components/Button/index";
import "../styles/NewPost/NewPost.css";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import Layout from "../components/Layout/Layout";
import { FaImage } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { VscMention } from "react-icons/vsc";
import { BsMarkdown } from "react-icons/bs";
import axios from "../api/client";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [image, setImage] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  // ID du squad par défaut
  const [squadId, setSquadId] = useState("7fbec038-7882-419e-952e-71de3742c4a6");

  const handleSelect = (event) => {
    setSquadId(event.target.value); // Mettre à jour l'ID du squad sélectionné
  };

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("thumbnail", thumbnail); 
      formData.append("picture", image); 
      formData.append("squadId", squadId); // Utiliser l'ID du squad sélectionné

      console.log("FormData à envoyer :", {
        title,
        content,
        thumbnail,
        image,
        squadId, // Ajout de squadId dans les logs
      });

      const response = await axios.post("/post", formData);

      if (response.status === 201) {
        const data = response.data;
        console.log("Post créé avec succès :", data);

        setTitle("");
        setContent("");
        setIsChecked(false);
        setImage(null);
        setThumbnail(null);
        setSquadId("7fbec038-7882-419e-952e-71de3742c4a6"); // Réinitialiser l'ID du squad par défaut
      } else {
        console.error(
          "Erreur lors de la création du post :",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Erreur réseau lors de la création du post :", error);
    }
  };

  const handleThumbnailChange = (e) => {
    const fileThumbnail = e.target.files[0];
    setThumbnail(fileThumbnail);
    console.log("Thumbnail sélectionné :", fileThumbnail);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log("Image sélectionnée :", file);
  };

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Layout>
      <div className="new-post-container">
        <div className="new-post-container1">
          <header className="new-post-header">
            <div className="new-post-header-container1 active">
              <Button className="new-post-tab active" text="New post" />
            </div>
            <div className="new-post-header-container1">
              <Button className="new-post-tab" text="Share a link" />
            </div>
          </header>

          <div className="new-post-container1-deleteandpost">
            <Button
              className="newpost-cancel-button"
              text="Cancel"
            />

            <Button
              className="newpost-post-buttonresponsive"
              text="Post"
              onClick={handlePost}
            />
          </div>

          <div className="new-post-container1-title-responsive">
            <h2>New Post</h2>
          </div>

          <main className="new-post-main">
            <div className="new-post-input-group1">
              <label htmlFor="squadSelect" className="squad-select-label">
                Select Squad:
              </label>
              <select
                id="squadSelect"
                value={squadId} // Assurez-vous que le select est lié à squadId
                onChange={handleSelect}
                className="select-squad"
              >
                <option value="7fbec038-7882-419e-952e-71de3742c4a6">Default Squad</option>
                <option value="another-squad-id">Another Squad</option>
                <option value="yet-another-squad-id">Yet Another Squad</option>
              </select>
            </div>

            <div className="new-post-thumbnail-group">
              <button
                className="new-post-thumbnail-button"
                onClick={() =>
                  document.getElementById("fileInputThumbnail").click()
                }
              >
                <MdOutlinePhotoCamera className="new-post-thumbnail-icon" />{" "}
                Thumbnail
              </button>
              <input
                type="file"
                id="fileInputThumbnail"
                style={{ display: "none" }}
                onChange={handleThumbnailChange}
              />
            </div>
            <div className="new-post-input-group2">
              <input
                type="text"
                placeholder="Post Title*"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="post-title-input"
              />
              <span className="char-count">250</span>
            </div>
            <div className="editor-group">
              <div className="editor-tabs">
                <div className="editor-tabs-container1">
                  <div className="editor-tabs-container2 active">
                    <Button className="editor-tab active" text="Write" />
                  </div>
                  <div className="editor-tabs-container2">
                    <Button className="editor-tab" text="Preview" />
                  </div>
                </div>
                <div className="saved-facheck">
                  <FaCheck />
                  <span className="editor-tab">Saved</span>
                </div>
              </div>
              <textarea
                placeholder="Share your thoughts"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="editor-textarea"
              />
              <div className="editor-footer">
                <Button
                  className="newpost-attach-button"
                  text={<span className="newpost-attach-button-text">Attach images by dragging & dropping</span>}
                  icon1={<FaImage alt="" />}
                  onClick={() => document.getElementById("fileInput").click()}
                />
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <div className="newpost-editor-icons">
                  <IoIosLink />
                  <VscMention />
                  <BsMarkdown />
                </div>
              </div>
            </div>

            <div className="newpost-notification-group">
              <label className="py-3 group relative flex items-center cursor-pointer">
                <input
                  id="push_notification-switch"
                  name="push_notification"
                  type="checkbox"
                  className="absolute h-0 w-0 opacity-0"
                  checked={isChecked}
                  onChange={toggleSwitch}
                />
                <span className="relative block h-5 w-10">
                  <span
                    className={`absolute bottom-0 left-0 top-0 my-auto w-full h-3 rounded-md ${
                      isChecked ? "bg-[#39174B] " : "bg-[#484B4E] "
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 top-0 rounded-md ${
                      isChecked ? "bg-[#E05CF8] " : "bg-[#FFFFFF] "
                    } h-5 w-5 rounded-6 transition-transform duration-200 ${
                      isChecked ? "transform translate-x-5" : ""
                    }`}
                  ></span>
                </span>
                <div
                  className={`text-xs ${
                    isChecked ? "text-[#EBEBEC] " : "text-[#8892A9] "
                  }`}
                >
                  Receive updates whenever your Squad members engage with your
                  post
                </div>
              </label>
              <Button
                className="newpost-post-button"
                text="Post"
                onClick={handlePost}
              />
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default NewPost;
