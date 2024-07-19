import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../Components/PostCard";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("/api/user/CheckAuth");
        if (response.status === 201 || response.status === 200) {
          console.log(response.data);
          setAllowed(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkAuth();
  }, []);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("/api/post/getPosts");
        console.log(res.data);
        setPosts(res.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex ">
        <div className="w-1/4 bg-gray-100 md:block">
          {/* Left sidebar content */}
        </div>
        <div className="w-full p-4 bg-gray-100 md:w-1/2 ">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              id={post._id}
              title={post.title}
              author={post.userName}
              content={post.content}
              imageUrl={post.imageUrl}
              userImage={post.userProfileImage}
              permission={allowed}
              saved={post.saved}
            />
          ))}
        </div>
        <div className="w-1/4 bg-gray-100 md:block">
          {/* Right sidebar content */}
        </div>
      </div>
    </div>
  );
}

export default Feed;
