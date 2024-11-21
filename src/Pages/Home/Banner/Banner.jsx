// Import necessary styles and other things for responsive carusel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/Banner images/img1.jpg";
import img2 from "../../../assets/Banner images/img2.jpg";
import img3 from "../../../assets/Banner images/img3.jpg";
const Banner = () => {
  return (
    <>
      <Carousel>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
