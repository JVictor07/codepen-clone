import PropTypes from "prop-types";
import "@reach/tabs/styles.css";

import { useState } from "react";
import * as S from "./styles";
import EditorFilesMobileTabs from "./Tabs";

const EditorFilesMobile = ({ tabPanels }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <S.EditorFilesMobile
      index={tabIndex}
      onChange={(index) => setTabIndex(index)}
    >
      <EditorFilesMobileTabs />
      <S.EditorFilesMobilePanels>
        {tabPanels.map((EditorComponent, index) => (
          <S.HideElement
            key={EditorComponent.key}
            hideElement={index !== tabIndex}
          >
            {EditorComponent}
          </S.HideElement>
        ))}
      </S.EditorFilesMobilePanels>
    </S.EditorFilesMobile>
  );
};

EditorFilesMobile.propTypes = {
  tabPanels: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default EditorFilesMobile;
