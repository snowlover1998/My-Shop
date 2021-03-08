const fs = require('fs');
const path = require('path');

module.exports = {
  imgBinaryToBase64: function (binaryArray) {
    if (!Array.isArray(binaryArray)) {
      let base64data = Buffer.from(binaryArray.image.data).toString('base64');
      binaryArray.image.data = base64data;
      return binaryArray;
    } else {
      var newArray = Array.from(binaryArray).map(element => {
        if (element.image.data) {
          let base64data = Buffer.from(element.image.data).toString('base64');
          element.image.data = base64data;
        }
        return element;
      })
      return newArray;
    }
  },

  homeImgBinaryToBase64: function (binaryArray) {
    if (!Array.isArray(binaryArray)) {
      let base64data = Buffer.from(binaryArray.image[0].data).toString('base64');
      binaryArray.image[0].data = base64data;
    } else {
      var newArray = Array.from(binaryArray).map(element => {
        if (element.image) {
          let base64data = Buffer.from(element.image[0].data).toString('base64');
          element.image[0].data = base64data;
        }
        return element;
      })
      return newArray;
    }
  },

  mulitipleImgToBase64: function (binaryArray) {
    if (binaryArray.image) {
      binaryArray.image.map(element => {
        let base64data = Buffer.from(element.data).toString('base64');
        element.data = base64data;
        return element;
      });
    }
    return binaryArray;
  },

  deleteFile: function (file) {
    fs.unlink("./src/uploads/"+file.filename, (err) => {
      if (err) throw err;
    })
  }
}