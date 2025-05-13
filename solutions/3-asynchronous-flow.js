import fs from 'fs';

// BEGIN
export const compareFileSizes = (filepath1, filepath2, cb) => {
    fs.stat(filepath1, (error1, stats1) => {
      if (error1) {
        cb(error1);
        return;
      }
      fs.stat(filepath2, (error2, stats2) => {
        if (error2) {
          cb(error2);
          return;
        }
        const result = Math.sign(stats1.size - stats2.size);
        cb(null, result);
      });
    });
};
// END