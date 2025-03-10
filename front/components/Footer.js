"use client";

import Link from 'next/link';
import {Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-950">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-semibold text-xl">Zen Shiatsu</span>
            </div>
            <p className="text-gray-800 mb-6">
            Dedicado a restaurar el equilibrio y la armonía a través del antiguo arte de la terapia Zen Shiatsu, ayudándole a reconectarse con las capacidades curativas naturales de su cuerpo.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-800 hover:text-gray-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-800 hover:text-gray-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-800 hover:text-gray-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-800 hover:text-gray-500 transition-colors">
                  Nuestros Servicios
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-800 hover:text-gray-500 transition-colors">
                  Blog y Artículos
                </Link>
              </li>
              <li>
                <Link href="#store" className="text-gray-800 hover:text-gray-500 transition-colors">
                  Productos Digitales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-gray-500 transition-colors">
                  Sobre Zen Shiatsu
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-gray-500 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800">
                  Calle 1, Barrio 2<br />
                  Salta, Argentina
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="text-gray-800">(03) 03 03 456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="text-gray-800">escueladevidazen@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Suscríbete a nuestro boletín informativo</h3>
            <p className="text-gray-800 mb-4">
            Suscríbete para recibir consejos de bienestar, ofertas especiales y actualizaciones sobre nuevos servicios.
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-transparent backdrop-blur-md border-2 border-gray-800 text-gray-900 px-6 py-1 rounded-md hover:bg-white/10 focus:outline-none focus:border-gray-600"
              />
              <button className="w-full bg-transparent backdrop-blur-md border-2 border-gray-800 text-gray-900 px-6 py-1 rounded-md hover:bg-gray-400 transition-all duration-300">
                Subscribir
              </button>
            </div>
          </div>
        </div>
        
        {/* <Separator className="my-8 bg-white/20" /> */}
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700/70 text-sm mt-4">
            © {new Date().getFullYear()} Zen Shiatsu. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-700 hover:text-gray-500 text-sm">
              Políticas de Privacidad
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-500 text-sm">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}