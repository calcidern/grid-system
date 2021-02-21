# React grid system

This application generates UI grid based on content data of given structure. It checks if the content is valid based on the Grid size and Columns' widths, and is able to dynamically alocate available grid space to columns.

To display the content the system uses a simple solution based on `CSS Grid Layout` and `CSS Custom Properties`. It uses given or evaluated column width to place it on the DOM.

The evaluation of column width is the most complex part. First we need to find which columns are flexible (don't have a width assigned) and how much space is left for them. Then we distribute the available space as evelny as possible with more emphasis on first colums ( width can be only described in discrete numbers which corespond to the Grid columns).

Exporting to HTML uses React inbuilt mechanism and it generates the output the same way as it does to update the DOM.

Exporting to JSON is even simpler, as it just uses the `content` data based on which the grid is generated. Every change that the user wants to make to the grid needs to be made on the `content` first, and then it is propagated to the components. If the content management is too complicated using react application state, a library for state management like `redux` is recommended.

For now the content supports only `text` elements, but it can be easly exteded to display `img`, or `video` elements if the source is provided.

Grid column number is customizable and it doesn't impact the functionality. Validation and column width evaluation doesn't make assumbtions about the grid size. 
