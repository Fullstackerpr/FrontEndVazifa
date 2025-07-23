import "./Hero.scss";
import videoImg from "../../assets/video.svg";
import heroImg from "../../assets/hero.png"
import logo1 from "../../assets/hero_icon1.svg"
import logo2 from "../../assets/hero_icon2.svg"
import logo3 from "../../assets/hero_icon3.svg"
import logo4 from "../../assets/hero_icon4.svg"

const Hero = () => {
    return (
        <main className="main">
            <div className="hero__wrapper container">
                <div className="hero__body">
                    <div className="hero__title">
                    <h3>Next genaretion platform</h3>
                    <h1>Artificial intelligence & Syber security</h1>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts visual mockups.</p>
                    <div className="hero__button">
                        <button className="get__button">Get Started</button>
                        <button className="video__button"><img className="button__icon" src={videoImg} alt="" />Watch Video</button>
                    </div>
                </div>
                <div className="hero__img">
                    <img src={heroImg} alt="" />
                </div>
                </div>
                <div className="hero__icons">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                </div>
            </div>
        </main>
    )
}

export default Hero;