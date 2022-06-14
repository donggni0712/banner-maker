import './index.css'

const Banner = ({text, fontColor, font, imgSrc, imgColor}) => {
    let _imgSrc = (imgSrc=='../Const/loading.gif') ? "../Const/loading.gif" : `url(${imgSrc})`

    return  (<div className='banner' style={{
        color : fontColor, 
        fontFamily : font, 
        backgroundImage : _imgSrc,
        backgroundColor : imgColor}}>
                {text} 
            </div>)
}

export default Banner