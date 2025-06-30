
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Products = () => {
  const softwareLicenses = [
    {
      title: 'Windows OS',
      description: 'Genuine Microsoft Windows operating system licenses for your business computers.',
      versions: ['Windows 11 Pro', 'Windows 11 Home', 'Windows Server 2022'],
      icon: '🪟'
    },
    {
      title: 'Microsoft Office',
      description: 'Complete productivity suite with Word, Excel, PowerPoint, and more.',
      versions: ['Office 365 Business', 'Office 2021 Professional', 'Office Enterprise'],
      icon: '📊'
    },
    {
      title: 'MS Server Licenses',
      description: 'Microsoft Server licenses for your business infrastructure needs.',
      versions: ['Windows Server Standard', 'Windows Server Datacenter', 'SQL Server'],
      icon: '🖥️'
    },
    {
      title: 'Antivirus Solutions',
      description: 'Enterprise-grade antivirus and security software to protect your systems.',
      versions: ['Norton Business', 'McAfee Total Protection', 'Bitdefender Enterprise'],
      icon: '🛡️'
    }
  ];

  const hardwareProducts = [
    {
      title: 'Pre-Built PCs',
      description: 'High-quality pre-built computers optimized for business use.',
      specs: ['Business Desktops', 'Gaming PCs', 'Workstations', 'All-in-One PCs'],
      icon: '💻'
    },
    {
      title: 'Home Automation',
      description: 'Smart home solutions to automate and control your living space.',
      specs: ['Smart Lighting', 'Security Systems', 'Climate Control', 'Voice Assistants'],
      icon: '🏠'
    },
    {
      title: 'Security Cameras',
      description: 'Professional surveillance systems for home and business security.',
      specs: ['IP Cameras', 'NVR Systems', 'Wireless Cameras', '4K Resolution'],
      icon: '📹'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality software licenses and hardware solutions to power your business
          </p>
        </div>

        {/* Software Licenses Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Software Licenses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareLicenses.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">{product.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Available Versions:</h4>
                  <ul className="space-y-2">
                    {product.versions.map((version, versionIndex) => (
                      <li key={versionIndex} className="flex items-center text-gray-600">
                        <span className="text-blue-600 mr-2">✓</span>
                        {version}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Software Requests</h3>
            <p className="text-gray-600 mb-4">
              Need software licenses not listed above? We can source and provide licenses for 
              almost any business software as requested by our clients.
            </p>
            <Link
              to="/consultation"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Contact Us for Custom Requests
            </Link>
          </div>
        </div>

        {/* Hardware Products Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Hardware Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hardwareProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-center">
                  {product.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-center">Features:</h4>
                  <ul className="space-y-2">
                    {product.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center text-gray-600">
                        <span className="text-blue-600 mr-2">✓</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Products */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Genuine & Licensed</h3>
              <p className="text-gray-600">All our software is genuine and properly licensed for business use.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Performance</h3>
              <p className="text-gray-600">Our hardware is selected for optimal performance and reliability.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full Support</h3>
              <p className="text-gray-600">Complete installation and ongoing support for all our products.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We can source and provide any software or hardware solution your business needs
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/consultation"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Custom Quote
            </Link>
            <a
              href="tel:425-517-7616"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-block"
            >
              Call (425) 517-7616
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
