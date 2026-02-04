import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import React from "react";
import "./App.css";
const App = () => {
  return (
    <div className="min-h-screen bg-[#F0F4F8] font-['Inter'] text-slate-800 pb-20">
      {/* Header */}
      <header className="bg-white sticky top-0 z-10 shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">Shopping Cart</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Product List (7 cols) */}
          <div className="lg:col-span-8">
            <ProductList />
          </div>

          {/* Right: Cart (5 cols) */}
          <div className="lg:col-span-4 sticky top-24">
            <Cart />
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
