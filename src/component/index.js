import {React, useState} from 'react';
import './index.css';

import Download from './Controller/DownloadController';
import TextArea from './Controller/TextController.js'
import Banner from './Banner/index.js'
import ImageController from './Controller/imageController.js'


function Body(){
    const [font,setFont] = useState("BMHANNA_11yrs");
    const [text, setText] = useState("Text");
    const [fontColor, setFontColor] = useState("#FFFFFF");
    const [imgSrc,setImgSrc] = useState("");
    const [imgColor, setImgColor] = useState("#5A8CBE");

    return (
        <div className='all'>
            <div className='banner_box'>
                <Banner 
                text={text} 
                font={font} 
                fontColor={fontColor} 
                imgSrc={imgSrc}
                imgColor = {imgColor}
                />
            </div>
            <div className='input_box'>
                <ImageController _setImgSrc={setImgSrc} _setImgColor = {setImgColor} _imgColor={imgColor}/>
                <TextArea _setFont={setFont} _setText={setText} _setFontColor={setFontColor}
                _comment={text} _font={font} _fontColor={fontColor} /> 
            </div>
                <Download filename={text}/>
        </div>

    )
}


export default Body;