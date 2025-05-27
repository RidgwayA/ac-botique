import { useState } from "react";
import emailjs from "@emailjs/browser";

const offerings = [
  { name: "Double Layer Sheet Cakes", price: 75 },
  { name: "Custom Cakes (Starting at)", price: 50 },
  { name: "Carrot Cakes 8″", price: 25 },
  { name: "Cookie Trays (Small)", price: 30 },
  { name: "Cookie Trays (Large)", price: 50 },
  { name: "Cream Pies", price: 15 },
  { name: "Fruit Pies", price: 15 },
  { name: "Pecan Pie", price: 20 },
  { name: "Cupcakes (Dozen)", price: 12 },
  { name: "Mini Cupcakes (24)", price: 12 },
  { name: "Cake Pops", price: 1 },
  { name: "Cakesickles", price: 2 },
  { name: "Cinnamon Rolls (Dozen, Large)", price: 24 },
  { name: "Sourdough", price: 10 },
  { name: "Sourdough with Inclusions", price: 12 },
  { name: "Sourdough Sandwich Loaf", price: 8 },
  { name: "Macarons", price: 3 },
];

export default function OrderModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    items: offerings.reduce((acc, item) => ({ ...acc, [item.name]: 0 }), {}),
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in form.items) {
      setForm((prev) => ({
        ...prev,
        items: { ...prev.items, [name]: parseInt(value) || 0 },
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const total = offerings.reduce((sum, item) => {
    const qty = form.items[item.name] || 0;
    return sum + qty * item.price;
  }, 0);

  const deposit = total * 0.5;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agreed) return alert("Please acknowledge the policy.");
    const selectedItems = Object.entries(form.items).filter(([, qty]) => qty > 0);
    if (selectedItems.length === 0) return alert("Please select at least one item.");

    const orderList = selectedItems
      .map(([name, qty]) => `${qty} x ${name}`)
      .join("\n");

    emailjs
      .send(
        "service_d38679m", // Replace with your EmailJS service ID
        "template_nfv4io9", // Replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          from_number: form.number,
          // to_email: "rway27@gmail.com",
          order_list: orderList,
          total: total.toFixed(2),
          deposit: deposit.toFixed(2),
        },
        "02uQMqk_AnYi45TZP" // Replace with your EmailJS public key
      )
      .then(() => {
        alert("Your order was submitted successfully!");
        onClose();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="bg-pink-50 w-full max-w-3xl p-6 md:p-8 rounded-xl shadow-xl overflow-y-auto max-h-[90vh] relative">
        <button
          className="absolute top-4 right-4 text-2xl text-black hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-black">Place an Order</h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-black">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border rounded p-3"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="number"
            placeholder="Phone Number"
            required
            className="w-full border rounded p-3"
            value={form.number}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border rounded p-3"
            value={form.email}
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {offerings.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center border p-2 rounded"
              >
                <label className="text-sm font-medium text-black">
                  {item.name} <span className="text-gray-600">(${item.price})</span>
                </label>
                <input
                  type="number"
                  name={item.name}
                  min="0"
                  className="w-16 text-right border rounded"
                  value={form.items[item.name]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <div className="bg-white p-4  rounded border text-black">
            <p><strong>Estimated Total:</strong> ${total.toFixed(2)}</p>
            <p><strong>Deposit (50%):</strong> ${deposit.toFixed(2)}</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded border text-sm text-gray-700">
            <p><strong>Note:</strong> Orders are not confirmed until a deposit is received. I’ll respond within 1–2 business days to confirm availability and collect deposit.</p>
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="agreed"
              checked={form.agreed}
              onChange={handleChange}
              className="accent-pink-500"
            />
            I agree to the order policy.
          </label>

          <button
            type="submit"
                        className="inline-block font-semibold px-6 py-3 rounded  bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800"
            disabled={!form.agreed}
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}
