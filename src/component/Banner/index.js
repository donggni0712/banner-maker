import './index.css'

const Banner = ({text, fontColor, font, imgSrc, imgColor}) => {
    return  <div className='banner' style={{
        color : fontColor, 
        fontFamily : font, 
        backgroundImage : `url(${imgSrc})`,
        backgroundColor : imgColor}}>
                {text} 
            </div>
}

export default Banner