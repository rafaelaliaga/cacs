


import React, { useState } from "react";
import cacsLogo from '/public/cacs-logo.svg'
import { Link } from "react-router-dom";
import { INSTAGRAM_ACCOUNT } from "@/constants/urls";


// Links do menu facilmente editáveis!
const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "O Evento", href: "/event" }, 
  { label: "Apresentação", href: "/apresentation" },
  { label: "Programação", href: "/cronogram" },
  { label: "Inscrições", href: "/subscription" },
  { label: "Trabalhos", href: "/working" },
  { label: "Local", href: "/place" },
  { label: "Contato", href: "/contact" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  const subscriptionLink =
    NAV_LINKS.find(l => l.label === "Inscrições")?.href || "/subscription";

  return (
    <>
      {/* Top bar */}
      <div className="bg-red-700 text-white text-xs py-1 px-10 flex justify-evenly items-center ">
        <div className="flex gap-10 justify-around">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1l-10 7L2 5Z"/><path d="M2 6.5V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.5l-10 7Z"/></svg>
            cacsfamerp@gmail.com
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 16.92v3a1.88 1.88 0 0 1-2.05 1.87 18.6 18.6 0 0 1-8.12-2.88A18.18 18.18 0 0 1 3.09 10.2 18.6 18.6 0 0 1 .21 2.05 1.88 1.88 0 0 1 2.07 0h3A2 2 0 0 1 7 1.72a12.57 12.57 0 0 0 .73 2.77 2 2 0 0 1-.45 2l-1.27 1.28a15.09 15.09 0 0 0 6.62 6.62l1.28-1.28a2 2 0 0 1 2-.45 12.57 12.57 0 0 0 2.77.73A2 2 0 0 1 22 16.92Z"/></svg>
            (35) 9722-7825
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <a href="#">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-3.33 0-10 1.67-10 5v1h20v-1c0-3.33-6.67-5-10-5Z"/>
            </svg>
            Área do Congressista</a>
          <button aria-label="Buscar">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <a href={INSTAGRAM_ACCOUNT} target="_blank" aria-label="Instagram">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5Zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5Zm5-11.75a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 17 4.75Z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Navbar */}
      <nav className="sticky top-0 bg-red-900 text-white z-40 shadow">
        <div className="max-w-6xl mx-auto px-4 flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src={cacsLogo} alt="Cacs" className="h-10 w-10 rounded-full"/>
          </a>
          {/* Links desktop */}
          <ul className="hidden md:flex gap-8 text-sm font-medium items-center flex-1 justify-center">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="hover:text-sky-300 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {/* Botão inscrever-se */}
          <a href={subscriptionLink} className="hidden md:inline-block bg-gray-700 hover:bg-black px-6 py-2 rounded-full font-semibold text-white ml-4 transition">
            Inscreva-se
            <svg className="inline w-4 h-4 ml-1 -mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0-4 4m4-4H3"/>
            </svg>
          </a>
          {/* Menu Mobile */}
          <button
            className="md:hidden w-10 h-10 grid place-content-center text-white"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {/* Hamburger */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Overlay Mobile */}
        <div
          className={`fixed inset-0 bg-red-900 bg-opacity-95 text-white flex flex-col items-center justify-center gap-8 text-xl font-semibold z-40 transition-all ${
            open ? "" : "hidden"
          }`}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 grid place-content-center"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="text-xl" onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={subscriptionLink} 
            className="bg-gred-700 hover:bg-black text-white font-semibold px-8 py-3 rounded-full transition"
            onClick={() => setOpen(false)}
          >
            Inscreva-se
          </a>
        </div>
      </nav>
    </>
  );
}
