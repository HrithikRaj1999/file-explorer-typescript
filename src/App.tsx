import { useState } from "react";
import Folder from "./components/Folder";
import explorerData from "./data/data";

function App() {
  const [data, setData] = useState(explorerData);
  return (
    <>
      <Folder explorerData={data} setExplorerData={setData} />
    </>
  );
}

export default App;
