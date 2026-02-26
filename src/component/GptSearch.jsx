import React from "react";
import { BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import Footer from "./Footer";

function GptSearch() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_IMG}
          alt="background"
        />
      </div>

      {/* Main Content */}
      <main className="flex-grow w-full px-4 sm:px-6 md:px-10 lg:px-16 py-6">
        <div className="max-w-7xl mx-auto">
          <GptSearchBar />
          <GptMovieSuggestion />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default GptSearch;
