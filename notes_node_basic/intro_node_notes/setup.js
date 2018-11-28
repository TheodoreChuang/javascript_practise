console.log("...running some set up code...");

let setupVar = "not global";

global.GLOBALVAR = "my global variable";

global.GLOBALFUNC = function() {
  console.log("my global function");
};
