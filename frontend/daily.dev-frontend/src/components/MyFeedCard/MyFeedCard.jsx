import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/MyFeedCard/MyFeedCard.css";
import defaultImage from "../../images/defaultImage.png";
import defaultsmallImage from "../../images/smallImage.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import saveBook from "../../images/iconMenu/saveBook.svg";
import linkIcon from "../../images/linkIcon.svg";
import voteIcon from "../../images/voteIcon.svg";
import messagesIcon from "../../images/messagesIcon.svg";
import axios from "../../api/client";

// Fonction pour formater la date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const calculateReadTime = (content) => {
  if (typeof content !== "string" || !content.trim()) {
    return "0m read time"; // Retourne 0 minutes si le contenu est indéfini, non une chaîne, ou vide
  }

  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length; // Compte les mots en tenant compte des espaces multiples
  const readTime = Math.ceil(wordCount / wordsPerMinute);

  return `${readTime}m read time`;
};

/* Fonction pour générer un lien unique basé sur le titre
const generateLink = (title) => {
  return `/posts/${title.toLowerCase().split(" ").join("-")}`;
};*/

// Fonction pour générer un lien unique basé sur l'ID
const generateLink = (id) => {
  return `/posts/${id}`;
};

const MyFeedCard = ({
  postId,
  title,
  description,
  content,
  tags,
  createdAt,
  picture,
  thumbnail,
  shares,
  link,
  comments,
  bookmark = true,
}) => {
  const [currentShares, setCurrentShares] = useState(0);
  const [isVoted, setIsVoted] = useState(false);
  const handleUpvote = async () => {
    try {
      const response = await axios.post("/votes/upvote", { postId });
      if (response.status === 200) {
        setIsVoted(true);
        setCurrentShares(currentShares + 1);
      }
    } catch (error) {
      console.error("Erreur lors du upvote :", error);
    }
  };

  // Vérification si le fichier est une vidéo, je peux aussi ajouter d'autres formats au besoin
  const isVideo = picture && picture.endsWith(".mp4");

  // Génération d'un lien basé sur le titre
  const postLink = generateLink(postId);

  // /BEVERLY: BOOKMARKS

  const [isBookMarked, setIsBookMarked] = useState(false);
  // console.log("postId:", postId);
  const handleBookMark = async () => {
    try {
      if (isBookMarked) {
        console.log("Trying to remove bookmark with postId:", postId);
        const response = await axios.delete(`/bookmarker/${postId}`);
        console.log("Delete response:", response);
        if (response.data.success) {
          setIsBookMarked(false);
          toast.success("Bookmark removed successfully!");
        } else {
          toast.error("failed to remove bookmark");
        }
      } else {
        const response = await axios.post("/bookmarker", { postId });
        console.log("Add response:", response);
        localStorage.setItem("id", response.data.postId);
        if (response.data.createdAt) {
          setIsBookMarked(true);
          toast.success("Bookmark added successfully");
        }
      }
    } catch (err) {
      toast.error("An error occurred while updating the bookmark.");
      console.log("Error response:", err.response ? err.response : err);
    }
  };
  return (
    <Link to="" className="">
      <div className="myfeed-card border border-opacity-15 border-white hover:border-white --tw-border-opacity-30">
        <div className="myfeed-card-content">
          {thumbnail && (
            <div className="myfeed-card-small-image-container">
              <img
                src={thumbnail || defaultsmallImage}
                alt="Small Thumbnail"
                className="myfeed-card-small-image"
              />
            </div>
          )}
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex gap-4 mb-2">
            {(tags && tags.length > 0 ? tags : []).map((tag) => (
              <span
                key={tag}
                className="border border-opacity-15 border-white pr-2 pl-2 pb-1 text-[#6f778a] rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="myfeed-card-meta">
            <span className="text-[#6f778a]">{formatDate(createdAt)}</span> •{" "}
            <span className="text-[#6f778a]">{calculateReadTime(content)}</span>
          </div>
        </div>

        <div className="myfeed-card-header">
          {isVideo ? (
            <video
              src={picture}
              controls
              className="myfeed-card-video"
              alt="Main Thumbnail"
            />
          ) : (
            <img
              src={picture || defaultImage}
              alt="Main Thumbnail"
              className="myfeed-card-image"
            />
          )}
        </div>

        <div className="myfeed-card-footer">
          <div className="myfeed-card-icons">
            <button className="myfeed-card-icons-span" onClick={handleUpvote}>
              <img
                src={voteIcon}
                alt="Upvote Icon"
                className={`myfeed-card-icon hover:bg-green-600 rounded-lg p-2 size-10 ${
                  isVoted ? "bg-green-600" : ""
                }`}
              />
              <span className="shares hover:text-green-600">
                {currentShares}
              </span>
            </button>

            <Link to={postLink}>
              <div className="myfeed-card-icons-span">
                <img
                  src={messagesIcon}
                  alt="Comment"
                  className="myfeed-card-icon hover:bg-green-600 rounded-lg p-2 size-10"
                />
                <span className="comments hover:text-green-500">
                  {comments}
                </span>
              </div>
            </Link>

            {bookmark && (
              <div>
                <img
                  src={saveBook}
                  onClick={handleBookMark}
                  alt="Bookmark Icon"
                  className={`myfeed-card-icon size-10 rounded-lg p-2 hover:bg-orange-400 ${
                    isBookMarked ? "bg-orange-400" : ""
                  }`}
                />
              </div>
            )}

            <img
              src={linkIcon}
              alt="Link-Icon"
              className="myfeed-card-icon hover:bg-violet-500 rounded-lg p-2 size-10"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyFeedCard;
