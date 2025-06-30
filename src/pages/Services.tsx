
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies to help your business establish a strong online presence.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Content Management Systems', 'API Integration'],
      icon: '🌐'
    },
    {
      title: 'Software Development',
      description: 'Mobile and standalone applications tailored to your specific business needs and requirements.',
      features: ['Mobile Apps (iOS/Android)', 'Desktop Applications', 'Custom Software Solutions', 'Legacy System Modernization'],
      icon: '💻'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats and ensure data integrity.',
      features: ['Security Assessments', 'Network Security', 'Data Protection', 'Compliance Solutions'],
      icon: '🔒'
    },
    {
      title: 'Remote/Onsite IT Support',
      description: 'Professional IT support services to keep your systems running smoothly and minimize downtime.',
      features: ['24/7 Remote Support', 'Onsite Technical Support', 'System Maintenance', 'Troubleshooting'],
      icon: '🛠️'
    },
    {
      title: 'IT Infrastructure',
      description: 'Design, implement, and manage robust IT infrastructure solutions that scale with your business.',
      features: ['Network Design & Setup', 'Server Installation', 'Cloud Solutions', 'Infrastructure Monitoring'],
      icon: '🏗️'
    },
    {
      title: 'Asset Disposal',
      description: 'Secure and environmentally responsible disposal of your old IT equipment and data destruction.',
      features: ['Data Destruction', 'Equipment Recycling', 'Certificate of Destruction', 'Environmental Compliance'],
      icon: '♻️'
    },
    {
      title: 'Custom PC Build',
      description: 'High-performance custom computers built to your exact specifications and requirements.',
      features: ['Gaming PCs', 'Workstations', 'Servers', 'Performance Optimization'],
      icon: '🖥️'
    },
    {
      title: 'Printer & Office Device Service',
      description: 'Maintenance and repair services for printers and other office equipment to keep your operations running.',
      features: ['Printer Repair', 'Maintenance Plans', 'Supply Management', 'Equipment Upgrades'],
      icon: '🖨️'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to help your business thrive in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="text-blue-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your needs and assess your current setup</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">We create a customized solution plan for your business</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">We execute the plan with minimal disruption to your operations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">We provide ongoing support and maintenance</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let us help you find the perfect IT solution for your business
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/consultation"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Free Consultation
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

export default Services;
