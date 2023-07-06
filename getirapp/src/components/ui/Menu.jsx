import React from "react";

export default function Menu({ title, items }) {
  return (
    <section>
      <div className="flex flex-col gap-4 ">
        <h6 className="text-lg text-primary ">{title}</h6>
        <nav>
          <ul className="hidden  gap-2  lg:flex lg:flex-col">
            {items.map((item, index) => (
              <li className="text-sm" key={index}>
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
