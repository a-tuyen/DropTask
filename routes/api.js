require('dotenv').config();
const request = require('request');
const axios = require('axios');
const key = process.env.DB_KEY;
const cx = process.env.DB_CX;

const  findCategory  = function(data){
  let dataobj={};

  if (data.displayLink === "www.imdb.com") {
    category = 1;//categories of movie
  } else if(data.displayLink === "www.amazon.ca") {
    category = 2;//products
  }else if(data.displayLink === "www.yelp.ca") {
    category = 3 ;//food
  } else {
    category = 4 //to read;
  }

  dataobj["category_id"] = category;
  dataobj["description"] = data.snippet;
  dataobj["created_at"] = Date.now();
  dataobj["imageurl"] = data.pagemap.cse_thumbnail[0].src
  dataobj["completed"] = false;
  // console.log(dataobj);
  return dataobj;
};

module.exports = findCategory;



axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
