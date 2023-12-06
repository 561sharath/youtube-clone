import React from 'react'
const Shimmer = () => {
  return (

    <>
      <div className="flex flex-wrap mt-3"> 
        {Array(15)
          .fill("")
          .map((e,index) => {
            return <div className="w-52 h-48 bg-gray-300  px-32 py-28 p-20 m-4" key={index}></div>;
          })}
      </div>
    </>
    
  );
};

export default Shimmer;

   

