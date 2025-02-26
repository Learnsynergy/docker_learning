import React from "react";
import SideBarMenu from "./SideBarMenu";
import addFeed from "../../../images/iconMenu/addFeed.svg";
import changeIcon from "../../../images/iconMenu/changeIcon.svg";
import discussions from "../../../images/iconMenu/discussions.svg";
import docs from "../../../images/iconMenu/docs.svg";
import explore from "../../../images/iconMenu/explore.svg";
import feedback from "../../../images/iconMenu/feedback.svg";
import history from "../../../images/iconMenu/history.svg";
import leaderboard from "../../../images/iconMenu/leaderboard.svg";
import link from "../../../images/iconMenu/link.svg";
import saveBook from "../../../images/iconMenu/saveBook.svg";
import sources from "../../../images/iconMenu/squadIcon.svg";
import tags from "../../../images/iconMenu/tags.svg";
import squadIcon from "../../../images/iconMenu/squadIcon.svg";

const userName =
  "https://res.cloudinary.com/daily-now/image/upload/s--O0TOmw4y--/f_auto/v1715772965/public/noProfile";
const SideBar = () => {
  const menus = [
    {
      submenus: [
        { menuIcon: userName, subTitle: "My feed", path: "/myfeed" },
        { menuIcon: addFeed, subTitle: "New feed", path: "/new" },
      ],
    },
    {
      menuTitle: "squads",
      submenus: [
        { menuIcon: squadIcon, subTitle: "Public squads", path: "/squads" },
        { menuIcon: addFeed, subTitle: "New squad", path: "/new?" },
      ],
    },
    {
      menuTitle: "Discover",
      submenus: [
        { menuIcon: explore, subTitle: "Explore", path: "/posts" },
        { menuIcon: discussions, subTitle: "Discussions", path: "/discussed" },
        { menuIcon: tags, subTitle: "Tags", path: "/tags" },
        { menuIcon: sources, subTitle: "Sources", path: "/sources" },
        { menuIcon: leaderboard, subTitle: "Leaderboard", path: "/users" },
      ],
    },
    {
      menuTitle: "Activity",
      submenus: [
        { menuIcon: link, subTitle: "Submit a link" },
        { menuIcon: saveBook, subTitle: "Bookmarks", path: "/bookmarks" },
        { menuIcon: history, subTitle: "History", path: "/history" },
      ],
    },
  ];

  const documents = [
    {
      submenus: [
        { menuIcon: docs, subTitle: "Docs", path: "https://docs.daily.dev/" },
        {
          menuIcon: changeIcon,
          subTitle: "change log",
          path: "posts/daily_updates",
        },
        {
          menuIcon: feedback,
          subTitle: "Feedback",
          path: "https://daily.dev/feedback",
        },
      ],
    },
  ];
  return (
    <div className="bg-[#0e1217] overflow-hidden text-[#9da7c1] h-full w-64  border-r border-white border-opacity-15">
      <div className="pt-4 pl-1 bg-[#0e1217]  ">
        <div>
          {menus.map((menu, idx) => (
            <SideBarMenu
              key={idx}
              menuTitle={menu.menuTitle}
              submenus={menu.submenus}
            />
          ))}
        </div>
        <div className="mt-3">
          {documents.map((doc, idx) => (
            <SideBarMenu
              key={idx}
              menuTitle={doc.menuTitle}
              submenus={doc.submenus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
