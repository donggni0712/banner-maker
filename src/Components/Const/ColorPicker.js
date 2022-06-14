import React from "react";
import { CustomPicker } from "react-color";
import {
  EditableInput,
  Hue,
  Saturation
} from "react-color/lib/components/common";
import './Pallet.css';

export const MyPicker = ({ hex, hsl, hsv, onChange }) => {
  const styles = {
    hue: {
      height: 10,
      width:180,
      position: "relative",
      marginBottom: 10
    },
    saturation: {
      width: 180,
      height: 180,
      position: "relative"
    },
    input: {
      height: 34,
      width:150,
      border: `1px solid ${hex}`,
      paddingLeft: 10,
      marginTop: "5px"
    },
    swatch: {
      width: 50,
      height: 34,
      background: hex,
      marginTop: "5px"
    }
  };
  return (
      <div className="inner">
      <div style={styles.hue}>
        <Hue hsl={hsl} onChange={onChange} />
      </div>

      <div style={styles.saturation}>
        <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
      </div>

      <div style={{ display: "flex" }}>
        <EditableInput
          style={{ input: styles.input }}
          value={hex}
          onChange={onChange}
        />
        <div style={styles.swatch} />
      </div>
      </div>
  );
};

export default CustomPicker(MyPicker);
