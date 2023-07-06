import React from "react";

export default function Card({ card: { id, image, title, description } }) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 bg-white rounded text-center gap-2 shadow-md">
      <img src={image} alt="" />
      <h3 className="text-primary text-lg font-semibold mt-4">{title}</h3>
      <h4 className="text-[#697488]">{description}</h4>
    </div>
  );
}
