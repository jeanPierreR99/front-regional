import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-20">
      <div className="container mx-auto flex justify-around">
        <div className="w-1/3">
          <h4 className="text-lg font-bold mb-4">Información de contacto</h4>
          <p>Dirección: Calle Principal, Ciudad, País</p>
          <p>Teléfono: +123456789</p>
          <p>Email: info@gobierno.local</p>
        </div>
        <div className="w-1/3">
          <h4 className="text-lg font-bold mb-4">Enlaces útiles</h4>
          <ul className="list-none p-0">
            <li><a href="/">Inicio</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/noticias">Noticias</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="w-1/3">
          <h4 className="text-lg font-bold mb-4">Redes sociales</h4>
          <ul className="list-none p-0">
            <li><a href="https://facebook.com/gobierno.local">Facebook</a></li>
            <li><a href="https://twitter.com/gobierno_local">Twitter</a></li>
            <li><a href="https://instagram.com/gobierno_local">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
