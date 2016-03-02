This package is created for separate logic for finding a highest numbers from files 
located into directory by regular expression. for example when into directory is 
presented files: 1.txt, 2.text we must return 3. If your directory structure is like this:
```
testDir$ tree -f
.
├── ./1.txt
├── ./2.txt
├── ./3.txt
└── ./4.txt

0 directories, 4 files
```

The below code will return for you 5. 

```
var dirIndex = require('npm-max-dir-index');

console.log(dirIndex('testDir/','^([0-9]+)\.txt$'));

```

For more information check this
stackoverflow question: 
[http://stackoverflow.com/questions/34989297/gulp-rename-files-with-ordinal-numbers-starting-index-from-the-higest-number-i/34991039#34991039](http://stackoverflow.com/questions/34989297/gulp-rename-files-with-ordinal-numbers-starting-index-from-the-higest-number-i/34991039#34991039) 
