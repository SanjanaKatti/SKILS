import { useState, useEffect } from "react";

const Achievements = () => {
  const [stucount, setStuCount] = useState(0);
  const [branchcount, setBranchCount] = useState(0);
  const [performancecount, setPerformanceCount] = useState(0);
  const [awardscount, setAwardsCount] = useState(0);

  useEffect(() => {
    const counters = [
      { count: stucount, setCount: setStuCount, target: 200, interval: 15 },
      { count: branchcount, setCount: setBranchCount, target: 3, interval: 900 },
      { count: performancecount, setCount: setPerformanceCount, target: 1000, interval: 2 },
      { count: awardscount, setCount: setAwardsCount, target: 11, interval: 200 },
    ];

    const intervals = counters.map(({ count, setCount, target, interval }) =>
      setInterval(() => {
        if (count < target) {
          setCount((prevCount) => prevCount + 1);
        }
      }, interval)
    );

    // Cleanup intervals on unmount
    return () => intervals.forEach(clearInterval);
  }, [stucount, branchcount, performancecount, awardscount]);

  return (
    <div className="flex items-center justify-center w-full mx-auto max-w-[1000px] m-20">
      <div
        className="h-96 w-full max-w-[1000px] flex flex-row justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/homepagebg.jpeg")' }}
      >
        <div className="w-full bg-black bg-opacity-50 py-5 flex justify-center">
          <div className="h-1/2 w-1/6 flex flex-col justify-center items-center border border-red-600 p-5 mr-5 my-5">
            <div className="text-4xl">{stucount} +</div>
            <div className="mt-4">Students</div>
          </div>
          <div className="h-1/2 w-1/6 flex flex-col justify-center items-center border border-red-600 p-5 m-5">
            <div className="text-4xl">{branchcount} +</div>
            <div className="mt-4">Branches</div>
          </div>
          <div className="h-1/2 w-1/6 flex flex-col justify-center items-center border border-red-600 p-5 m-5">
            <div className="text-4xl">{performancecount} +</div>
            <div className="mt-4">Performances</div>
          </div>
          <div className="h-1/2 w-1/6 flex flex-col justify-center items-center border border-red-600 p-5 ml-5 my-5">
            <div className="text-4xl">{awardscount} +</div>
            <div className="mt-4">Awards</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
