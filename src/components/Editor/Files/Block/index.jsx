import PropTypes from "prop-types";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/emacs";
import "codemirror/theme/dracula.css";

import * as S from "./styles";

const EditorFilesBlock = ({ code, onChange, language, blockTitle }) => {
  return (
    <S.EditorFilesBlock>
      <S.EditorFilesBlockHeader>{blockTitle}</S.EditorFilesBlockHeader>
      <CodeMirror
        value={code}
        height="100%"
        options={{
          tabSize: 2,
          mode: language,
          theme: "dracula",
          keyMap: "emacs",
          lineWrapping: true,
        }}
        onChange={(editor) => {
          onChange(editor.getValue());
        }}
      />
    </S.EditorFilesBlock>
  );
};

EditorFilesBlock.propTypes = {
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  blockTitle: PropTypes.string.isRequired,
};

export default EditorFilesBlock;
