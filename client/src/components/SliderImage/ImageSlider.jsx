import { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./image-slider.css";
export default function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setImageIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
    }, 3000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, [imageUrls.length]);

  function showNextImage() {
    clearInterval(intervalId);
    setImageIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
    setIntervalId(
      setInterval(() => {
        setImageIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
      }, 3000),
    );
  }

  function showPrevImage() {
    clearInterval(intervalId);
    setImageIndex((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
    setIntervalId(
      setInterval(() => {
        setImageIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
      }, 3000),
    );
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {/* <img loading="lazy"  src={imageUrls[imageIndex]} alt="Top giáo viên" className="img-slider" /> */}
      <div className="images">
        {imageUrls.map((url) => (
          <img
            loading="lazy"
            key={url}
            src={url}
            alt="Top giáo viên"
            className="img-slider"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button onClick={showPrevImage} className="btn btn-left">
        <ArrowBigLeft />
      </button>
      <button onClick={showNextImage} className="btn btn-right">
        <ArrowBigRight />
      </button>
      <div className="btn_bottom">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className="img_slider_bot_btn"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
}
