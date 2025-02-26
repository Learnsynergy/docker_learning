import React from "react";
import { useNavigate } from "react-router-dom";
const UserMenu = () => {
  const userName = localStorage.getItem("username");
  const reputation = localStorage.getItem("reputation");
  const email = localStorage.getItem("email");
  const date = new Date();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear("token");
    navigate("/onboarding");
  };
  return (
    <div>
      <div class=" text-white fixed z-popup border border-opacity-15 border-white overflow-hidden rounded-xl bg-[#0E1217] shadow-2 w-full fit-text max-w-64 !rounded-24 !bg-accent-pepper-subtlest right-4 top-16">
        <div class="relative flex h-24">
          <div class="absolute left-0 top-0 -z-1 size-full rounded-xl bg-background-subtle !rounded-24"></div>
          <img
            class="object-cover w-24 h-24 rounded-xl"
            loading="eager"
            type="avatar"
            alt="profile"
            src="https://res.cloudinary.com/daily-now/image/upload/s--O0TOmw4y--/f_auto/v1715772965/public/noProfile"
          />
        </div>
        <div class="flex flex-col gap-3 p-4 border-b border-opacity-15 border-white">
          <div class="flex items-center">
            <h2 class="max-w-full shrink truncate font-bold text-text-primary typo-title3">
              {userName}
            </h2>
            <div class="flex items-center" aria-label="Reputation">
              <span class="flex items-center font-bold capitalize typo-caption2 tablet:gap-0.5 tablet:typo-footnote ml-0.5 !typo-footnote text-text-primary">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 pointer-events-none text-accent-onion-default"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 13.605A5.333 5.333 0 108 2.938a5.333 5.333 0 000 10.667zm1.213-8.672a.494.494 0 00-.812-.517L4.944 7.922a.494.494 0 00.35.843H7.82l-1.034 2.844a.494.494 0 00.812.518l3.456-3.507a.494.494 0 00-.348-.842H8.179l1.034-2.845z"
                    fill="currentcolor"
                  ></path>
                </svg>
                {reputation}
              </span>
            </div>
          </div>
          <div class="flex items-center text-[#9da7c1]">
            <span class="text-xs typo-footnote max-w-full shrink truncate">
              {email}
            </span>
            <span class="mx-1">•</span>
            <div class="text-xs font-thin gap-1 flex">
              <p>Joined</p>
              <p>{date.getFullYear()}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col py-2 text-[#9da7c1]">
          <a
            href="azert"
            class="btn focus-outline inline-flex cursor-pointer hover:bg-gray-700 select-none flex-row items-center no-underline shadow-none transition duration-200 ease-in-out typo-callout  h-10 rounded-xl btn-tertiary w-full !justify-start !px-5 font-normal"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="pointer-events-none !h-6 !w-6 text-base -ml-2 mr-1"
            >
              <path
                d="M12 3a4.75 4.75 0 014.75 4.75 4.753 4.753 0 01-2.046 3.902l-.176.116.303.1.302.11.105.044.256.122c2.284 1.14 3.796 3.316 3.987 5.798l.016.267.004.266v.352l-.005.114-.008.104-.013.115a2.167 2.167 0 01-1.838 1.81l-.168.018-.212.013-1.985-.439a1 1 0 01-.783-1.028l.013-.112.297-1.787.016-.115a1 1 0 00-.832-1.083l-.081-.01-.082-.004h-3.59l-.116.002a1 1 0 00-.926.846l-.007.111.002.096.012.11.304 1.834a1 1 0 01-.662 1.11l-.108.03-1.984.44-.282-.02-.129-.015c-.94-.146-1.674-.89-1.813-1.88l-.018-.177-.003-.139.001-.36.006-.264c.116-2.657 1.774-5.009 4.364-6.171.199-.077.398-.146.598-.207l-.017-.01A4.75 4.75 0 0112 3zm0 14.5a1 1 0 110 2 1 1 0 010-2zm.002-4.62c-.865 0-1.73.165-2.595.496-1.922.865-3.208 2.61-3.385 4.597l-.016.239-.005.233-.001.33.002.098.015.102a.67.67 0 00.45.487l.098.023.067.005 1.31-.29-.227-1.367-.019-.136-.01-.137-.005-.137.006-.164a2.5 2.5 0 012.168-2.315l.162-.016.164-.005h3.639l.137.004a2.5 2.5 0 012.362 2.58l-.011.162-.022.163-.227 1.368 1.315.291.104-.015a.667.667 0 00.492-.448l.023-.1.008-.103v-.352l-.004-.237-.015-.24c-.155-1.838-1.262-3.47-2.937-4.394l-.221-.116-.228-.108-.325-.117a7.103 7.103 0 00-2.27-.381zM12 4.5a3.25 3.25 0 101.347 6.209l.201-.1.194-.116.166-.113A3.25 3.25 0 0012 4.5z"
                fill="currentcolor"
                fill-rule="evenodd"
              ></path>
            </svg>
            Profile
          </a>
          <a
            href="/account/profile"
            class="btn focus-outline inline-flex cursor-pointer hover:bg-gray-700 select-none flex-row items-center no-underline shadow-none transition duration-200 ease-in-out typo-callout  h-10 rounded-xl btn-tertiary w-full !justify-start !px-5 font-normal"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="pointer-events-none !h-6 !w-6 text-base -ml-2 mr-1"
            >
              <path
                d="M13.637 4.213c1.607-1.605 4.206-1.604 5.9-.076l.166.157.158.167c1.479 1.639 1.53 4.121.081 5.737l-.155.164-8.831 8.83a6.197 6.197 0 01-4.27 1.806H6.4l-3.325-.074-.073-3.324a6.216 6.216 0 011.61-4.352l.195-.205 8.83-8.83zM11.93 8.041l-6.063 6.063a4.694 4.694 0 00-1.365 3.2v.263l.04 1.89 1.89.041.263-.001a4.7 4.7 0 003.015-1.19l.187-.177 6.061-6.06L11.93 8.04zm4.724-3.54a2.682 2.682 0 00-1.808.635l-.15.138L13.274 6.7l4.028 4.028L18.726 9.3c1.063-1.064 1.027-2.835-.083-3.945a2.908 2.908 0 00-1.81-.846l-.18-.01z"
                fill="currentcolor"
                fill-rule="evenodd"
              ></path>
            </svg>
            Account details
          </a>
          <a
            href="https://r.daily.dev/reputation"
            target="_blank"
            rel="noopener noreferrer"
            class="btn focus-outline inline-flex cursor-pointer hover:bg-gray-700 select-none flex-row items-center no-underline shadow-none transition duration-200 ease-in-out typo-callouth-10 rounded-xl btn-tertiary w-full !justify-start !px-5 font-normal"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="pointer-events-none !h-6 !w-6 text-base -ml-2 mr-1"
            >
              <path
                d="M11.69 3.71l-6.487 6.583A2.42 2.42 0 004.5 12l.005.16a2.425 2.425 0 002.42 2.265h2.597l-1.206 3.321a2.426 2.426 0 003.994 2.543l6.487-6.582A2.42 2.42 0 0019.5 12l-.005-.16a2.425 2.425 0 00-2.42-2.265l-2.598-.001 1.207-3.32A2.426 2.426 0 0011.69 3.71zm2.37 1.061a.926.926 0 01.214.97l-1.938 5.334h4.74a.925.925 0 01.653 1.58l-6.48 6.574a.924.924 0 01-1.523-.97l1.938-5.334h-4.74a.925.925 0 01-.653-1.58l6.48-6.574a.924.924 0 011.308 0z"
                fill="currentcolor"
                fill-rule="evenodd"
              ></path>
            </svg>
            Reputation
          </a>
          <a
            href="/devcard"
            class="btn focus-outline inline-flex cursor-pointer hover:bg-gray-700 select-none flex-row items-center no-underline shadow-none transition duration-200 ease-in-out typo-callout h-10 rounded-xl btn-tertiary w-full !justify-start !px-5 font-normal"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="pointer-events-none !h-6 !w-6 text-base -ml-2 mr-1"
            >
              <g fill="currentcolor">
                <path d="M8 4.5a1 1 0 00-1 1v2a1 1 0 001 1h8a1 1 0 001-1v-2a1 1 0 00-1-1H8z"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.25 2A2.75 2.75 0 004.5 4.75v14a2.75 2.75 0 002.75 2.75h9.5a2.75 2.75 0 002.75-2.75v-14A2.75 2.75 0 0016.75 2h-9.5zM6 4.75c0-.69.56-1.25 1.25-1.25h9.5c.69 0 1.25.56 1.25 1.25V18h-5a1 1 0 00-1 1v1H7.25C6.56 20 6 19.44 6 18.75v-14z"
                ></path>
              </g>
            </svg>
            Devcard
          </a>
          <a
            href="/account/invite"
            class="btn focus-outline inline-flex cursor-pointer hover:bg-gray-700 select-none flex-row items-center no-underline shadow-none transition duration-200 ease-in-out typo-callout h-10  rounded-xl btn-tertiary w-full !justify-start !px-5 font-normal"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="pointer-events-none !h-6 !w-6 text-base -ml-2 mr-1"
            >
              <path
                d="M11.551 3a4.818 4.818 0 012.997 8.592c.165.049.328.11.487.184l.235.12.084.05.055-.032a3.745 3.745 0 014.184.329l.16.134.153.145a3.744 3.744 0 01.146 5.14l-.146.155-2.02 2.02a5.173 5.173 0 01-.496.44 3.44 3.44 0 01-1.12.586 3.13 3.13 0 01-1.83 0 3.502 3.502 0 01-1.263-.7l-1.951-.06h-.09c-.14 0-.297.005-.473.016l-.375.029-.422.043-.469.058-.515.073-.56.087-.928.158-1.029.19-.887.175H5.33a2.33 2.33 0 01-2.325-2.17L3 18.602v-.414c0-3.22 2.067-5.96 4.992-7.124A4.818 4.818 0 0111.551 3zm1.818 9.927a2.244 2.244 0 00-1.624 3.7l.12.13 2.02 2.02c.377.377.672.555.99.65.159.049.32.073.48.073l.16-.008c.107-.01.214-.032.32-.064.211-.064.413-.165.64-.34.073-.056.15-.12.228-.194l.121-.117 2.021-2.02a2.244 2.244 0 00-1.384-3.822l-.169-.01a2.246 2.246 0 00-.962.201l-.18.092-.065.04-.145.095-.137.11-.131.12-.317.317-.318-.317a2.236 2.236 0 00-1.504-.656h-.164zm-3.85-.775l-.22.056c-2.69.725-4.68 3.002-4.794 5.73l-.005.25v.414a.83.83 0 00.725.824l.105.006.787-.154 1.118-.207.682-.116.633-.1.298-.044.558-.075.507-.059c.161-.016.314-.03.458-.041l.408-.025.185-.006.284-.002.118.003-.675-.677a3.903 3.903 0 01.496-5.941l-.05-.022c-.558 0-1.1.065-1.618.186zm3.081-1.185A3.32 3.32 0 0011.551 4.5a3.318 3.318 0 10.911 6.51l.138-.043z"
                fill="currentcolor"
                fill-rule="evenodd"
              ></path>
            </svg>
            Invite friends
          </a>
          <button class="btn focus-outline inline-flex cursor-pointer hover:bg-gray-700 select-none flex-row items-center no-underline shadow-none transition duration-200 ease-in-out typo-callout h-10 px-5 rounded-xl btn-tertiary w-full !justify-start font-normal">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="pointer-events-none !h-6 !w-6 text-base -ml-2 mr-1"
            >
              <path
                d="M12 3a3 3 0 012.758 1.817l.067.171.035.106.04-.02a3.004 3.004 0 013.151.29l.169.137.144.135a3.001 3.001 0 01.645 3.284l-.082.18-.023.039.108.036a3.003 3.003 0 011.964 2.446l.019.203L21 12a3 3 0 01-1.817 2.758l-.171.067-.107.035.021.04a3.004 3.004 0 01-.29 3.151l-.137.169-.135.144a3.001 3.001 0 01-3.284.645l-.18-.082-.04-.023-.035.108a3.003 3.003 0 01-2.446 1.964l-.203.019L12 21a3 3 0 01-2.758-1.817l-.067-.172-.036-.106-.039.021a3.004 3.004 0 01-3.151-.29L5.78 18.5l-.144-.135a3.001 3.001 0 01-.645-3.284l.082-.18.022-.04-.107-.035a3.003 3.003 0 01-1.964-2.446l-.019-.203L3 12a3 3 0 011.817-2.758l.172-.067.105-.036-.02-.039a3.004 3.004 0 01.29-3.151L5.5 5.78l.135-.144a3.001 3.001 0 013.284-.645l.18.082.039.022.036-.107a3.003 3.003 0 012.446-1.964l.203-.019L12 3zm0 1.5a1.5 1.5 0 00-1.493 1.356L10.5 6v1.229c-.188.059-.371.129-.55.209l-.262.127-.87-.868a1.5 1.5 0 00-2.224 2.007l.103.114.868.87c-.09.172-.17.35-.24.534l-.096.279L6 10.5a1.5 1.5 0 00-.144 2.993L6 13.5h1.229c.06.188.129.372.209.55l.127.262-.868.87a1.5 1.5 0 001.06 2.56l.144-.006c.287-.028.567-.138.803-.33l.114-.103.87-.868c.172.09.35.17.534.24l.279.096L10.5 18a1.5 1.5 0 001.356 1.493L12 19.5l.144-.007a1.5 1.5 0 001.35-1.349L13.5 18v-1.229c.188-.06.372-.129.55-.209l.262-.127.87.868c.293.293.677.44 1.06.44l.144-.007a1.5 1.5 0 001.02-2.44l-.103-.114-.868-.87c.09-.172.17-.35.24-.533l.096-.279H18l.144-.007a1.5 1.5 0 000-2.986L18 10.5h-1.229a4.964 4.964 0 00-.209-.55l-.127-.262.868-.87a1.5 1.5 0 00-2.007-2.224l-.114.103-.87.868c-.172-.09-.35-.17-.533-.24L13.5 7.23V6A1.5 1.5 0 0012 4.5zM12 9a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                fill="currentcolor"
                fill-rule="evenodd"
              ></path>
            </svg>
            Customize
          </button>
          <button
            onClick={handleLogout}
            class="btn focus-outline inline-flex cursor-pointer hover:bg-gray-700 select-none flex-row items-center no-underline shadow-none transition duration-200 ease-in-out typo-callout font-bold h-10 px-5 rounded-xl btn-tertiary w-full"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="pointer-events-none !h-6 !w-6 text-base -ml-2 mr-1"
            >
              <path
                d="M10.5 3l.212.005A4.5 4.5 0 0115 7.5v.75a.75.75 0 11-1.5 0V7.5l-.005-.176A3 3 0 0010.5 4.5h-3a3 3 0 00-2.995 2.824L4.5 7.5v9a3 3 0 002.824 2.995l.176.005h3l.176-.005A3 3 0 0013.5 16.5v-.75a.75.75 0 111.5 0v.75l-.005.212A4.5 4.5 0 0110.5 21h-3a4.5 4.5 0 01-4.495-4.288L3 16.5v-9a4.5 4.5 0 014.288-4.495L7.5 3h3zm7.198 5.395l.084.072 2.998 3.002c.037.037.07.077.097.12l.05.089.04.104c.022.068.033.142.033.218l-.002.057-.013.091-.008.037-.035.106-.034.069-.055.086a.785.785 0 01-.073.085l-2.998 3.002a.749.749 0 01-1.133-.978l.073-.084 1.718-1.72H9.75a.75.75 0 01-.102-1.495l.102-.006h8.69l-1.718-1.721a.751.751 0 01-.073-.977l.073-.085a.75.75 0 01.976-.072z"
                fill="currentcolor"
                fill-rule="evenodd"
              ></path>
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
