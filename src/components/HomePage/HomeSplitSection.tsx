import { useState } from "react";
import Callback from "./Callback";

function HomeSplitSection() {
  const [boxColor, setBoxColor] = useState<string>("black");

  const backgroundColor = (color: string) => {
    setBoxColor(color);
  };

  return (
    <div className='split-section gap-x-10 mb-16 px-6'>
      <div className='split-left flex-auto w-8/12'>
        <div className='img-left'></div>
        <div className='section-title'>
          <h2 className='underline uppercase mt-2 text-xl'>Bestsellers</h2>
        </div>
      </div>
      <div className='split-right flex-auto w-4/12'>
        <div className='img-right'></div>
        <div className='section-title'>
          <h2 className='underline uppercase mt-2 text-xl'>Forever rugs</h2>
        </div>
        // passing data from child to parent using callback function
        <Callback getColor={backgroundColor} />
        <div
          className='p-5 h-2 w-2'
          style={{ backgroundColor: `${boxColor}` }}
        ></div>
      </div>
    </div>
  );
}

export default HomeSplitSection;
