import React from 'react';

export default function Project() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10">
        <div>
          <h1 className="text-3xl font-bold mb-5">Projects</h1>
          <span className="underline font-semibold">Featured projects</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:scale-110 duration-300">
              <h2 className="text-xl font-semibold mb-3">FutureU</h2>
              <p className="text-gray-700 text-left"><span className='font-semibold'>"Shaping Tomorrow's Leaders Today"</span><br/>
              FutureU is a global university that provides a world-class education, fostering innovation and excellence. With cutting-edge facilities, a diverse international campus, and a highly experienced faculty, FutureU empowers students to achieve their full potential and prepares them for success in a rapidly evolving world. Discover a learning environment that emphasizes quality, inclusivity, and forward-thinking education.</p>
              <div className='space-x-2'>
              <button type='button' className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Source code</button>
              <button type='button' className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 ">View project</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:scale-110 duration-300">
              <h2 className="text-xl font-semibold mb-3">SecureLogin</h2>
              <p className="text-gray-700"><span className='font-semibold'>"Ensuring Safe Access, Every Time"</span><br />
              SecureLogin is a robust user authentication system designed to verify credentials securely. The form includes pre-set username and password fields, ensuring that only valid credentials can access the system. Any incorrect input triggers a real-time error notification, enhancing security and user experience. This project demonstrates the integration of error handling and security best practices in web applications.</p>
              <div className='space-x-2'>
              <button type='button' className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Source code</button>
              <button type='button' className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 ">View project</button>
              </div>
            </div>


            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:scale-110 duration-300">
              <h2 className="text-xl font-semibold mb-3">StyleMart</h2>
              <p className="text-gray-700"><span className='font-semibold'>"Redefine Your Style"</span><br/>
              StyleMart is an e-commerce platform offering a wide range of fashion essentials, including apparel, shoes, hand watches, and smartwatches. With a user-friendly interface and secure payment options, customers can browse and shop for their favorite items with ease. The website ensures a seamless shopping experience, providing detailed product descriptions and smooth checkout processes, making fashion accessible at the click of a button.</p>
              <div className='space-x-2'>
              <button type='button' className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Source code</button>
              <button type='button' className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 ">View project</button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:scale-110 duration-300">
              <h2 className="text-xl font-semibold mb-3">CalcMaster</h2>
              <p className="text-gray-700"><span className='font-semibold'>"Precision at Your Fingertips"</span><br/>
              CalcMaster is a versatile calculator application designed to handle a range of mathematical operations with ease. Featuring a clean and intuitive interface, it supports basic arithmetic functions, as well as advanced calculations. Whether you need quick calculations or complex computations, CalcMaster provides accurate results and a seamless user experience, making it an essential tool for daily use.</p>
              <div className='space-x-2'>
              <button type='button' className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Source code</button>
              <button type='button' className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 ">View project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
