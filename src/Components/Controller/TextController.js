
import Fonts from '../Const/Fonts.js'
import Pallet from '../Const/Pallet.js'
import { Form,Card } from 'react-bootstrap';
import './Controller.css';

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
    
    return  <Card className='Box'>
        <Card.Header className='Header'>텍스트</Card.Header>
        
                        <div className='card-body'>
        <div style={{display:'flex'}}>
                <Form.Group className="mb-3" style={{margin:"10px"}}>
                    <Form.Control style={{height:"2.3rem",width:"20rem", marginRight:"1rem"}} type="text" value={_text} onChange={handleText} placeholder="Text" />
                </Form.Group>
                <Form.Select style={{height:"2.3rem", width:"13rem",margin:"10px"}} onChange={handleFont} >
                                 {
                        fontLists.map((el)=>{
                            return <option key={el.id} value={el.id}>{el.name}</option>
                            })
                        }
                 </Form.Select>
                 </div>
                <Pallet _fontColor={_fontColor} handleFontColor={handleFontColor}/>
              </div>  
            </Card>
}

export default TextArea;