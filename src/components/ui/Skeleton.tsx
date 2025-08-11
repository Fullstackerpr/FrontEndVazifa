import type React from "react";

interface SkeletonProps {
  count: number;
}


const Skeleton: React.FC<SkeletonProps> = ({ count = 12 }) => {
  return (
    <div className="container mx-auto grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
      {Array(12)?.map((_, index) => (
        <div key={index}>
          <div className="h-[300px] bg-gray-300 rounded-b-lg"></div>
          <div className="p-4">
            <div className="w-[20%] h-6 bg-gray-300 rounded-b-lg"></div>
            <div className="w-[20%] h-6 bg-gray-300 rounded-b-lg mt-4"></div>
            <div className="w-[80%] h-6 bg-gray-300 rounded-b-lg mt-4"></div>
            <div className="w-[80%] h-6 bg-gray-300 rounded-b-lg mt-4"></div>
            <div className="w-[60%] h-6 bg-gray-300 rounded-b-lg mt-4"></div>
            <div className="w-[80%] h-6 bg-gray-300 rounded-b-lg mt-4"></div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
