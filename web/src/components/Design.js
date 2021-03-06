import "../stylesheets/layout/_designSection.scss";
import Palettes from "./Palettes";

const Design = (props) => {
  return (
    <fieldset className={"collapsable js-slide1 " + props.className}>
      <div>{props.children}</div>
      <div className="open collapsable__hide  design  js-content">
        <label htmlFor="palette1" className="design__label">
          <div className="colors">Colores</div>
          <Palettes
            id="palette1"
            type="radio"
            value="1"
            name="palette"
            className="design__radio js-palette"
            handleInputLifting={props.handleInputLifting}
            handleReset={props.handleReset}
            checked={props.data.palette === "1"}
          />
        </label>

        <label htmlFor="palette2" className="design__label">
          <Palettes
            id="pallete2"
            type="radio"
            value="2"
            name="palette"
            className="design__radio js-palette"
            handleInputLifting={props.handleInputLifting}
            handleReset={props.handleReset}
            checked={props.data.palette === "2"}
          />
        </label>

        <label htmlFor="palette3" className="design__label">
          <Palettes
            id="palette3"
            type="radio"
            value="3"
            name="palette"
            className="design__radio js-palette"
            handleInputLifting={props.handleInputLifting}
            handleReset={props.handleReset}
            checked={props.data.palette === "3"}
          />
        </label>

        <label htmlFor="palette4" className="design__label">
          <Palettes
            id="palette4"
            type="radio"
            value="4"
            name="palette"
            className="design__radio js-palette"
            handleInputLifting={props.handleInputLifting}
            handleReset={props.handleReset}
            checked={props.data.palette === "4"}
          />
        </label>
      </div>
    </fieldset>
  );
};

export default Design;
