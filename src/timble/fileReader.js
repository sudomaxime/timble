import fs from "fs";
import path, { resolve } from "path";
import glob from "glob";
import YAML from "yaml";
import markdown from "marked";

const cwd = process.cwd();
const contentPath = path.resolve(cwd, "./src/content");
const allowedExtensions = ["json", "yaml", "md"];
const dirPaths = readContentDir();

/**
 * Returns all the files in a directory
 * recursively and synchronously
 */
export function readContentDir () {
  let extensionsRegexp = allowedExtensions.join("|");
  return glob.sync(contentPath + `/**/*.?(${extensionsRegexp})`);
}

/**
 * Finds a file with yaml, json or md format and parses
 * the data into a javascript object to be used in templates.
 * 
 * @param {string} filePath The path starting from the content folder
 */
export function getContent (filePath) {
  const resolvedPath = dirPaths.find(p => p.includes(filePath));
  if (!resolvedPath) {
    throw `Could not find file with path ${filePath} inside the content folder.`;
  }

  const ext = path.extname(resolvedPath);
  const buffer = fs.readFileSync(resolvedPath);

  if (ext === ".json") {
    return JSON.parse(buffer.toString());
  }

  if (ext === ".yaml") {
    return YAML.parse(buffer.toString());
  }

  if (ext === ".md") {
    return markdown(buffer.toString());
  }
}

