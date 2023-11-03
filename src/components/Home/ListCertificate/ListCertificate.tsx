import { Lightbox } from 'react-modal-image';
import { useState } from 'react';
import CertificateItem from './CertificateItem.tsx';

function ListCertificate() {
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
  const [toggler, setToggler] = useState(false);
  const [index, setIndex] = useState(0);

  const certificateImage = [
    '/images/cert-3.jpg',
    '/images/cert-1.jpg',
    '/images/cert-4.jpg',
    '/images/cert-2.jpg',
    '/images/cert-5.jpg'
  ];

  const handleClick = (index: number) => {
    setToggler(true);
    setIndex(index);
  };

  return (
    <>
      <div className="row">
        {listCertificate.map((data, index) => (
          <div onClick={() => handleClick(index)} className="col-sm-12 col-md">
            <CertificateItem image={data.image} title={data.title} />
          </div>
        ))}
        {toggler ? (
          <Lightbox
            large={listCertificate[index].image}
            alt={listCertificate[index].title}
            hideDownload={true}
            onClose={() => setToggler(false)}
          />
        ) : (
          <></>
        )}
        {/* <FsLightbox
          toggler={toggler}
          sources={certificateImage}
          key={productIndex}
        /> */}
      </div>
    </>
  );
}

export default ListCertificate;
