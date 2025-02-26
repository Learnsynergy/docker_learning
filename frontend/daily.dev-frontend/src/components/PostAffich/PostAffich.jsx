import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSolidUpvote } from "react-icons/bi";
import { MdOutlineComment } from "react-icons/md";
import { FaBookmark, FaLink } from "react-icons/fa";
import Button from "../Button/index";
import axios from "../../api/client"

// Fonction pour formater la date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const PostAffich = ({ id }) => {
  const [post, setPost] = useState([]); // État pour stocker les données du post
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(`/post/${id}`);
        setPost(response.data[0]); 
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    if (id) {
      fetchPostData(); // Récupérer les données du post seulement si l'ID est disponible
    }
  }, [id]);

  const handleSummarizeClick = () => {
    setIsSummaryVisible(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePostComment = async () => {
    if (!id) return;

    try {
      await axios.post('/comments/for-post', {
        content: inputValue,
        postId: id,
      });
      setInputValue("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  if (!post) {
    return <p>Loading...</p>; // Affiche un message de chargement pendant que les données sont récupérées
  }

  const { title, description, content, tags, createdAt, picture, thumbnail, link, shares, comments, bookmark } = post;

  return (
    <div className="bg-[#0E1217] text-white p-4 rounded-lg shadow-md max-w-lg mx-auto gap-3 border border-opacity-15 border-white">
      <div className="mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <div className="border-l-4 border-pink-500 my-4">
        <p className="">
          <span className="text-pink-500 font-bold">TDLR </span>
          {isSummaryVisible && content}{" "}
        </p>

        {!isSummaryVisible && (
          <button
            className="bg-purple-600 text-white px-3 py-1 rounded-lg font-medium hover:bg-purple-700 mt-2"
            onClick={handleSummarizeClick}
          >
            Auto-summarize ✨
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {tags && Array.isArray(tags) && tags.length > 0 ? (
          tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 px-2 py-1 rounded-lg text-sm"
            >
              {tag}
            </span>
          ))
        ) : (
          <span className="text-gray-400">No tags available</span>
        )}
      </div>

      <div className="text-gray-400 mt-2 mb-4">
        <span>{formatDate(createdAt)}</span>
      </div>

      {picture && (
        <div className="mb-4">
          <img
            src={picture}
            alt={title}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      )}

      <div className="text-gray-400">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <BiSolidUpvote className="w-5 h-5" />
            {shares} Upvotes
          </span>
          <span className="flex items-center gap-1">
            <MdOutlineComment className="w-5 h-5" />
            {comments} Comments
          </span>
        </div>

        <div className="flex justify-between items-center p-2 rounded-2xl border border-opacity-15 border-white">
          <button className="flex items-center group">
            <BiSolidUpvote
              className="group-hover:bg-green-600 rounded-lg p-2 w-8 h-8"
            />
            <span className="group-hover:text-green-600">
              Upvotes
            </span>
          </button>

          <Link to={`/post/${id}`}>
            <div className="flex items-center group">
              <MdOutlineComment
                className="group-hover:bg-green-600 rounded-lg p-2 w-8 h-8"
              />
              <span className="group-hover:text-green-600">Comments</span>
            </div>
          </Link>

          {bookmark && (
            <button className="flex items-center group">
              <FaBookmark
                className="group-hover:bg-orange-500 rounded-lg p-2 w-8 h-8"
              />
              <span className="group-hover:text-orange-500">Bookmark</span>
            </button>
          )}

          <button className="flex items-center group">
            <FaLink
              className="group-hover:bg-violet-500 rounded-lg p-2 w-8 h-8"
            />
            <span className="group-hover:text-violet-500">Copy Link</span>
          </button>
        </div>

        <div className="flex justify-center items-center h-full p-10 pl-0 pr-0 w-full">
          <div className="flex gap-3 p-3 h-12 w-full rounded-2xl items-center border border-opacity-15 border-white">
            <img
              src="https://res.cloudinary.com/daily-now/image/upload/s--O0TOmw4y--/f_auto/v1715772965/public/noProfile"
              alt="User Avatar"
              className="w-8 h-8 rounded-lg"
            />

            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Share the thought"
              className="w-80 bg-[#0E1217]"
            />

            <Button
              className="w-fit h-6 border border-opacity-15 border-white"
              text="Post"
              onClick={handlePostComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAffich;
