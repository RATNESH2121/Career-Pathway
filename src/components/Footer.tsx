const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-8 sm:pt-12 lg:pt-16 pb-3 sm:pb-4">
      <div className="container-custom px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <h3 className="font-semibold text-xs sm:text-sm uppercase mb-3 sm:mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xs sm:text-sm uppercase mb-3 sm:mb-4">OUR PROGRAMS</h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
              <div>
                <h4 className="font-medium mb-2 sm:mb-3">CITIZENSHIP</h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li><a href="#" className="hover:text-white transition-colors">Antigua</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Dominica</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Grenada</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Malta</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">St. Kitts</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 sm:mb-3">RESIDENCY</h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li><a href="#" className="hover:text-white transition-colors">Portugal</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Greece</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Spain</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Malta</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">UAE</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-xs sm:text-sm uppercase mb-3 sm:mb-4">HEADQUARTERS</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
              <li>Prime Tower, 20th Floor</li>
              <li>Brazil</li>
              <li>United States of America </li>
              <li className="pt-2 sm:pt-3">TEL: +971 4 430 1717</li>
              <li>FAX: +971 4 430 1916</li>
              <li>EMAIL: info@pathwaycitizenship.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xs sm:text-sm uppercase mb-3 sm:mb-4">INVESTMENT TYPE</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Real Estate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Donation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Government Bonds</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xs sm:text-sm uppercase mb-3 sm:mb-4">CONNECT WITH US</h3>
            <div className="flex space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-4 sm:h-5 w-4 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835-8.14-10.665h6.75l4.724 6.242 7.5-6.242zm-7.71 11.71l1.132 1.487 5.218 6.86h1.99l-5.743-7.565-2.596-1.33-8.45 9.683h1.98l7.47-8.552z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-4 sm:h-5 w-4 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-4 sm:h-5 w-4 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-4 sm:h-5 w-4 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
            <form>
              <div className="flex items-center">
                <select className="text-xs sm:text-sm bg-gray-700 text-white border-0 rounded-l-md py-1.5 sm:py-2 px-2 sm:px-3">
                  <option>English</option>
                  <option>Arabic</option>
                  <option>Russian</option>
                </select>
                <button type="button" className="bg-secondary text-white text-xs sm:text-sm py-1.5 sm:py-2 px-2 sm:px-3 rounded-r-md">
                  GO
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-3 sm:mb-4" />
        
        <div className="text-xs sm:text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} PATHWAY CITIZENSHIP. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;