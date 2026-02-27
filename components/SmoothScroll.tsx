"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        e.preventDefault();
        const id = target.hash.slice(1);
        const element = document.getElementById(id);
        
        if (element) {
          const offset = 80;
          const elementPosition = element.offsetTop - offset;
          
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth"
          });
          
          // Update URL without hash
          const newUrl = id === "home" ? "/" : `/${id}`;
          window.history.pushState({}, "", newUrl);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Handle initial load with path
  useEffect(() => {
    const path = window.location.pathname.slice(1);
    if (path) {
      const element = document.getElementById(path);
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, []);

  return null;
}
