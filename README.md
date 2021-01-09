# my-lambdafunction-jest-typescript
A simple async lambda function defined in Typescript with Jest unit tests

## Packaging

Uses npm only, e.g. not Webpack.

Run build to:
- transpile typescript into the /lib folder
- copy the package into the /lib folder
- cd /lib
- *npm install --production* to create a node_modules folder sans devDependencies
- move app.js back a directory to be in the root of the distro package
```
$ npm run build
```

Then package the contents of the /lib folder:
```
$ npm pack
``` 



