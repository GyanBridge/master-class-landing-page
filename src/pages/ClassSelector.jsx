import React from 'react';
import { BookOpen, Mic, ArrowRight, Star, Users, Clock } from 'lucide-react';

const ClassSelector = ({ onSelectClass }) => {
  const classes = [
    {
      id: 'script-writing',
      title: 'Christian Script Writing',
      subtitle: 'Master the Art of Biblical Storytelling',
      price: 99,
      originalPrice: 1999,
      description: 'Learn to write powerful Christian scripts, worship songs, and ministry content with AI tools',
      features: [
        'Biblical Script Writing Fundamentals',
        'Christian Music & Worship Creation',
        'AI Tools for Ministry Content',
        'Social Media Ministry Growth'
      ],
      icon: BookOpen,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      students: '47K+',
      rating: '4.9'
    },
    {
      id: 'spoken-english',
      title: 'Spoken English Coaching',
      subtitle: 'Speak English with Confidence',
      price: 499,
      originalPrice: 2999,
      description: 'Master fluent English speaking, pronunciation, and communication skills for professional growth',
      features: [
        'Pronunciation & Accent Training',
        'Grammar & Vocabulary Building',
        'Conversation & Interview Skills',
        'Professional Communication'
      ],
      icon: Mic,
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50',
      students: '25K+',
      rating: '4.8'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-blue-200 mb-8 shadow-lg">
            <Star className="w-4 h-4 text-blue-600 fill-current" />
            <span className="text-gray-700 font-semibold text-sm">🎓 Choose Your Learning Path</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            <span className="text-gray-900">Select Your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Masterclass
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your skills with our expert-led courses designed for real-world success
          </p>
        </div>

        {/* Class Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {classes.map((classItem) => (
            <div key={classItem.id} className="group relative">
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${classItem.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Main Card */}
              <div className={`relative bg-gradient-to-br ${classItem.bgGradient} border border-gray-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${classItem.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <classItem.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-600">{classItem.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-600">{classItem.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{classItem.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">{classItem.subtitle}</p>
                  <p className="text-gray-700 leading-relaxed mb-6">{classItem.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {classItem.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${classItem.gradient} flex items-center justify-center flex-shrink-0`}>
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${classItem.gradient}`}>
                      ₹{classItem.price}
                    </span>
                    <span className="text-xl text-gray-400 line-through">₹{classItem.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Limited time offer</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectClass(classItem.id)}
                  className={`w-full bg-gradient-to-r ${classItem.gradient} text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 group/btn`}
                >
                  <span>Choose This Course</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl border border-gray-200 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-700 font-medium">7-Day Money Back Guarantee</span>
            </div>
            <div className="w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-gray-700 font-medium">Lifetime Access</span>
            </div>
            <div className="w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-gray-700 font-medium">Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSelector;