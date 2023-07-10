const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

// Cloned by: Kidus Efrem
// Email: kidus@protonmail.com
// Phone: +251917001417
// GitHub: https://www.github.com/k1dus
// LinkedIn: https://www.linkedin.com/in/kidusefrem/
