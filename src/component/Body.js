import {React, useEffect, useState} from 'react';
import './Banner.css';

function Body(){
    const [comment,setComment] = useState('');
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

    function imgview(type){
        if(type==1){
            return  <div className='img_tag'>
            <label>Image Tag : </label>
            <input value={imgtag} onChange={handleImgtag}></input>
            <button onClick={handleTagButton}>이미지 생성</button>
        </div>
        }
        if(type==2){
            return    <div className='img_url'>
            <input value={imgurl} onChange={handleImgurl}></input>
            <button onClick={handleurlButton}>URL입력</button>
        </div>
        }
        if(type==3){
            return    <div className='img_upload'>
            <input type='file' 
                accept='image/jpg,image/png,image/jpeg,image/gif' 
                name='profile_img' 
                onChange={onLoadFile}>
            </input>
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
            {imgview(methodForImg)}  
            </div>        
            <label className='textlabel'>Text : </label>
            <input className='input_comment' type='text' value={comment} onChange={handleComment} ></input>
        </div>
        </div>

    )
}


export default Body