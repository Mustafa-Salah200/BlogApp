import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Blogs from "../Blogs/Blogs";
import Me from "../Me/Me";
import Stories from "../Stories/Stories";
import Details from "../Details/Details";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Details />} />
        <Route path="/:id" element={<Me />} />
        <Route path="my-stories" element={<Stories />} />
      </Routes>
    </div>
  );
};

export default Home;
