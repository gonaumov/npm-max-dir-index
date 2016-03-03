This package is created for separation of the logic for finding a highest number in file's name 
in a directory by regular expression. For example, when in a directory there are  
the following files: 1.txt, 2.text, as a result of calling the function like this:
```
dirIndex('testDir/','^([0-9]+)\.txt$')
```
we will receive 3. 
The function accepts two arguments. The first one is a string - a path to directory. 
The second one must be a regular expression that must have a number as a first backreference. 
If your directory's structure is like this:
```
testDir$ tree -f
.
├── ./1.txt
├── ./2.txt
├── ./3.txt
└── ./4.txt

0 directories, 4 files
```

the below code will return for you 5. 

```
var dirIndex = require('npm-max-dir-index');

console.log(dirIndex('testDir/','^([0-9]+)\.txt$'));
```


If your directory's structure is like this:
```
test1$ tree 
.
├── image1.png
├── image2.png
├── image3.png
└── image4.png

0 directories, 4 files
```


the below code will return for you 5. 

```
var dirIndex = require('npm-max-dir-index');

console.log(dirIndex('test1/','^image([0-9]+)\.png$'));
```

For more information check this
stackoverflow answer: 
[http://stackoverflow.com/questions/34989297/gulp-rename-files-with-ordinal-numbers-starting-index-from-the-higest-number-i/34991039#34991039](http://stackoverflow.com/questions/34989297/gulp-rename-files-with-ordinal-numbers-starting-index-from-the-higest-number-i/34991039#34991039) 
