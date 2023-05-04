import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Ahmed Mohamed",
    src: "/../public/faroolle.jpg",
    profile: "/../public/Imfaroolle.png",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Mark zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

export default function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, i) => (
        <StoryCard
          key={i}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}
