
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Remote IT Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get immediate technical support from anywhere with our secure remote assistance services
          </p>
        </div>

        {/* Remote Support Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🖥️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Instant Remote Support</h2>
              <p className="text-gray-600 mt-2">Get help right away with our remote desktop tools</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Immediate troubleshooting</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Software installation & updates</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span>System optimization</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Security scans & cleanup</span>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://remote.boldtechnologysolutions.us"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Start Remote Session
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Click to begin secure remote assistance
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Schedule Support Session</h2>
              <p className="text-gray-600 mt-2">Book a convenient time for comprehensive support</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span>Detailed system analysis</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span>Performance optimization</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span>Security assessment</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span>Training & best practices</span>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://calendly.com/boldtechnologysolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
              >
                Schedule Appointment
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Book your preferred time slot
              </p>
            </div>
          </div>
        </div>

        {/* How Remote Support Works */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How Remote Support Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600">Call us or click the remote support link</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Connect Securely</h3>
              <p className="text-gray-600">We establish a secure connection to your computer</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Diagnose & Fix</h3>
              <p className="text-gray-600">Our experts identify and resolve your IT issues</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Follow Up</h3>
              <p className="text-gray-600">We ensure everything works perfectly</p>
            </div>
          </div>
        </div>

        {/* Support Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Support Plans
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Support</h3>
                <p className="text-gray-600">Pay-per-incident support</p>
                <div className="text-3xl font-bold text-blue-600 mt-4">$75</div>
                <p className="text-sm text-gray-600">per incident</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Remote troubleshooting</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Basic software support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Email support</span>
                </li>
              </ul>
              <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Contact Us
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Support</h3>
                <p className="text-gray-600">Monthly support plan</p>
                <div className="text-3xl font-bold text-blue-600 mt-4">$199</div>
                <p className="text-sm text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Unlimited remote support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Priority response</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Monthly system maintenance</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Phone & email support</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Support</h3>
                <p className="text-gray-600">Complete IT management</p>
                <div className="text-3xl font-bold text-blue-600 mt-4">Custom</div>
                <p className="text-sm text-gray-600">pricing</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>24/7 monitoring & support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Onsite support included</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Custom SLA agreements</span>
                </li>
              </ul>
              <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Support */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-16">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3">🚨</span>
            <h2 className="text-2xl font-bold text-red-800">Emergency IT Support</h2>
          </div>
          <p className="text-red-700 mb-4">
            Critical system down? Server failure? Security breach? We provide emergency IT support 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:425-517-7616"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
            >
              Call Emergency Line: (425) 517-7616
            </a>
            <a
              href="mailto:emergency@boldtechnologysolutions.us"
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors text-center"
            >
              Email: emergency@boldtechnologysolutions.us
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Right Now?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our support team is ready to assist you
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
              <p className="text-blue-100">
                <a href="tel:425-517-7616" className="hover:text-white transition-colors">
                  (425) 517-7616
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-blue-100">
                <a href="mailto:support@boldtechnologysolutions.us" className="hover:text-white transition-colors">
                  support@boldtechnologysolutions.us
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p className="text-blue-100">
                Monday - Friday<br />
                8:00 AM - 6:00 PM CST
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
