import { Link } from 'react-router-dom';
import beachImg from '../assets/images/product_on_beach.jpg';
import foamImg from '../assets/images/foam.png';
import brushImg from '../assets/images/brush.png';
import clothImg from '../assets/images/cloth.png';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-blue-50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Premium Shoe Care
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Keep Your Kicks
                <span className="block text-primary-600">Fresh</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Complete professional shoe cleaning kit with premium foam, brush, and cloth. 
                Removes dirt, stains, and scuffs in seconds. Perfect for all shoe types.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
                >
                  Shop Now
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all duration-200 text-center"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">1K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.7★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-blue-500 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl overflow-hidden">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={beachImg} 
                    alt="REVN Premium Foam Kit" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section moved to Shop page */}

      {/* What's Included Section (moved from Shop) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              What's Included in Your Kit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for professional shoe care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="mb-4 flex justify-center">
                <img 
                  src={foamImg} 
                  alt="Premium Cleaning Foam"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Cleaning Foam</h3>
              <p className="text-gray-600 leading-relaxed">
                100ml of our professional-grade cleaning formula. pH-balanced, biodegradable, 
                and safe for all shoe materials.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="mb-4 flex justify-center">
                <img
                  src={brushImg}
                  alt="Soft Bristle Brush"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Soft-Bristle Brush</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional cleaning brush with soft bristles that won't damage delicate 
                materials while effectively removing dirt.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="mb-4 flex justify-center">
                <img
                  src={clothImg}
                  alt="Microfiber Cloth"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Microfiber Cloth</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium ultra-soft microfiber cloth for gentle wiping and buffing. 
                Reusable and machine washable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Revive Your Shoes?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust REVN for their shoe care needs
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-primary-600 px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "REVN is a game-changer! My white sneakers look brand new after just one use. 
                Highly recommend!"
              </p>
              <div className="font-semibold text-gray-900">Sarah M.</div>
              <div className="text-sm text-gray-600">Sneaker Enthusiast</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Best shoe cleaner I've ever used. Works on all my shoes - leather, suede, canvas. 
                Amazing product!"
              </p>
              <div className="font-semibold text-gray-900">Mike T.</div>
              <div className="text-sm text-gray-600">Professional Cleaner</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "I was skeptical at first, but REVN delivered! My expensive shoes are spotless. 
                Worth every penny!"
              </p>
              <div className="font-semibold text-gray-900">Jessica L.</div>
              <div className="text-sm text-gray-600">Fashion Blogger</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
