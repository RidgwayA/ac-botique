export default function Policies() {
  return (
    <section className="bg-grey36 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">


        <div className="bg-pink-200 rounded-xl shadow-md p-8 space-y-4 text-gray-700 text-lg leading-relaxed">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Order Policies
        </h2>
          <div className="flex items-start gap-3">
            <span className="text-pink-700 font-bold underline">Order Minimum:</span>
            <span>$10.00</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-pink-700 font-bold underline">Deposit:</span>
            <span>50% required to confirm your order</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-pink-700 font-bold underline">Lead Time:</span>
            <span>Please place all orders at least 2 weeks in advance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
