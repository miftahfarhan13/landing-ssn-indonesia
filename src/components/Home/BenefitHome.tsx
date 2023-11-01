import { useEffect, useState } from 'react';
import AOS from 'aos';

function BenefitHome({ lang }: { lang: string }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  const translation: any = {
    en: {
      title: 'Our Product Advantages',
      description:
        'We are your top choice for high-quality seafood products that are more than just food. Discover why we are considered a trusted exporter partner.',
      qualityTitle: 'Top Quality: ',
      qualityDescription:
        'The Ultimate Choice for Quality, Sustainability, Fast Delivery, and Exceptional Service! At Samudra Sukses Nusantara, we take pride in offering a product that excels in every aspect, setting a new standard in the industry.',
      sustainTitle: 'Continuity: ',
      sustainDescription:
        'Our product is crafted with precision and care, using only the finest materials and cutting-edge technology. This ensures that you receive a top-notch product that meets and exceeds your expectations.',
      fastTitle: 'Fast and Safe Delivery: ',
      fastDescription:
        "Time is of the essence, and we understand that. Our streamlined logistics and efficient delivery network guarantee that your order reaches your doorstep swiftly, ensuring you don't have to wait long to enjoy your purchase.",
      bestTitle: 'Best Customer Service: ',
      bestDescription:
        'We believe in going the extra mile to make your experience exceptional. Our dedicated customer support team is always ready to assist you, addressing your queries and concerns promptly. Your satisfaction is our priority.'
    },
    id: {
      title: 'Keunggulan Produk Kami',
      description:
        'Kami adalah pilihan utama Anda untuk produk laut berkualitas tinggi yang lebih dari sekadar makanan. Temukan alasan mengapa kami dianggap sebagai mitra eksportir terpercaya.',
      button: 'Hubungi Kami',
      qualityTitle: 'Kualitas Utama: ',
      qualityDescription:
        'Pilihan Utama untuk Kualitas, Keberlanjutan, Pengiriman Cepat, dan Pelayanan Terbaik! Di Samudra Sukses Nusantara, kami bangga menawarkan produk yang unggul dalam setiap aspek, menetapkan standar baru dalam industri.',
      sustainTitle: 'Keberlanjutan: ',
      sustainDescription:
        'Kami berkomitmen pada tanggung jawab lingkungan. Proses produksi kami mengutamakan keberlanjutan, mulai dari sumber bahan ramah lingkungan hingga pengurangan limbah. Dengan kami, Anda dapat menikmati produk yang tidak hanya meningkatkan kehidupan Anda tetapi juga berkontribusi pada planet yang lebih hijau.',
      fastTitle: 'Pengiriman Cepat dan Aman: ',
      fastDescription:
        'Waktu sangat berharga, dan kami memahaminya. Logistik yang efisien dan jaringan pengiriman yang terpadu kami menjamin pesanan Anda tiba dengan cepat, memastikan Anda tidak perlu menunggu lama untuk menikmati pembelian Anda.',
      bestTitle: 'Pelayanan Pelanggan Terbaik: ',
      bestDescription:
        'Kami percaya dalam memberikan yang terbaik untuk membuat pengalaman Anda istimewa. Tim dukungan pelanggan kami selalu siap membantu Anda, menjawab pertanyaan dan masalah Anda dengan cepat. Kepuasan Anda adalah prioritas kami.'
    }
  };

  const productFeature = {
    images: [
      {
        src: 'https://iili.io/J9WroQf.jpg',
        alt: 'first_image'
      },
      {
        src: 'https://iili.io/J9Wr2rN.jpg',
        alt: 'second_image'
      },
      {
        src: 'https://iili.io/J9Wrd1p.jpg',
        alt: 'third_image'
      }
    ],
    featuresDetails: [
      {
        headlineText: translation[lang].qualityTitle,
        bodyText: translation[lang].qualityDescription
      },
      {
        headlineText: translation[lang].sustainTitle,
        bodyText: translation[lang].sustainDescription
      },
      {
        headlineText: translation[lang].fastTitle,
        bodyText: translation[lang].fastDescription
      },
      {
        headlineText: translation[lang].bestTitle,
        bodyText: translation[lang].bestDescription
      }
    ]
  };

  return (
    <>
      {!isLoading && (
        <div id="product-feature" className="container py-6">
          <div className="py-5">
            {/* <div className="row">
          <div className="col-12 col-lg-7 mx-auto text-center">
            {title.length != 0 && <h2 className="mb-3">{title}</h2>}
            {full_description.length != 0 && (
              <p className="mb-5">{full_description}</p>
            )}
          </div>
        </div> */}
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 pe-5" data-aos="fade-right">
                <div className="row">
                  <div className="position-relative d-flex flex-column mb-2">
                    <h2
                      className="title-section align-self-start"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {translation[lang].title}
                    </h2>
                    <div className="line-bg"></div>
                  </div>
                  <p className="mb-5">{translation[lang].description}</p>
                  {productFeature?.featuresDetails?.map((value: any) => (
                    <div className="col-12">
                      <div className="d-flex mb-4">
                        <svg
                          className="me-2"
                          width="30"
                          height="30"
                          viewBox="0 0 20 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ minWidth: '30px' }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 23C14.4183 23 18 19.4183 18 15C18 10.5817 14.4183 7 10 7C5.58172 7 2 10.5817 2 15C2 19.4183 5.58172 23 10 23ZM13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929C13.3166 11.9024 12.6834 11.9024 12.2929 12.2929L9 15.5858L7.70711 14.2929C7.31658 13.9024 6.68342 13.9024 6.29289 14.2929C5.90237 14.6834 5.90237 15.3166 6.29289 15.7071L8.29289 17.7071C8.68342 18.0976 9.31658 18.0976 9.70711 17.7071L13.7071 13.7071Z"
                            fill="#0077b6"
                          />
                        </svg>
                        <span>
                          <span className="fw-bolder">
                            {value.headlineText}
                          </span>{' '}
                          <span>{value.bodyText}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-lg-6" data-aos="fade-left">
                <div className="d-block d-md-flex">
                  <img
                    className="w-100 rounded-3 mb-4 mb-md-0"
                    src={productFeature?.images[0].src}
                    alt={productFeature?.images[0].alt}
                    style={{ maxHeight: '200px', objectFit: 'cover' }}
                  />
                </div>
                <div className="row mt-4">
                  <div className="col-6">
                    <img
                      className="w-100 rounded-3"
                      src={productFeature?.images[1].src}
                      alt={productFeature?.images[1].alt}
                      style={{ maxHeight: '200px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      className="w-100 rounded-3"
                      src={productFeature?.images[2].src}
                      alt={productFeature?.images[2].alt}
                      style={{ maxHeight: '200px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BenefitHome;
