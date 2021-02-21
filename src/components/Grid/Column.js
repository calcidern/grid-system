import React from 'react';
import PropTypes from 'prop-types';
import './Column.css';

function Column({width, children}) {
  return (
    <div className="column" style={{'--column-width': width}}>
      {children}
    </div>
  )
}

Column.propTypes = {
  width: PropTypes.number,
  children: PropTypes.node.isRequired
}

export default Column

