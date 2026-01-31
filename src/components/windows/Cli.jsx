import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = () => {
  const commands = {
    echo: {
      description: "Echoes input text.",
      fn: (text) => text,
    },
    whoami: {
      description: "Verifies user identity.",
      usage: "whoami",
      fn: () =>
        "Vikram // Creative Technologist\n" +
        "Status: Pivoting to Visual Engineering.\n" +
        "Base: Secunderabad, India",
    },
    skills: {
      description: "Lists active weaponry.",
      usage: "skills",
      fn: () =>
        "--- CORE ARSENAL ---\n" +
        "* React.js / Next.js [Native]\n" +
        "* SCSS / CSS Modules\n" +
        "* JavaScript / ES6+\n\n" +
        "--- VISUAL & MOTION ---\n" +
        "* GSAP (GreenSock)\n" +
        "* Framer Motion\n\n" +
        "--- LOADING... ---\n" +
        "* Three.js / WebGL\n" +
        "* DSA (The Grind)",
    },
    projects: {
      description: "Access R&D Labs.",
      usage: "projects",
      fn: () =>
        "1. V-OS (MacOS Portfolio)\n" +
        "   > React.js.\n\n" +
        "2. Productivity Dashboard\n" +
        "   > HTML. CSS. JavaScript.\n\n",
    },
    evolution: {
      description: "Timeline of the pivot.",
      usage: "evolution",
      fn: () =>
        "[2026 - Present] Independent Creative Technologist\n" +
        " > Focusing on High-Fidelity UI.\n\n" +
        "[2022 - 2025] B.Sc (CSAI)\n" +
        " > Realized the gap between theory and application.\n" +
        " > Pivot to Web Engineering initiated.",
    },
    dream: {
      description: "Displays target trajectory.",
      usage: "dream",
      fn: () =>
        "TARGET: High-End Robotics Interfaces\n" +
        "REGION: China / Global Tech Hubs\n" +
        'OBJECTIVE: "Make the machine look human."',
    },
    contact: {
      description: "Open communication channels.",
      usage: "contact",
      fn: () =>
        "Email: vikramramji24@gmail.com\n" +
        "LinkedIn: /in/vikram-ramji-iyer\n" +
        "Location: Secunderabad, Telangana",
    },
    github: {
      description: "Opens GitHub profile.",
      usage: "github",
      fn: () => {
        window.open("https://github.com/vikram-ramji", "_blank");
        return "Redirecting to GitHub Secure Repository...";
      },
    },
  };

  return (
    <MacWindow windowType="cli" title="vikram ~ zsh" width={550} height={500}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={[
            "Initializing V-OS Kernel v2.1.0...",
            "Loading Assets... [OK]",
            "Connecting to Mainframe... [CONNECTED]",
            "------------------------------------------------",
            "Welcome, User.",
            "Type 'help' to view available protocols.",
            "------------------------------------------------",
            "",
          ]}
          promptLabel="vikram@dev:~$"
          promptLabelStyle={{
            color: "#ff79c6",
            fontWeight: "600",
          }}
          inputTextStyle={{
            color: "#f8f8f2",
          }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
