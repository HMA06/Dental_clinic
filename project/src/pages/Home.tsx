import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Users, Clock, ArrowLeft, CheckCircle, Heart } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-accent-500" />,
      title: "خبرة عالية",
      description: "أكثر من 15 عام من الخبرة في طب الأسنان"
    },
    {
      icon: <Users className="w-8 h-8 text-accent-500" />,
      title: "فريق متخصص",
      description: "فريق من أفضل أطباء الأسنان المتخصصين"
    },
    {
      icon: <Clock className="w-8 h-8 text-accent-500" />,
      title: "مواعيد مرنة",
      description: "مواعيد متاحة حسب راحتكم وأوقاتكم"
    },
    {
      icon: <Heart className="w-8 h-8 text-accent-500" />,
      title: "رعاية شاملة",
      description: "رعاية طبية شاملة لجميع أفراد العائلة"
    }
  ];

  const services = [
    {
      title: "تنظيف الأسنان",
      description: "تنظيف شامل للأسنان واللثة بأحدث التقنيات",
      image: "https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "تبييض الأسنان",
      description: "جلسات تبييض آمنة وفعالة لابتسامة ناصعة",
      image: "https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "زراعة الأسنان",
      description: "استعادة الأسنان المفقودة بزراعات عالية الجودة",
      image: "https://images.pexels.com/photos/6812560/pexels-photo-6812560.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      rating: 5,
      comment: "خدمة ممتازة وطاقم طبي محترف. أنصح بزيارة العيادة بشدة."
    },
    {
      name: "فاطمة علي",
      rating: 5,
      comment: "تجربة رائعة، الدكتور محترف جداً والعيادة نظيفة ومريحة."
    },
    {
      name: "محمد السيد",
      rating: 5,
      comment: "أفضل عيادة أسنان زرتها. النتائج فاقت توقعاتي."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-800 mb-6 leading-tight">
                ابتسامتك تبدأ
                <span className="text-gradient block">من هنا</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                أفضل خدمات طب الأسنان بأحدث التقنيات وبأيدٍ خبيرة. 
                نحن نهتم بصحة أسنانكم وجمال ابتسامتكم.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/appointment"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
                >
                  احجز موعدك الآن
                  <ArrowLeft size={20} />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium py-4 px-8 rounded-lg transition-all duration-300"
                >
                  تعرف على خدماتنا
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/6812571/pexels-photo-6812571.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="عيادة أسنان حديثة"
                className="relative rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary-800 mb-4">
              لماذا نحن الأفضل؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم أعلى مستوى من الرعاية الطبية بأحدث التقنيات والمعدات
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-8 text-center group hover:bg-primary-50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-accent-100 rounded-full group-hover:bg-accent-200 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-4">
              خدماتنا المميزة
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              مجموعة شاملة من خدمات طب الأسنان لتلبية جميع احتياجاتكم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="card overflow-hidden group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
            >
              عرض جميع الخدمات
              <ArrowLeft size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              ماذا يقول مرضانا
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              آراء وتجارب مرضانا الكرام الذين اختاروا عيادتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary-600 font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-semibold text-primary-800">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-500 to-primary-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              جاهز للحصول على ابتسامة أحلامك؟
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              احجز موعدك اليوم واتخذ الخطوة الأولى نحو ابتسامة صحية وجميلة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                احجز موعدك الآن
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-all duration-300"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;