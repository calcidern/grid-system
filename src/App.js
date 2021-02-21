import './App.css';
import { useState } from 'react';
import GridContent from './components/Content/GridContent';
import ReactDOMServer from "react-dom/server";

const defaultContetnt = {
  gridBase: 12,
  columns: [
    { width: 2, elements: [{ text: 'colun1' }] },
    { elements: [{ text: 'colun2' }] },
    { elements: [{ text: 'colun3' }] },
  ]
}

function App() {

  const [content] = useState(defaultContetnt)

  const gridToJson = () => {
    console.log(content);
  }

  const gridToHtml = () => {
    console.log(ReactDOMServer.renderToStaticMarkup(
      <GridContent gridBase={content.gridBase} columns={content.columns} />
    ));
  }

  return (
    <div className="App">
      <button onClick={gridToJson}>To JSON</button>
      <button onClick={gridToHtml}>To HTML</button>
      <GridContent gridBase={content.gridBase} columns={content.columns} />
    </div>
  );
}

export default App;
