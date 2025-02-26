import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import lookBook from "../../images/lookBook.svg";
import "../../styles/Bookmarks/Bookmarks.css";
import shareBook from "../../images/shareBook.svg";
import axios from "../../api/client";
import MyFeedCard from "../../components/MyFeedCard/MyFeedCard";
import saveBook from "../../images/iconMenu/saveBook.svg";
import Btn from "../../components/onboarding/Btn";
import { useNavigate } from "react-router-dom";
const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [token, setToken] = useState("");
  const [postId, setPostId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const savedId = localStorage.getItem("id");

    if (storedToken) {
      setToken(storedToken);
    }
    if (savedId) {
      setPostId(savedId);
    }
  }, []);

  useEffect(() => {
    const getBookmarks = async () => {
      try {
        const response = await axios.get(`/post/${postId}`);
        console.log("bookmark added:", response.data);
        const bookmark = response.data;
        setBookmarks(bookmark);
      } catch (err) {
        if (!err.response) {
          setErrMsg("No server response");
        } else {
          setErrMsg("BOOKMarks");
        }
      }
    };
    if (token && postId) {
      getBookmarks();
    }
  }, [postId, token]);
  return (
    <>
      {bookmarks.length === 0 ? (
        <Layout>
          <div className="mt-5 flex flex-col items-center empty-bookmark justify-center gap-5">
            <img className="size-20" src={saveBook} alt="save-book" />
            <h2 className="text-white text-xl">Your bookmark list is empty.</h2>
            <p className="text-[#9da7c1] text-center">
              Go back to your feed and bookmark posts you’d like to keep or read{" "}
              <br />
              later. Each post you bookmark will be stored here.
            </p>
            <div onClick={() => navigate("/myfeed")} className="w-40">
              <Btn btnContent={"Back to feed"} />
            </div>
          </div>
        </Layout>
      ) : (
        <Layout>
          <div className="mt-3 flex flex-col items-start gap-5 ">
            <h1 className="text-white font-bold ml-16 text-sm">Bookmarks</h1>
            <div className="flex justify-center w-full h-10 gap-5">
              <div className="flex gap-2 items-center  look-bookmark border-white rounded-xl border border-opacity-15">
                <img
                  className="outline-none size-6 ml-3"
                  src={lookBook}
                  alt="look-book"
                />
                <input
                  className="outline-none text-[#9da7c1] w-full bg-transparent"
                  type="text"
                  placeholder="search bookmarks"
                />
              </div>
              <div className="flex items-center border-2 btn-login  bg-opacity-5 rounded-xl">
                <img className="size-6 ml-2" src={shareBook} alt="share" />
                <button className="font-bold outline-none p-2 text-white  bg-opacity-5  ">
                  Share bookmarks
                </button>
              </div>
            </div>
            <p
              className={
                errMsg ? "text-red-600 font-extrabold text-xl" : "offscreen"
              }
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <section>
              {bookmarks.map((book) => (
                <MyFeedCard
                  key={book.id}
                  postId={book.id}
                  title={book.title}
                  tags={book.tags || []}
                  createdAt={book.createdAt}
                  content={book.content}
                  picture={book.thumbnail || book.picture}
                  thumbnail={book.thumbnail}
                  shares={book.shares || 0}
                  comments={book.comments || 0}
                />
              ))}
            </section>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Bookmarks;
