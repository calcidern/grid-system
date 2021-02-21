import { toSum } from "./utils";

export function getFillingWidths(space, columns) {
  const widths = Math.floor(space / columns);
  const rest = space % columns;

  return Array(columns)
    .fill(widths)
    .map((width, i) => i < rest ? width + 1 : width)
}

export function getColumnWidths(base, widths) {
  const usedWidth = widths.filter(Boolean).reduce(toSum, 0);
  const remainingWidth = base - usedWidth;

  const undefinedWidthEntries = widths
    .map((width, index) => [index, width])
    .filter(([_, width]) => !width);

  const newWidths = getFillingWidths(remainingWidth, undefinedWidthEntries.length);

  const mappedWidths = Object.fromEntries(
    undefinedWidthEntries.map(([oldIndex], i) => [oldIndex, newWidths[i]])
  );

  return widths.map((width, index) => mappedWidths[index] || width);

}

export function isGridContentValid(gridBase, columns) {

  const columnSpan = columns.map(({ width }) => width || 1).reduce(toSum, 0);
  const areAllFixed = columns.every(({ width }) => width);
  const areAllDisplayable = columns.every(({ width }) => width ? width > 0 : true);

  if (!areAllDisplayable) {
    return false;
  }
  if (columnSpan > gridBase) {
    return false;
  }
  if (areAllFixed && columnSpan < gridBase) {
    return false;
  }
  return true;
}