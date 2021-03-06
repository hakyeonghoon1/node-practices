## mysite powered by node.js(express)

#### 설치 패키지
``` bash
[mysite] $ npm  i express                        (1)
[mysite] $ npm  i ejs                            (2)
[mysite] $ npm  i mysql2                         (7)
[mysite] $ npm  i express-session                (9)
[mysite] $ npm  i sequelize                      (8)
[mysite] $ npm  i dotnev                         (4)
[mysite] $ npm  i multer                         (11)
[mysite] $ npm  i winston                        (5)    logging
[mysite] $ npm  i winston-daily-rotate-file      (6)    logging
[mysite] $ npm  i moment                         (10)

[mysite] $ npm  i -D nodemon                     (3)
[mysite] $ npm  i -D mocha
[mysite] $ npm  i -D chai
```
#### script in package.json
```json
    "scripts": {
    "start": "node index.js",
    "debug": "nodemon index.js",
    "test" : "npx mocha"
    }
```
#### project stucture
<pre>
/mysite
    |--- index.js
    |--- package.json
    |--- package-lock.json
    |--- [node-modules]
    |--- test
    |--- logging
    |--- [logs]
    |       |--- [error]
    |--- [multer-temporary-store]
    |--- config
    |--- public
    |       |--- [upload-images]
    |       |--- assets
    |       |       |--- css
    |       |       |--- images
    |       |       |--- js
    |--- routes
    |--- controllers
    |       |--- admin
    |--- models
    |--- views
    |       |--- main
    |       |--- user
    |       |--- board
    |       |--- guestbook
    |       |--- gallery
    |       |--- includes
    |       |--- admin  
</pre>