import {React, useState} from 'react';
import './Banner.css'

function Body(){
    const [comment,setComment] = useState('');
    const [imgtag, setImgtag] = useState('');
    const banner = document.querySelector('.banner_box');

    const handleComment = (e) =>{
        setComment(e.target.value)
    }

    const handleImgtag = (e) =>{
        setImgtag(e.target.value)
    }
    const handleImgsrc = () =>{
        fetch(`https://source.unsplash.com/700x350/?${imgtag}`)
        .then((response)=>{
            document.querySelector('.banner_box').style.backgroundImage = `url(${response.url})`
        })
    }

    return (
        <div className='all'>
            <div className='banner_box'>
                {comment}
            </div>
        <div className='input_box'>
            <label>Image Tag : </label>
            <input className='input_imgtag' value={imgtag} onChange={handleImgtag}></input>
            <button className='input_imgbutton' onClick={handleImgsrc}>이미지 생성</button>
            <label className='textlabel'>Text : </label>
            <input className='input_comment' type='text' value={comment} onChange={handleComment} ></input>
        </div>
        </div>

    )
}



export default Body