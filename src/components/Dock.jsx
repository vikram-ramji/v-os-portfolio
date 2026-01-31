import { useWindows } from "../context/WindowsContext";
import "./dock.scss";

const Dock = () => {
  const { toggleWindow } = useWindows();

  return (
    <footer className="dock">
      <div className="icon cli" onClick={() => toggleWindow("cli")}>
        <img src="./dock-icons/cli.svg" alt="Terminal" />
      </div>
      <div className="icon github" onClick={() => toggleWindow("github")}>
        <img src="./dock-icons/github.svg" alt="Github" />
      </div>
      <div className="icon pdf" onClick={() => toggleWindow("resume")}>
        <img src="./dock-icons/pdf.svg" alt="Resume" />
      </div>
      <div className="icon note" onClick={() => toggleWindow("note")}>
        <img src="./dock-icons/note.svg" alt="Notes" />
      </div>
      <div
        className="icon mail"
        onClick={() => window.open("mailto:vikramramji24@gmail.com", "_blank")}
      >
        <img src="./dock-icons/mail.svg" alt="Email" />
      </div>
      <div
        className="icon link"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/vikram-ramji-iyer/",
            "_blank",
          )
        }
      >
        <img src="./dock-icons/link.svg" alt="Social" />
      </div>
      <div
        className="icon calender"
        onClick={() => {
          window.open("https://calendar.google.com", "_blank");
        }}
      >
        <img src="./dock-icons/calender.svg" alt="Calendar" />
      </div>
      <div className="icon spotify" onClick={() => toggleWindow("spotify")}>
        <img src="./dock-icons/spotify.svg" alt="Spotify" />
      </div>
    </footer>
  );
};

export default Dock;
