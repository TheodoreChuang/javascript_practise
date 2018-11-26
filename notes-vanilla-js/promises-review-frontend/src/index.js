// import example from "./callback";
// import example from "./promise";
import example from "./await";

// console.log("1");

// mount emoji whenever they are ready
example(1);
example(2);
example(3);
example(4);

// poor design, build then mount emoji in order, very slow, synchronous like
// example(1, () => {
//   example(2, () => {
//     example(3, () => {
//       example(4, () => {});
//     });
//   });
// });

// console.log("2");
