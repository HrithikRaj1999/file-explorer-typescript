const explorerData = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: "5",
              name: "hello.html",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "public_nested_file",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "8",
          name: "App.js",
          isFolder: false,
          items: [],
        },
        {
          id: "9",
          name: "Index.js",
          isFolder: false,
          items: [],
        },
        {
          id: "10",
          name: "styles.css",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      items: [],
    },
    {
      id: "12",
      name: "newFolder",
      isFolder: true,
      items: [
        {
          id: "13",
          name: "file1.txt",
          isFolder: false,
          items: [],
        },
        {
          id: "14",
          name: "file2.txt",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "15",
      name: "anotherFolder",
      isFolder: true,
      items: [
        {
          id: "16",
          name: "subfolder",
          isFolder: true,
          items: [
            {
              id: "17",
              name: "subfile.txt",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "18",
          name: "file3.txt",
          isFolder: false,
          items: [],
        },
      ],
    },
  ],
};

export default explorerData;
