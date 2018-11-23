// import { unchangeableNumber, add, subtract } from "./file1.js";        // export specific objects
// import * as MathUtils from "./file1.js";                               // named export
import MathUtils from "./file1"; // export default
// import _ from "./node_modules/lodash-es/lodash.default.js";
import _ from "lodash";

console.log(MathUtils.add(4, 5));
console.log(MathUtils.subtract(4, 5));
console.log(MathUtils.unchangeableNumber);

console.log(_.random(20));
