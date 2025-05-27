import { useState } from "react";
import OrderModal from "./OrderModal"; // make sure this file exists

export default function Offerings() {
  const [showModal, setShowModal] = useState(false);

  const items = [
    { name: "Double Layer Sheet Cakes", price: "$75" },
    { name: "Custom Cakes (Starting at)", price: "$50" },
    { name: "Carrot Cakes 8″", price: "$25" },
    { name: "Cookie Trays (Small)", price: "$30" },
    { name: "Cookie Trays (Large)", price: "$50" },
    { name: "Cream Pies", price: "$15" },
    { name: "Fruit Pies", price: "$15" },
    { name: "Pecan Pie", price: "$20" },
    { name: "Cupcakes (Dozen)", price: "$12" },
    { name: "Mini Cupcakes (24)", price: "$12" },
    { name: "Cake Pops", price: "$1 each" },
    { name: "Cakesickles", price: "$2 each" },
    { name: "Cinnamon Rolls (Dozen, Large)", price: "$24" },
    { name: "Sourdough", price: "$10" },
    { name: "Sourdough with Inclusions", price: "$12" },
    { name: "Sourdough Sandwich Loaf", price: "$8" },
    { name: "Macarons", price: "$3 each" },
  ];

  return (
    <section className="bg-pink-200 py-16 px-4 md:px-8 rounded-2xl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Current Offerings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-pink-500 border border-pink-100 p-6 text-left transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-pink-600">
                {item.name}
              </h3>
              <p className="text-gray-800 text-md font-medium mt-2">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {/* Modal trigger button */}
        <div className="mt-10">
          <button
            onClick={() => setShowModal(true)}
            // className="inline-block bg-gradient-to-r from-pink to-lightpink text-white font-semibold px-6 py-3 rounded shadow hover:opacity-60 transition"
            className="inline-block font-semibold px-6 py-3 rounded  bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            Place an Order
          </button>
        </div>
      </div>

      {/* Conditionally render modal */}
      {showModal && <OrderModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
