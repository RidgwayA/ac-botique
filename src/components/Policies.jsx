export default function Policies() {
  return (
    <section className="bg-pink-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Order Policies
        </h2>

        <div className="bg-white rounded-xl shadow-md p-8 space-y-4 text-gray-700 text-lg leading-relaxed">
          <div className="flex items-start gap-3">
            <span className="font-semibold text-pink-600">Order Minimum:</span>
            <span>$10.00</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-semibold text-pink-600">Deposit:</span>
            <span>50% required to confirm your order</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-semibold text-pink-600">Lead Time:</span>
            <span>Please place all orders at least 2 weeks in advance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
