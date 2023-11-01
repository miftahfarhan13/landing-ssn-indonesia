// "use client";

import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import CertificateItem from './CertificateItem';

export default function ListCertificate() {
  const [toggler, setToggler] = useState(false);
  const [productIndex, setProductIndex] = useState(0);
  const listCertificate = [
    {
      image: '/images/cert-3.jpg',
      title: 'Certificate of "Good Manufacturing Practices" Milkfish Frozen'
    },
    {
      image: '/images/cert-1.jpg',
      title: 'Good Quarantine Practices Certificate'
    },
    {
      image: '/images/cert-4.jpg',
      title: 'Certificate of "Good Manufacturing Practices" Soka Crab'
    },
    {
      image: '/images/cert-2.jpg',
      title: 'Fish Quarantine Installation Certificate'
    },
    {
      image: '/images/cert-5.jpg',
      title: 'Certificate of "Good Manufacturing Practices" Shrimp Frozen'
    }
  ];

  const certificateImage = [
    '/images/cert-3.jpg',
    '/images/cert-1.jpg',
    '/images/cert-4.jpg',
    '/images/cert-2.jpg',
    '/images/cert-5.jpg'
  ];

  const handleClick = (index: number) => {
    setToggler(!toggler);
    setProductIndex(index);
  };

  return (
    <div className="row">
      {listCertificate.map((data, index) => (
        <div
          onClick={() => setToggler(!toggler)}
          className="col-sm-12 col-md"
          key={index}
        >
          <CertificateItem image={data.image} title={data.title} />
        </div>
      ))}
      <FsLightbox
        toggler={toggler}
        sources={certificateImage}
        key={productIndex}
      />
    </div>
  );
}
