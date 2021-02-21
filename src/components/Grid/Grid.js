import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';
import { getColumnWidths } from '../../services/gridFormatters';
import { DEFAULT_GRID_BASE } from '../../services/constants';



function Grid({ gridBase, children }) {

  const childWidths = React.Children.map(children, child => +child.props.width);
  const filledChildWidths = getColumnWidths(gridBase, childWidths);

  return (
    <div className="grid" style={{'--grid-base-size': gridBase}}>
      {React.Children.map(children, (child, index) => (
        React.cloneElement(child, { width: filledChildWidths[index] })
      ))}
    </div>
  )
}

Grid.defaultProps = {
  gridBase: DEFAULT_GRID_BASE,
}

Grid.propTypes = {
  gridBase: PropTypes.number,
  children: PropTypes.node.isRequired,
}

export default Grid

