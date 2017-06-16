import React, { PropTypes } from 'react';

export const CodeAscii = ({ code, diagram, size = 4 }) => (
  <div className="mt4 flex items-stretch">
    <pre className={`tl bg-code mr3 f${size} pa3 mv0 lh-copy code flex-auto`}>{
      code
    }</pre>
    <pre className={`tl bg-code f${size} pa3 mv0 lh-solid code flex-auto`}>{
      diagram
    }</pre>
  </div>
);

CodeAscii.propTypes = {
  code: PropTypes.string,
  diagram: PropTypes.string,
  size: PropTypes.number,
};
