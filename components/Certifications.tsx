"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const certifications = [
  {
    image: "/certifications/aws/AWS Certified DevOps Engineer - Professional certificate.jpg",
    title: "AWS Certified DevOps Engineer - Professional",
  },
  {
    image: "/certifications/aws/AWS Certified SysOps Administrator - Associate certificate.jpg",
    title: "AWS Certified SysOps Administrator - Associate",
  },
  {
    image: "/certifications/aws/AWS Certified Cloud Practitioner certificate.jpg",
    title: "AWS Certified Cloud Practitioner",
  },
  {
    image: "/certifications/gcp/ProfessionalCloudArchitect.jpg",
    title: "Google Cloud Professional Cloud Architect",
  },
  {
    image: "/certifications/gcp/ProfessionalCloudSecurityEngineer.jpg",
    title: "Google Cloud Professional Cloud Security Engineer",
  },
  {
    image: "/certifications/gcp/ProfessionalCloudDevOpsEngineer.jpg",
    title: "Google Cloud Professional Cloud DevOps Engineer",
  },
  {
    image: "/certifications/gcp/ProfessionalCloudNetworkEngineer.jpg",
    title: "Google Cloud Professional Cloud Network Engineer",
  },
  {
    image: "/certifications/alibaba/ACP Cloud Security.png",
    title: "Alibaba Cloud Professional - Cloud Security",
  },
  {
    image: "/certifications/alibaba/ACA Security.png",
    title: "Alibaba Cloud Associate - Security",
  },
  {
    image: "/certifications/alibaba/ACA Cloud Computing.png",
    title: "Alibaba Cloud Associate - Cloud Computing",
  },
  {
    image: "/certifications/alibaba/ACA Cloud Native.png",
    title: "Alibaba Cloud Associate - Cloud Native",
  },
  {
    image: "/certifications/alibaba/ACA SysOps.png",
    title: "Alibaba Cloud Associate - SysOps",
  },
  {
    image: "/certifications/alibaba/ACA developer.png",
    title: "Alibaba Cloud Associate - Developer",
  },
  {
    image: "/certifications/alibaba/ACA Database.png",
    title: "Alibaba Cloud Associate - Database",
  },
  {
    image: "/certifications/alibaba/ACA big data.png",
    title: "Alibaba Cloud Associate - Big Data",
  },
  {
    image: "/certifications/alibaba/ACA Business User.png",
    title: "Alibaba Cloud Associate - Business User",
  },
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section id="certifications" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
            Certifications
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
          </h2>
        </ScrollAnimation>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden">
            {/* Carousel Container */}
            <div className="flex items-center justify-center gap-2 md:gap-4">
              {/* Previous Image (Left) - Hidden on mobile */}
              <div 
                className={`hidden md:block w-1/4 opacity-40 hover:opacity-60 transition-all duration-500 cursor-pointer ${
                  isTransitioning ? 'translate-x-8' : 'translate-x-0'
                }`}
                onClick={handlePrev}
              >
                <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-md">
                  <Image
                    src={certifications[(currentIndex - 1 + certifications.length) % certifications.length].image}
                    alt="Previous certification"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Current Image (Center) */}
              <div className={`w-full md:w-1/2 transition-all duration-500 ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}>
                <div className="relative aspect-[4/3] mb-3 md:mb-4 rounded-[20px] overflow-hidden shadow-lg">
                  <Image
                    src={certifications[currentIndex].image}
                    alt={certifications[currentIndex].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Next Image (Right) - Hidden on mobile */}
              <div 
                className={`hidden md:block w-1/4 opacity-40 hover:opacity-60 transition-all duration-500 cursor-pointer ${
                  isTransitioning ? '-translate-x-8' : 'translate-x-0'
                }`}
                onClick={handleNext}
              >
                <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-md">
                  <Image
                    src={certifications[(currentIndex + 1) % certifications.length].image}
                    alt="Next certification"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Certification Title */}
            <div className={`text-center mb-4 md:mb-6 mt-3 md:mt-4 transition-all duration-500 px-4 ${
              isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}>
              <h3 className="text-base md:text-xl font-bold text-slate-900">
                {certifications[currentIndex].title}
              </h3>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2">
              {(() => {
                const totalCerts = certifications.length;
                const maxDots = 5;
                
                // If total certs <= 5, show all dots
                if (totalCerts <= maxDots) {
                  return certifications.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setCurrentIndex(index);
                          setIsTransitioning(false);
                        }, 300);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-blue-600 w-6" : "bg-slate-300"
                      }`}
                      aria-label={`Go to certification ${index + 1}`}
                    />
                  ));
                }
                
                // If total certs > 5, show sliding window
                let startIndex = 0;
                let activePosition = currentIndex;
                
                // Keep active dot at position 3 (index 3) when possible
                if (currentIndex >= 3 && currentIndex < totalCerts - 2) {
                  startIndex = currentIndex - 3;
                  activePosition = 3;
                } else if (currentIndex >= totalCerts - 2) {
                  // Last 2 items: show last 5 dots
                  startIndex = totalCerts - maxDots;
                  activePosition = currentIndex - startIndex;
                } else {
                  // First 3 items: show first 5 dots
                  startIndex = 0;
                  activePosition = currentIndex;
                }
                
                const visibleDots = [];
                for (let i = 0; i < maxDots; i++) {
                  const certIndex = startIndex + i;
                  const isActive = i === activePosition;
                  
                  // Calculate opacity based on distance from active
                  let opacity = "bg-slate-300";
                  const distance = Math.abs(i - activePosition);
                  
                  if (isActive) {
                    opacity = "bg-blue-600";
                  } else if (distance === 1) {
                    opacity = "bg-slate-400";
                  } else if (distance === 2) {
                    opacity = "bg-slate-300 opacity-70";
                  } else {
                    opacity = "bg-slate-300 opacity-50";
                  }
                  
                  visibleDots.push(
                    <button
                      key={certIndex}
                      onClick={() => {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setCurrentIndex(certIndex);
                          setIsTransitioning(false);
                        }, 300);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive ? "bg-blue-600 w-6" : opacity
                      }`}
                      aria-label={`Go to certification ${certIndex + 1}`}
                    />
                  );
                }
                
                return visibleDots;
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
