import PropTypes from "prop-types";
import JSZip from "jszip";
import { GrDocumentZip } from "react-icons/gr";
import UIButton from "../../UI/Button";

import * as S from "./styles";
import { downloadOnWeb } from "../../../utils/downloadOnWeb";

import Logo from "../../../assets/logo.png";

const EditorHeader = ({ htmlCode, cssCode, jsCode }) => {
  return (
    <S.Header>
      <S.LogoContainer>
        <img src={Logo} alt="digitalk" />
        <div>
          <h1>Digitalk</h1>
          <span>Codepen Clone</span>
        </div>
      </S.LogoContainer>
      <UIButton
        onClick={() => {
          const zip = new JSZip();
          zip.file("script.js", jsCode);
          zip.file("styles.css", cssCode);
          zip.file("index.html", htmlCode);

          zip.generateAsync({ type: "blob" }).then((blob) => {
            downloadOnWeb(blob, "project.zip");
          });
        }}
      >
        <>
          <GrDocumentZip style={{ marginRight: 5 }} />
          Save
        </>
      </UIButton>
    </S.Header>
  );
};

EditorHeader.propTypes = {
  jsCode: PropTypes.string.isRequired,
  cssCode: PropTypes.string.isRequired,
  htmlCode: PropTypes.string.isRequired,
};

export default EditorHeader;
