import { useState } from "react";
import EditorFiles from "./Files";
import EditorHeader from "./Header";
import EditorOutput from "./Output";

import * as S from "./styles";

const Editor = () => {
  const [completeCode, setCompleteCode] = useState("");

  return (
    <S.Editor>
      <EditorHeader />
      <EditorFiles setCompleteCode={setCompleteCode} />
      <EditorOutput code={completeCode} />
    </S.Editor>
  );
};

export default Editor;
