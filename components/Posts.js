import { db } from "@/firebase";
import { Query, collection, doc, orderBy, query } from "firebase/firestore";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Post from "./Post";
export default function Posts({ posts }) {
  const refCollection = collection(db, "posts");
  const [collectionPosts, loading, error] = useCollection(
    query(refCollection, orderBy("timestamp", "desc"))
  );

  return (
    <div>
      {collectionPosts
        ? collectionPosts?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              email={post.data().email}
              image={post.data().image}
              message={post.data().message}
              timestamp={post.data().timestamp}
              postImageUrl={post.data()?.postImageUrl}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              email={post.email}
              image={post.image}
              message={post.message}
              timestamp={post.timestamp}
              postImageUrl={post?.postImageUrl}
            />
          ))}
    </div>
  );
}
