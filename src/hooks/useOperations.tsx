const useOperations = () => {
  const insertElement = (
    treeData: DataType,
    _id: string,
    name: string,
    isFolder: boolean
  ): DataType => {
    if (treeData.id === _id && treeData.isFolder) {
      treeData.items.unshift({
        id: new Date().getTime(),
        name,
        isFolder,
        items: [],
      });
      return treeData;
    }
    const latestTreeData: DataType = treeData.items.map(
      (itemPerIndex: DataType) =>
        insertElement(itemPerIndex, _id, name, isFolder)
    );
    return { ...treeData, items: latestTreeData };
  };
  const deleteElement = () => {};
  const searchElement = () => {};
  const updateElement = () => {};

  return { insertElement, deleteElement, searchElement, updateElement };
};

export default useOperations;
