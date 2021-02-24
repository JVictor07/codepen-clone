import PropTypes from "prop-types";
import EditorFilesBlock from "./Block";

import * as S from "./styles";

const EditorFiles = ({ html, css, js, setHtml, setCss, setJs }) => {
  return (
    <S.EditorFiles>
      <EditorFilesBlock
        code={html}
        language="HTML"
        blockTitle="HTML"
        onChange={setHtml}
      />
      <EditorFilesBlock
        code={css}
        language="CSS"
        blockTitle="CSS"
        onChange={setCss}
      />
      <EditorFilesBlock
        code={js}
        blockTitle="JS"
        onChange={setJs}
        language="Javascript"
      />
    </S.EditorFiles>
  );
};

EditorFiles.propTypes = {
  js: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  setJs: PropTypes.func.isRequired,
  setCss: PropTypes.func.isRequired,
  setHtml: PropTypes.func.isRequired,
};

export default EditorFiles;
