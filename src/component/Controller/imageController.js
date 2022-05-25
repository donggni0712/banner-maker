import {useState,useEffect} from 'react';
import Pallet from '../Const/Pallet';
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

        const reader = new FileReader();
        
    
        reader.onload = (theFile) =>{
            const image = new Image();
            image.src = theFile.target.result;
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");

            ctx.drawImage(image, 0, 0);

            var MAX_WIDTH = 700;
            var MAX_HEIGHT = 350;
            var width = image.width;
            var height = image.height;

            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, width, height)
            var dataurl = canvas.toDataURL("image/png");

            _setImgSrc(dataurl)
        }

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
            <input className='urlInput' value={imgurl} onChange={handleImgurl}></input>
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
                <Pallet _fontColor={_imgColor} handleFontColor={handleBackgroundColor}/>
            </div>
        }
    }

    const controllOptionColor = (num) =>{
        if(methodForImg==num){
            return {backgroundColor:'#808080'};
        }
        return {};
    }

    return    <div className='img_select'>
                <a className='img_toggle' style={controllOptionColor(1)} onClick={handleMethod}>Tag</a>
                <a className='img_toggle' style={controllOptionColor(2)} onClick={handleMethod}>URL</a>
                <a className='img_toggle' style={controllOptionColor(3)} onClick={handleMethod}>Upload</a>
                <a className='img_toggle' style={controllOptionColor(4)} onClick={handleMethod}>Color</a>
                {imgview(methodForImg)}
            </div>
}

export default ImageController;