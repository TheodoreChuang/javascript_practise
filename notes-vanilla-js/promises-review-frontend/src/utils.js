import axios from 'axios';
import mergeImages from 'merge-images';

const randomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
}

const callbackRequest = (url, callback) => {
    promiseRequest(url)
        .then(imageUrl => callback(null, imageUrl))
        .catch(callback);
}

const promiseRequest = (url) => {
    return axios.get(url, { responseType:"blob" })
        .then(res =>  URL.createObjectURL(res.data));
}

const mountImage = (image, index) => {
    let imageArray;

    if (typeof image !== 'object') {
        imageArray = [image];
        const currentImage = document.querySelector('#i'+index).src;
        
        if (currentImage) {
            imageArray.unshift(currentImage);
        }
    } else {
        imageArray = image;
    }

    return mergeImages(imageArray)
        .then(b64 => document.querySelector('#i'+index).src = b64);
}

export default {
    randomNumber,
    callbackRequest,
    promiseRequest,
    mountImage
}