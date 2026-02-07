import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import beachImg from '../assets/images/product_on_beach.jpg';
import foamImg from '../assets/images/foam.png';
import brushImg from '../assets/images/brush.png';
import clothImg from '../assets/images/cloth.png';
import allProductsImg from '../assets/images/all_products.jpg';

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [selectedImage, setSelectedImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [quantity, setQuantity] = useState(1);

  const images = [
    { src: beachImg, alt: "Lifestyle Shot" },
    { src: foamImg, alt: "Premium Cleaning Foam" },
    { src: brushImg, alt: "Soft Bristle Brush" },
    { src: clothImg, alt: "Microfiber Cloth" },
    { src: allProductsImg, alt: "Complete Kit" }
  ];

  const prevImage = () => setSelectedImage((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setSelectedImage((i) => (i + 1) % images.length);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const totalPrice = Number(product.price).toFixed(2);

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/shop')}
          className="flex items-center text-primary-600 hover:text-primary-700 mb-8 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Shop
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-3xl p-8 flex items-center justify-center shadow-xl overflow-hidden">
              <div className="relative w-full">
                <img 
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="w-full h-96 object-contain"
                />

                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 rounded-full p-2 shadow hover:bg-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 rounded-full p-2 shadow hover:bg-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Thumbnails removed - main image only as requested */}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {product.popular && (
              <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-black text-gray-900">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">(1,234 reviews)</span>
            </div>

            <div className="text-5xl font-black text-primary-600">₹{totalPrice}</div>

            <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>

            <div className="border-t border-b border-gray-200 py-6 space-y-4">
              <h3 className="font-bold text-gray-900 text-lg">Key Features:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <svg
                      className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
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
            </div>

            {/* Buy Button */}
            <div className="space-y-3">
              {product && (
                <>
                  <button
                    onClick={() => setShowModal(true)}
                    aria-label="Buy Now on WhatsApp"
                    className="w-full inline-flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path d="M20.52 3.48A11.91 11.91 0 0012 .5C6.2.5 1.5 5.2 1.5 11c0 1.93.5 3.8 1.47 5.43L.5 23.5l6.2-2.05A11.94 11.94 0 0012 22.5c5.8 0 10.5-4.7 10.5-10.5 0-3.01-1.18-5.82-3.98-8.52zM12 20.5c-1.3 0-2.57-.35-3.69-1.01l-.26-.16-3.69 1.22 1.24-3.6-.17-.29A8.01 8.01 0 014 11c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8z"/>
                      <path d="M17.21 14.1c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.16.19-.32.21-.61.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.33.44-.5.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17-.02-.36-.02-.55-.02-.19 0-.5.07-.76.36-.26.29-1 1.01-1 2.46 0 1.45 1.03 2.86 1.17 3.06.14.19 2.02 3.08 4.9 4.32 2.48 1.05 2.48.7 2.93.66.45-.04 1.46-.6 1.67-1.18.21-.59.21-1.09.15-1.18-.07-.09-.26-.14-.55-.28z"/>
                    </svg>
                    Buy Now on WhatsApp
                  </button>

                  {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                      <div className="bg-white rounded-xl max-w-lg w-full p-6 mx-4">
                        <h3 className="text-xl font-bold mb-4">Order details</h3>

                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                              value={buyerName}
                              onChange={(e) => setBuyerName(e.target.value)}
                              className="mt-1 block w-full border border-gray-200 rounded-md p-2"
                              placeholder="Full name"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">Contact No</label>
                            <input
                              value={contactNo}
                              onChange={(e) => setContactNo(e.target.value)}
                              className="mt-1 block w-full border border-gray-200 rounded-md p-2"
                              placeholder="e.g. +9198XXXXXXXX"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">Delivery Address</label>
                            <textarea
                              value={deliveryAddress}
                              onChange={(e) => setDeliveryAddress(e.target.value)}
                              className="mt-1 block w-full border border-gray-200 rounded-md p-2"
                              rows={3}
                              placeholder="House no, street, city"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">Pincode</label>
                            <input
                              value={pincode}
                              onChange={(e) => setPincode(e.target.value)}
                              className="mt-1 block w-full border border-gray-200 rounded-md p-2"
                              placeholder="e.g. 560001"
                            />
                          </div>

                          <div className="flex items-center gap-3">
                            <label className="text-sm font-medium text-gray-700">Quantity</label>
                            <div className="inline-flex items-center border border-gray-200 rounded-md">
                              <button
                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                className="px-3 py-2 bg-gray-100"
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <div className="px-4">{quantity}</div>
                              <button
                                onClick={() => setQuantity((q) => q + 1)}
                                className="px-3 py-2 bg-gray-100"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-end gap-3">
                          <button
                            onClick={() => setShowModal(false)}
                            className="px-4 py-2 rounded-md bg-gray-100"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              const waNumber = '919497516303';
                              const lines = [];
                              lines.push(`Product: ${product.name}`);
                              lines.push(`Price: ₹${totalPrice}`);
                              lines.push(`Quantity: ${quantity}`);
                              lines.push(`Name: ${buyerName || 'Not provided'}`);
                              lines.push(`Contact: ${contactNo || 'Not provided'}`);
                              lines.push(`Delivery address: ${deliveryAddress || 'Not provided'}`);
                              lines.push(`Pincode: ${pincode || 'Not provided'}`);
                              const message = lines.join('\n');
                              const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
                              window.open(waHref, '_blank', 'noopener');
                              setShowModal(false);
                            }}
                            className="px-4 py-2 rounded-md bg-green-600 text-white"
                          >
                            Confirm & Open WhatsApp
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl mb-1">🚚</div>
                <div className="text-xs font-semibold text-gray-900">Free Shipping</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">✓</div>
                <div className="text-xs font-semibold text-gray-900">30-Day Return</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🔒</div>
                <div className="text-xs font-semibold text-gray-900">Secure Payment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Info Tabs */}
        <div className="mt-20">
          <div className="border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">How to Use</h3>
                <ol className="space-y-2 text-gray-600">
                  <li>1. Shake bottle well before use</li>
                  <li>2. Apply foam to dirty areas</li>
                  <li>3. Wait 30-60 seconds</li>
                  <li>4. Wipe clean with damp cloth</li>
                  <li>5. Let shoes air dry</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ingredients</h3>
                <p className="text-gray-600 leading-relaxed">
                  Water, plant-based surfactants, biodegradable cleaning agents, 
                  natural fragrance, pH balancers. Free from harsh chemicals, 
                  bleach, and toxic substances.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Safe For</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Leather</li>
                  <li>✓ Suede</li>
                  <li>✓ Canvas</li>
                  <li>✓ Synthetic fabrics</li>
                  <li>✓ Mesh</li>
                  <li>✓ Rubber soles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
