import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <div className='container rounded-12px'>
        <img src={hero} alt="" className='mt-[50px]'/>
    </div>
  )
}

export default Hero