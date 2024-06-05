// Footer.jsx

import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Sobre</h4>
            <p>Seu site de referência para notícias, resenhas e curiosidades sobre filmes.</p>
          </div>
          <div className="col-md-4">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Notícias</a></li>
              <li><a href="#">Resenhas</a></li>
              <li><a href="#">Curiosidades</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contato</h4>
            <p>Email: contato@seusite.com</p>
            <p>Telefone: (XX) XXXX-XXXX</p>
          </div>
        </div>
        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col-md-12 text-center">
            <p>Siga-nos nas redes sociais:</p>
            <a href="#"><img src="facebook_icon.png" alt="Facebook" style={{ marginRight: '10px' }} /></a>
            <a href="#"><img src="twitter_icon.png" alt="Twitter" style={{ marginRight: '10px' }} /></a>
            <a href="#"><img src="instagram_icon.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
