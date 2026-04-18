const cloudinary = require("cloudinary").v2;
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});




const uploadImage = async (filename) => {
  const result = await cloudinary.uploader.upload(filename) //ekhane filename ta hocche productController er uploadImage er moddhe je imagePath naame ekta variable pass kora hoyechilo setakei ekhane filename naame pass kora hoyeche. filename ta hocche muloto imagePath jar moddhe ache image er path ta jeta user er image upload korar sathe sathe uploads folder e eshe joma hoy.
  fs.unlinkSync(filename) //image cloudinary te upload howar por server theke mane ekhaner je uploads folder e eshe joma hoyechilo image ta seta delete hoye jabe
  return result; //uporer result variable er moaddhome image cloudinary te upload howar por cloudinary er server ekta response pathay jeta ei result variable e eshe joma hoy. oi response er moddhe thake hocche ekta object jar moddhe ekta field thake secure_url naame jetar moddhe thake cloudinary te je image ta upload hoyeche setar link. ei puro response take return korar maddhome ei res ta chole jacche productController er moddhe je imageUrl ache sekhane. erpor sekhan theke imageUrl.secure_url diye shudhu image er link ta ke database e save kora hocche. ekhane return na dile kaaj korbena
};


module.exports = uploadImage;