import React from "react";
import Group2 from "../../assets/Group2.png"
function TestimonialsSection() {
  return (
    <section className="bg-black px-10 py-20">
      <div className="relative mx-auto max-w-6xl rounded-2xl border border-dashed border-zinc-800 p-10 overflow-hidden">

        {/* Decorative shape */}
        <div className="absolute top-0 right-0">
          <img className="w-45 h-40" src={Group2} alt="Top Logo" />
        </div>

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
            THE STYLELOOM TESTIMONIAL COLLECTION.
          </h2>
          <p className="text-sm text-[#676665]">
            At StyleLoom, our customers are the heartbeat of our brand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 border-t border-dashed border-zinc-800">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border-b md:border-r border-dashed border-zinc-800 p-8 last:border-r-0"
            >
              {/* Profile */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.location}</p>
                  </div>
                </div>

                {/* Twitter icon */}
                <span className="text-zinc-400 text-sm">X</span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              {/* Review */}
              <p className="text-sm text-zinc-400 leading-relaxed">
                {t.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSection

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "New York, USA",
    review:
      "StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Rajesh Patel",
    location: "Mumbai, India",
    review:
      "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Emily Walker",
    location: "London, UK",
    review:
      "Adorable and comfortable! My daughter loves her new outfit. Thank you, StyleLoom.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Alejandro Martinez",
    location: "Barcelona, Spain",
    review:
      "Impressed by the quality and style. These shoes turned heads at every event.",
    avatar: "https://i.pravatar.cc/100?img=14",
  },
  {
    name: "Priya Sharma",
    location: "Delhi, India",
    review:
      "Perfect fit and exceptional quality. These jeans are now my go-to choice.",
    avatar: "https://i.pravatar.cc/100?img=28",
  },
  {
    name: "Maria Rodriguez",
    location: "Mexico City, Mexico",
    review:
      "Stylish sneakers that don't compromise on comfort. StyleLoom nailed it.",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
];
