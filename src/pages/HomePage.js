import { useTitle } from "../hooks/useTitle";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { PostCard, SkeletonCard } from "../components";
import { db } from "../firebase/config";
export const HomePage = () => {
  const [posts, setPosts] = useState(new Array(2).fill(false));
  const [toggle, setToggle] = useState(false);
  const postsRef = useRef(collection(db, "posts"));
  useTitle("Home");
  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef.current);

      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    getPosts();
  }, [postsRef, toggle]);

  return (
    <section>
      {posts.map((post, index) =>
        post ? (
          <PostCard
            key={post.id}
            post={post}
            toggle={toggle}
            setToggle={setToggle}
          />
        ) : (
          <SkeletonCard key={index} />
        )
      )}
    </section>
  );
};
