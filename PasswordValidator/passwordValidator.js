function myFunc()
{
      var message = document.getElementById("m");
      var password1 = document.getElementById("p1");
      var password1 = document.getElementById("p1");
      if(p1.value.length < 8)
      {
        message.value = "The password has to be at least 8 characters long.";
        p1.value=p1.defaultValue;
        p2.value=p2.defaultValue;
      }else if(p1.value!=p2.value)
      {
        message.value = "Passwords do not match, try again.";
        p1.value=p1.defaultValue;
        p2.value=p2.defaultValue;
      }else
      {
        message.value = "Password saved successfully!";
      }

}
