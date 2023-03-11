import React from "react";

const Card = ({ part_name, price }) => {
  return (
    <div className="flex items-center p-3 w-full h-full bg-[#C0226D] flex-wrap rounded-md font-bold flex-col">
      <h2 className="text-[#FFFFFF] text-[14px] capitalize mb-5">
        {part_name}
      </h2>
      <h4 className="text-[#FFFFFF] text-[14px] pb-5">Rp. {price}</h4>
    </div>
  );
};

export default Card;
