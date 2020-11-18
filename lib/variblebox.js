function runInSandbox(code){
  var fs = require("fs");
  var path = require('path');
  let st = false;
  let e = null;
  fs.writeFileSync(path.join(path.dirname(__filename), "sandbox.js"), code);
  try{
  require(path.join(path.dirname(__filename), "sandbox.js"));
  }catch(e){fs.unlinkSync(path.join(path.dirname(__filename), "sandbox.js"));throw e;}
  st = true;
  fs.unlinkSync(path.join(path.dirname(__filename), "sandbox.js"))
}
module.exports = runInSandbox;
