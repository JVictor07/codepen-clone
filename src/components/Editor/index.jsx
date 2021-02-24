import { useEffect, useState } from "react";
import EditorFiles from "./Files";
import EditorOutput from "./Output";

import { defaultCode } from "./defaultCode";

import * as S from "./styles";
import EditorHeader from "./Header";

const Editor = () => {
  const [js, setJs] = useState(defaultCode.js);
  const [css, setCss] = useState(defaultCode.css);
  const [html, setHtml] = useState(defaultCode.html);
  const [completeCode, setCompleteCode] = useState("");

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
    <S.Editor>
      <EditorHeader htmlCode={html} cssCode={css} jsCode={js} />
      <EditorFiles
        js={js}
        css={css}
        html={html}
        setJs={setJs}
        setCss={setCss}
        setHtml={setHtml}
      />
      <EditorOutput code={completeCode} />
    </S.Editor>
  );
};

export default Editor;
