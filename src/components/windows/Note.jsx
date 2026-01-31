import { useEffect, useState } from "react";
import MacWindow from "./MacWindow";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./note.scss";

const Note = () => {
  const [text, setText] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((response) => response.text())
      .then((text) => setText(text))
      .catch((error) => console.error("Error fetching note:", error));
  }, []);

  return (
    <MacWindow windowType="note" title="Notes" width={600} height={400}>
      <div className="note-content">
        {text ? (
          <SyntaxHighlighter
            language="typescript"
            style={vscDarkPlus}
            showLineNumbers
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              background: "transparent",
              fontSize: "1rem",
              lineHeight: "1.5",
            }}
            lineNumberStyle={{
              minWidth: "2em",
              paddingRight: "1em",
              color: "#6e7681",
              textAlign: "right",
            }}
            codeTagProps={{
              style: {
                fontSize: "inherit",
                lineHeight: "inherit",
                fontFamily: "inherit",
              },
            }}
          >
            {text}
          </SyntaxHighlighter>
        ) : (
          <p>Loading note...</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
