
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free IT Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert advice tailored to your business needs. Our consultation is completely free with no obligations.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="IT consultation meeting"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Consultation Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Schedule Your Free Consultation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="software-development">Software Development</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="it-support">IT Support</option>
                  <option value="it-infrastructure">IT Infrastructure</option>
                  <option value="asset-disposal">Asset Disposal</option>
                  <option value="custom-pc">Custom PC Build</option>
                  <option value="printer-service">Printer Service</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your current challenges or what you're looking to achieve..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule Free Consultation
              </button>
            </form>
          </div>

          {/* What to Expect */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="IT consultation process"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What to Expect
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Initial Assessment</h3>
                    <p className="text-gray-600">We'll discuss your current IT setup and business goals</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Needs Analysis</h3>
                    <p className="text-gray-600">We'll identify opportunities for improvement and growth</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Recommendations</h3>
                    <p className="text-gray-600">Receive tailored solutions and next steps</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Why Choose Our Consultation?</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Completely free with no obligations</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Expert advice from experienced professionals</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Customized recommendations for your business</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>No pressure sales approach</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                  alt="Professional consultation"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Prefer to Call?
              </h2>
              <p className="text-gray-600 mb-4">
                You can also reach us directly to schedule your consultation or ask any questions.
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Phone: <a href="tel:425-517-7616" className="text-blue-600 hover:text-blue-800">(425) 517-7616</a></p>
                <p className="font-semibold">Email: <a href="mailto:info@boldtechnologysolutions.us" className="text-blue-600 hover:text-blue-800">info@boldtechnologysolutions.us</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Consultation;
