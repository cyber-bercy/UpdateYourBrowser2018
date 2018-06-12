# -*- coding: utf-8 -*-
"""
Created on Tue May 15 15:23:23 2018

@author: deff-ux430
"""
#!/usr/bin/env python

import hashlib
import sys
import fileinput
import base64

def uptade_umb(filechecksum,f1,f):
    filechecksum=base64.b64encode(filechecksum)
    fileinput.close()
    print "encoded : sha256-",filechecksum
    ashtype="sha256-"
    d = fileinput.input("index.html", inplace=1)
    compt=0
    for line in d:
        line=line.decode('utf-8')
        if f in line:
            index=line.find(f)
            if "sha" in line[index:]:
                index=line.find("sha")
                line=line[:index]+ashtype+filechecksum+line[index+len(filechecksum)+len(ashtype):]
                 
            else :
                #f1','$sha ->>len f1 + 3
                line=line[:index+len(f1)]+ashtype+filechecksum+line[index+len(f1):]        
        sys.stdout.write(line.encode('utf-8'))
    fileinput.close()
        
def sha256_checksum(filename, block_size=65536):
    sha256 = hashlib.sha256()
    with open(filename, 'rb') as f:
        block=f.read()
        sha256.update(block)
    f.close()
    return sha256.digest()

def main():
        if len(sys.argv)>1 :
            f,f1=sys.argv[1:3]
        else:
            f,f1="umb2.js","index.html"
        checksum = sha256_checksum(f)
        print(f + '\t' + checksum)
        uptade_umb(checksum,f1,f)

if __name__ == '__main__':
    main()