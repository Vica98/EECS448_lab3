var link1 ="https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/ural-Feast_2911110065.jpg?itok=GyHi5k3V";
var link2 ="https://www.expatica.com/ru/wp-content/uploads/sites/11/2014/05/RU-Borscht.jpg";
var link3 ="https://www.curiouscuisiniere.com/wp-content/uploads/2018/06/Russian-Oliver-SaladDSC06185-1.jpg";
var link4 ="https://1vu2vab7ghf47835m3t9p5zz-wpengine.netdna-ssl.com/wp-content/uploads/2013/07/Bilini-Russian-food-e1537159749688.jpg";
var link5 ="https://lh4.googleusercontent.com/-FN3JwQMpUF4/Umlkorccp2I/AAAAAAAAJO8/ULKQGWBE6tA/s720/IMG_9754.JPG";
var numberInArray = 0;
var links = [link1, link2, link3, link4, link5];

function next()
{

var thepic = document.getElementById('pic');
  if(numberInArray<4)
  {
    numberInArray++;
  }else
  {
    numberInArray = 0;
  }
  thepic.src = links[numberInArray];
}

function prev()
{

  var thepic = document.getElementById('pic');
  if(numberInArray>0)
  {
    numberInArray--;
  }else
  {
    numberInArray = 4;
  }
  thepic.src = links[numberInArray];
}
