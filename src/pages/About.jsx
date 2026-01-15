const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              About <span className="text-primary-600">REVN</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to revolutionize shoe care with premium, 
              eco-friendly products that deliver professional results at home.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  REVN was born from a simple frustration: why was it so hard to keep 
                  expensive sneakers looking fresh? Traditional cleaners were harsh, 
                  ineffective, or both.
                </p>
                <p>
                  After two years of research and development, we created a revolutionary 
                  foam formula that's powerful enough to remove tough stains, yet gentle 
                  enough for the most delicate materials.
                </p>
                <p>
                  Today, REVN is trusted by over 1,000 customers worldwide, from casual 
                  sneaker fans to professional shoe cleaners. We're proud to help people 
                  protect their investments and express their style.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="/src/assets/images/product_on_beach.jpg" 
                  alt="REVN Brand Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What drives us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">♻️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                Biodegradable formula that's safe for the planet
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Constantly improving our formula 
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                Premium ingredients for cleaning performance
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority, always
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Better Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why REVN is Better
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Not all shoe cleaners are created equal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-red-500 mr-2">✗</span> Regular Cleaners
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Harsh chemicals that damage materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Requires heavy scrubbing and elbow grease</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Can fade colors and weaken fabrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Leaves residue and strong chemical smell</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Not safe for all shoe materials</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-primary-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-primary-600 mr-2">✓</span> REVN Formula
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">•</span>
                  <span>pH-balanced, gentle on all materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">•</span>
                  <span>No scrubbing needed - foam does the work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">•</span>
                  <span>Preserves colors and extends shoe lifespan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">•</span>
                  <span>Fresh, clean scent with no residue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">•</span>
                  <span>Safe for leather, suede, canvas, and more</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">4.7★</div>
              <div className="text-primary-100">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">98%</div>
              <div className="text-primary-100">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            To empower people to protect their investments and express their style 
            with premium, eco-friendly shoe care products that deliver professional 
            results at home. We believe everyone deserves to look their best, starting 
            from the ground up.
          </p>
          <div className="inline-block bg-primary-50 border-2 border-primary-600 rounded-2xl p-8">
            <p className="text-2xl font-bold text-primary-600 italic">
              "Fresh shoes, Fresh confidence, Fresh start."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
