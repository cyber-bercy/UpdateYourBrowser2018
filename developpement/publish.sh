#!/bin/bash
python ./integrity-umb2.py
python ./integrity-umb2.py umb2.js index-mobile.html umb2.js
cp "./umb2.js" "../test/wikipedia-mef/umb/"
cp "./index.html" "../test/wikipedia-mef/"
cp "./umb2.js" "../test/wikipedia-mef-mobile/umb/"
cp "./index-mobile.html" "../test/wikipedia-mef-mobile/"