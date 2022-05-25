
import Fonts from '../Const/Fonts.js'
import './text.css'
import Pallet from '../Const/Pallet.js'

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
                <label className='textlabel'>Text : </label>
                <input className='input_text' type='text' value={_text} onChange={handleText} ></input>
                <select onChange={handleFont}>
                    {
                        fontLists.map((el)=>{
                            return <option key={el.id} value={el.id}>{el.name}</option>
                        })
                    }
                </select>
                <div className='font_color'>
                    <label>글자 색상</label>
                <Pallet _fontColor={_fontColor} handleFontColor={handleFontColor}/>
                </div>
            </div>
}

export default TextArea;