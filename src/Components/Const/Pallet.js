import React, { useState } from "react";
import './Pallet.css'
import CustomPicker from '../Const/ColorPicker.js';

function Pallet({_fontColor, handleFontColor}){

    function Color(hex){
        return {backgroundColor : hex};
    }

    const clickColor = (color) =>{
        handleFontColor(color);
    }

    return <div style={{paddingTop : '80px', paddingLeft : '15px'}}>
         <div className="Line">
             <div className="choice"style={Color('#F44336')} onClick={()=>clickColor('#F44336')}></div>
             <div className="choice"  style={Color('#E91E63')} onClick={()=>clickColor('#E91E63')}></div>
             <div className="choice" style={Color('#9C27B0')} onClick={()=>clickColor('#9C27B0')}></div>
             <div className="choice"  style={Color('#2196F3')} onClick={()=>clickColor('#2196F3')}></div>
             <div className="choice" style={Color('#00BCD4')} onClick={()=>clickColor('#00BCD4')}></div>
             <div className="choice" style={Color('#009688')} onClick={()=>clickColor('#009688')}></div>
         </div>
         <div className="Line">
             <div className="choice" style={Color('#8BC34A')} onClick={()=>clickColor('#8BC34A')}></div>
             <div className="choice"style={Color('#CDDC39')} onClick={()=>clickColor('#CDDC39')}></div>
             <div className="choice"  style={Color('#FFEB3B')} onClick={()=>clickColor('#FFEB3B')}></div>
             <div className="choice"  style={Color('#FF9800')} onClick={()=>clickColor('#FF9800')}></div>
             <div className="choice"  style={Color('#795548')} onClick={()=>clickColor('#795548')}></div>
             <div className="choice"  style={Color('#607D8B')} onClick={()=>clickColor('#607D8B')}></div>
             <CustomPicker color={_fontColor} onChange={color => handleFontColor(color.hex)} />
         </div>
    </div>
};

export default Pallet
