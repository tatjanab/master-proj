import { useState } from "react";
import topics from "./topics.js";

function Topic({ topic }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <li>
      <p
        onClick={handleOnClick}
        className='my-1 cursor-pointer p-2'
        style={{ backgroundColor: topic.enabled ? "aliceblue" : "pink" }}
      >
        {topic.title}
        <span className='ml-2'>
          {topic.subtopics.length > 0 ? topic.subtopics.length : ""}
        </span>
      </p>

      {isExpanded && topic.subtopics.length > 0 && (
        <ul className='pl-2'>
          {topic.subtopics.map((subtopic) => {
            return <Topic key={subtopic.title} topic={subtopic} />;
          })}
        </ul>
      )}
    </li>
  );
}

function RenderingList() {
  return (
    <div className='bg-slate-800 px-2 py-2'>
      <ul>
        {topics.map((topic) => {
          return <Topic key={topic.title} topic={topic} />;
        })}
      </ul>
    </div>
  );
}

export default RenderingList;
