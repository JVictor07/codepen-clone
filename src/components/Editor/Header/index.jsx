// import PropTypes from "prop-types";
import JSZip from "jszip";
import { GrDocumentZip } from "react-icons/gr";
import UIButton from "../../UI/Button";

import * as S from "./styles";
import { downloadOnWeb } from "../../../utils/downloadOnWeb";

const EditorHeader = () => {
  return (
    <S.Header>
      <div>
        logo
        <div>
          <h1>Digitalk</h1>
          <span>Codepen Clone</span>
        </div>
      </div>
      <UIButton
        onClick={() => {
          const zip = new JSZip();
          zip.file("Hello.css", "Hello world\n");
          zip.file("Hello2.js", "Hello world\n");
          zip.file("Hello3.html", "Hello world\n");

          zip.generateAsync({ type: "blob" }).then((blob) => {
            downloadOnWeb(blob, "project.zip");
          });
        }}
      >
        <>
          <GrDocumentZip />
          Save
        </>
      </UIButton>
    </S.Header>
  );
};

EditorHeader.propTypes = {
  // code: PropTypes.string.isRequired,
};

export default EditorHeader;
