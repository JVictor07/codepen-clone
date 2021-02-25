import { memo } from "react";
import PropTypes from "prop-types";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/emacs";
import "codemirror/theme/dracula.css";

import { useWindowWidth } from "@react-hook/window-size";
import * as S from "./styles";
import CustomMobileComponent from "../../../CustomMobileComponent";

const EditorFilesBlock = ({ code, onChange, language, blockTitle }) => {
  const windowWidth = useWindowWidth();

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      data-cy={`editor_files_block_${blockTitle}`}
    >
      <CustomMobileComponent
        DesktopComponent={S.EditorFilesBlock}
        MobileComponent={S.EditorFilesBlockMobile}
      >
        <>
          {windowWidth > 1020 && (
            <S.EditorFilesBlockHeader>{blockTitle}</S.EditorFilesBlockHeader>
          )}
          <CodeMirror
            value={code}
            height="100%"
            options={{
              tabSize: 2,
              mode: language,
              theme: "dracula",
              keyMap: "emacs",
              autofocus: true,
              autoRefresh: true,
              lineWrapping: true,
            }}
            onChange={(editor) => {
              onChange(editor.getValue());
            }}
          />
        </>
      </CustomMobileComponent>
    </div>
  );
};

EditorFilesBlock.propTypes = {
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  blockTitle: PropTypes.string.isRequired,
};

export default memo(EditorFilesBlock);
