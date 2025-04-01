import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutUs() {
  return (
    <section class="bg-black">
      <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 ">
      <h2 class="mb-8 lg:mb-16 text-6xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-6xl mr-7">
  Contact Us
</h2>

        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400 ml-72">
          <div className="flex justify-center gap-6 ml-80">
      {/* Facebook */}
      <a href="https://web.facebook.com/horn.bunlong.71" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      
      {/* Gmail */}
      <a href="mailto:hornbunlong0@gmail.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>
      
      {/* Instagram */}
      <a href="https://www.instagram.com/veus_01/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      
      {/* Telegram */}
      <a href="https://t.me/long_web" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </a>
    </div>
        </div>
      </div>
    </section>
  );
}
