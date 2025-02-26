import React from "react";
import { FaShare, FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSolidUpvote } from "react-icons/bi";
import { MdOutlineComment } from "react-icons/md";

// Fonction pour formater la date (exemple simple)
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

const CommentCard = ({
  coverPicture,
  username,
  userRole,  // Nouveau champ pour le rôle de l'utilisateur
  followers,
  createdAt,
  message,
  upvotes,
}) => {
  return (
    <div className="bg-[#0E1217] text-white p-3 rounded-lg flex flex-col gap-3 max-w-lg mx-auto">
      {/* Header du commentaire */}
      <div className="flex items-center gap-3">
        <img src={coverPicture} alt="User coverPicture" className="w-8 h-8 rounded-lg" />
        <div>
          <div className="flex items-center gap-1">
            <span className="font-bold">{username}</span>
            <span className="text-xs text-gray-400">• {followers} followers</span>
          </div>
          <span className="text-xs text-gray-400">{userRole}</span> {/* Affichage du rôle */}
          <span className="text-xs text-gray-400">• {formatTimeAgo(createdAt)}</span>
        </div>
      </div>

      {/* Contenu du commentaire */}
      <p className="text-gray-300">{message}</p>

      {/* Footer avec les actions */}
      <div className="flex items-center justify-between text-gray-400 text-sm">
        <div className="text-gray-400">
          <div className="flex justify-between items-center">
            <button className="flex items-center group">
              <BiSolidUpvote
                alt="Upvote Icon"
                className="group-hover:bg-green-600 rounded-lg p-2 w-8 h-8"
              />
            </button>

            <Link to="">
              <div className="flex items-center group">
                <MdOutlineComment
                  alt="Comment Icon"
                  className="group-hover:bg-green-600 rounded-lg p-2 w-8 h-8"
                />
              </div>
            </Link>

            <button className="flex items-center group">
              <FaShare
                alt="Link Icon"
                className="group-hover:bg-violet-500 rounded-lg p-2 w-8 h-8"
              />
            </button>

            <FaEllipsisH className="hover:text-gray-500 transform rotate-90" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="">
            <div className="flex items-center gap-1">
              <span>{upvotes} upvotes</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
