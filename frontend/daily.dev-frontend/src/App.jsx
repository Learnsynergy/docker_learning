import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Login/Onboarding";
import FirstHome from "./pages/Login/FirstHome";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Verification from "./pages/SignUp/Verification";
import WelcomeBack from "./pages/WelcomeBack";
import MyFeed from "./pages/MyFeed";
import NewPost from "./pages/NewPost";
import Bookmarks from "./pages/Activity/Bookmarks";
import PublicSquad from "./pages/PublicSquad";
import NewFeed from "./pages/NewFeed";
import NewSquad from "./pages/NewSquad";
import Explore from "./pages/Discover/Explore/Explore";
import Sources from "./pages/Discover/Sources";
import LeaderBoard from "./pages/Discover/LeaderBoard";
import Discussions from "./pages/Discover/Discussions";
import Tags from "./pages/Discover/Tags";
import History from "./pages/Activity/History";
import ForgotPassword from "./pages/Login/ForgotPassword";
import VerifiyPassword from "./pages/Login/VerifiyPassword";
import ChangePassword from "./pages/Login/ChangePassword";
import PostCard from "./components/Comments/PostCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoutes from "./components/Auth/PrivateRoutes";

function App() {
  return (
    <Router>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<FirstHome />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/onboarding/login" element={<Login />} />
        <Route path="/onboarding/send-code" element={<ForgotPassword />} />
        <Route path="/onboarding/verify-code" element={<VerifiyPassword />} />
        <Route
          path="/onboarding/change-password"
          element={<ChangePassword />}
        />
        <Route path="/onboarding/signup" element={<SignUp />} />
        <Route path="/onboarding/verification" element={<Verification />} />
        <Route path="/welcomeback" element={<WelcomeBack />} />
        <Route
          path="/myfeed"
          element={
            <PrivateRoutes>
              <MyFeed />
            </PrivateRoutes>
          }
        />
        <Route
          path="/create"
          element={
            <PrivateRoutes>
              <NewPost />
            </PrivateRoutes>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <PrivateRoutes>
              <Bookmarks />
            </PrivateRoutes>
          }
        />
        <Route
          path="/squads"
          element={
            <PrivateRoutes>
              <PublicSquad />
            </PrivateRoutes>
          }
        />
        <Route
          path="/new"
          element={
            <PrivateRoutes>
              <NewFeed />
            </PrivateRoutes>
          }
        />
        <Route
          path="/new?"
          element={
            <PrivateRoutes>
              <NewSquad />
            </PrivateRoutes>
          }
        />
        <Route
          path="/posts"
          element={
            <PrivateRoutes>
              <Explore />
            </PrivateRoutes>
          }
        />
        <Route path="/sources" element={<Sources />} />
        <Route
          path="/users"
          element={
            <PrivateRoutes>
              <LeaderBoard />
            </PrivateRoutes>
          }
        />
        <Route
          path="/discussed"
          element={
            <PrivateRoutes>
              <Discussions />
            </PrivateRoutes>
          }
        />
        <Route
          path="/tags"
          element={
            <PrivateRoutes>
              <Tags />
            </PrivateRoutes>
          }
        />
        <Route path="/history" element={<History />} />
        <Route
          path="/posts/:id"
          element={
            <PrivateRoutes>
              <PostCard />
            </PrivateRoutes>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
