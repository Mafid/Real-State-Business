import React from "react";

function PromoBanner() {
  return (
    <section className="bg-black py-20 px-10">
      <div className="relative mx-auto max-w-6xl rounded-2xl bg-[#C2B4A3] px-10 py-12">
        
        {/* Decorative background shape */}
        <div>
          <div className="w-[420] h-[420] rounded-full border-[60] border-[#b8ae9f]" />
        </div>

        {/* Content */}
        <div className="flex">
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-4xl font-semibold text-black mb-4">
            ELEVATE YOUR WARDROBE
          </h2>

          <p className="text-xs md:text-sm text-black/70 mb-8 leading-relaxed">
            Don't miss out - experience the epitome of fashion by clicking
            'Buy Now' and embrace a world of chic elegance delivered to your
            doorstep. Your style journey begins here.
          </p>
        </div>

        <div className="pt-8 pl-18">
            <button className="bg-zinc-800 text-white py-2 px-3 rounded-md pointer">Shop Now
            <span className="text-lg"> ↗</span></button>
        </div>
      </div>
      </div>
    </section>
  );
}
export default PromoBanner