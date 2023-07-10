import React from 'react';
import './InputOption.css';

function InputOption({Icon, title, color}) {
  return <div className='inputOption'>
    <Icon style={{color: color}} />
    <h4>{title}</h4>
  </div>;
}

export default InputOption
// Cloned by: Kidus Efrem
// Email: kidus@protonmail.com
// Phone: +251917001417
// GitHub: https://www.github.com/k1dus
// LinkedIn: https://www.linkedin.com/in/kidusefrem/