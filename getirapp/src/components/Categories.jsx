import React, { useState, useEffect } from "react";
import categoryData from "../api/categories.json";
import Category from "../components/ui/Category.jsx";
import Title from "../components/ui/Title.jsx";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    //istek
    setCategories(categoryData);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-3 place-items-center  gap-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}
