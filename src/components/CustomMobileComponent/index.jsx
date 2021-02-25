import { useWindowWidth } from "@react-hook/window-size";
import PropTypes from "prop-types";

const CustomMobileComponent = ({
  children,
  MobileComponent,
  DesktopComponent,
}) => {
  const windowWidth = useWindowWidth();

  if (windowWidth <= 1020) {
    return <MobileComponent>{children}</MobileComponent>;
  }

  if (DesktopComponent) {
    return <DesktopComponent>{children}</DesktopComponent>;
  }

  return <>{children}</>;
};

CustomMobileComponent.propTypes = {
  children: PropTypes.element.isRequired,
  MobileComponent: PropTypes.elementType.isRequired,
  DesktopComponent: PropTypes.elementType.isRequired,
};

export default CustomMobileComponent;
