# -*- coding: utf-8 -*-
"""
Created on Tue May 15 15:23:23 2018

@author: deff-ux430
@python 3
"""
#!/usr/bin/env python

import hashlib
import sys
import fileinput
import base64

def uptade_umb(filechecksum,f1,f):
    filechecksum=base64.b64encode(filechecksum)
    fileinput.close()
    print("encoded : sha256-"+filechecksum.decode('utf-8'))
    ashtype="sha256-"
    d = fileinput.input("./"+f1, inplace=1)
    for line in d:
        if f in line:
            index=line.find(f)
            if "sha" in line[index:]:
                index=line.find("sha")
                line=line[:index]+ashtype+filechecksum.decode('utf-8')+line[index+len(filechecksum.decode('utf-8'))+len(ashtype):]
            else :
                #f1','$sha ->>len f1 + 3
                line=line[:index+len(f)+3]+ashtype+filechecksum.decode('utf-8')+line[index+len(f)+3:]        
        sys.stdout.write(line)
    fileinput.close()
        
def sha256_checksum(filename, block_size=65536):
    sha256 = hashlib.sha256()
    with open(filename, 'rb') as f:
        block=f.read()
        sha256.update(block)
    f.close()
    return sha256.digest()

def main():
        print(sys.argv)
        if len(sys.argv)> 3 :
            print("argument received")
            f, f1, f2 = sys.argv[1:4]
        else:
            f, f1 = "umb2.js", "index.html"
            f2 = f
        checksum = sha256_checksum(f2)
        print(f)
        print(f + "\t" + base64.b64encode(checksum).decode('utf-8'))
        uptade_umb(checksum,f1,f)

if __name__ == '__main__':
    main()