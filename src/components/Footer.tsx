
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Bold Technology Solutions INC
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for comprehensive IT solutions, from web development to cybersecurity.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>1448 Inverrary Lane</p>
              <p>Deerfield, IL 60015</p>
              <p>Phone: (425) 517-7616</p>
              <p>Email: info@boldtechnologysolutions.us</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/services" className="block text-gray-300 hover:text-blue-400 transition-colors">Services</a>
              <a href="/products" className="block text-gray-300 hover:text-blue-400 transition-colors">Products</a>
              <a href="/consultation" className="block text-gray-300 hover:text-blue-400 transition-colors">Free Consultation</a>
              <a href="/support" className="block text-gray-300 hover:text-blue-400 transition-colors">Remote Support</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bold Technology Solutions INC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
