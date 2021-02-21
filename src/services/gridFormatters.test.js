import { getColumnWidths, getFillingWidths, isGridContentValid } from "./gridFormatters"
import { toSum } from "./utils";

describe('gridFormatters', () => {
  describe('getFillingWidths()', () => {
    it('should distribute space evenly', () => {
      const result = getFillingWidths(12, 4);
      expect(result).toEqual([3, 3, 3, 3]);
    });

    it('should apply leftover space to first elements', () => {
      const result = getFillingWidths(10, 4);
      expect(result).toEqual([3, 3, 2, 2]);
    });

    it('should match distributed space to available space', () => {
      const result = getFillingWidths(10, 4);
      expect(result.reduce(toSum, 0)).toEqual(10);
    });
  });

  describe('getColumnWidths()', () => {
    it('should keep the widths if all columns are fixed', () => {
      const result = getColumnWidths(12, [6,3,2,1]);
      expect(result).toEqual([6,3,2,1]);
    });

    it('should update only columns with not defined widths', () => {
      const result = getColumnWidths(12, [6,0,2,0]);
      expect(result).toEqual([6, 2, 2, 2]);
    });

    it('should match distributed space to available space', () => {
      const result = getColumnWidths(80, [6,0,2,0]);
      expect(result.reduce(toSum, 0)).toEqual(80);
    });
  });

  describe('isGridContentValid()', () => {
    it('should be invalid when there is a column with invalid width', () => {
      const columns = [
        {width: 6},
        {width: -1},
        {width: 2},
        {width: undefined},
      ]
      const result = isGridContentValid(12, columns);
      expect(result).toEqual(false);
    });

    it('should be invalid when sum of column widths is too big', () => {
      const columns = [
        {width: 6},
        {width: 10},
        {width: 2},
        {width: undefined},
      ]
      const result = isGridContentValid(12, columns);
      expect(result).toEqual(false);
    });

    it('should be invalid when sum of column widths is too small and fixed', () => {
      const columns = [
        {width: 6},
        {width: 1},
        {width: 2},
        {width: 1},
      ]
      const result = isGridContentValid(12, columns);
      expect(result).toEqual(false);
    });

    it('should be valid when sum of column widths is too small but one column is flexible', () => {
      const columns = [
        {width: 6},
        {width: 1},
        {width: 2},
        {width: undefined},
      ]
      const result = isGridContentValid(12, columns);
      expect(result).toEqual(true);
    });

  })


})
