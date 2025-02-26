import React, { useState, useCallback, useEffect, useRef } from "react";
import MyFeedCard from "../components/MyFeedCard/MyFeedCard";
import { LuSettings2 } from "react-icons/lu";
import Button from "../components/Button";
import "../styles/MyFeed/MyFeed.css";
import Layout from "../components/Layout/Layout";
import axios from "../api/client";

const MyFeed = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const hasMoreRef = useRef(true); // Utilisation de useRef pour éviter les re-renders inutiles

  const fetchMoreData = useCallback(async () => {
    if (loading || !hasMoreRef.current) return; // Vérifier loading et hasMoreRef pour éviter les requêtes infinies
    setLoading(true);

    try {
      const response = await axios.get(`/post?page=${page}`);
      const newItems = response.data;

      setFeedItems((prevItems) => {
        const itemIds = new Set(prevItems.map((item) => item.id));
        const filteredItems = newItems.filter((item) => !itemIds.has(item.id));
        return [...prevItems, ...filteredItems];
      });

      if (newItems.length === 0 || newItems.length < 10) {
        hasMoreRef.current = false; // Met à jour la référence pour arrêter le chargement des données
      } else {
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des données du feed :", error);
      hasMoreRef.current = false;
    } finally {
      setLoading(false);
    }
  }, [page, loading]);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 10) {
      if (hasMoreRef.current) {
        fetchMoreData();
      }
    }
  }, [fetchMoreData]);

  useEffect(() => {
    fetchMoreData(); // Chargement initial

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, fetchMoreData]);

  return (
    <Layout>
      <div className="myfeed-container1">
        <div className="">
          <Button
            className="myfeed-button"
            icon1={<LuSettings2 alt="Icon 1" />}
            text="Feed settings"
          />
        </div>
        <div className="myfeed-container2">
          {feedItems.map((item, index) => (
            <MyFeedCard
              postId={item.id}
              key={index}
              title={item.title}
              tags={item.tags || []}
              createdAt={item.createdAt}
              content={item.content}
              picture={item.thumbnail || item.picture}
              thumbnail={item.thumbnail}
              shares={item.shares || 0}
              comments={item.comments || 0}
            />
          ))}
        </div>
        {loading && <h4>Loading...</h4>}
        {!hasMoreRef.current && <p>Yay! You have seen it all</p>}
      </div>
    </Layout>
  );
};

export default MyFeed;
