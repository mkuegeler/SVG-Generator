// Parametric SVG
import * as fs from 'fs';
import { AbstractPoint, AbstractLine, AbstractRectangle, PointDefault } from './abstract';
import { Element } from './markup';

// Get general configuration settings
import config from './config.json'

const SourceJson = `${config.main.DataFolder}/${config.main.SourceFile}.json`;
const ResultJson = `${config.main.DataFolder}/${config.main.ResultFile}.json`;

// const Description = config.main.Description;
// const Version = config.main.Version;

const Root = config.elements.root;

// Define main function
function main() {

  let insert = new AbstractPoint(Root.attributes.x, Root.attributes.y);
  let width = Root.attributes.width;
  let height = Root.attributes.height;
  let root = Root.name;
  
  let viewBox = `${insert.x} ${insert.y} ${width} ${height}`;
  let canvas = new AbstractRectangle(insert, width, height);
  
  let inFile = fs.readFileSync(SourceJson, 'utf-8');
  let inJson = JSON.parse(inFile);

  inJson[root].viewBox = viewBox;
  
  inJson["rect"].x = String(insert.x);
  inJson["rect"].y = String(insert.y);
  inJson["rect"].width = String(width);
  inJson["rect"].height = String(height);

  inJson["circle"].cx = String(canvas.el.cp.x);
  inJson["circle"].cy = String(canvas.el.cp.y);
  inJson["circle"].r = String(canvas.r);

  inJson["ellipse"].cx = String(canvas.el.cp.x);
  inJson["ellipse"].cy = String(canvas.el.cp.y);
  inJson["ellipse"].rx = String((canvas.width/2));
  inJson["ellipse"].ry = String((canvas.height/2));

  writeJson(inJson,ResultJson);


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
      var keyValueString: string = `Element: ${key}: ${a} -> ${attributes[a as keyof typeof attributes]}`;
      console.log(keyValueString);
    }
  }
}

// Write result to new Json file
function writeJson(inJson: object, result: string) {
  // const inFile = fs.readFileSync(src, 'utf-8');
  // const inJson = JSON.parse(inFile);
  fs.writeFile(result, JSON.stringify(inJson), err => {
    if (err) {
      console.error(err);
      return
    } else {
      console.log("File written successfully!");
    }
  })

}
