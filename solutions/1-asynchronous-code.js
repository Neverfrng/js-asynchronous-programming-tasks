import fs from 'fs';

// BEGIN
export default function print(filePath) {
    fs.readFile(filePath,"utf8",(error,data) => {
        console.log(data);
    })
  }
// END
