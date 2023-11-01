import ListCertificate from './ListCertificate/ListCertificate.tsx';

function CertificationHome({ lang }: { lang: string }) {
  return (
    <>
      <div className="container py-5 d-flex flex-column gap-2">
        <div className="position-relative d-flex flex-column mb-6">
          <h2
            className="title-section align-self-center"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {lang === 'en' ? 'Our Certifications' : 'Sertifikasi Kami'}
          </h2>
          <div className="line-bg"></div>
        </div>
        <ListCertificate />
      </div>
    </>
  );
}

export default CertificationHome;
