// import React, { useState, useEffect } from 'react';
// import { 
//   Music, BookOpen, Sparkles, Video, TrendingUp, Brain, 
//   CheckCircle, Star, Play, ChevronDown, Download, 
//   Mail, Phone, User, ArrowRight, Check, Award, Clock, Users
// } from 'lucide-react';

// // Landing Page Component
// const LandingPage = ({ onEnroll }) => {
//   const [activeAccordion, setActiveAccordion] = useState(null);
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[data-animate]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const features = [
//     { icon: BookOpen, title: "Biblical Script Writing", desc: "Convert Bible verses into powerful scripts and stories" },
//     { icon: Music, title: "Christian Music Composition", desc: "Learn melody, rhythm, and worship song structure" },
//     { icon: Brain, title: "AI-Powered Ministry", desc: "Use AI tools for script writing and content creation" },
//     { icon: TrendingUp, title: "Social Media Ministry", desc: "Grow your Christian pages across all platforms" }
//   ];

//   const curriculum = [
//     {
//       title: "Christian Script Writing Fundamentals",
//       points: [
//         "How to write Christian scripts for songs and ministry content",
//         "Converting Bible verses into powerful scripts and stories",
//         "Biblical meditation and Word application in daily life",
//         "Writing meaningful Christian dialogues and messages"
//       ]
//     },
//     {
//       title: "Christian Music & Worship",
//       points: [
//         "Composing Christian music – melody, rhythm, and structure",
//         "Writing and singing worship songs and Sarana songs",
//         "Combining Scripture, music, and storytelling effectively",
//         "Lyrics with depth and theological precision"
//       ]
//     },
//     {
//       title: "AI Tools for Christian Creativity",
//       points: [
//         "Using AI for script writing and music composition",
//         "AI-powered lyrics improvement and idea generation",
//         "Creating Christian content for videos, reels, and posts",
//         "Structuring ministry content with AI assistance"
//       ]
//     },
//     {
//       title: "Social Media Ministry",
//       points: [
//         "Posting on YouTube, Instagram, Facebook, and more",
//         "Writing captions and designing posts with AI",
//         "Scheduling and managing content strategically",
//         "Growing your Christian pages and ministry reach"
//       ]
//     },
//     {
//       title: "Professional Application",
//       points: [
//         "Using skills for job and professional growth",
//         "Real-time work scenarios and applications",
//         "Step-by-step teaching from basic to advanced",
//         "No prior technical knowledge required"
//       ]
//     }
//   ];

//   const testimonials = [
//     { name: "Sarah Johnson", role: "Worship Leader", text: "This course transformed how I write worship songs. The biblical depth combined with practical techniques is unmatched.", rating: 5 },
//     { name: "David Martinez", role: "Ministry Content Creator", text: "Learning to use AI for Christian content creation has multiplied my ministry's reach. Highly recommended!", rating: 5 },
//     { name: "Grace Emmanuel", role: "Church Drama Director", text: "The scriptwriting techniques helped me create powerful ministry dramas that truly touch hearts.", rating: 5 }
//   ];

//   const faqs = [
//     { q: "Do I need any prior writing or music experience?", a: "No! We teach from scratch. Whether you're a complete beginner or have some experience, this course is designed to meet you where you are." },
//     { q: "How long do I have access to the course?", a: "You get 2 years of full access to all course materials, including 104 live sessions with instructor support." },
//     { q: "What if I'm not satisfied with the course?", a: "We offer a 7-day risk-free refund policy. If you're not satisfied, we'll refund your full payment." },
//     { q: "Can I use these skills professionally?", a: "Absolutely! Many students use these skills for church ministry, freelance work, and professional content creation roles." },
//     { q: "Do I need expensive software or equipment?", a: "No. We'll show you how to use free and affordable tools. All you need is a computer and internet connection." }
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white min-h-screen flex items-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bS0yIDJ2LTJoLTJ2Mmgyem0wLTJ2LTJoMnYyaC0yem0wIDZ2LTJoLTJ2Mmgyem00LTJoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0tNi00di0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center" id="hero" data-animate>
//             <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//                 <Award className="w-4 h-4 text-yellow-400" />
//                 <span className="text-sm font-medium">Christian Ministry · Masterclass</span>
//               </div>
              
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                 Master Christian Script Writing & Creative Ministry
//               </h1>
              
//               <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
//                 Unlock your creative voice and learn to write content that resonates with the heart of God
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//                 <button 
//                   onClick={onEnroll}
//                   className="group bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
//                 >
//                   Enroll Now ₹2,999
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <div className="flex items-center gap-2 text-yellow-400">
//                   <Clock className="w-5 h-5" />
//                   <span className="font-medium">Limited Time Offer</span>
//                 </div>
//               </div>
              
//               <div className="flex flex-wrap justify-center gap-8 text-sm">
//                 <div className="flex items-center gap-2">
//                   <Users className="w-5 h-5 text-blue-400" />
//                   <span>1000+ Students</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Star className="w-5 h-5 text-yellow-400 fill-current" />
//                   <span>4.9/5 Rating</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <CheckCircle className="w-5 h-5 text-green-400" />
//                   <span>7-Day Refund</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-gray-50" id="features" data-animate>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`transition-all duration-1000 delay-200 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">What Makes This Course Special</h2>
//             <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
//               Bridge the gap between inspiration and professional execution with Spirit-led creativity
//             </p>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//               {features.map((feature, idx) => (
//                 <div 
//                   key={idx}
//                   className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
//                 >
//                   <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                     <feature.icon className="w-7 h-7 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
//                   <p className="text-gray-600">{feature.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Course Description */}
//       <section className="py-20 bg-white" id="description" data-animate>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible.description ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
//               <h2 className="text-3xl font-bold mb-6 text-gray-900">Write Content That Glorifies God</h2>
//               <div className="prose prose-lg max-w-none text-gray-700">
//                 <p className="mb-4">
//                   Are you called to write music that stirs the soul or scripts that bring the Word to life? Our Christian Script Writing & Creative Ministry Class is designed for aspiring songwriters, worship leaders, and ministry creatives who want to bridge the gap between inspiration and professional execution.
//                 </p>
//                 <p className="mb-4">
//                   In this course, you will dive deep into the craft of <strong>writing songs that glorify God</strong>. We go beyond just rhyming—we explore the theological depth, emotional honesty, and structural precision required for modern worship and gospel music.
//                 </p>
//                 <p>
//                   Whether you're writing for a congregation of thousands or a small house ministry, this class will provide the tools you need to communicate the Gospel through art.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Video Section */}
//       <section className="py-20 bg-gray-900 text-white" id="video" data-animate>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-400 ${isVisible.video ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
//             <h2 className="text-4xl font-bold text-center mb-12">Watch the Masterclass Preview</h2>
//             <div className="relative aspect-video bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
//                   <Play className="w-10 h-10 text-white ml-1" fill="white" />
//                 </div>
//               </div>
//               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Curriculum */}
//       <section className="py-20 bg-white" id="curriculum" data-animate>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible.curriculum ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">What You Will Learn</h2>
//             <p className="text-xl text-center text-gray-600 mb-12">
//               Comprehensive curriculum from basic to advanced level
//             </p>
            
//             <div className="space-y-4">
//               {curriculum.map((module, idx) => (
//                 <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
//                   <button
//                     onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
//                     className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-100 transition-colors"
//                   >
//                     <span className="font-semibold text-lg text-left text-gray-900">{module.title}</span>
//                     <ChevronDown className={`w-5 h-5 transition-transform text-gray-600 ${activeAccordion === idx ? 'rotate-180' : ''}`} />
//                   </button>
//                   {activeAccordion === idx && (
//                     <div className="px-6 pb-5 pt-2">
//                       <ul className="space-y-3">
//                         {module.points.map((point, pIdx) => (
//                           <li key={pIdx} className="flex items-start gap-3 text-gray-700">
//                             <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
//                             <span>{point}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pricing */}
//       <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white" id="pricing" data-animate>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`max-w-lg mx-auto transition-all duration-1000 delay-600 ${isVisible.pricing ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
//             <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
//               <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-xl">
//                 Limited Offer
//               </div>
              
//               <h3 className="text-3xl font-bold mb-6 mt-4">Complete Masterclass Access</h3>
              
//               <div className="mb-6">
//                 <div className="flex items-baseline gap-3">
//                   <span className="text-5xl font-bold text-red-500">₹999</span>
//                   <span className="text-2xl text-gray-400 line-through">₹2,999</span>
//                 </div>
//                 <p className="text-sm text-gray-600 mt-2">One-time payment • Lifetime access</p>
//               </div>
              
//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-start gap-3">
//                   <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
//                   <span>104 Live Sessions with Instructor</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
//                   <span>2 Years Course Validity</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
//                   <span>7-Day Risk Free Refund Policy</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
//                   <span>Certificate of Completion</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
//                   <span>Community Access & Support</span>
//                 </li>
//               </ul>
              
//               <button 
//                 onClick={onEnroll}
//                 className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
//               >
//                 Enroll Now
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-gray-50" id="testimonials" data-animate>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-700 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Student Testimonials</h2>
//             <p className="text-xl text-center text-gray-600 mb-12">See how this course transformed their ministry</p>
            
//             <div className="grid md:grid-cols-3 gap-8">
//               {testimonials.map((testimonial, idx) => (
//                 <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
//                   <div className="flex gap-1 mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                   <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
//                   <div>
//                     <p className="font-semibold text-gray-900">{testimonial.name}</p>
//                     <p className="text-sm text-gray-600">{testimonial.role}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-20 bg-white" id="faq" data-animate>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-800 ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
            
//             <div className="space-y-4">
//               {faqs.map((faq, idx) => (
//                 <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
//                   <button
//                     onClick={() => setActiveAccordion(activeAccordion === `faq-${idx}` ? null : `faq-${idx}`)}
//                     className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-100 transition-colors text-left"
//                   >
//                     <span className="font-semibold text-gray-900">{faq.q}</span>
//                     <ChevronDown className={`w-5 h-5 transition-transform text-gray-600 flex-shrink-0 ml-4 ${activeAccordion === `faq-${idx}` ? 'rotate-180' : ''}`} />
//                   </button>
//                   {activeAccordion === `faq-${idx}` && (
//                     <div className="px-6 pb-5 pt-2">
//                       <p className="text-gray-700">{faq.a}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
//             <p className="text-gray-400 mb-6">
//               Stuck somewhere? We'd love to help you. Send us a message at{' '}
//               <a href="mailto:support@christianmasterclass.com" className="text-red-400 hover:text-red-300">
//                 support@christianmasterclass.com
//               </a>
//               {' '}and we'll respond as soon as possible.
//             </p>
//             <p className="text-sm text-gray-500">
//               © 2025 Christian Script Writing Masterclass. All rights reserved
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;


import React, { useState, useEffect } from 'react';
import { 
  Music, BookOpen, Sparkles, Video, TrendingUp, Brain, 
  CheckCircle, Star, Play, ChevronDown, Download, 
  Mail, Phone, User, ArrowRight, Check, Award, Clock, Users
} from 'lucide-react';

const LandingPage = ({ onEnroll, onBack }) => {
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
      title: "Christian Script Writing Fundamentals",
      color: "bg-pink-50",
      textColor: "text-pink-900",
      borderColor: "border-pink-200",
      points: [
        "How to write Christian scripts for songs and ministry content",
        "Converting Bible verses into powerful scripts and stories",
        "Biblical meditation and Word application in daily life",
        "Writing meaningful Christian dialogues and messages"
      ]
    },
    {
      number: "02",
      title: "Christian Music & Worship",
      color: "bg-green-50",
      textColor: "text-green-900",
      borderColor: "border-green-200",
      points: [
        "Composing Christian music – melody, rhythm, and structure",
        "Writing and singing worship songs and Sarana songs",
        "Combining Scripture, music, and storytelling effectively",
        "Lyrics with depth and theological precision"
      ]
    },
    {
      number: "03",
      title: "AI Tools for Christian Creativity",
      color: "bg-blue-50",
      textColor: "text-blue-900",
      borderColor: "border-blue-200",
      points: [
        "Using AI for script writing and music composition",
        "AI-powered lyrics improvement and idea generation",
        "Creating Christian content for videos, reels, and posts",
        "Structuring ministry content with AI assistance"
      ]
    },
    {
      number: "04",
      title: "Social Media Ministry",
      color: "bg-orange-50",
      textColor: "text-orange-900",
      borderColor: "border-orange-200",
      points: [
        "Posting on YouTube, Instagram, Facebook, and more",
        "Writing captions and designing posts with AI",
        "Scheduling and managing content strategically",
        "Growing your Christian pages and ministry reach"
      ]
    },
    {
      number: "05",
      title: "Professional Application",
      color: "bg-purple-50",
      textColor: "text-purple-900",
      borderColor: "border-purple-200",
      points: [
        "Using skills for job and professional growth",
        "Real-time work scenarios and applications",
        "Step-by-step teaching from basic to advanced",
        "No prior technical knowledge required"
      ]
    }
  ];

  const testimonials = [
    { 
      name: "Sarah Johnson", 
      role: "Worship Leader",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      text: "This course transformed how I write worship songs. The biblical depth combined with practical techniques is unmatched.", 
      rating: 5 
    },
    { 
      name: "David Martinez", 
      role: "Ministry Content Creator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "Learning to use AI for Christian content creation has multiplied my ministry's reach. Highly recommended!", 
      rating: 5 
    },
    { 
      name: "Grace Emmanuel", 
      role: "Church Drama Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      text: "The scriptwriting techniques helped me create powerful ministry dramas that truly touch hearts.", 
      rating: 5 
    }
  ];

  const faqs = [
    { q: "Do I need any prior writing or music experience?", a: "No! We teach from scratch. Whether you're a complete beginner or have some experience, this course is designed to meet you where you are." },
    { q: "What if I'm not satisfied with the course?", a: "We offer a 7-day risk-free refund policy. If you're not satisfied, we'll refund your full payment." },
    { q: "Can I use these skills professionally?", a: "Absolutely! Many students use these skills for church ministry, freelance work, and professional content creation roles." },
    { q: "Do I need expensive software or equipment?", a: "No. We'll show you how to use free and affordable tools. All you need is a computer and internet connection." }
  ];

  return (
    <div className="bg-white relative">
      {/* Back Button */}
      {onBack && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBack}
            className="bg-white/90 backdrop-blur-md border border-gray-200 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-white transition-all shadow-lg"
          >
            ← Back to Courses
          </button>
        </div>
      )}

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t-4 border-red-500 z-50 shadow-2xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="hidden sm:block w-16 h-16 rounded-full bg-white overflow-hidden border-2 border-red-500">
                <img 
                  src="/public/logo.png" 
                  alt="Instructor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-white font-bold text-lg">GyanBridge - Script Writing Masterclass</div>
                <div className="text-gray-300 text-sm">47K+ Students Enrolled</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <div className="text-gray-400 line-through text-sm">₹1999.00</div>
                <div className="text-white font-bold text-2xl">₹99.00</div>
              </div>
              <button 
                onClick={onEnroll}
                className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="https://cdn.coverr.co/videos/coverr-person-writing-in-a-notebook-6006/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/95 via-purple-950/95 to-pink-950/95"></div>
        </div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Animated Badge Container */}
            <div className="flex flex-wrap items-center gap-3 justify-center mb-8 animate-fadeInUp">
              <div className="group bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-purple-400/50 hover:border-purple-400 transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-purple-500/50">
                <span className="text-white font-semibold text-sm flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
                  Rated 4.9/5
                </span>
              </div>
              <div className="group bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-pink-400/50 hover:border-pink-400 transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-pink-500/50">
                <span className="text-white font-semibold text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-pink-400 animate-pulse" style={{animationDelay: '0.5s'}} />
                  47K+ Students
                </span>
              </div>
              <div className="group bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-indigo-400/50 hover:border-indigo-400 transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-indigo-500/50">
                <span className="text-white font-semibold text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-400 animate-pulse" style={{animationDelay: '1s'}} />
                  Complete Course
                </span>
              </div>
            </div>
            
            {/* Main Heading with Glitch Effect */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-8 leading-tight text-center animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Learn to Write Songs & Scripts That{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 animate-gradient-x">
                  Glorify God
                </span>
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 blur-lg opacity-50 animate-gradient-x"></span>
              </span>
              {' '}with GyanBridge
            </h1>
            
            {/* Subtitle with Typewriter Effect */}
            <p className="text-xl sm:text-2xl text-gray-200 mb-12 leading-relaxed text-center max-w-4xl mx-auto animate-fadeInUp backdrop-blur-sm" style={{animationDelay: '0.4s'}}>
              Master Christian script writing, worship songwriting, and AI-powered ministry content creation in just 8 weeks
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <button 
                onClick={onEnroll}
                className="group relative bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-110 hover:rotate-1 flex items-center gap-3 shadow-2xl hover:shadow-pink-500/50 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center gap-3">
                  <Sparkles className="w-6 h-6 animate-spin" style={{animationDuration: '3s'}} />
                  Start Your Journey
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md px-7 py-4 rounded-2xl border border-yellow-400/50 shadow-lg hover:shadow-yellow-500/50 transition-all hover:scale-105 cursor-pointer">
                <div className="relative">
                  <Clock className="w-6 h-6 text-yellow-300" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                </div>
                <span className="text-white font-bold">Limited Time: Save 95%</span>
              </div>
            </div>
            
            {/* Stats Counter with Animation */}
            <div className="flex justify-center gap-12 text-white text-center animate-fadeInUp" style={{animationDelay: '0.8s'}}>
              <div className="group hover:scale-110 transition-transform cursor-pointer">
                <div className="text-5xl font-black mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">104</div>
                <div className="text-sm text-gray-300 font-medium">Live Sessions</div>
                <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-2 rounded-full group-hover:w-20 transition-all"></div>
              </div>
              <div className="w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
              <div className="group hover:scale-110 transition-transform cursor-pointer">
                <div className="text-5xl font-black mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">2 Years</div>
                <div className="text-sm text-gray-300 font-medium">Full Access</div>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mt-2 rounded-full group-hover:w-20 transition-all"></div>
              </div>
              <div className="w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
              <div className="group hover:scale-110 transition-transform cursor-pointer">
                <div className="text-5xl font-black mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">7 Days</div>
                <div className="text-sm text-gray-300 font-medium">Money Back</div>
                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-2 rounded-full group-hover:w-20 transition-all"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 animate-float hidden lg:block">
              <Music className="w-16 h-16 text-purple-400 opacity-20" />
            </div>
            <div className="absolute top-40 right-20 animate-float hidden lg:block" style={{animationDelay: '1s'}}>
              <BookOpen className="w-20 h-20 text-pink-400 opacity-20" />
            </div>
            <div className="absolute bottom-40 left-20 animate-float hidden lg:block" style={{animationDelay: '2s'}}>
              <Brain className="w-14 h-14 text-indigo-400 opacity-20" />
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
        {/* Light Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-blue-200 mb-8 shadow-lg">
                <Video className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700 font-semibold text-sm">🎥 Watch Preview</span>
              </div>
              
              <h2 className="text-6xl sm:text-7xl font-black mb-4 relative">
                <span className="text-gray-900">a </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                  masterclass
                </span>
              </h2>
              <p className="text-2xl text-gray-600 font-light">on Effective Communication</p>
            </div>
            
            {/* Video Container */}
            <div className="relative group">
              {/* Light Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Video Card */}
              <div className="relative aspect-video bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 backdrop-blur-xl">
                {/* Video Background */}
                <div className="absolute inset-0">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover opacity-40"
                  >
                    <source src="https://cdn.coverr.co/videos/coverr-man-writing-on-a-notebook-5032/1080p.mp4" type="video/mp4" />
                  </video>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent group-hover:from-white/40 transition-all duration-500" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative cursor-pointer">
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse" />
                    
                    {/* Button */}
                    <div className="relative w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-125 transition-all duration-500 shadow-2xl">
                      <Play className="w-14 h-14 text-white ml-2" fill="white" />
                    </div>
                  </div>
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent">
                  <div className="flex items-center justify-between text-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span className="font-semibold">Watch Full Masterclass Preview</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">15:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {/* Students Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500" />
                <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        47,000+
                      </div>
                      <div className="text-gray-600 font-medium mt-1">Students Enrolled</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500" />
                <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Star className="w-10 h-10 text-white fill-current" />
                    </div>
                    <div>
                      <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                        4.9/5
                      </div>
                      <div className="text-gray-600 font-medium mt-1">Average Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      {/* <section className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-white font-medium text-sm">⭐ Rated 4.9/5</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-white font-medium text-sm">🎓 47K+ Students</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-white font-medium text-sm">🎯 104 Live Sessions</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight text-center">
              Learn to Write Songs & Scripts That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Glorify God
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 mb-10 leading-relaxed text-center max-w-3xl mx-auto">
              Master Christian script writing, worship songwriting, and AI-powered ministry content creation in just 8 weeks
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={onEnroll}
                className="group bg-gradient-to-r from-red-500 to-pink-500 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center gap-3"
              >
                Start Your Journey
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                <Clock className="w-5 h-5 text-yellow-300" />
                <span className="text-white font-semibold">Limited Time: Save 50%</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-8 text-white text-center">
              <div>
                <div className="text-3xl font-bold">104</div>
                <div className="text-sm text-gray-300">Live Sessions</div>
              </div>
              <div className="w-px bg-white/30"></div>
              <div>
                <div className="text-3xl font-bold">2 Years</div>
                <div className="text-sm text-gray-300">Full Access</div>
              </div>
              <div className="w-px bg-white/30"></div>
              <div>
                <div className="text-3xl font-bold">7 Days</div>
                <div className="text-sm text-gray-300">Money Back</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section> */}

      {/* Video Section */}
      {/* <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black mb-4 text-gray-900">
                <span className="text-red-500">a</span> masterclass
              </h2>
              <p className="text-xl text-gray-600">on Effective Communication</p>
            </div>
            
            <div className="relative aspect-video bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-125 transition-all duration-300 shadow-2xl">
                  <Play className="w-12 h-12 text-white ml-2" fill="white" />
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-8 bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-red-500" />
                  <div className="text-left">
                    <div className="text-3xl font-bold text-gray-900">47,000+</div>
                    <div className="text-sm text-gray-600">Students Enrolled</div>
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="flex items-center gap-3">
                  <Star className="w-8 h-8 text-yellow-500 fill-current" />
                  <div className="text-left">
                    <div className="text-3xl font-bold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Curriculum Section - Stacking Scroll Effect */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Light Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        </div>

        {/* Floating Light Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${8 + Math.random() * 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 8}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto mb-20 text-center">
            {/* Light Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-blue-200 mb-8 shadow-lg">
              <Brain className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700 font-semibold text-sm">🧠 AI-Powered Curriculum</span>
            </div>

            <h2 className="text-6xl sm:text-7xl font-black mb-8 leading-tight">
              <span className="text-gray-900">What will you </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                learn?
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">Comprehensive modules designed for the future of Christian ministry</p>
          </div>

          <div className="max-w-7xl mx-auto space-y-8">
            {curriculum.map((module, idx) => (
              <div 
                key={idx}
                className={`sticky ${idx === 0 ? 'top-24' : idx === 1 ? 'top-32' : idx === 2 ? 'top-40' : idx === 3 ? 'top-48' : 'top-56'} transition-all duration-500 hover:scale-[1.02]`}
                style={{ zIndex: 5 - idx }}
              >
                <div className="relative group">
                  {/* Light Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 rounded-3xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Main Card */}
                  <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl hover:border-blue-300 hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start gap-8">
                      {/* Module Number */}
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                          <span className="text-2xl font-black text-white">{module.number}</span>
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-blue-300 to-purple-300 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-3xl sm:text-4xl font-black mb-8 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                          {module.title}
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {module.points.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-3 group/item">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform shadow-sm">
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

      {/* Pricing */}
      {/* <section className="py-24 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-5xl font-black mb-4">
              Unlock because just <span className="text-red-500">₹10,000</span>
            </h2>
            <p className="text-xl text-gray-600">One-time investment for lifetime transformation</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-black text-gray-900 mb-2">₹3,999</div>
              <div className="text-sm text-gray-600 mb-4">Basic Access</div>
              <div className="text-sm text-gray-500 line-through">₹10,000</div>
              <button 
                onClick={onEnroll}
                className="mt-6 bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold w-full hover:bg-gray-300 transition-colors"
              >
                Select Plan
              </button>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl p-6 shadow-2xl text-center transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="text-5xl font-black text-white mb-2">₹2,999</div>
              <div className="text-sm text-white/90 mb-4">Premium Package</div>
              <div className="text-sm text-white/70 line-through">₹10,000</div>
              <button 
                onClick={onEnroll}
                className="mt-6 bg-white text-red-500 px-6 py-3 rounded-full font-bold w-full hover:bg-gray-100 transition-colors"
              >
                Enroll Now
              </button>
              <div className="mt-6 space-y-2 text-white text-left text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>104 Live Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>2 Years Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Certificate</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-black text-gray-900 mb-2">₹1,999</div>
              <div className="text-sm text-gray-600 mb-4">Student Plan</div>
              <div className="text-sm text-gray-500 line-through">₹10,000</div>
              <button 
                onClick={onEnroll}
                className="mt-6 bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold w-full hover:bg-gray-300 transition-colors"
              >
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
        {/* Light Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(236,72,153,0.1),transparent_50%)]" />
        </div>

        {/* Floating Light Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-pink-300 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${12 + Math.random() * 18}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 12}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-pink-200 mb-8 shadow-lg">
                <Star className="w-4 h-4 text-pink-600 fill-current" />
                <span className="text-gray-700 font-semibold text-sm">✨ Real Success Stories</span>
              </div>
              
              <h2 className="text-6xl sm:text-7xl font-black mb-8 leading-tight">
                <span className="text-gray-900">Student </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                  Success Stories
                </span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto">Transforming lives through AI-powered Christian education</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="group relative">
                  {/* Light Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 rounded-3xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Main Card */}
                  <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl hover:border-pink-300 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="relative">
                          <Star className="w-6 h-6 text-yellow-500 fill-current" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <div className="relative mb-8">
                      <div className="absolute -top-2 -left-2 text-6xl text-pink-300/40 font-serif">“</div>
                      <p className="text-gray-700 text-lg leading-relaxed italic relative z-10 group-hover:text-gray-900 transition-colors">
                        {testimonial.text}
                      </p>
                      <div className="absolute -bottom-4 -right-2 text-6xl text-pink-300/40 font-serif rotate-180">“</div>
                    </div>
                    
                    {/* Profile */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-400 group-hover:border-purple-500 transition-colors shadow-lg">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                      </div>
                      <div>
                        <p className="font-bold text-xl text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 transition-all">
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
      <section className="py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden">
        {/* Light Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
        </div>

        {/* Light Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-indigo-200 mb-8 shadow-lg">
                <CheckCircle className="w-4 h-4 text-indigo-600" />
                <span className="text-gray-700 font-semibold text-sm">❓ Got Questions?</span>
              </div>
              
              <h2 className="text-6xl sm:text-7xl font-black mb-8 leading-tight">
                <span className="text-gray-900">Frequently Asked </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                  Questions
                </span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">Everything you need to know about the course</p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="group relative">
                  {/* Light Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  {/* Main Card */}
                  <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:border-indigo-300 hover:shadow-2xl transition-all duration-500">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === `faq-${idx}` ? null : `faq-${idx}`)}
                      className="w-full px-8 py-8 flex items-center justify-between hover:bg-gray-50/50 transition-colors text-left group/button"
                    >
                      <span className="font-bold text-xl text-gray-900 pr-4 group-hover/button:text-transparent group-hover/button:bg-clip-text group-hover/button:bg-gradient-to-r group-hover/button:from-indigo-600 group-hover/button:to-purple-600 transition-all">
                        {faq.q}
                      </span>
                      <div className="relative">
                        <ChevronDown className={`w-8 h-8 transition-all duration-300 text-indigo-600 flex-shrink-0 group-hover/button:text-purple-600 ${
                          activeAccordion === `faq-${idx}` ? 'rotate-180 scale-110' : ''
                        }`} />
                        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur opacity-0 group-hover/button:opacity-40 transition-opacity duration-300" />
                      </div>
                    </button>
                    
                    {activeAccordion === `faq-${idx}` && (
                      <div className="px-8 pb-8 pt-2 border-t border-gray-200">
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 backdrop-blur-sm border border-indigo-100">
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
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-indigo-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3),transparent_50%)]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${10 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            animation: 'gridMove 30s linear infinite'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Glowing Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-purple-400/50 mb-8 animate-pulse">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              <span className="text-white font-semibold text-sm">🚀 Limited Time Offer</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="text-white">Ready to </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
                Transform
              </span>
              <br />
              <span className="text-white">Your Ministry?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join <span className="text-cyan-400 font-bold">47,000+</span> students creating powerful Christian content with AI
            </p>

            {/* CTA Button */}
            <div className="relative inline-block mb-16">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse" />
              <button 
                onClick={onEnroll}
                className="relative group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-16 py-8 rounded-full font-black text-2xl sm:text-3xl transition-all duration-500 hover:scale-110 hover:rotate-1 shadow-2xl overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center gap-4">
                  <span className="animate-bounce">🎯</span>
                  Start Your Journey
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-black text-cyan-400 mb-2">₹99</div>
                  <div className="text-gray-300 text-sm">One-time Payment</div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-black text-purple-400 mb-2">2 Years</div>
                  <div className="text-gray-300 text-sm">Full Access</div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-black text-pink-400 mb-2">8 Weeks</div>
                  <div className="text-gray-300 text-sm">Live Sessions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.1),transparent_70%)]" />
        </div>

        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <defs>
              <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20h40M20 0v40M10 10h20v20h-20z" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="py-16 border-b border-gray-800">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      GyanBridge
                    </h3>
                    <p className="text-gray-400 text-sm">Future of Christian Education</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Empowering the next generation of Christian content creators with AI-powered tools and biblical wisdom.
                </p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-purple-500/20 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">t</span>
                  </div>
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-pink-500/20 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">in</span>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-cyan-400">Get in Touch</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <a href="mailto:support@gyanbridge.in" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      support@gyanbridge.in
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <a href="tel:+919137023462" className="text-gray-300 hover:text-purple-400 transition-colors">
                      +91 91370 23462
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-purple-400">Impact</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-black text-cyan-400">47K+</div>
                    <div className="text-gray-400 text-sm">Students Enrolled</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-black text-purple-400">4.9★</div>
                    <div className="text-gray-400 text-sm">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>© 2025 GyanBridge</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <span>All rights reserved</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <span className="text-cyan-400">Powered by AI</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-400">System Status: </span>
                <span className="text-green-400 font-semibold">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </footer>

      {/* Bottom spacing for sticky CTA */}
      <div className="h-20"></div>
    </div>
  );
};

export default LandingPage;