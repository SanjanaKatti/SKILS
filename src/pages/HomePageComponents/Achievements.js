import { useState, useEffect } from "react";
  
const Achievements = () => {
    const [stucount, setStuCount] = useState(0);
    const [branchcount, setBranchCount] = useState(0);
    const [performancecount, setPerformanceCount] = useState(0);
    const [awardscount, setAwardsCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (stucount < 200) {
                setStuCount(prevCount => prevCount + 1);
            }
        }, 15);

        return () => clearInterval(interval);
    }, [stucount]);
  
     useEffect(() => {
        const interval = setInterval(() => {
            if (branchcount < 3) {
                setBranchCount(prevCount => prevCount + 1);
            }
        }, 900);

        return () => clearInterval(interval);
    }, [branchcount]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (performancecount < 1000) {
                setPerformanceCount(prevCount => prevCount + 1);
            }
        }, 2);

        return () => clearInterval(interval);
    }, [performancecount]);
    useEffect(() => {
        const interval = setInterval(() => {
            if (awardscount < 11) {
                setAwardsCount(prevCount => prevCount + 1);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [awardscount]);

    return ( 
        <div>
        <div className="h-96 flex flex-row justify-center items-center m-10" style={{ backgroundImage: 'url("/kathakpic2.jpeg")' }}>
        <div className="w-full bg-black bg-opacity-50 py-5 flex justify-center">
            <div className="h-1/2 w-1/6 flex flex-col justify-center items-center border border-red-600 p-5 m-5">
                <div className="text-4xl">
                    {stucount} +
                </div>
                <div className="mt-4">
                    Students
                </div>
            </div>
            <div className="h-1/2 w-1/6 flex flex-col justify-center items-center border border-red-600 p-5 m-5">
                <div className="text-4xl">
                    {branchcount} +
                </div>
                <div className="mt-4">
                    Branches
                </div>
            </div>
            <div className="h-1/2 w-1/6 flex flex-col justify-center items-center border border-red-600 p-5 m-5">
                <div className="text-4xl">
                    {performancecount} +
                </div>
                <div className="mt-4">
                    Performances
                </div>
            </div>
            <div className="h-1/2 w-1/6 flex flex-col justify-center items-center border border-red-600 p-5 m-5">
                <div className="text-4xl">
                    {awardscount} +
                </div>
                <div className="mt-4">
                    Awards
                </div>
            </div>
        </div>
    </div>
    </div>
    
    ); 
}

export default Achievements;
