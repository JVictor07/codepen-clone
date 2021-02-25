import PropTypes from "prop-types";
import "@reach/tabs/styles.css";
import { useWindowWidth } from "@react-hook/window-size";
import EditorFilesBlock from "./Block";

import * as S from "./styles";
import EditorFilesMobile from "./Mobile";

const EditorFiles = ({ html, css, js, setHtml, setCss, setJs }) => {
  const windowWidth = useWindowWidth();

  const editors = [
    <EditorFilesBlock
      key="0"
      code={html}
      language="HTML"
      blockTitle="HTML"
      onChange={setHtml}
    />,
    <EditorFilesBlock
      key="1"
      code={css}
      language="CSS"
      blockTitle="CSS"
      onChange={setCss}
    />,
    <EditorFilesBlock
      key="2"
      code={js}
      blockTitle="JS"
      onChange={setJs}
      language="Javascript"
    />,
  ];

  if (windowWidth <= 1020) {
    return <EditorFilesMobile tabPanels={editors} />;
  }

  return (
    <S.EditorFiles>
      {editors.map((EditorComponent) => EditorComponent)}
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
