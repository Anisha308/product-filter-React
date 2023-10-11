import React, { useState } from "react";

function Productlist() {
  const [products] = useState([
    { name: "lipstick", price: 1000, category: "Women" },
    { name: "Wallet", price: 1500, category: "Men" },
    { name: "Perfume", price: 200, category: "Unisex" },
    { name: "purse", price: 2500, category: "Women" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("Women");

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <label>
        Select a category :
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="Women">women</option>
          <option value="Men">men</option>
          <option value="Unisex">Unisex</option>
        </select>
      </label>
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>
            {product.name} : {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productlist;
