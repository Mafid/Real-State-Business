import React from "react";
import Btn1 from "../../assets/Btn1.png"
import Btn2 from "../../assets/Btn2.png"
import Btn3 from "../../assets/Btn3.png"
import Btn4 from "../../assets/Btn4.png"
function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800 px-10 pt-14 pb-8">
      <div className="flex flex-wrap items-center gap-9 text-xl text-zinc-500 mb-10 px-0">
        {["Tank Top","T-Shirt","Long-Sleeve T-Shirt","Raglan Sleeve Shirt","Crop Top","V-Neck Shirt","Muscle Shirt"].map((item) => (
          <span key={item} className="flex items-center gap-3">
            <span>{item}</span>
            <span className="text-zinc-700">✺</span>
          </span>
        ))}
      </div>


      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
        <h2 className="text-7xl font-semibold">Style<span className="text-zinc-400">.</span>Loom</h2>
        <div className="flex gap-3">
            {[Btn1, Btn2, Btn3, Btn4].map((icon, index) => (
                <button key={index} className="w-10 h-10 flex items-center justify-center">
                <img src={icon} alt={`social-${index}`} className="w-8 h-8" />
                </button>
            ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 border-t border-zinc-800 pt-10 pb-12">
        <div>
          <h4 className="font-semibold mb-3">Home</h4>
          <ul className="text-sm text-[#676665] flex gap-10">
            <li>Why Us</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>FAQ's</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Products</h4>
          <ul className="text-sm text-[#676665] flex gap-10">
            <li>Menswear</li>
            <li>WomenSwear</li>
            <li>KidSwear</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Subscribe to Newsletter</h4>
          <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
            <input type="email" placeholder="Your Email" className="bg-transparent px-4 py-3 text-sm outline-none w-full"/>
            <button className="px-4 text-zinc-400">→</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between gap-4 text-xs text-zinc-500 border-t border-zinc-800 pt-6">
        <p>© 2024 StyleLoom. All rights reserved.</p>
        <p>Terms & Conditions · Privacy Policy</p>
      </div>
    </footer>
  );
}
export default Footer