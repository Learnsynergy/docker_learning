import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="text-[#a8b3cf] footer-onboarding justify-center mt-5">
      <div className="flex gap-5 text-xs ">
        <p>&copy; {date.getFullYear()}</p>
        <a href="#gui">Guidelines</a>
        <a href="#expl">Explore</a>
        <a href="#tags">Tags</a>
        <a href="#sour">Sources</a>
        <a href="#squ">Squads</a>
        <a href="#lea">Leaderboard</a>
      </div>
    </footer>
  );
};

export default Footer;
