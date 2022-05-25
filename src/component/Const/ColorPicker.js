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
      width:200,
      position: "relative",
      marginBottom: 10
    },
    saturation: {
      width: 200,
      height: 180,
      position: "relative"
    },
    input: {
      height: 34,
      width:136,
      border: `1px solid ${hex}`,
      paddingLeft: 10
    },
    swatch: {
      width: 50,
      height: 38,
      background: hex
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
