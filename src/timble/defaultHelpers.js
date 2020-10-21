import { getContent } from "./fileReader.js";

export default {
  from: function (context, options) {
    let filePath = context 
      ? context
      : "";
     
    if (!filePath){
      throw "You need to provide a path parameter to the data helper."
    }
  
    let content = getContent(filePath);

    if (options.fn) {
      return options.fn(content);
    } else {
      return content;
    }
  },

  script: function (context) {
    return `<script src="/assets/scripts/${context}"></script>`
  }
}