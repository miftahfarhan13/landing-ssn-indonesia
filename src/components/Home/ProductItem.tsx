import './productItem.css';

interface Props {
  slug: string;
  image: string;
  title: string;
  latinName: string;
  lang: string;
}
export default function ProductItem({
  lang,
  slug,
  image,
  title,
  latinName
}: Props) {
  const translation: any = {
    en: {
      button: 'See Detail'
    },
    id: {
      button: 'Lihat Detail'
    }
  };
  return (
    <div className="card-product-item">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="detail">
        <div className="detail-info">
          <div className="fs-5 fw-bold">{title}</div>
          <div className="fs-6 fst-italic">{latinName}</div>
        </div>
        <a href={`/produk/${slug}`} className="w-100">
          <button
            type="button"
            className="btn btn-success btn-lg w-100"
            style={{ borderRadius: '18px' }}
          >
            {translation[lang].button}
          </button>
        </a>
      </div>
    </div>
  );
}
