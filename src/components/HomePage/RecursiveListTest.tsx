import { useState } from "react";
import topics from "./topicsForTest";

function Topic({ topic }) {
  const [expandTopics, setExpandTopics] = useState(false);

  const handleExpand = () => {
    setExpandTopics(!expandTopics);
  };

  return (
    <li key={topic.title} className='bg-slate-200 pl-5 text-black'>
      <p onClick={handleExpand}>
        {topic.title} <span>{topic.subtopics.length}</span>
      </p>

      {topic.subtopics.length > 0 &&
        expandTopics &&
        topic.subtopics.map((subtopic) => {
          return <Topic key={subtopic.title} topic={subtopic} />;
        })}
    </li>
  );
}

function RecursiveListTest() {
  return (
    <div>
      <ul>
        {topics.map((topic) => {
          return <Topic key={topic.title} topic={topic} />;
        })}
      </ul>
    </div>
  );
}

export default RecursiveListTest;
