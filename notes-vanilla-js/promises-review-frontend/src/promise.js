import utils from "./utils";

export default function(index) {
  const bodyUrl = `/api/body/${utils.randomNumber(4)}`;
  const eyesUrl = `/api/eye/${utils.randomNumber(15)}`;
  const mouthUrl = `/api/mouth/${utils.randomNumber(12)}`;

  // Promise Chaining
  //   return utils
  //   .promiseRequest(bodyUrl)
  //   .then(body => {
  //     utils.mountImage(body, index);
  //     return utils.promiseRequest(eyesUrl);
  //   })
  //   .then(eyes => {
  //     utils.mountImage(eyes, index);
  //     return utils.promiseRequest(mouthUrl);
  //   })
  //   .then(mouth => {
  //     utils.mountImage(mouth, index);
  //   })
  //   .catch(err => console.log(err));
  // }

  // Promise Nested
  // return utils
  //   .promiseRequest(bodyUrl)
  //   .then(body => {
  //     return utils.promiseRequest(eyesUrl).then(eyes => {
  //       return utils.promiseRequest(mouthUrl).then(mouth => {
  //         utils.mountImage([body, eyes, mouth], index);
  //       });
  //     });
  //   })
  //   .catch(err => console.log(err));

  // Promise.all
  let requests = [
    utils.promiseRequest(bodyUrl),
    utils.promiseRequest(eyesUrl),
    utils.promiseRequest(mouthUrl)
  ];
  Promise.all(requests)
    .then(responses => {
      // console.log(responses);
      utils.mountImage(responses, index);
    })
    .catch(err => console.log(err));
}
