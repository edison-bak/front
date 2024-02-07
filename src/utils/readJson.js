const fs = require("fs");

const readJson = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      return;
    }
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  });
};

export default readJson;
