import img from "../../public/mundial.jpeg";

export default function Post() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <img src={img} className="card-img-top" alt="..." />
      <div className="d-flex justify-content-between align-items-center">
        <span>12😁❤</span>
        <span>234 🗨</span>
      </div>
      <div className="d-flex justify-content-around align-items-center">
        <button className="btn">👍 Like</button>
        <button className="btn">💬 comment</button>
      </div>
    </div>
  );
}
