// Function to find the category and return and object with the appropriate data.
const  findCategory  = function(data){
  let dataobj={};
  if (data=== undefined) {
    dataobj["category_id"] = 5;//uncategorised
    dataobj["description"] = "No description found";
    dataobj["created_at"] = Date.now();
    dataobj["imageurl"] = "https://rokusek.com/wp-content/uploads/2019/12/female-shrug-emoji-1-768x768.jpg";
    dataobj["completed"] = false;
  } else {
    console.log(data)
  if (data[0].displayLink === "www.imdb.com") {
    category = 1;// Movie
  } else if(data[0].displayLink === "www.amazon.ca") {
    category = 2;//products
  }else if(data[0].displayLink === "www.yelp.ca") {
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
