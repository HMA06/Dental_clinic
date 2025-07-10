import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: '',
    preferredDoctor: '',
    isEmergency: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Appointment booked:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        notes: '',
        preferredDoctor: '',
        isEmergency: false
      });
    }, 3000);
  };

  const services = [
    "تنظيف الأسنان",
    "تبييض الأسنان",
    "تقويم الأسنان",
    "زراعة الأسنان",
    "علاج العصب",
    "جراحة الفم",
    "تركيبات الأسنان",
    "طب أسنان الأطفال",
    "استشارة عامة"
  ];

  const doctors = [
    "د. أحمد محمد - طبيب عام",
    "د. فاطمة علي - تقويم الأسنان",
    "د. محمد السيد - جراحة الفم",
    "د. سارة أحمد - طب أسنان الأطفال"
  ];

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-primary-50">
        <div className="card p-12 text-center max-w-md mx-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            تم حجز موعدكم بنجاح!
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            شكراً لكم لثقتكم بنا. سيتم التواصل معكم قريباً لتأكيد موعدكم.
          </p>
          <div className="text-sm text-gray-600">
            سيتم إعادة تحميل الصفحة تلقائياً...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary-800 mb-6 animate-fade-in">
            احجز موعدك الآن
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            يرجى تعبئة النموذج أدناه وسيتم التواصل معكم لتأكيد الموعد.
            نحن هنا لخدمتكم وتقديم أفضل الرعاية الطبية.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="card p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <Calendar className="w-8 h-8 text-primary-600" />
                    <h2 className="text-3xl font-bold text-primary-800">
                      نموذج حجز الموعد
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                          <User className="w-4 h-4" />
                          الاسم الكامل *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                          <Phone className="w-4 h-4" />
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
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4" />
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="example@email.com"
                      />
                    </div>

                    {/* Service Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الخدمة المطلوبة *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">اختر الخدمة</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الطبيب المفضل
                        </label>
                        <select
                          name="preferredDoctor"
                          value={formData.preferredDoctor}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">أي طبيب متاح</option>
                          {doctors.map((doctor, index) => (
                            <option key={index} value={doctor}>
                              {doctor}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                          <Calendar className="w-4 h-4" />
                          تاريخ الموعد *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                          <Clock className="w-4 h-4" />
                          الوقت المفضل *
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">اختر الوقت</option>
                          {timeSlots.map((time, index) => (
                            <option key={index} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Emergency Checkbox */}
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name="isEmergency"
                        id="isEmergency"
                        checked={formData.isEmergency}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <label htmlFor="isEmergency" className="text-sm font-medium text-gray-700">
                        هذا موعد طارئ (ألم شديد أو حالة عاجلة)
                      </label>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <FileText className="w-4 h-4" />
                        ملاحظات إضافية
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="اكتب أي ملاحظات إضافية أو وصف للأعراض..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-5 h-5" />
                      احجز الموعد الآن
                    </button>
                  </form>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Contact Info */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-primary-800 mb-4">
                    معلومات التواصل
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="font-medium">الهاتف</p>
                        <p className="text-sm text-gray-600">00905524400024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="font-medium">البريد</p>
                        <p className="text-sm text-gray-600">aljbawihamza@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="font-medium">ساعات العمل</p>
                        <p className="text-sm text-gray-600">9:00 ص - 6:00 م</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Notice */}
                <div className="card p-6 bg-red-50 border-2 border-red-200">
                  <h3 className="text-lg font-bold text-red-800 mb-3">
                    للحالات الطارئة
                  </h3>
                  <p className="text-sm text-red-700 mb-4">
                    في حالة الألم الشديد أو الإصابة، اتصل بنا فوراً
                  </p>
                  <a
                    href="tel:00905524400024"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    اتصل الآن
                  </a>
                </div>

                {/* Tips */}
                <div className="card p-6 bg-blue-50">
                  <h3 className="text-lg font-bold text-primary-800 mb-3">
                    نصائح مهمة
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• يرجى الوصول قبل الموعد بـ 15 دقيقة</li>
                    <li>• إحضار التقارير الطبية السابقة</li>
                    <li>• تناول وجبة خفيفة قبل الزيارة</li>
                    <li>• إحضار بطاقة الهوية الشخصية</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;