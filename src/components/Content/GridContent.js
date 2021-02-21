import React from 'react'
import PropTypes from 'prop-types'
import Grid from '../Grid/Grid'
import Column from '../Grid/Column'
import { isGridContentValid } from '../../services/gridFormatters';
import { DEFAULT_GRID_BASE } from '../../services/constants';


function GridContent({ gridBase, columns }) {

  if (!isGridContentValid(gridBase, columns)) {
    return 'Invalid Grid';
  }

  return (
    <Grid gridBase={gridBase}>
      {columns.map(({ width, elements }, i) => (
        <Column width={width} key={i}>
          {elements.map(({ text }) => text)}
        </Column>
      ))}

    </Grid>
  )
}

GridContent.defaultProps = {
  gridBase: DEFAULT_GRID_BASE,
}

GridContent.propTypes = {
  gridBase: PropTypes.number,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number,
      elements: PropTypes.array.isRequired
    })
  ).isRequired
}

export default GridContent

