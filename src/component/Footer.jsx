import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          

          {/* Links 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <FaGithub className="hover:text-white cursor-pointer transition duration-300" />
              <FaLinkedin className="hover:text-white cursor-pointer transition duration-300" />
              <FaTwitter className="hover:text-white cursor-pointer transition duration-300" />
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;