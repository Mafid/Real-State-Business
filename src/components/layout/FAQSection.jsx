import React, { useState } from "react";
import Group from "../../assets/Group.png"

const tabs = ["All", "Ordering", "Shipping", "Returns", "Support"];

function FAQSection() {
  const [active, setActive] = useState("Shipping");

  return (
    <section className="bg-black px-6 py-20">
      <div className="relative mx-auto max-w-6xl rounded-2xl border border-dashed border-zinc-800 p-10 overflow-hidden">

        {/* Decorative radial shape */}
        <div className="absolute top-0 right-0">
          <img className="w-45 h-55" src={Group} alt="Top Logo" />
        </div>

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            HAVE QUESTIONS? WE HAVE ANSWERS.
          </h2>
          <p className="text-xs text-[#676665]">
            Ease into the world of StyleLoom with clarity. Our FAQs cover a
            spectrum of topics.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-lg border text-sm transition
                ${
                  active === tab
                    ? "bg-[#cfc6b8] text-black border-transparent"
                    : "border-zinc-800 text-zinc-400 hover:border-zinc-600"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 border-t border-dashed border-zinc-800">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="border-b md:border-r border-dashed border-zinc-800 p-8 last:border-r-0"
            >
              <h4 className="text-white font-medium mb-3">
                {item.question}
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqData = [
  {
    question: "How can I place an order on StyleLoom?",
    answer:
      "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to complete your purchase.",
  },
  {
    question: "Can I modify or cancel my order after placing it?",
    answer:
      "Once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing checkout.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, net banking, and select digital wallets during checkout.",
  },
  {
    question: "How do I initiate a return?",
    answer:
      "Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once dispatched, you'll receive a tracking number via email to monitor your delivery in real time.",
  },
  {
    question: "Do you offer exchanges for products?",
    answer:
      "Currently, we don’t offer direct exchanges. Please return the item and place a new order.",
  },
];
export default FAQSection