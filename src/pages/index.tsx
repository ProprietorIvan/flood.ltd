import ComparisonSection from '@/components/ComparisonSection';
import FAQ from '@/components/FAQ';
import Navigation from '@/components/Navigation';
import StepsSection from '@/components/StepsSection';
import { Droplets, Phone, Mail, ArrowRight, Waves, Shield, Clock } from 'lucide-react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

const Home = () => {
  const router = useRouter();

  const seoTitle = "Flood Restoration Toronto | 24/7 Emergency Water Damage Services";
  const seoDescription = "Toronto's premier flood restoration experts. 24/7 emergency response, professional water damage repair & restoration across GTA. IICRC certified team. Call (647) 361-0663.";

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+1 (647) 361-0663';
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:office@flood.ltd';
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://flood.ltd" />
        
        {/* OpenGraph / Social Media */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:url" content="https://flood.ltd" />
        <meta property="og:site_name" content="Flood Ltd." />
        <meta property="og:image" content="https://flood.ltd/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Professional Flood Restoration Toronto" />

        {/* Keywords */}
        <meta name="keywords" content="flood restoration toronto, water damage toronto, emergency flood services gta, flood cleanup toronto, water damage repair, basement flood toronto, commercial water damage, residential flood restoration" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        
        {/* Language */}
        <link rel="alternate" hrefLang="en-CA" href="https://flood.ltd" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            "name": "Flood Ltd.",
            "image": "https://flood.ltd/og-image.jpg",
            "telephone": "+1-647-361-0663",
            "email": "office@flood.ltd",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toronto",
              "addressRegion": "ON",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.653226",
              "longitude": "-79.383184"
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "43.653226",
                "longitude": "-79.383184"
              },
              "geoRadius": "50000"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceType": "Emergency Service",
              "availableLanguage": ["English"]
            }
          })}
        </script>
      </Head>

      <Navigation showActions={false} />

      {/* Hero Section - Split Design with Diagonal */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#8B2635] transform -skew-y-6 origin-top-left translate-y-32 lg:-translate-y-24" />
        
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 lg:pr-8">
              <div className="flex items-center space-x-2 mb-6">
                <Waves className="w-5 h-5 text-white animate-bounce" />
                <span className="text-white font-medium">Toronto&apos;s Water Warriors</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-6 font-display text-white">
                Flood
                <span className="block text-[#F5F4F0] mt-2">Restoration</span>
              </h1>
              
              <div className="relative">
                <p className="text-xl text-white/90 mb-8 max-w-lg">
                  Where Toronto&apos;s strength meets cutting-edge restoration. 
                  Available 24/7 for your emergency flood response needs.
                </p>
                
                <div className="absolute -left-4 top-0 w-1 h-full bg-white/30" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleEmergencyCall}
                  className="group relative overflow-hidden bg-white text-[#8B2635] px-8 py-4 rounded-full text-lg font-medium transition-transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-stone-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>(647) 361-0663</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
                
                <button
                  onClick={handleEmailContact}
                  className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all hover:border-opacity-50"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>office@flood.ltd</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0">
              <div className="relative h-96 lg:h-128 w-full">
                <Image
                  src="/photos/homepage/1.jpg"
                  alt="Professional Flood Restoration in Toronto"
                  fill
                  priority
                  className="rounded-3xl object-cover object-center shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 500px, 600px"
                />
                
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20" />
                
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8B2635]/20 via-transparent to-[#8B2635]/20 animate-gradient" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComparisonSection />
      <StepsSection />
      <FAQ />

      {/* Enhanced CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#8B2635]">
          <div className="absolute inset-0 bg-[url('/texture/noise.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B2635] via-[#8B2635] to-black/50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <div className="inline-block animate-float">
            <Droplets className="w-16 h-16 text-white/20 mx-auto mb-8" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Flood Emergency?
            <span className="block mt-2">We&apos;ve Got Your Back</span>
          </h2>
          
          <p className="text-stone-300 mb-12 text-xl max-w-2xl mx-auto">
            Toronto&apos;s most responsive flood restoration team. 
            Fast, professional, and always here when you need us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleEmergencyCall}
              className="group relative overflow-hidden bg-white text-[#8B2635] px-8 py-4 rounded-full text-lg font-medium transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white via-stone-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(647) 361-0663</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <button
              onClick={handleEmailContact}
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all hover:border-opacity-50"
            >
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                <span>office@flood.ltd</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;