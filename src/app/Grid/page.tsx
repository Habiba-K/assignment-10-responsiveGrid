import React from "react";
import Image from "next/image";
const Grid = () => {
  return (

      <div className="my-6  place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 justify-center">
        <div className="w-[300px] transform transition-all hover:scale-105 border border-gray-300 rounded-lg shadow-2xl shadow-black bg-gray-200 overflow-hidden p-3 border-solid my-5 flex flex-col items-center justify-center">
          <Image
            src="/images/learncodefaster-1280x720.jpg"
            width={300}
            height={300}
            alt=""
            className="justify-center rounded-lg object-contain overflow-hidden"
          />
          <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
        <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, necessitatibus.</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-900">Rs.500</span>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
        </div>
        <div className="w-[300px]   transform transition-all hover:scale-105 border border-gray-300 rounded-lg shadow-2xl shadow-black bg-gray-200 overflow-hidden p-3 border-solid my-5 flex flex-col items-center justify-center">
          <Image
            src="/images/learncodefaster-1280x720.jpg"
            width={300}
            height={300}
            alt=""
            className="justify-center rounded-lg object-contain overflow-hidden"
          />
          <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
        <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, necessitatibus.</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-900">Rs.500</span>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
        </div>
        <div className="w-[300px]  transform transition-all hover:scale-105 border border-gray-300 rounded-lg shadow-2xl shadow-black bg-gray-200 overflow-hidden p-3 border-solid my-5 flex flex-col items-center justify-center">
          <Image
            src="/images/learncodefaster-1280x720.jpg"
            width={300}
            height={300}
            alt=""
            className="justify-center rounded-lg object-contain overflow-hidden"
          />
          <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
        <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, necessitatibus.</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-900">Rs.500</span>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
        </div>
        <div className="w-[300px]  transform transition-all hover:scale-105  border border-gray-300 rounded-lg shadow-2xl shadow-black bg-gray-200 overflow-hidden p-3 border-solid my-5 flex flex-col items-center justify-center">
          <Image
            src="/images/learncodefaster-1280x720.jpg"
            width={300}
            height={300}
            alt=""
            className="justify-center rounded-lg object-contain overflow-hidden"
          />
          <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
        <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, necessitatibus.</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-900">Rs.500</span>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
        </div>
        <div className="w-[300px]  transform transition-all hover:scale-105 border border-gray-300 rounded-lg shadow-2xl shadow-black bg-gray-200 overflow-hidden p-3 border-solid my-5 flex flex-col items-center justify-center">
          <Image
            src="/images/learncodefaster-1280x720.jpg"
            width={300}
            height={300}
            alt=""
            className="justify-center rounded-lg object-contain overflow-hidden"
          />
          <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
        <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, necessitatibus.</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-900">Rs.500</span>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
        </div>
      </div>
  );
};

export default Grid;
