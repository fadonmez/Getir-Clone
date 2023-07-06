import React from "react";

export default function Category({ category: { id, title, image } }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded hover:bg-purple-50 transition-colors py-3  group w-[108px] cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-12 h-12 border border-gray-200 rounded "
      />
      <h3 className="text-black font-semibold text-sm group-hover:text-primary tracking-tight">
        {title}
      </h3>
    </div>
  );
}
