import React, { PropTypes } from 'react';

export const CodePen = ({
  name, user, id,
  height = 400,
  themeId = '29126',
  bgColor = '#fff',
  type = 'result',
  editable = false,
}) => (
  <div style={{ backgroundColor: bgColor }}>
    <iframe
      height={height}
      scrolling="no"
      title={name}
      src={
        `//codepen.io/${user}/embed/${id}/?height=${height}&theme-id=${themeId}&default-tab=${type}&embed-version=2${editable ? '&editable=true' : ''}`
      }
      frameBorder="no"
      allowTransparency="true"
      allowFullScreen="true"
      style={{
        width: '100%',
        border: 'none',
        backgroundColor: bgColor,
      }}
    >
      See the Pen
      <a href={`http://codepen.io/${user}/pen/${id}`}>{ name }</a>
      by <a href={`http://codepen.io/${user}`}>@{user}</a>
      on <a href="http://codepen.io">CodePen</a>.
    </iframe>
  </div>
);

CodePen.propTypes = {
  name: PropTypes.string,
  user: PropTypes.string,
  id: PropTypes.string,
  height: PropTypes.number,
  bgColor: PropTypes.string,
  themeId: PropTypes.string,
  type: PropTypes.string,
  editable: PropTypes.bool,
};
