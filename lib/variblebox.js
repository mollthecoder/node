function runInSandbox(code){
  var fs = require("fs");
  var path = require('path');
  let st = false;
  let e = null;
  fs.writeFileSync(path.join(path.dirname(__filename), "sandbox.js"), code);
  try{
  require(path.join(path.dirname(__filename), "sandbox.js"));
  }catch(e){fs.unlinkSync(path.join(path.dirname(__filename), "sandbox.js"));throw e;return {e, st};}
  st = true;
  fs.unlinkSync(path.join(path.dirname(__filename), "sandbox.js"))
  return {e, st};
}
module.exports = runInSandbox;
