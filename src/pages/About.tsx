
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

        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="Professional working with technology"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Bold Technology Solutions inc was founded with a simple mission: to empower businesses
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
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern technology setup"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
            <div>
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Digital matrix background"
                className="w-full h-64 object-cover rounded-lg opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Excellence in technology"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, delivering high-quality solutions 
                that exceed expectations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Partnership and collaboration"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                We build lasting relationships with our clients, working as true partners 
                in their success.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Innovation in programming"
                  className="w-full h-32 object-cover rounded-lg"
                />
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
