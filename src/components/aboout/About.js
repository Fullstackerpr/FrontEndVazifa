import './About.scss'
import aboutImg from '../../assets/about.png'


const About = () => {
    return (
        <section className='about' id='about'>
            <div className="about__wrapper container">
                <div className="about__body">
                    <h1>What our clients say about <br /> our awesome solutions</h1> 
                    <p className='p1'>To take a trivial example, which of us ever undertakes <br /> laborious physical exercise, except to obtain some <br /> advantage from it who do not know.</p>
                    <p>Lorem ipsum is placeholder text commonly used in the <br /> graphic, print, and publishing .</p>
                    <p>Lorem ipsum is placeholder previewing layouts and visual <br /> mockups.</p>
                    <p>Lorem ipsum is placeholder text commonly used in the <br /> graphic, print, and publishing industries for previewing <br /> layouts and visual mockups.</p>
                </div>
                <div className="about__img">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </section>
    )
}


export default About