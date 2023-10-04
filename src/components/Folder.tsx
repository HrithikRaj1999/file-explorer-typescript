import { useState } from "react";
import useOperations from "../hooks/useOperations";

interface FolderProps {
  explorerData: DataType;
  setExplorerData: React.Dispatch<React.SetStateAction<DataType>>;
}

const Folder = ({ explorerData, setExplorerData }: FolderProps) => {
  const [showChildren, setShowChildren] = useState<boolean>(false);
  const [isFolder, setIsFolder] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const { insertElement } = useOperations();

  const toggleShowChildren = () => setShowChildren((prev) => !prev);

  const handleAddButtonClick = (folder: boolean) => {
    setShowChildren(true);
    setIsFolder(folder);
  };

  const handleBlur = (e?: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      insertElement(explorerData, explorerData.id, e.target.value, isFolder);
      setName("");
    }
    setIsFolder(false);
  };

  return (
    <div>
      <div
        className="Parent-div"
        style={{
          display: "flex",
          width: "20rem",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <span onClick={toggleShowChildren}>📂{explorerData.name}</span>
        <div>
          <button
            type="button"
            className="add-folder"
            onClick={() => handleAddButtonClick(true)}
          >
            📁➕
          </button>
          <button
            type="button"
            className="add-file"
            onClick={() => handleAddButtonClick(false)}
          >
            📃➕
          </button>
        </div>
      </div>

      {showChildren && (
        <div
          className="child-div"
          style={{
            marginTop: "0.5rem",
            marginLeft: "40px",
            marginBottom: "0.5rem",
          }}
        >
          {isFolder && (
            <div>
              <span>📂:</span>
              <input
                placeholder="Enter name of folder"
                onChange={(e) => setName(e.target.value)}
                value={name}
                onBlur={handleBlur}
              />
            </div>
          )}
          {explorerData.items.map((item: DataType) => (
            <div key={item.id}>
              {item.isFolder ? (
                <Folder explorerData={item} setExplorerData={setExplorerData} />
              ) : (
                <>
                  <span>📄</span>
                  <span>{item.name}</span>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
