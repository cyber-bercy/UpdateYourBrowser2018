C:\Anaconda2\python.exe .\jsmin.py .\umb2.js
C:\Anaconda2\python.exe .\integrity-umb2.py umb2.js index.html umb2.min.js
python.exe .\integrity-umb2.py
xcopy.exe /y ".\umb2.min.js" "..\test\wikipedia-mef\umb\umb2.js"
xcopy.exe /y ".\index.html" "..\test\wikipedia-mef\"