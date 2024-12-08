import React from "react";

const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      {/* Top Section: Heading and Paragraph */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold mb-4">Questions Looks Here</h1>
        <p className="text-lg text-gray-600">
        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
        </p>
      </div>

      {/* FAQ Grid: 2x3 Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* FAQ Box 1 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">What is your return policy?</h3>
          <p className="text-gray-600">We accept returns within 30 days of purchase with a valid receipt.</p>
        </div>

        {/* FAQ Box 2 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">How can I track my order?</h3>
          <p className="text-gray-600">You can track your order using the tracking link sent to your email.</p>
        </div>

        {/* FAQ Box 3 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">Do you offer gift cards?</h3>
          <p className="text-gray-600">Yes, we offer gift cards in various denominations, available online.</p>
        </div>

        {/* FAQ Box 4 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">What payment methods do you accept?</h3>
          <p className="text-gray-600">We accept credit cards, PayPal, and EasyPaisa for payments.</p>
        </div>

        {/* FAQ Box 5 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">Can I change my shipping address?</h3>
          <p className="text-gray-600">You can change your shipping address within 24 hours of placing the order.</p>
        </div>

        {/* FAQ Box 6 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">Do you ship internationally?</h3>
          <p className="text-gray-600">Yes, we offer international shipping to many countries.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
