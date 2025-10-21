import "./Banner.css";
import BannerImage from "../../assets/Banner2.jpg";

function Banner() {
  return (
    <div className="banner">
      <img src={BannerImage} alt="Banner" className="banner-image" />

      <div className="banner-text-container">
        <div className="banner-text">
          <h1 className="banner-title">Crypto Tracker</h1>
          <p className="banner-subtitle">
            Get all information regarding Crypto Currency
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
