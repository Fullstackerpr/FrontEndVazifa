import "./Card.scss";
import cardIcon1 from "../../assets/naxly.png";
import cardIcon2 from "../../assets/expert.png";
import cardIcon3 from "../../assets/business.png";
import cardIcon4 from "../../assets/value.png";
import cardIcon5 from "../../assets/global.png";

const Card = () => {
  return (
    <section className="card" id="">
      <div className="card__wrapper">
        <div className="card__body">
          <div className="cards">
            <img
              src={cardIcon1}
              alt=""
              style={{ width: "73px", height: "69px", marginTop: "76px" }}
            />
            <h4>Naxly as the Winners in Global Agency Awards</h4>
            <p>
              Lorem ipsum is placeholder text commonly used in print, and
              publishing industries for previewing layouts and visual mockups.
            </p>
          </div>
          <div className="cards">
            <img src={cardIcon2} alt="" />
            <h4>
              Expert Prespective <br /> Agency Awards
            </h4>
            <p>
              Lorem ipsum is placeholder text commonly used in print, and
              publishing industries for previewing layouts and visual mockups.
            </p>
          </div>
          <div className="cards">
            <img src={cardIcon3} alt="" />
            <h4>
              Business Prespective <br /> Global Agency Awards
            </h4>
            <p>
              Lorem ipsum is placeholder text commonly used in print, and
              publishing industries for previewing layouts and visual mockups.
            </p>
          </div>
          <div className="cards">
            <img src={cardIcon4} alt="" />
            <h4>
              Value for Results in <br /> Global Agency Awards
            </h4>
            <p>
              Lorem ipsum is placeholder text commonly used in print, and
              publishing industries for previewing layouts and visual mockups.
            </p>
          </div>
          <div className="cards">
            <img src={cardIcon5} alt="" />
            <h4>
              Global Experience in <br /> Agency Awards
            </h4>
            <p>
              Lorem ipsum is placeholder text commonly used in print, and
              publishing industries for previewing layouts and visual mockups.
            </p>
          </div>
        </div>
      </div>
      <div className="card__pages">
        <div className="dot"></div>
        <div className="dot1"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
};

export default Card;
