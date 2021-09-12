# Typescript-simple-algorithom-OOPs-and-compiler-config

Topic: 1
    TO config a tscompilor here I used nodemon and concurrently.
    How to configure :

     a. "tsc init"  command to bring tsconfig file.In this file uncomment rootdir and outdir,here specifiy your dircetroy  for [.ts] file and [.js] file. 
     [.ts] file is the src file and its directory should be in rootdir. [.js] file  is the build file and its directory should be in outdir.

     b.To make auto compile and to detect changes in code  i used nodemon and concurrently.So first i installed['npm init -y'] pakage.json then nodemon 
     and concurrently["npm install nodemon concurrently"]

     c. After installing nodemon and concurrently,I added below script inside pakage.json file 
                "scripts": {
            "start:build":"tsc -w",
            "start:run": "nodemon build/index.js",
            "start":"concurrently npm:start:*"
        }
     d.To run "npm start"
