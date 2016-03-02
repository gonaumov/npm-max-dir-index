const fs = require('fs');

module.exports = function (dirPath, regex) {
    var files = fs.readdirSync(dirPath), index = 0, re = new RegExp(regex, "i");

    files.forEach(function (currentFile) {
        var currentIndex = (re.exec(currentFile) || [, false])[1];
        if (currentIndex && parseInt(currentIndex) >= index) {
            index = ++currentIndex;
        }
    });

    return index;
};