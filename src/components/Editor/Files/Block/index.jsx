import PropTypes from "prop-types";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";

const EditorFilesBlock = ({ code, onChange, language }) => {
  return (
    <CodeMirror
      value={code}
      options={{
        tabSize: 2,
        mode: language,
        theme: "monokai",
        keyMap: "sublime",
      }}
      onChange={(editor) => {
        onChange(editor.getValue());
      }}
    />
  );
};

EditorFilesBlock.propTypes = {
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default EditorFilesBlock;
