import React from 'react';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className="footer">
        <hr/>
        Matt Ruggiero {year}
        <hr/>
    </div>
  );
}

export default Footer;
