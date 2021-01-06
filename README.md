#### ExpressRestApi
RESTful API with Node.js, Express, Mongoose using TypeScript

###### package
```json5
{
  "scripts": {
    "dev": "tsc && nodemon ./dist/server.js",
    "prod": "tsc && nodemon ./dist/server.js",
    "start2": "ts-node ./src/server.ts",
    "start": "nodemon src/server.ts"
  },
  "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongoose": "^5.11.10"
  },
  "devDependencies": {
    "@types/body-parser": "^1.19.0",
    "@types/cors": "^2.8.9",
    "@types/express": "^4.17.9",
    "@types/node": "^14.14.20",
    "nodemon": "^2.0.6",
    "ts-node": "^9.1.1",
    "typescript": "^4.1.3"
  }
}
```
 
###### tsconfig
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "moduleResolution": "node",
    "pretty": true,
    "outDir": "./dist",
    "baseUrl": "./src",
    "esModuleInterop": true
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```
