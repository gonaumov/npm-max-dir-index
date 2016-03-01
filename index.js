const fs = require('fs');

exports.maxDirIndex = function (dirPath, regex) {
    var files = fs.readdirSync(dirPath), index = 0;

    files.forEach(function (currentFile) {
        var currentIndex = ((new RegExp(regex)).exec(currentFile) || [, false])[1];
        if (currentIndex && parseInt(currentIndex) >= index) {
            index = ++currentIndex;
        }
    });

    return index;
};
