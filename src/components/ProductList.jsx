import { useDispatch } from "react-redux";
import { addItem } from "../store/CartSlice.js";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-50">
        <h2 className="text-xl font-bold text-slate-800">
          Product Catalogue
        </h2>
        <p className="text-slate-500 text-sm mt-1">Select items to add to your cart</p>
      </div>

      <div className="p-4 space-y-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-200"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-lg">
                  {product.name}
                </p>
                <p className="text-sm font-medium text-slate-500">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            {/* Action */}
            <button
              onClick={() => dispatch(addItem(product))}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-none hover:shadow-md active:scale-95"
            >
              <span>Add</span>
            
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
