function HomeSplitSection() {
  return (
    <div className='split-section gap-x-10 mb-16'>
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
      </div>
    </div>
  );
}

export default HomeSplitSection;
