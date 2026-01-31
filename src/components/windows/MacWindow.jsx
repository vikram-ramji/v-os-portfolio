import { Rnd } from "react-rnd";
import "./window.scss";
import { useWindows } from "../../context/WindowsContext";

const MacWindow = ({
  children,
  windowType,
  title,
  width = "50vw",
  height = "60vh",
  x = 420,
  y = 200,
}) => {
  const { toggleWindow, focusWindow, zIndices } = useWindows();
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: x,
        y: y,
      }}
      style={{ zIndex: zIndices[windowType] }}
      onMouseDown={() => focusWindow(windowType)}
      onDragStart={() => focusWindow(windowType)}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              className="dot red"
              onClick={() => toggleWindow(windowType)}
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>{title}</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
