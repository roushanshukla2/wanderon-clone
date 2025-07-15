import React from 'react';
import '../styles/HoneymoonPackages.css';

const HoneymoonPackages = () => {
  const packages = [
    { name: 'Thailand Honeymoon Packages', path: '/thailand-honeymoon-packages' },
    { name: 'Rajasthan Honeymoon Packages', path: '/rajasthan-honeymoon-packages' },
    { name: 'Kerala Honeymoon Packages', path: '/kerala-honeymoon-packages' },
    { name: 'Europe Honeymoon Packages', path: '/europe-honeymoon-packages' },
    { name: 'Honeymoon Packages in Manali', path: '/manali-honeymoon-packages' },
    { name: 'Shimla Honeymoon Packages', path: '/shimla-honeymoon-packages' },
    { name: 'Bhutan Honeymoon Package', path: '/bhutan-honeymoon-packages' },
    { name: 'Bali Honeymoon Package', path: '/bali-honeymoon-packages' },
    { name: 'Maldives Honeymoon Package', path: '/maldives-honeymoon-packages' },
    { name: 'Singapore Honeymoon Package', path: '/singapore-honeymoon-packages' },
    { name: 'Kashmir Honeymoon Package', path: '/kashmir-honeymoon-packages' },
    { name: 'Vietnam Honeymoon Package', path: '/vietnam-honeymoon-packages' },
    { name: 'Andaman Honeymoon Package', path: '/andaman-honeymoon-packages' },
  ];

  return (
    <div className="package-grid-wrapper">
      <h1>Honeymoon Packages</h1>
      <div className="packages-grid">
        {packages.map(({ name, path }) => (
          <a href={path} className="package-link" key={path}>
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HoneymoonPackages;
