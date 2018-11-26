import utils from "./utils";

export default async function(index) {
  const bodyUrl = `/api/body/${utils.randomNumber(4)}`;
  const eyesUrl = `/api/eye/${utils.randomNumber(15)}`;
  const mouthUrl = `/api/mouth/${utils.randomNumber(12)}`;

  try {
    let body = await utils.promiseRequest(bodyUrl);
    let eyes = await utils.promiseRequest(eyesUrl);
    let mouth = await utils.promiseRequest(mouthUrl);

    utils.mountImage([body, eyes, mouth], index);
  } catch (error) {
    console.log(error);
  }
}
