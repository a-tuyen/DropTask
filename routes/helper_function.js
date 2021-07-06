// Function to find the category and return and object with the appropriate data.
const  findCategory  = function(data){
  let dataobj = {};
  if (data === undefined) {
    dataobj["category_id"] = 5;//uncategorised
    dataobj["description"] = "No description found";
    dataobj["created_at"] = Date.now();
    dataobj["imageurl"] = "https://www.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg";
    dataobj["completed"] = false;
  } else {
  if (data[0].displayLink === "www.imdb.com") {
    category = 1;// Movie
  } else if (data[0].displayLink === "www.amazon.ca") {
    category = 2;//products
  } else if (data[0].displayLink === "www.yelp.ca") {
    category = 3 ;//food
  } else {
    category = 4 //to read;
  }
  dataobj["category_id"] = category;
  dataobj["description"] = data[0].snippet;
  dataobj["created_at"] = Date.now();
  dataobj["imageurl"] = data[0].pagemap.cse_thumbnail[0].src
  dataobj["completed"] = false;
 }
  return dataobj;
};

module.exports = findCategory;
