import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "../CommentCard/CommentCard";
import SocialShareCard from "../SocialShareCard/SocialShareCard";
import PostAffich from '../PostAffich/PostAffich';
import axios from "../../api/client";

// Fonction pour calculer le temps écoulé (timeAgo)
const formatTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hours ago`;

  return `${Math.floor(diffInHours / 24)} days ago`;
};

const PostCard = () => {
  const { id } = useParams();
  const [commentList, setCommentList] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchComments();
  }, [id]);

  const fetchComments = async () => {
    if (!id) return;

    try {
      const response = await axios.get(`/comments/by-post/${id}`);
      const data = response.data;

      if (!Array.isArray(data)) {
        console.error("API response is not an array:", data);
        setCommentList([]);
      } else if (data.length === 0) {
        setCommentList([]);
      } else {
        setCommentList(data);
        // Fetch user data for each comment
        for (const comment of data) {
          fetchUserData(comment.userId);
        }
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`/users/${userId}`);
      setUserData(prevData => ({
        ...prevData,
        [userId]: response.data,
      }));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const links = {
    copyLink: `https://example.com/${id}`,
    whatsapp: `https://wa.me/?text=Check+this+out!+https://example.com/${id}`,
    facebook: `https://facebook.com/share?url=https://example.com/${id}`,
    twitter: `https://twitter.com/share?url=https://example.com/${id}`,
    newSquad: "#",
  };

  return (
    <div className="bg-[#0E1217] text-white p-4 rounded-lg shadow-md max-w-lg mx-auto gap-3 border border-opacity-15 border-white">
      <PostAffich id={id} />

      <div className="rounded-2xl items-center border border-opacity-15 border-white">
        {commentList.slice(0).reverse().map((comment, index) => {
          const user = userData[comment.userId] || {};
          return (
            <CommentCard
              key={index}
              coverPicture={user.coverPicture || "https://res.cloudinary.com/daily-now/image/upload/s--O0TOmw4y--/f_auto/v1715772965/public/noProfile"}
              username={user.username || "Anonymous"}
              followers={user.reputation || 0}
              timeAgo={formatTimeAgo(comment.createdAt)}
              message={comment.message}
              upvotes={comment.upvotes || 0}
            />
          );
        })}
      </div>

      <SocialShareCard links={links} />
    </div>
  );
};

export default PostCard;
