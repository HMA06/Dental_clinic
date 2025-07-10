import React from 'react';
import { CheckCircle, Star, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "تنظيف الأسنان",
      description: "تنظيف شامل للأسنان واللثة باستخدام أحدث التقنيات للحفاظ على صحة الفم والأسنان",
      image: "https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "200 ريال",
      duration: "45 دقيقة",
      features: ["تنظيف الجير", "تلميع الأسنان", "فحص شامل", "نصائح للعناية"]
    },
    {
      id: 2,
      title: "تبييض الأسنان",
      description: "جلسات تبييض آمنة وفعالة تمنحك ابتسامة ناصعة البياض خلال وقت قصير",
      image: "https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "800 ريال",
      duration: "90 دقيقة",
      features: ["تبييض بالليزر", "نتائج فورية", "آمن تماماً", "ضمان النتائج"]
    },
    {
      id: 3,
      title: "زراعة الأسنان",
      description: "استعادة الأسنان المفقودة بزراعات عالية الجودة تدوم طويلاً وتبدو طبيعية",
      image: "https://images.pexels.com/photos/6812560/pexels-photo-6812560.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "2500 ريال",
      duration: "120 دقيقة",
      features: ["زراعات تيتانيوم", "تقنية حديثة", "ضمان 10 سنوات", "مظهر طبيعي"]
    },
    {
      id: 4,
      title: "تقويم الأسنان",
      description: "تصحيح وضعية الأسنان باستخدام أحدث أنواع التقويم التقليدي والشفاف",
      image: "https://images.pexels.com/photos/6812575/pexels-photo-6812575.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "3000 ريال",
      duration: "12-24 شهر",
      features: ["تقويم معدني", "تقويم شفاف", "متابعة شهرية", "نتائج مضمونة"]
    },
    {
      id: 5,
      title: "علاج العصب",
      description: "علاج جذور الأسنان المصابة بأحدث التقنيات لإنقاذ السن وتجنب الخلع",
      image: "https://images.pexels.com/photos/6812545/pexels-photo-6812545.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "600 ريال",
      duration: "75 دقيقة",
      features: ["تقنية دقيقة", "بدون ألم", "معالجة جذرية", "نتائج دائمة"]
    },
    {
      id: 6,
      title: "جراحة الفم",
      description: "جراحات الفم والأسنان المتقدمة بما في ذلك خلع ضروس العقل والجراحات التجميلية",
      image: "https://images.pexels.com/photos/6812582/pexels-photo-6812582.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "1200 ريال",
      duration: "90 دقيقة",
      features: ["جراحة دقيقة", "تخدير موضعي", "شفاء سريع", "متابعة طبية"]
    }
  ];

  const stats = [
    { number: "5000+", label: "مريض راضٍ" },
    { number: "15+", label: "سنة خبرة" },
    { number: "10+", label: "خدمة متخصصة" },
    { number: "98%", label: "نسبة نجاح" }
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary-800 mb-6 animate-fade-in">
            خدماتنا المتميزة
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            نقدم مجموعة شاملة من خدمات طب الأسنان المتقدمة بأحدث التقنيات وأعلى معايير الجودة
            لضمان حصولكم على أفضل النتائج والعناية الطبية المثلى
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="card overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">4.9</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-primary-800">
                      {service.title}
                    </h3>
                    <span className="text-lg font-bold text-accent-500">
                      {service.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-secondary-500" />
                    <span className="text-sm text-gray-600">
                      مدة العلاج: {service.duration}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full btn-primary group-hover:bg-primary-700 transition-colors duration-300">
                    احجز الآن
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-4">
              لماذا تختار خدماتنا؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نحن ملتزمون بتقديم أعلى مستوى من الرعاية الطبية والخدمة المتميزة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                أطباء معتمدون
              </h3>
              <p className="text-gray-600">
                فريق من أفضل أطباء الأسنان المعتمدين والمتخصصين
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                أحدث التقنيات
              </h3>
              <p className="text-gray-600">
                نستخدم أحدث المعدات والتقنيات في طب الأسنان
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                ضمان الجودة
              </h3>
              <p className="text-gray-600">
                نضمن جودة الخدمة والنتائج المرضية لجميع مرضانا
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;