function change()
{
borderClick();
backgroundClick();
}

//for border related.................................................................
function borderClick()
{
var redColor = document.getElementById("redBorder");
var greenColor = document.getElementById("greenBorder");
var blueColor = document.getElementById("blueBorder");
var width = document.getElementById("widthBorder");
var message = document.getElementById("message1");
//checking for empty values
if(redColor.value == redColor.defaultValue || greenColor.value == greenColor.defaultValue || blueColor.value == blueColor.defaultValue || width.value == width.defaultValue)
{
alert("Missing parameters for border");
}else
{
  //checking for correct input
  if(redColor.value>255 || redColor.value<0 || greenColor.value>255 || greenColor.value<0 || blueColor.value>255 || blueColor.value<0 || width.value>100 || width.value<0 )
  {
    message.value = "Please, read and follow the value requirements for the border";
    message.style.color = "red";
  }else
  {
    //checking for number input
    if(isNaN(redColor.value) || isNaN(greenColor.value) || isNaN(blueColor.value) || isNaN(width.value))
    {
      message.value = "Please, enter only numbers";
      message.style.color = "red";
    }else
    {
      message.value = message.defaultValue;
      var theColor = 'rgb(' + redColor.value + ',' + greenColor.value + ',' + blueColor.value + ')';
      var paragraph = document.getElementById("paragraph");
      //default setup (have to include to change color and width separately)
      paragraph.style.border = "thick solid blue";
      //new setup
      paragraph.style.borderWidth = width.value + "px" + " " + width.value + "px" + " " +  width.value + "px" + " " +  width.value + "px";
      paragraph.style.borderColor = theColor;
    }

  }
}
}

//for background color related.................................................................
function backgroundClick()
{
  var redColor = document.getElementById("redBackground");
  var greenColor = document.getElementById("greenBackground");
  var blueColor = document.getElementById("blueBackground");
  var paragraph = document.getElementById("paragraph");
  var message = document.getElementById("message2");
  //checking for empty values
  if(redColor.value == redColor.defaultValue || greenColor.value == greenColor.defaultValue || blueColor.value == blueColor.defaultValue)
  {
alert("Missing parameters for background");
}else
{
  //checking for correct input
  if(redColor.value>255 || redColor.value<0 || greenColor.value>255 || greenColor.value<0 || blueColor.value>255 || blueColor.value<0)
  {
    message.value = "Please, read and follow the value requirements for the background";
    message.style.color = "red";
  }else
  {
    //checking for number input
    if(isNaN(redColor.value) || isNaN(greenColor.value) || isNaN(blueColor.value))
    {
      message.value = "Please, enter only numbers";
      message.style.color = "red";
    }else
    {
    message.value = message.defaultValue;
    var theColor = 'rgb(' + redColor.value + ',' + greenColor.value + ',' + blueColor.value + ')';
    paragraph.style.backgroundColor = theColor;
    }
  }
}

}
