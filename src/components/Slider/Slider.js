import "../Slider/slider.css";
import { Range } from "react-range";

const Slider = ({ values, setValues }) => {
  return (
    <Range
      step={10}
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
        <>
          <div
            {...props}
            className={
              index === 0
                ? "range-thumb range-thumb-min"
                : "range-thumb range-thumb-max"
            }
          />
          <div className="min-thumb-value">
            <span>Prix min: {values[0]}</span>
          </div>
          <div className="max-thumb-value">
            <span>Prix max: {values[1]}</span>
          </div>
        </>
      )}
    />
  );
};

export default Slider;
