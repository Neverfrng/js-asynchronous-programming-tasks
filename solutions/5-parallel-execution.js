import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export function getDirectorySize(dirPath, callback) {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        callback(err);
        return;
      }
  
      const fullPaths = files.map(file => path.join(dirPath, file));
  
      async.map(fullPaths, fs.stat, (err, stats) => {
        if (err) {
          callback(err);
          return;
        }
  
        const fileStats = stats.filter(stat => stat.isFile());
        const totalSize = _.sumBy(fileStats, 'size');
  
        callback(null, totalSize);
      });
    });
  }
  
// END
