import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>00905524400024</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>aljbawihamza@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>دمشق - شارع الحمرا - جانب فندق الشرق</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">💎</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-700">عيادة ابتسامة الماسة</h1>
                <p className="text-sm text-gray-600">أفضل عيادة أسنان</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`font-medium transition-colors duration-300 ${
                  isActive('/')
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                الرئيسية
              </Link>
              <Link
                to="/services"
                className={`font-medium transition-colors duration-300 ${
                  isActive('/services')
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                خدماتنا
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors duration-300 ${
                  isActive('/contact')
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                تواصل معنا
              </Link>
              <Link
                to="/appointment"
                className="btn-primary"
              >
                احجز موعدك
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 animate-fade-in">
              <nav className="flex flex-col gap-4">
                <Link
                  to="/"
                  className={`font-medium py-2 ${
                    isActive('/') ? 'text-primary-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  الرئيسية
                </Link>
                <Link
                  to="/services"
                  className={`font-medium py-2 ${
                    isActive('/services') ? 'text-primary-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  خدماتنا
                </Link>
                <Link
                  to="/contact"
                  className={`font-medium py-2 ${
                    isActive('/contact') ? 'text-primary-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  تواصل معنا
                </Link>
                <Link
                  to="/appointment"
                  className="btn-primary inline-block text-center mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  احجز موعدك
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;