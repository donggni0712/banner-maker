import {useState,useEffect} from 'react';
import Pallet from '../Const/Pallet';
import { Tabs,Tab,Form,Button,Card } from 'react-bootstrap';
import './Controller.css';

function ImageController({_setImgSrc, _setImgColor, _imgColor}){
    const [imgtag, setImgtag] = useState('');
    const [imgfile, setImgfile] = useState('');
    const [imgurl, setImgurl] = useState('');
    const [key, setKey] = useState('Tag');


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

    return    <Card className='Box'>
                <Card.Header className='Header'>?????????</Card.Header>
                <div className='card-body'>
                 <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                    <Tab className='Tab' eventKey="Tag" title="Tag">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" value={imgtag} onChange={handleImgtag} placeholder="Image Tag" />
                            <Form.Text className="text-muted">
                             ????????? ?????????????????? ???????????? ?????? ?????????????????? ???????????????.(???: sky)<br/>
                             ?????? ?????? ????????? ???????????? ?????? ?????? ??????(,)??? ??????????????? (???: sky,dog)<br/>
                            </Form.Text>
                             <Button variant="primary" onClick={handleTagButton}>
                                ????????? ??????
                            </Button>
                        </Form.Group>
                    </Tab>
                    <Tab className='Tab' eventKey="URL" title="URL">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" value={imgurl} onChange={handleImgurl} placeholder="Image URL" />
                            <Form.Text className="text-muted">
                              ????????? ???????????? URL??? ???????????????.<br/>
                            </Form.Text>
                             <Button variant="primary" onClick={handleURLButton}>
                                ????????? ??????
                            </Button>
                        </Form.Group>
                    </Tab>
                    <Tab className='Tab' eventKey="Upload" title="Upload">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type='file' 
                            accept='image/jpg,image/png,image/jpeg,image/gif' 
                            name='profile_img' 
                            onChange={onLoadFile} />
                            <Form.Text className="text-muted">
                              ??? ??????????????? ????????? ???????????? ???????????????.(.jpg .jpeg .png .gif ???????????? ?????????????????????.)<br/>
                            </Form.Text>
                        </Form.Group>
                    </Tab>
                    <Tab className='Tab' eventKey="Color" title="Color">
                        <Pallet _fontColor={_imgColor} handleFontColor={handleBackgroundColor}/>
                    </Tab>
                </Tabs>
                </div>
            </Card>
}

export default ImageController;