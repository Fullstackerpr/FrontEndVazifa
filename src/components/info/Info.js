import "./Info.scss"
import infoImg from '../../assets/info.png'

const Info = () => {
    return (
        <section className="info" id="info">
            <div className="info__wrapper container">
                <div className="info__img">
                    <img src={infoImg} alt="" />
                </div>
                <div className="info__title">
                    <h1>Apply AI, Deep Learning <br /> and Data Sciece to solve</h1>
                    <p>Lorem ipsum is placeholder text commonly used in the <br /> graphic, print, and publishing industries for previewing <br /> layouts and visual mockups.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </section>
    )
}

export default Info;