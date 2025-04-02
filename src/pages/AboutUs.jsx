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
    <section className="bg-black py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
      <h2 className="mb-8 lg:mb-16 text-6xl font-extrabold tracking-tight leading-tight text-center text-white md:text-6xl">
        Contact Us
      </h2>

      <div className="flex justify-center gap-6 sm:gap-12 md:gap-6 lg:gap-6">
        {/* Facebook */}
        <a
          href="https://web.facebook.com/horn.bunlong.71"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>

        {/* Gmail */}
        <a
          href="mailto:hornbunlong0@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/veus_01/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/long_web"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>
      </div>
    </section>
  );
}
