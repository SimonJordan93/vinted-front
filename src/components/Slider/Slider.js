import "../Slider/slider.css";
import { Range } from "react-range";

const Slider = ({ values, setValues }) => {
  return (
    <Range
      step={5}
      min={0}
      max={1000}
      values={values}
      onChange={(newValues) => setValues([newValues[0], newValues[1]])}
      renderTrack={({ props, children }) => (
        <div {...props} className="range-track">
          {children}
        </div>
      )}
      renderThumb={({ props, index }) => (
        <div {...props} key={index}>
          {index === 0 ? (
            <div className="min-thumb-value">
              <span>{values[0]}</span>
            </div>
          ) : (
            <div className="max-thumb-value">
              <span>{values[1]}</span>
            </div>
          )}
        </div>
      )}
    />
  );
};

export default Slider;
