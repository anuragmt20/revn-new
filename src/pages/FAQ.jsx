import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does REVN foam work?',
      answer: 'REVN uses a proprietary foam formula that penetrates deep into shoe materials to lift dirt, stains, and grime. The foam encapsulates particles and brings them to the surface where they can be easily wiped away. The pH-balanced formula ensures it\'s safe for all materials while being powerful enough to remove tough stains.'
    },
    {
      question: 'What materials can I use REVN on?',
      answer: 'REVN is safe for virtually all shoe materials including leather, suede, nubuck, canvas, mesh, synthetic fabrics, and rubber. Our gentle formula won\'t damage colors, weaken fabrics, or leave residue. It\'s been tested on thousands of different shoe types to ensure compatibility.'
    },
    {
      question: 'How long does one bottle last?',
      answer: 'A regular 100ml bottle can clean 15-20 pairs of shoes Actual usage depends on how dirty your shoes are and how much product you use per cleaning.'
    },
    {
      question: 'Is REVN eco-friendly?',
      answer: 'Yes! REVN is made with biodegradable ingredients and plant-based surfactants. We use eco-friendly packaging and our formula is free from harsh chemicals, bleach, and toxic substances. It\'s safe for you, your shoes, and the planet.'
    },
    {
      question: 'How often should I clean my shoes?',
      answer: 'For regular wear, we recommend cleaning your shoes every 2-3 weeks or whenever they look dirty. For white sneakers or shoes worn in harsh conditions, weekly cleaning may be needed. Regular maintenance helps extend the life of your shoes and keeps them looking fresh.'
    },
    {
      question: 'Do I need to scrub my shoes?',
      answer: 'No! That\'s the beauty of REVN. Our foam formula does the work for you. Simply apply, wait 30-60 seconds, and wipe clean. For extremely stubborn stains, you can gently agitate with a soft brush, but heavy scrubbing is not necessary.'
    },
    {
      question: 'Can REVN remove all stains?',
      answer: 'REVN is highly effective on most common stains including dirt, mud, grass, food, and general wear marks. However, some permanent stains (like bleach marks or dye transfer) cannot be removed by any cleaner. For best results, treat stains as soon as possible.'
    },
    {
      question: 'Is there a scent?',
      answer: 'REVN has a fresh, clean scent that\'s not overpowering. The natural fragrance dissipates as the product dries, leaving your shoes smelling fresh without any strong chemical odors.'
    },
    {
      question: 'What\'s your return policy?',
      answer: 'We offer hassle-free returns for products that are damaged or expired. If you receive a damaged or expired item, contact support with your order details and we\'ll provide a replacement or a full refund.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'We offer free shipping all over india. Standard shipping takes 2-3 days . Express shipping is available at checkout for next-day delivery. You\'ll receive tracking information as soon as your order ships.'
    },
    {
      question: 'Can I use REVN on colored shoes?',
      answer: 'Absolutely! REVN is pH-balanced and won\'t fade or discolor your shoes. We\'ve tested it extensively on various colored materials including delicate suedes and vibrant canvas. Your colors will stay true while getting thoroughly cleaned.'
    },
    {
      question: 'Do you offer bulk discounts?',
      answer: 'Yes! Our bundle deals offer 20% savings when you buy 3 or more bottles. We also have a subscription service that provides additional savings and ensures you never run out. Contact our customer service for custom bulk orders for businesses.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about REVN
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-primary-300 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our customer support team is here to help you 24/7
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">Get a response within 24 hours</p>
              <a href="mailto:support@revn.com" className="text-primary-600 font-semibold hover:text-primary-700">
                support@revn.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">Mon-Fri: 9AM-6PM EST</p>
              <a href="tel:1-800-REVN-CARE" className="text-primary-600 font-semibold hover:text-primary-700">
                1-800-REVN-CARE
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm mb-3">Instant help from our team</p>
              <button className="text-primary-600 font-semibold hover:text-primary-700">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Try REVN?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and experience the difference
          </p>
          <button
            onClick={() => navigate('/shop')}
            aria-label="Shop Now - go to shop"
            className="bg-white text-primary-600 px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
