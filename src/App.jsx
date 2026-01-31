import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Cli from "./components/windows/Cli";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import { useWindows } from "./context/WindowsContext";

const App = () => {
  const { windows } = useWindows();

  return (
    <main>
      <Nav />
      <Dock />

      {windows.github && <Github />}
      {windows.note && <Note />}
      {windows.resume && <Resume />}
      {windows.spotify && <Spotify />}
      {windows.cli && <Cli />}
    </main>
  );
};

export default App;
