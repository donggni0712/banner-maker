import {React, useEffect, useState} from 'react';
import './Banner.css';
import axios from 'axios';

function Body(){
    const [comment,setComment] = useState('');
    const [imgtag, setImgtag] = useState('');
    const [imgfile, setImgfile] = useState('');
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
    return (
        <div className='all'>
            <div className='banner_box'>
                {comment}
            </div>
        <div className='input_box'>
            <div>
                <input type='file' 
                    accept='image/jpg,image/png,image/jpeg,image/gif' 
                    name='profile_img' 
                    onChange={onLoadFile}>
                </input>
            </div>
            <label>Image Tag : </label>
            <input className='input_imgtag' value={imgtag} onChange={handleImgtag}></input>
            <button className='input_imgbutton' onClick={handleTagButton}>이미지 생성</button>
            <label className='textlabel'>Text : </label>
            <input className='input_comment' type='text' value={comment} onChange={handleComment} ></input>
        </div>
        </div>

    )
}



export default Body