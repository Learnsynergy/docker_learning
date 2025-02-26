
import React from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaPlus, FaLink } from "react-icons/fa";

const SocialShareCard = ({ links }) => {
  return (
    <div className="bg-[#0E1217] text-white p-2 max-w-xs mx-auto rounded-2xl border border-opacity-15 border-white">
      <h3 className="text-sm font-semibold mb-3">Would you recommend this post?</h3>
      <div className="flex items-center gap-4 mb-4">
        {links.copyLink && (
          <a href={links.copyLink} className="flex flex-col items-center text-gray-300 hover:text-white">
            <FaLink className="w-6 h-6" />
            <span className="text-xs">Copy Link</span>
          </a>
        )}
        {links.whatsapp && (
          <a href={links.whatsapp} className="flex flex-col items-center text-gray-300 hover:text-white">
            <FaWhatsapp className="w-6 h-6 text-green-500" />
            <span className="text-xs">WhatsApp</span>
          </a>
        )}
        {links.facebook && (
          <a href={links.facebook} className="flex flex-col items-center text-gray-300 hover:text-white">
            <FaFacebookF className="w-6 h-6 text-blue-600" />
            <span className="text-xs">Facebook</span>
          </a>
        )}
        {links.twitter && (
          <a href={links.twitter} className="flex flex-col items-center text-gray-300 hover:text-white">
            <FaTwitter className="w-6 h-6 text-blue-400" />
            <span className="text-xs">X</span>
          </a>
        )}
      </div>
      <div className="flex items-center gap-4">
        <a href={links.newSquad} className="flex flex-col items-center text-gray-300 hover:text-white">
          <FaPlus className="w-6 h-6 text-pink-500" />
          <span className="text-xs">New Squad</span>
        </a>
      </div>
    </div>
  );
};

export default SocialShareCard;
