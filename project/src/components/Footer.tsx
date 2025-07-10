import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">💎</span>
              </div>
              <h3 className="text-xl font-bold">عيادة ابتسامة الماسة</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نحن نقدم أفضل خدمات طب الأسنان بأحدث التقنيات وبأيدٍ خبيرة لضمان حصولكم على أجمل ابتسامة.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-secondary-400" />
                <span>00905524400024</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-secondary-400" />
                <span>aljbawihamza@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-secondary-400" />
                <span>دمشق - شارع الحمرا - جانب فندق الشرق</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-secondary-400" />
                <span>يوميًا من 9 صباحًا حتى 6 مساءً</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">خدماتنا</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">تنظيف الأسنان</li>
              <li className="hover:text-white cursor-pointer transition-colors">تبييض الأسنان</li>
              <li className="hover:text-white cursor-pointer transition-colors">تقويم الأسنان</li>
              <li className="hover:text-white cursor-pointer transition-colors">زراعة الأسنان</li>
              <li className="hover:text-white cursor-pointer transition-colors">علاج العصب</li>
              <li className="hover:text-white cursor-pointer transition-colors">جراحة الفم</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">تابعونا</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/hamoozz.sy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
            <div className="space-y-2">
              <h5 className="font-medium">ساعات العمل</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div className="flex justify-between">
                  <span>السبت - الخميس</span>
                  <span>9:00 ص - 6:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة</span>
                  <span>مغلق</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 عيادة ابتسامة الماسة - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;