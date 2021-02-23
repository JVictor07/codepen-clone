import PropTypes from "prop-types";

const EditorOutput = ({ code }) => (
  <iframe
    width="100%"
    height="100%"
    srcDoc={code}
    title="output"
    frameBorder="0"
    sandbox="allow-scripts"
  />
);

EditorOutput.propTypes = {
  code: PropTypes.string.isRequired,
};

export default EditorOutput;
