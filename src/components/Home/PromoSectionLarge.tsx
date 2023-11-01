export default function PromoSectionLarge({ lang }: { lang: string }) {
  const translation: any = {
    en: {
      title:
        'Discover the Best Quality from the Ocean: Our Marine Export Products Await You!',
      description:
        'Explore the riches of the sea in our superior export products that are fresh, high quality and guaranteed safe. From seafood to high quality seafood, we present the best for you. Get a stunning and healthy culinary experience by choosing our quality products.',
      button: 'Order Now and Enjoy the Delights of the Sea!'
    },
    id: {
      title:
        'Temukan Kualitas Terbaik dari Lautan: Produk Ekspor Laut Kami Menanti Anda!',
      description:
        'Jelajahi kekayaan laut dalam produk ekspor unggulan kami yang segar, bermutu, dan terjamin keamanannya. Dari seafood hingga hasil laut berkualitas tinggi, kami hadirkan yang terbaik untuk Anda. Dapatkan pengalaman kuliner yang memukau dan sehat dengan memilih produk kami yang berkualitas.',
      button: 'Pesan Sekarang dan Nikmati Kelezatan Laut!'
    }
  };
  return (
    <div className="container py-5" id="contact-section">
      <section className="mb-8">
        <div className="cta-card">
          <div className="container d-flex flex-column align-items-center gap-3 px-md-5">
            <h3
              className="text-white text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {translation[lang].title}
            </h3>
            <p className="text-white text-center">
              {translation[lang].description}
            </p>
            <a
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=6281246059191&text=${encodeURI(
                `Halo PT. Samudra Sukses Nusantara! Saya tertarik untuk memesan produk laut dari Anda.`
              )}`}
            >
              <button className="btn button-header btn-lg">
                {translation[lang].button}
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* <div className="container py-8">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-sm-9 text-center mx-auto">
                <h3
                  className="text-white mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Temukan Kualitas Terbaik dari Lautan: Produk Ekspor Laut Kami
                  Menanti Anda!
                </h3>
                <p className="lead text-white mb-sm-6 mb-4">
                  Jelajahi kekayaan laut dalam produk ekspor unggulan kami yang
                  segar, bermutu, dan terjamin keamanannya. Dari seafood hingga
                  hasil laut berkualitas tinggi, kami hadirkan yang terbaik untuk
                  Anda. Dapatkan pengalaman kuliner yang memukau dan sehat dengan
                  memilih produk kami yang berkualitas.
                </p>
                <button className="btn btn-white btn-lg">
                  Pesan Sekarang dan Nikmati Kelezatan Laut!
                </button>
              </div>
            </div>
          </div> */
}

// interface Props {
//   title: string;
//   full_description: string;
//   pageHeaderBgImg: string;
//   pageHeaderMinVh: string;
//   pageHeaderRadius: string;
// }

// export default function TestimonialsFade({
//   title,
//   full_description,
//   pageHeaderBgImg,
//   pageHeaderMinVh,
//   pageHeaderRadius
// }: Props) {
//   const styles = {
//     pageHeader: {
//       backgroundImage: 'url(' + pageHeaderBgImg + ')',
//       minHeight: pageHeaderMinVh,
//       borderRadius: pageHeaderRadius
//     }
//   } as const;

//   return (
//     <>
//       <section className="mb-8">
//         <div className="page-header py-5 py-md-0" style={styles.pageHeader}>
//           <span className="mask bg-black opacity-6"></span>
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-8 col-sm-9 text-center mx-auto">
//                 <h3
//                   className="text-white mb-4"
//                   style={{ fontFamily: 'Playfair Display, serif' }}
//                 >
//                   {title}
//                 </h3>
//                 <p className="lead text-white mb-sm-6 mb-4">
//                   {full_description}
//                 </p>
//                 <button className="btn btn-white btn-lg">
//                   Pesan Sekarang dan Nikmati Kelezatan Laut!
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
