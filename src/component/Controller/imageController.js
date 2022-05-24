import {useState,useEffect} from 'react';
import CustomPicker from '../Const/ColorPicker';
import './image.css'

function ImageController({_setImgSrc, _setImgColor, _imgColor}){
    const [imgtag, setImgtag] = useState('');
    const [imgfile, setImgfile] = useState('');
    const [imgurl, setImgurl] = useState('');
    const [methodForImg, setMethodForImg] = useState(1);//1=tag 2=url 3=file

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


    const handleImgtag = (e) =>{
        setImgtag(e.target.value)
    }

    const handleTagButton = () =>{
        fetch(`https://source.unsplash.com/700x350/?${imgtag}`)
        .then((response)=>{
            _setImgSrc(response.url)
        })
    }

    const handleImgurl = (e) =>{
        setImgurl(e.target.value)
    }

    const handleURLButton = () =>{
        _setImgSrc(imgurl);
    }

     const onLoadFile = (e) =>{
        setImgfile(e.target.files[0]);
    }
  const handleBackgroundColor = (color) =>{
        _setImgColor(color)
        _setImgSrc("");
        
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
            <button onClick={handleURLButton}>URL입력</button>
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
                <CustomPicker color={_imgColor} onChange={color => handleBackgroundColor(color.hex)}/>
            </div>
        }
    }

    return    <div className='img_select'>
                <a className='img_toggle' onClick={handleMethod}>Tag</a>
                <a className='img_toggle' onClick={handleMethod}>URL</a>
                <a className='img_toggle' onClick={handleMethod}>Upload</a>
                <a className='img_toggle' onClick={handleMethod}>Color</a>
                {imgview(methodForImg)}
            </div>
}

export default ImageController;