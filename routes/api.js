require('dotenv').config();
const request = require('request');
const key = process.env.DB_KEY;
const cx = process.env.DB_CX
// let query =process.argv[2];
// let query;

const  findCategory  = function(data, query){
  let dataobj={};
  if (data.displayLink === "www.imdb.com") {
    category = 1;//categories of movie
  } else if(data.displayLink === "www.amazon.ca") {
    category =2;//products
  }else if(data.displayLink === "www.yelp.ca") {
    category =3 ;//food
  } else {
    category = 4 //to read;
  }
dataobj["category_id "] = category;
dataobj["title "] = query;
dataobj["description"] = data.snippet;
dataobj["created_at"] = Date.now();
dataobj["imageurl"] = data.pagemap.cse_thumbnail[0].src
dataobj["completed"] = 0;
console.log(dataobj);
return (dataobj);

};

// request(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}`, (error, response, body) => {
//   let data =JSON.parse(body);
//   // console.log(data.items[1]);
//   findCategory(data.items[1]);


// });

module.exports = findCategory;
