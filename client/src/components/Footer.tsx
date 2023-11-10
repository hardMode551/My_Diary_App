import React from 'react';

import '../styles/Footer.module.scss';

const Footer: React.FC = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer>
      <p>Мой Дневничок</p>
      <button onClick={handleScroll}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19 12L12 5L5 12M12 5L12 19" stroke="#050F28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg> Наверх</button>
    </footer>
  );
};

export default Footer;
