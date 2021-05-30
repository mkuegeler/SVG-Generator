// Parametric SVG
import * as fs from 'fs';
import { AbstractPoint, AbstractLine } from './abstract';
import { Element } from './markup';

// Get general configuration settings
// import config from './config.json'

// const SourceJson = `${config.main.DataFolder}/${config.main.SourceFile}.json`;
// const ResultJson = `${config.main.DataFolder}/${config.main.ResultFile}.json`;

// const Description = config.main.Description;
// const Version = config.main.Version;

// Define main function
function main() {

  // writeJson(SourceJson, ResultJson);
  // loopJson(SourceJson);

  // Abstract geometries: Test
  let point = new AbstractPoint().el;
  console.log(point);

  // Abstract geometries: Line
  let line = new AbstractLine().el;
  console.log(line);

}

// Run main function
main();

// Support functions
// Looping through JSON
function loopJson(src: string) {
  let inFile = fs.readFileSync(src, 'utf-8');
  let inJson = JSON.parse(inFile);
  
  for (const key in inJson) {
    var attributes: object = inJson[key as keyof typeof inJson];
    for (const a in attributes) {
      var keyValueString:string = `Element: ${key}: ${a} -> ${attributes[a as keyof typeof attributes]}`;
      console.log(keyValueString);
    }
  }
}

// Write result to new Json file
function writeJson(src: string, result: string) {
  const inFile = fs.readFileSync(src, 'utf-8');
  const inJson = JSON.parse(inFile);


  fs.writeFile(result, JSON.stringify(inJson), err => {
    if (err) {
      console.error(err);
      return
    } else {
      console.log("File written successfully!");
    }
  })

}




