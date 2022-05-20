import {React, useState} from 'react';

function Input(){
    const [comment,setComment] = useState('');
    const [imgsrc, setImgsrc] = useState('');
    const [imgtag, setImgtag] = useState('');
    const handleComment = (e) =>{
        setComment(e.target.value)
    }

    const handleImgtag = (e) =>{
        setImgtag(e.target.value)
    }
    const handleImgsrc = () =>{
        fetch(`https://source.unsplash.com/featured/?${imgtag}`)
        .then((response)=>{
            setImgsrc(response.url)
        })
    }

    return (
        <div>
            <div className='banner_box'>
                <p>{comment}</p>
                <img src={imgsrc}/>
            </div>
        <div className='input_box'>
            <input className='input_imgtag' value={imgtag} onChange={handleImgtag}></input>
            <button onClick={handleImgsrc}>이미지</button>
            <input className='input_comment' type='text' value={comment} onChange={handleComment} ></input>
        </div>
        </div>

    )
}



export default  Input