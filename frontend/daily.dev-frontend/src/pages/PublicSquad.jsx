import Layout from "../components/Layout/Layout";
import React from "react";
import "../styles/squad/squad.css";
const PublicSquad = () => {
  return (
    <Layout>
      <div className="w-full h-full">
        <div className="bg-[url('https: //daily-now-res.cloudinary.com/image/upload/s--7QJfELWV--/f_auto/v1686299194/Squads_Background_z0uuvc')]">
          <p className="text-white">Squads</p>
        </div>
      </div>
    </Layout>
  );
};

export default PublicSquad;
