import "./certificateItem.css";

interface Props {
  image: string;
  title: string;
}

export default function CertificateItem({ image, title }: Props) {
  return (
    <div className="d-flex flex-column gap-4 p-2 cert-card">
      <img src={image} alt={title} className="cert-img" />
      <div className="cert-title">{title}</div>
    </div>
  );
}
