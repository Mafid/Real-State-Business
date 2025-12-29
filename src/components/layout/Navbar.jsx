import React from "react";
import { ShoppingBag } from "lucide-react";

function Navbar() {
  return (
    <div className="bg-black text-white font-sans">
      <nav className="flex items-center justify-between px-10 py-5 border-b border-zinc-800">
        <div className="flex items-center gap-6 text-sm">
          <span className="px-3 py-1 rounded-md bg-zinc-800">Home</span>
          <span className="text-zinc-400">Products</span>
        </div>
        <h1 className="text-lg font-semibold tracking-wide">Style.Loom</h1>
        <div className="flex items-center gap-4">
          <ShoppingBag size={18} />
          <button className="bg-[#AE9B84] px-4 py-2 rounded-lg text-sm cursor-pointer">
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
