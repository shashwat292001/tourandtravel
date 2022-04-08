function tourListdrop() {  
    var mylist = document.getElementById("tourList");  
    var price = 0
    if(mylist.selectedIndex==1)
      price = 10000;
    else if(mylist.selectedIndex==2)
      price = 12000;
    else if(mylist.selectedIndex==3)
    price = 14000;
    else
      price = null
    document.getElementById("cost-name").innerHTML ="Package for " + mylist.options[mylist.selectedIndex].text;
    document.getElementById("cost-val").innerHTML = "costs " +  price;
    
    
    }  
  
  var likeButton = document.getElementById("likes");
  var count = 100;
  likeButton.onclick = function() {
    count += 1;
    likeButton.innerHTML = "❤️ " + count;
    console.log(count);
    alert("During the last month " + count + " users were interested in this package");

  };
  
  var likeButton2 = document.getElementById("likes-2");
  var count2 = 131;
  likeButton2.onclick = function() {
    count2 += 1;
    likeButton2.innerHTML = "❤️ " + count2;
    console.log(count);
    alert("During the last month " + count2 + " users were interested in this package");

  };
  
  var likeButton3 = document.getElementById("likes-3");
  var count3 = 122;
  likeButton3.onclick = function() {
    count3 += 1;
    likeButton3.innerHTML = "❤️ " + count3;
    console.log(count);
    alert("During the last month " + count3 + " users were interested in this package");

  };
  