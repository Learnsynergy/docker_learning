import React, { useState } from "react";
import "./../styles/NewFeed/NewFeed.css";
import Layout from "../components/Layout/Layout";
import { FaSearch } from "react-icons/fa";

const TagButton = ({ label, isSelected, onClick }) => (
  <button
    className={`tag-button ${isSelected ? "selected" : ""}`}
    onClick={onClick}
  >
    {label}
  </button>
);

const NewFeed = () => {
  const [feedName, setFeedName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [availableTags] = useState([
    "ai",
    "architecture",
    "cloud",
    "crypto",
    "database",
    "data-science",
    "devops",
    "elixir",
    "gaming",
    "golang",
    "java",
    "javascript",
    "machine-learning",
    "mobile",
    ".net",
    "open-source",
    "python",
    "react",
    "ruby",
    "rust",
    "security",
    "tech-news",
    "testing",
    "tools",
    "webdev",
  ]);

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <Layout>
      <div className="new-feed-container">
        <div className="new-feed-container1-action">
          <h2>Pick the tags you want to include</h2>

          <div className="actions-container">
            <button className="discard-button">Discard</button>
            <button className="save-button">Save</button>
          </div>
        </div>

        <div className="flex justify-center items-center h-full p-10 pb-0">
          <input
            type="text"
            value={feedName}
            onChange={(e) => setFeedName(e.target.value)}
            placeholder="Enter feed name"
            maxLength={50}
            className="w-96 rounded-2xl bg-[#20252D] p-5 h-10"
          />
        </div>

        <div className="flex justify-center items-center h-full p-10">
          <div className="flex gap-3 p-3 h-10 rounded-2xl items-center border border-opacity-15 border-white">
            <FaSearch className="w-8 h-8" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="javascript, php, git, etc..."
              className="w-64 bg-[#0E1217] "
            />
          </div>
        </div>

        <div className="tags-container">
          {availableTags.map((tag) => (
            <TagButton
              key={tag}
              label={tag}
              isSelected={selectedTags.includes(tag)}
              onClick={() => handleTagClick(tag)}
            />
          ))}
        </div>

        <div className="flex justify-center items-center h-full p-10 pb-0">
          <div className="flex items-center w-full">
            <div className="flex-grow border-t border-gray-400"></div>
            <button className="mx-4 preview-button w-60 rounded-2xl p-1 border border-opacity-15 border-white bg-[#20252D] text-xs text-white text-opacity-50">
              Select tags to show feed preview ▼
            </button>

            <div className="flex-grow border-t border-gray-400"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewFeed;
