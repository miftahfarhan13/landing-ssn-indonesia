export default function Footer({ lang }: { lang: string }) {
  const translation: any = {
    en: {
      home: 'Home',
      product: 'Product'
    },
    id: {
      home: 'Beranda',
      product: 'Produk'
    }
  };
  return (
    <>
      <div className="container py-4">
        <footer className="footer pt-3  ">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                Copyright ©{' '}
                <script>document.write(new Date().getFullYear())</script>
                &nbsp;PT Samudra Sukses Nusantara
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com"
                    className="nav-link text-sm text-muted"
                    target="_blank"
                  >
                    {translation[lang].home}
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/presentation"
                    className="nav-link text-sm text-muted"
                    target="_blank"
                  >
                    Tentang Kami
                  </a>
                </li> */}
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/blog"
                    className="nav-link text-sm text-muted"
                    target="_blank"
                  >
                    {translation[lang].product}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
