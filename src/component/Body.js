import {React, useEffect, useState, useRef} from 'react';
import './Banner.css';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import CustomPicker  from './ColorPicker'

function Body(){
    const [comment,setComment] = useState('');
    const [imgtag, setImgtag] = useState('');
    const [imgfile, setImgfile] = useState('');
    const [imgurl, setImgurl] = useState('');
    const [methodForImg, setMethodForImg] = useState(1);//1=tag 2=url 3=file
    const [fontcolor, setFontcolor] = useState('');
    const [backgroundcolor, setBackgroundcolor] = useState('');

    const [font, setFont] = useState("NanumBarunGothic");
    const fontLists = [
        {name:"나눔바른고딕", id:"NanumBarunGothic"}, {name:"굵은 나눔바른고딕", id:"NanumBarunGothicBold"},
    {name:"NotoSerif",id:"NotoSerifKR"}, {name:"NotoSerifBold", id:"NotoSerifKRBold"}, 
    {name:"배민 다현체", id:"BMDOHYEON"}, {name:"배민 한나는 11살체",id:"BMHANNA_11yrs"}
];
    
    const handleFont = (e) =>{
        setFont(e.target.value);
        document.querySelector('.banner_box').style.fontFamily= font;
    }

    const handleBackgroundColor = (color) =>{
        setBackgroundcolor(color)
        handleImgsrc("");
        document.querySelector('.banner_box').style.backgroundColor = backgroundcolor;
    }

    const handleColorChange = (color) =>{
        setFontcolor(color)
        document.querySelector('.banner_box').style.color = fontcolor;
    }

    
    const handleMethod = (e) =>{
        if(e.target.textContent=='Tag'){
            setMethodForImg(1);
        }
        if(e.target.textContent=='URL'){
            setMethodForImg(2);
        }
        if(e.target.textContent=='Upload'){
            setMethodForImg(3);
        }
        if(e.target.textContent=='Color'){
            setMethodForImg(4);
        }
    }

    const handleImgurl = (e) =>{
        setImgurl(e.target.value)
    }

    const handleurlButton = () =>{
        handleImgsrc(imgurl);
    }

    const handleComment = (e) =>{
        setComment(e.target.value)
    }

    const handleImgtag = (e) =>{
        setImgtag(e.target.value)
    }
    const handleTagButton = () =>{
        fetch(`https://source.unsplash.com/700x350/?${imgtag}`)
        .then((response)=>{
            handleImgsrc(response.url)
        })
    }

    const onLoadFile = (e) =>{
        setImgfile(e.target.files[0]);
    }

    useEffect(()=>{
        preview();

        return () => preview();
    });
    
    const preview = () =>{
        if(!imgfile) return false;

        const imgEl = document.querySelector('.banner_box');

        const reader = new FileReader();

        reader.onload = () =>
        (imgEl.style.backgroundImage = `url(${reader.result})`);

        reader.readAsDataURL(imgfile);
    }

    const handleImgsrc = (src)=>{
        document.querySelector('.banner_box').style.backgroundImage = `url(${src})`
  
    }

    const onDownloadBtn = () => {
        const banner = document.querySelector('.banner_box')
        domtoimage
        .toBlob(banner)
        .then((blob) => {
            saveAs(blob, 'banner.png');
        });
    }
    function imgview(type){
        if(type==1){
            return  <div className='img_tag img_option'>
            <label>Image Tag : </label>
            <input value={imgtag} onChange={handleImgtag}></input>
            <button onClick={handleTagButton}>이미지 생성</button>
             </div>
        }
        if(type==2){
            return    <div className='img_url img_option'>
            <input value={imgurl} onChange={handleImgurl}></input>
            <button onClick={handleurlButton}>URL입력</button>
        </div>
        }
        if(type==3){
            return    <div className='img_upload img_option'>
            <input type='file' 
                accept='image/jpg,image/png,image/jpeg,image/gif' 
                name='profile_img' 
                onChange={onLoadFile}>
            </input>
        </div>
        }
        if(type==4){
            return <div className='img_color img_option'>
                <CustomPicker color={backgroundcolor} onChange={color => handleBackgroundColor(color.hex)}/>
            </div>
        }
    }

    return (
        <div className='all'>
            <div className='banner_box'>
                {comment}
            </div>
        <div className='input_box'>
            <div className='img_select'>
                <a className='img_toggle' onClick={handleMethod}>Tag</a>
                <a className='img_toggle' onClick={handleMethod}>URL</a>
                <a className='img_toggle' onClick={handleMethod}>Upload</a>
                <a className='img_toggle' onClick={handleMethod}>Color</a>
                {imgview(methodForImg)}  
            </div>
            <div>
                <label className='textlabel'>Text : </label>
                <input className='input_comment' type='text' value={comment} onChange={handleComment} ></input>
                <select onChange={handleFont}>
                    {
                        fontLists.map((el)=>{
                            return <option key={el.id} value={el.id}>{el.name}</option>
                        })
                    }
                </select>
                <div className='font_color'>
                <CustomPicker color={fontcolor} onChange={color => handleColorChange(color.hex)} />
                </div>
            </div>
            <button onClick={onDownloadBtn}>다운로드</button>
        </div>
        </div>

    )
}


export default Body;