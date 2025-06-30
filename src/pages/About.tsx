
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Bold Technology Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in navigating the digital landscape with comprehensive IT solutions
          </p>
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Bold Technology Solutions INC was founded with a simple mission: to empower businesses 
                with cutting-edge technology solutions that drive growth and success. We understand 
                that in today's digital world, having the right technology infrastructure is crucial 
                for business success.
              </p>
              <p className="text-gray-600 mb-4">
                From our headquarters in Deerfield, Illinois, we serve businesses of all sizes, 
                providing everything from custom software development to comprehensive cybersecurity 
                solutions. Our team of experienced professionals is dedicated to delivering reliable, 
                innovative, and cost-effective IT solutions.
              </p>
              <p className="text-gray-600">
                We pride ourselves on building long-term partnerships with our clients, understanding 
                their unique needs, and providing ongoing support to ensure their technology continues 
                to serve their business objectives.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-6">
                To provide innovative, reliable, and comprehensive technology solutions that empower 
                businesses to achieve their goals and stay competitive in the digital age.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Customer-focused approach</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Cutting-edge solutions</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Reliable support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, delivering high-quality solutions 
                that exceed expectations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                We build lasting relationships with our clients, working as true partners 
                in their success.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of technology, bringing innovative solutions 
                to solve complex challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-blue-100">
                1448 Inverrary Lane<br />
                Deerfield, IL 60015
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">
                <a href="tel:425-517-7616" className="hover:text-white transition-colors">
                  (425) 517-7616
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">
                <a href="mailto:info@boldtechnologysolutions.us" className="hover:text-white transition-colors">
                  info@boldtechnologysolutions.us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
