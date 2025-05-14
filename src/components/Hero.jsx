import { useState, useEffect } from "react";
import ConsultationModal from "../components/ConsultationModal";
import bread1 from "../assets/bread-1.jpg";
import cake1 from "../assets/cake-1.jpg";
import cookie1 from "../assets/cookie-1.jpg";
import bgTexture from "../assets/bgTexture.png";

export default function Hero() {
  const images = [bread1, cake1, cookie1];
  const [index, setIndex] = useState(0);
  const [showBackground, setShowBackground] = useState(window.innerWidth >= 768);
  const [showModal, setShowModal] = useState(false);


  // Background image slideshow
useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000);
  return () => clearInterval(interval);
}, [images.length]);


  // Handle responsive background visibility
  useEffect(() => {
    const handleResize = () => {
      setShowBackground(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-2 md:px-4 gap-x-6 pt-16 pb-20 bg-white max-w-6xl mx-auto bg-no-repeat bg-center bg-[length:800px]"
      style={{
        backgroundImage: showBackground ? `url(${bgTexture})` : "none"
      }}
    >
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6 bg-white/90 m-5 rounded-2xl p-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Your local <span className="text-pink">cottage</span> <br />
          <span className="text-pink">baker</span>
        </h1>
        <p className="text-gray-600 text-lg">
          I started Ann’s Cupcake Boutique in 2014 as a home baker with a
          passion for creating beautiful cakes and desserts. I'm proud to be
          self-taught, and for over 30 years, I’ve also worked in the casino
          industry.
          <br />
          <br />
          I’m a mother of two wonderful children and a proud grandmother of five
          beautiful grandchildren. I love to travel, and my dream is to retire
          early from the casino world so I can bake full time and share even
          more sweet creations with others.
          <br />
          <br />
          Planning a custom order or have a special request?
          I'd love to chat! Schedule a quick consultation using the button
          below.
        </p>
<button
  onClick={() => setShowModal(true)}
  className="px-6 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-pink to-lightpink shadow-md hover:opacity-90"
>
  Schedule a Consultation
</button>
{showModal && <ConsultationModal onClose={() => setShowModal(false)} />}

      </div>

      {/* Right Image with Fade and Depth */}
      <div className="relative w-full max-w-sm h-[700px] flex items-center justify-center mb-8 md:mb-0">
        <div className="absolute inset-0 translate-x-4 translate-y-4 bg-lightpink rounded-2xl z-0" />
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Featured Treat ${i + 1}`}
            className={`absolute w-full h-full object-cover rounded-2xl shadow-lg transition-opacity duration-[3000ms] ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
