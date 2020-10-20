import { getContent } from "./fileReader.js";

export function withData (context) {
  let filePath = context.hash 
    ? context.hash.path
    : "";
   
  if (!filePath){
    throw "You need to provide a path parameter to the data helper."
  }

  let content = getContent(filePath);
  if (context.fn) {
    return context.fn(content);
  } else {
    return content;
  }
}