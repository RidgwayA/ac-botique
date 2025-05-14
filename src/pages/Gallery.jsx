import { useState } from "react";
import cake1 from "../assets/gallery/cake1.jpg";
import cake2 from "../assets/gallery/cake2.jpg";
import cake3 from "../assets/gallery/cake3.jpg";
import cake4 from "../assets/gallery/cake4.jpg";

const cakes = [
  { src: cake1, alt: "Pink Rosette Cake" },
  { src: cake2, alt: "Chocolate Drip Cake" },
  { src: cake3, alt: "Unicorn Birthday Cake" },
  { src: cake4, alt: "Rustic Naked Cake" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen bg-pink-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Cake Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cakes.map((cake, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
              onClick={() => setSelected(cake)}
            >
              <img
                src={cake.src}
                alt={cake.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>

        {selected && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <img
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-200 rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
