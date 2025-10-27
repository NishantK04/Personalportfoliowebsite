import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
              NK
            </div>
            <span>Nishant Kumar</span>
          </div>

          <div className="text-center text-gray-400">
            <p className="flex items-center gap-2 flex-wrap justify-center">
              © 2025 Nishant Kumar • Designed & Built with
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              by Nishant Kumar
            </p>
          </div>

          <div className="text-gray-400 text-sm">
            <p>Android & Backend Developer</p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg z-50 p-0"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </footer>
  );
}
