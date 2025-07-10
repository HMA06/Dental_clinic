import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتكم بنجاح! سنتواصل معكم قريباً.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "الهاتف",
      content: "00905524400024",
      link: "tel:00905524400024"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "البريد الإلكتروني",
      content: "aljbawihamza@gmail.com",
      link: "mailto:aljbawihamza@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "العنوان",
      content: "دمشق - شارع الحمرا - جانب فندق الشرق",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "ساعات العمل",
      content: "يوميًا من 9 صباحًا حتى 6 مساءً",
      link: "#"
    }
  ];

  const workingHours = [
    { day: "السبت - الأربعاء", hours: "9:00 ص - 6:00 م" },
    { day: "الخميس", hours: "9:00 ص - 4:00 م" },
    { day: "الجمعة", hours: "مغلق" }
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary-800 mb-6 animate-fade-in">
            تواصل معنا
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            نحن هنا من أجلك! لا تتردد بالتواصل معنا لأي استفسار أو لحجز موعدك.
            فريقنا جاهز لخدمتكم وتقديم أفضل الحلول لاحتياجاتكم الطبية.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="card p-6 text-center group hover:bg-primary-50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <div className="text-primary-600">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {info.content}
                </p>
                {info.link !== "#" && (
                  <a
                    href={info.link}
                    className="inline-block mt-3 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    اتصل الآن
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-8 h-8 text-primary-600" />
                <h2 className="text-3xl font-bold text-primary-800">
                  أرسل لنا رسالة
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="00905xxxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      موضوع الرسالة
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="appointment">حجز موعد</option>
                      <option value="consultation">استشارة طبية</option>
                      <option value="complaint">شكوى</option>
                      <option value="suggestion">اقتراح</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4"
                >
                  <Send className="w-5 h-5" />
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Clinic Info */}
            <div className="space-y-8">
              {/* Working Hours */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-primary-800 mb-6">
                  ساعات العمل
                </h3>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-800">{schedule.day}</span>
                      <span className="text-primary-600 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-primary-800 mb-6">
                  تابعونا على وسائل التواصل
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/hamoozz.sy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="card p-8 bg-red-50 border-2 border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  للحالات الطارئة
                </h3>
                <p className="text-red-700 mb-4">
                  في حالة وجود ألم شديد أو حالة طارئة، اتصل بنا على الفور
                </p>
                <a
                  href="tel:00905524400024"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  اتصل الآن - 00905524400024
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              موقعنا على الخريطة
            </h2>
            <p className="text-gray-600">
              يمكنكم زيارتنا في موقعنا المميز في قلب دمشق
            </p>
          </div>
          
          <div className="card p-4 max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.8035095102805!2d28.75559287666964!3d41.20425720733346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caabee2a1ae0b3%3A0x9d24cfad163be444!2sImrahor%20Hz.%20%C3%96mer%20Kuran%20Kur'an%20Kursu!5e0!3m2!1sen!2str!4v1746034459466!5m2!1sen!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;