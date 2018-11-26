import utils from "./utils";

export default function(index, callback) {
  const bodyUrl = `/api/body/${utils.randomNumber(4)}`;
  const eyesUrl = `/api/eye/${utils.randomNumber(15)}`;
  const mouthUrl = `/api/mouth/${utils.randomNumber(12)}`;

  // --- CALLBACK METHOD --- get body, eyes, mouth image
  return utils.callbackRequest(bodyUrl, function(err, body) {
    // get body image
    if (err) {
      console.log(err);
      return;
    }
    utils.mountImage(body, index);

    // get eyes image
    utils.callbackRequest(eyesUrl, function(err, eyes) {
      if (err) {
        console.log(err);
        return;
      }
      utils.mountImage(eyes, index);

      // get mouth image
      utils.callbackRequest(mouthUrl, function(err, mouth) {
        if (err) {
          console.log(err);
          return;
        }
        // sent images once all images are ready
        utils.mountImage([body, eyes, mouth], index);
        // callback();
      });
    });
  });
}
