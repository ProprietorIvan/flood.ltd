import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { Shield, Clock, Wrench, BadgeCheck, Phone, Star, MapPin, AlertTriangle } from 'lucide-react';

const AboutUs = () => {
  const emergencyStats = [
    {
      number: "60",
      unit: "Minutes",
      label: "Response Time",
      icon: Clock
    },
    {
      number: "24/7",
      unit: "365",
      label: "Emergency Service",
      icon: AlertTriangle
    },
    {
      number: "100%",
      unit: "GTA",
      label: "Coverage",
      icon: MapPin
    }
  ];

  const expertise = [
    {
      title: "Swift Emergency Response",
      description: "When disaster strikes in the GTA, timing is crucial. Our team arrives within 60 minutes, fully equipped to begin water extraction immediately. No delays, no excuses.",
      icon: AlertTriangle,
      highlight: true
    },
    {
      title: "Advanced Equipment",
      description: "Our state-of-the-art Canadian-approved equipment ensures rapid water removal, efficient drying, and superior property protection in Toronto's unique climate.",
      icon: Wrench
    },
    {
      title: "Licensed & Insured",
      description: "Our team is fully licensed in Ontario, certified in water damage restoration, and backed by comprehensive insurance coverage. Your property is protected.",
      icon: Shield
    },
    {
      title: "Clear Communication",
      description: "From initial assessment to final restoration, we provide detailed documentation and continuous updates throughout the entire restoration process.",
      icon: BadgeCheck
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Emergency Focus */}
      <div className="relative bg-[#1C1917] text-white">
        <div className="absolute inset-0">
          <Image
            src="/photos/homepage/1.jpg"
            alt="Toronto Emergency Water Damage Response"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Toronto Trusted
              <span className="text-[#8B2635]"> Emergency Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-8">
              Greater Toronto Area dedicated water damage specialists. Fast response, professional solutions, guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="tel:+1 (647) 361-0663"
                className="inline-flex items-center justify-center gap-2 bg-[#8B2635] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#7A2230] transition-colors text-lg"
              >
                <Phone className="w-6 h-6" />
                Emergency: +1 (647) 361-0663
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-black transition-colors text-lg"
              >
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Response Stats */}
      <div className="bg-[#1C1917]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyStats.map((stat, index) => (
              <div key={index} className="bg-[#2D2D2D] p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <stat.icon className="w-8 h-8 text-[#8B2635]" />
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{stat.number}</span>
                      <span className="text-lg text-stone-400">{stat.unit}</span>
                    </div>
                    <span className="text-stone-400">{stat.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Restoration Team?</h2>
            <div className="w-24 h-1 bg-[#8B2635] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className={`p-8 rounded-xl ${
                  item.highlight 
                    ? 'bg-[#1C1917] text-white' 
                    : 'bg-stone-100'
                }`}
              >
                <div className="flex items-start gap-4">
                  <item.icon className={`w-8 h-8 ${
                    item.highlight ? 'text-[#8B2635]' : 'text-[#1C1917]'
                  }`} />
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      item.highlight ? 'text-white' : 'text-[#1C1917]'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={
                      item.highlight ? 'text-stone-300' : 'text-stone-600'
                    }>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
            <div className="w-24 h-1 bg-[#8B2635] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">How quickly can you respond?</h3>
                <p className="text-stone-600">We guarantee a 60-minute response time for emergency calls throughout the Greater Toronto Area. Our teams are strategically positioned across the GTA for rapid response.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Are you licensed and insured?</h3>
                <p className="text-stone-600">Yes, we are fully licensed in Ontario, our team is certified in water damage restoration, and we maintain comprehensive insurance coverage for your protection.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">What areas do you serve?</h3>
                <p className="text-stone-600">We service the entire Greater Toronto Area 24/7, including Toronto, North York, Scarborough, Etobicoke, Mississauga, and surrounding regions.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">How do you handle emergencies?</h3>
                <p className="text-stone-600">Our emergency protocol includes immediate water extraction, comprehensive damage assessment, and deployment of industrial-grade equipment suited for Toronto climate conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#1C1917] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Toronto 24/7 Emergency Response Team
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link 
              href="tel:+1 (647) 361-0663"
              className="inline-flex items-center gap-2 bg-[#8B2635] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#7A2230] transition-colors group"
            >
              <Phone className="w-6 h-6 group-hover:animate-pulse" />
              Call Now: +1 (647) 361-0663
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-[#1C1917] transition-colors"
            >
              Schedule Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;