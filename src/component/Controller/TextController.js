
import Fonts from '../Const/Fonts.js'
import './text.css'
import Pallet from '../Const/Pallet.js'
import { Form,Card } from 'react-bootstrap';

function TextArea({_setFont, _setText, _setFontColor, _font, _text, _fontColor}){
    const fontLists = Fonts;

    const handleText = (e) =>{
        _setText(e.target.value);
    }

    const handleFontColor = (color) =>{
        _setFontColor(color)
    }

    const handleFont = (e) =>{
        _setFont(e.target.value)
    }
    
    return  <div>
                <div className='text_box'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control style={{height:"2.3rem",width:"20rem", marginRight:"1rem"}} type="text" value={_text} onChange={handleText} placeholder="Text" />
                        </Form.Group>
                        <Form.Select style={{height:"2.3rem", width:"13rem"}} onChange={handleFont} >
                                 {
                        fontLists.map((el)=>{
                            return <option key={el.id} value={el.id}>{el.name}</option>
                            })
                        }
                     </Form.Select>
                </div>
                
                <Card >
                    <Card.Header>글자 색상</Card.Header>
                    <Card.Body>
                         <Pallet _fontColor={_fontColor} handleFontColor={handleFontColor}/>
                    </Card.Body>
                </Card>
                
            </div>
}

export default TextArea;