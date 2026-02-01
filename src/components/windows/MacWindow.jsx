import { Rnd } from "react-rnd";
import "./window.scss";
import { useWindows } from "../../context/WindowsContext";
import { useState } from "react";

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
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: x,
        y: y,
      }}
      style={{ zIndex: zIndices[windowType] }}
      className={`mac-window-rnd ${isFullScreen ? "fullscreen" : ""}`}
      onMouseDown={() => focusWindow(windowType)}
      onDragStart={() => focusWindow(windowType)}
      disableDragging={isFullScreen}
      enableResizing={!isFullScreen}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              className="dot red"
              onClick={() => toggleWindow(windowType)}
            ></div>
            <div
              className="dot yellow"
              onClick={() => toggleWindow(windowType)}
            ></div>
            <div
              className="dot green"
              onClick={() => setIsFullScreen(!isFullScreen)}
            ></div>
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
