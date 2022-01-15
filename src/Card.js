import useImage from "./useImage";

export default function Card({ img, name, role }) {
  const { image } = useImage(img);
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{role}</h3>
    </div>
  );
}
