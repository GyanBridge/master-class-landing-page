import React, { useState, useEffect } from 'react';
import { 
  Mic, Globe, TrendingUp, Brain, CheckCircle, Star, Play, ChevronDown, 
  ArrowRight, Check, Award, Clock, Users, Volume2, MessageCircle, Target
} from 'lucide-react';

const SpokenEnglishLanding = ({ onEnroll, onBack }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const curriculum = [
    {
      number: "01",
      title: "Pronunciation & Accent Training",
      color: "bg-blue-50",
      textColor: "text-blue-900",
      borderColor: "border-blue-200",
      points: [
        "Master correct pronunciation of English sounds",
        "Reduce mother tongue influence on accent",
        "Learn stress patterns and intonation",
        "Practice with phonetic symbols and IPA"
      ]
    },
    {
      number: "02", 
      title: "Grammar & Vocabulary Building",
      color: "bg-green-50",
      textColor: "text-green-900",
      borderColor: "border-green-200",
      points: [
        "Essential grammar rules for fluent speaking",
        "Build vocabulary for daily conversations",
        "Learn phrasal verbs and idioms",
        "Master tenses and sentence structures"
      ]
    },
    {
      number: "03",
      title: "Conversation & Speaking Skills",
      color: "bg-purple-50",
      textColor: "text-purple-900", 
      borderColor: "border-purple-200",
      points: [
        "Develop confidence in group discussions",
        "Learn to express opinions clearly",
        "Master small talk and social conversations",
        "Practice storytelling and presentation skills"
      ]
    },
    {
      number: "04",
      title: "Professional Communication",
      color: "bg-orange-50",
      textColor: "text-orange-900",
      borderColor: "border-orange-200", 
      points: [
        "Excel in job interviews and meetings",
        "Learn business English vocabulary",
        "Master email and formal communication",
        "Develop leadership communication skills"
      ]
    },
    {
      number: "05",
      title: "Advanced Fluency Techniques",
      color: "bg-pink-50",
      textColor: "text-pink-900",
      borderColor: "border-pink-200",
      points: [
        "Think and speak directly in English",
        "Overcome hesitation and build confidence",
        "Learn advanced conversation techniques",
        "Master public speaking and presentations"
      ]
    }
  ];

  const testimonials = [
    { 
      name: "Priya Sharma", 
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "This course completely transformed my confidence. I can now speak fluently in meetings and presentations.", 
      rating: 5 
    },
    { 
      name: "Rajesh Kumar", 
      role: "Business Analyst",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "The pronunciation training was amazing. My colleagues now compliment my clear English speaking.", 
      rating: 5 
    },
    { 
      name: "Anita Patel", 
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "From hesitant speaker to confident presenter - this course made it possible in just 8 weeks!", 
      rating: 5 
    }
  ];

  const faqs = [
    { q: "Do I need any prior English knowledge?", a: "Basic English knowledge is helpful, but we teach from intermediate to advanced levels. Our course is designed to take you from hesitant speaking to fluent communication." },
    { q: "How long will it take to see results?", a: "Most students see significant improvement in confidence and fluency within 2-3 weeks of consistent practice." },
    { q: "Is this suitable for working professionals?", a: "Absolutely! The course is specifically designed for working professionals who want to excel in their careers through better English communication." },
    { q: "Do I get lifetime access to materials?", a: "You get 1 year of full access to all course materials and live sessions. No refunds are available once enrolled." }
  ];

  return (
    <div className="bg-white relative">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={onBack}
          className="bg-white/90 backdrop-blur-md border border-gray-200 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-white transition-all shadow-lg"
        >
          ← Back to Courses
        </button>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t-4 border-blue-500 z-50 shadow-2xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="hidden sm:block w-16 h-16 rounded-full bg-white overflow-hidden border-2 border-blue-500">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <Mic className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Spoken English Coaching</div>
                <div className="text-gray-300 text-sm">25K+ Students Enrolled</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <div className="text-gray-400 line-through text-sm">₹2999.00</div>
                <div className="text-white font-bold text-2xl">₹499.00</div>
              </div>
              <button 
                onClick={onEnroll}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-indigo-950/95 to-purple-950/95"></div>
        </div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        {/* Glowing Orbs */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Animated Badge Container */}
            <div className="flex flex-wrap items-center gap-3 justify-center mb-8 animate-fadeInUp">
              <div className="group bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-blue-400/50 hover:border-blue-400 transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-blue-500/50">
                <span className="text-white font-semibold text-sm flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
                  Rated 4.8/5
                </span>
              </div>
              <div className="group bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-indigo-400/50 hover:border-indigo-400 transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-indigo-500/50">
                <span className="text-white font-semibold text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-400 animate-pulse" style={{animationDelay: '0.5s'}} />
                  25K+ Students
                </span>
              </div>
              <div className="group bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-purple-400/50 hover:border-purple-400 transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-purple-500/50">
                <span className="text-white font-semibold text-sm flex items-center gap-2">
                  <Mic className="w-4 h-4 text-purple-400 animate-pulse" style={{animationDelay: '1s'}} />
                  Live Practice
                </span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-8 leading-tight text-center animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Speak English with{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 animate-gradient-x">
                  Confidence
                </span>
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 blur-lg opacity-50 animate-gradient-x"></span>
              </span>
              {' '}& Fluency
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-200 mb-12 leading-relaxed text-center max-w-4xl mx-auto animate-fadeInUp backdrop-blur-sm" style={{animationDelay: '0.4s'}}>
              Master professional English communication skills in just 8 weeks with expert coaching and AI-powered practice
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <button 
                onClick={onEnroll}
                className="group relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-110 hover:rotate-1 flex items-center gap-3 shadow-2xl hover:shadow-blue-500/50 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center gap-3">
                  <Volume2 className="w-6 h-6 animate-pulse" />
                  Start Speaking Today
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md px-7 py-4 rounded-2xl border border-green-400/50 shadow-lg hover:shadow-green-500/50 transition-all hover:scale-105 cursor-pointer">
                <div className="relative">
                  <Clock className="w-6 h-6 text-green-300" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                </div>
                <span className="text-white font-bold">Limited Time: Save 83%</span>
              </div>
            </div>
            
            {/* Stats Counter */}
            <div className="flex justify-center gap-12 text-white text-center animate-fadeInUp" style={{animationDelay: '0.8s'}}>
              <div className="group hover:scale-110 transition-transform cursor-pointer">
                <div className="text-5xl font-black mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">8 Weeks</div>
                <div className="text-sm text-gray-300 font-medium">Complete Course</div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-2 rounded-full group-hover:w-20 transition-all"></div>
              </div>
              <div className="w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
              <div className="group hover:scale-110 transition-transform cursor-pointer">
                <div className="text-5xl font-black mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">1 Year</div>
                <div className="text-sm text-gray-300 font-medium">Full Access</div>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-2 rounded-full group-hover:w-20 transition-all"></div>
              </div>
              <div className="w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
              <div className="group hover:scale-110 transition-transform cursor-pointer">
                <div className="text-5xl font-black mb-2 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">No Refund</div>
                <div className="text-sm text-gray-300 font-medium">Policy</div>
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mt-2 rounded-full group-hover:w-20 transition-all"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 animate-float hidden lg:block">
              <Mic className="w-16 h-16 text-blue-400 opacity-20" />
            </div>
            <div className="absolute top-40 right-20 animate-float hidden lg:block" style={{animationDelay: '1s'}}>
              <Globe className="w-20 h-20 text-indigo-400 opacity-20" />
            </div>
            <div className="absolute bottom-40 left-20 animate-float hidden lg:block" style={{animationDelay: '2s'}}>
              <MessageCircle className="w-14 h-14 text-purple-400 opacity-20" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/70 text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-8 h-8 text-white/70" />
          </div>
        </div>

        {/* CSS for Custom Animations */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }
          @keyframes gridMove {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(50px, 50px);
            }
          }
          @keyframes gradient-x {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out forwards;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
          }
        `}</style>
      </section>

      {/* Video Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-blue-200 mb-8 shadow-lg">
                <Play className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700 font-semibold text-sm">🎥 Watch Demo</span>
              </div>
              
              <h2 className="text-6xl sm:text-7xl font-black mb-4 relative">
                <span className="text-gray-900">Transform Your </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Speaking Skills
                </span>
              </h2>
              <p className="text-2xl text-gray-600 font-light">See the difference in just 8 weeks</p>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="relative aspect-video bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent group-hover:from-white/40 transition-all duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative cursor-pointer">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse" />
                    
                    <div className="relative w-28 h-28 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-125 transition-all duration-500 shadow-2xl">
                      <Play className="w-14 h-14 text-white ml-2" fill="white" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent">
                  <div className="flex items-center justify-between text-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span className="font-semibold">Watch Success Stories</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">12:45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto mb-20 text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-blue-200 mb-8 shadow-lg">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700 font-semibold text-sm">🎯 Structured Learning</span>
            </div>

            <h2 className="text-6xl sm:text-7xl font-black mb-8 leading-tight">
              <span className="text-gray-900">What will you </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                master?
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">Comprehensive modules designed for professional English fluency</p>
          </div>

          <div className="max-w-7xl mx-auto space-y-8">
            {curriculum.map((module, idx) => (
              <div 
                key={idx}
                className={`sticky ${idx === 0 ? 'top-24' : idx === 1 ? 'top-32' : idx === 2 ? 'top-40' : idx === 3 ? 'top-48' : 'top-56'} transition-all duration-500 hover:scale-[1.02]`}
                style={{ zIndex: 5 - idx }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-3xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl hover:border-blue-300 hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start gap-8">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                          <span className="text-2xl font-black text-white">{module.number}</span>
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-3xl sm:text-4xl font-black mb-8 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">
                          {module.title}
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {module.points.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-3 group/item">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform shadow-sm">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-gray-700 text-lg leading-relaxed group-hover/item:text-gray-900 transition-colors">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-indigo-200 mb-8 shadow-lg">
                <Star className="w-4 h-4 text-indigo-600 fill-current" />
                <span className="text-gray-700 font-semibold text-sm">✨ Success Stories</span>
              </div>
              
              <h2 className="text-6xl sm:text-7xl font-black mb-8 leading-tight">
                <span className="text-gray-900">Student </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
                  Transformations
                </span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto">Real people, real results in just 8 weeks</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200 via-blue-200 to-purple-200 rounded-3xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="relative">
                          <Star className="w-6 h-6 text-yellow-500 fill-current" />
                        </div>
                      ))}
                    </div>
                    
                    <div className="relative mb-8">
                      <div className="absolute -top-2 -left-2 text-6xl text-indigo-300/40 font-serif">"</div>
                      <p className="text-gray-700 text-lg leading-relaxed italic relative z-10 group-hover:text-gray-900 transition-colors">
                        {testimonial.text}
                      </p>
                      <div className="absolute -bottom-4 -right-2 text-6xl text-indigo-300/40 font-serif rotate-180">"</div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-400 group-hover:border-blue-500 transition-colors shadow-lg">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-300 to-blue-300 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                      </div>
                      <div>
                        <p className="font-bold text-xl text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-blue-600 transition-all">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-blue-200 mb-8 shadow-lg">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700 font-semibold text-sm">❓ Got Questions?</span>
              </div>
              
              <h2 className="text-6xl sm:text-7xl font-black mb-8 leading-tight">
                <span className="text-gray-900">Frequently Asked </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Questions
                </span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">Everything you need to know about the course</p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:border-blue-300 hover:shadow-2xl transition-all duration-500">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === `faq-${idx}` ? null : `faq-${idx}`)}
                      className="w-full px-8 py-8 flex items-center justify-between hover:bg-gray-50/50 transition-colors text-left group/button"
                    >
                      <span className="font-bold text-xl text-gray-900 pr-4 group-hover/button:text-transparent group-hover/button:bg-clip-text group-hover/button:bg-gradient-to-r group-hover/button:from-blue-600 group-hover/button:to-indigo-600 transition-all">
                        {faq.q}
                      </span>
                      <div className="relative">
                        <ChevronDown className={`w-8 h-8 transition-all duration-300 text-blue-600 flex-shrink-0 group-hover/button:text-indigo-600 ${
                          activeAccordion === `faq-${idx}` ? 'rotate-180 scale-110' : ''
                        }`} />
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full blur opacity-0 group-hover/button:opacity-40 transition-opacity duration-300" />
                      </div>
                    </button>
                    
                    {activeAccordion === `faq-${idx}` && (
                      <div className="px-8 pb-8 pt-2 border-t border-gray-200">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 backdrop-blur-sm border border-blue-100">
                          <p className="text-gray-700 text-lg leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-blue-400/50 mb-8 animate-pulse">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              <span className="text-white font-semibold text-sm">🚀 Limited Time Offer</span>
            </div>

            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="text-white">Ready to </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 animate-gradient-x">
                Speak
              </span>
              <br />
              <span className="text-white">Fluently?</span>
            </h2>

            <p className="text-2xl sm:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join <span className="text-cyan-400 font-bold">25,000+</span> professionals who transformed their English speaking skills
            </p>

            <div className="relative inline-block mb-16">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full blur-2xl opacity-50 animate-pulse" />
              <button 
                onClick={onEnroll}
                className="relative group bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white px-16 py-8 rounded-full font-black text-2xl sm:text-3xl transition-all duration-500 hover:scale-110 hover:rotate-1 shadow-2xl overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center gap-4">
                  <span className="animate-bounce">🎯</span>
                  Start Speaking Today
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-black text-cyan-400 mb-2">₹499</div>
                  <div className="text-gray-300 text-sm">One-time Payment</div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-black text-blue-400 mb-2">1 Year</div>
                  <div className="text-gray-300 text-sm">Full Access</div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-red-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-black text-red-400 mb-2">No Refund</div>
                  <div className="text-gray-300 text-sm">Policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-16 border-b border-gray-800">
            <div className="grid lg:grid-cols-4 gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      Spoken English Coaching
                    </h3>
                    <p className="text-gray-400 text-sm">Speak with Confidence</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Empowering professionals to communicate effectively in English with confidence and fluency.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-6 text-cyan-400">Contact</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">@</span>
                    </div>
                    <a href="mailto:support@gyanbridge.in" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      support@gyanbridge.in
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-6 text-blue-400">Stats</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-black text-cyan-400">25K+</div>
                    <div className="text-gray-400 text-sm">Students Enrolled</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-black text-blue-400">4.8★</div>
                    <div className="text-gray-400 text-sm">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>© 2025 Spoken English Coaching</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <span>All rights reserved</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-400">System Status: </span>
                <span className="text-green-400 font-semibold">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom spacing for sticky CTA */}
      <div className="h-20"></div>
    </div>
  );
};

export default SpokenEnglishLanding;