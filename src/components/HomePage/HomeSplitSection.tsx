import { useState } from "react";
import Callback from "./Callback";

function HomeSplitSection() {
  const [boxColor, setBoxColor] = useState<string>("black");

  const backgroundColor = (color: string) => {
    setBoxColor(color);
  };

  return (
    <div className='split-section flex md:flex-row flex-col gap-x-10 mb-16 px-6'>
      <div className='split-left flex-auto md:w-8/12 w-full'>
        <div className='img-left h-full'></div>
        <div className='section-title'>
          <h2 className='underline uppercase mt-2 md:text-xl text-md'>
            Bestsellers
          </h2>
        </div>
      </div>
      <div className='split-right flex-auto md:w-4/12 w-full'>
        <div className='img-right md:h-2/3 h-full'></div>
        <div className='section-title'>
          <h2 className='underline uppercase mt-2 md:text-xl text-md'>
            Forever rugs
          </h2>
        </div>
        {/* // passing data from child to parent using callback function */}
        {/* <Callback getColor={backgroundColor} />
        <div
          className='p-5 h-2 w-2'
          style={{ backgroundColor: `${boxColor}` }}
        ></div> */}
      </div>
    </div>
  );
}

export default HomeSplitSection;
