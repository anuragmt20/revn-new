import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import allProductsImg from '../assets/images/all_products.jpg';
import foamImg from '../assets/images/foam.png';
import brushImg from '../assets/images/brush.png';
import clothImg from '../assets/images/cloth.png';

const Shop = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('regular');

  const products = [
    {
      id: 1,
      name: 'REVN Premium Foam Kit',
      price: 249,
      size: 'Complete Kit',
      popular: true,
      description: 'Everything you need for professional shoe cleaning at home',
      features: [
        'Premium Cleaning Foam (100ml)',
        'Professional Soft-Bristle Brush',
        'Premium Microfiber Cloth',
        'Cleans 20+ pairs of shoes',
        'Safe for all materials'
      ],
    }
  ];

  const handleBuyNow = (product) => {
    navigate(`/shop/${product.id}`, { state: { product } });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Shop <span className="text-primary-600">REVN</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The complete professional shoe cleaning kit
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full border-4 border-primary-600"
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold z-10">
                    Most Popular
                  </div>
                )}

                <div className="bg-gradient-to-br from-primary-100 to-blue-100 p-8 flex items-center justify-center overflow-hidden">
                  <img 
                    src={allProductsImg} 
                    alt="REVN Premium Foam Kit - Complete Set"
                    className="w-full h-64 object-contain"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="text-4xl font-black text-primary-600 mb-4">
                    ₹{product.price}
                  </div>
                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <svg
                          className="w-5 h-5 text-primary-600 mr-2 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleBuyNow(product)}
                    className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-200 ${
                      product.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-primary-600 hover:bg-primary-50 border-2 border-primary-600'
                    }`}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* 'What's Included' section moved to Home page */}

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Why Buy From Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">All over India</p>
            </div>


            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">2-3 business days</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Here to help anytime</p>
            </div>
          </div>
        </div>
      </section>
      {/* 'Why Choose REVN?' removed as requested */}
    </div>
  );
};

export default Shop;
