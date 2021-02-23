import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import EditorFilesBlock from "./Block";

const EditorFiles = ({ setCompleteCode }) => {
  const [js, setJs] = useState("");
  const [css, setCss] = useState("");
  const [html, setHtml] = useState("");

  useEffect(() => {
    setCompleteCode(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `);
  }, [html, css, js]);

  return (
    <div>
      <EditorFilesBlock code={html} language="HTML" onChange={setHtml} />
      <EditorFilesBlock code={css} language="CSS" onChange={setCss} />
      <EditorFilesBlock code={js} language="Javascript" onChange={setJs} />
    </div>
  );
};

EditorFiles.propTypes = {
  setCompleteCode: PropTypes.func.isRequired,
};

export default EditorFiles;
