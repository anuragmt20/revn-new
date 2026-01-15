import { Link } from 'react-router-dom';

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
                    src="/src/assets/images/product_on_beach.jpg" 
                    alt="REVN Premium Foam Kit" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose REVN?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've engineered the perfect formula for keeping your shoes looking brand new
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Acting</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced foam formula penetrates deep into fabric and leather, 
                lifting dirt and stains in just 30 seconds. Professional results every time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safe Formula</h3>
              <p className="text-gray-600 leading-relaxed">
                pH-balanced and biodegradable. Safe for all shoe materials including 
                leather, suede, canvas, and synthetic fabrics. Won't damage colors.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Get professional shoe cleaning results at home. Our formula is trusted 
                by sneaker enthusiasts and professional cleaners worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional cleaning made easy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  1
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Apply</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                Shake well and apply foam directly to dirty areas of your shoes
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  2
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wait</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                Let the foam work its magic for 30-60 seconds
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  3
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wipe</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                Wipe clean with a damp cloth and watch stains disappear
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
