const show = document.getElementById("show");
const form = document.getElementById("form");

let f_name = document.getElementById("f_name");
let l_name = document.getElementById("l_name");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let date = document.getElementById("date");
let time = document.getElementById("time");
let language = document.getElementById("language");
var tourlist = document.getElementById("tourList");  

let userName = document.getElementById("user_name");
let userPhone = document.getElementById("user_phone");
let userAddress = document.getElementById("user_address");
let userDate = document.getElementById("user_date");
let userTime = document.getElementById("user_time");
let userLanguage = document.getElementById("user_language");
let userTour = document.getElementById("user_tour");
let userCost = document.getElementById("user_cost");
let fNameError = document.getElementById("fname-error");
let lNameError = document.getElementById("lname-error");
let phoneError = document.getElementById("phone-error");
let addError = document.getElementById("address-error");
let tourError = document.getElementById("tour-error");

var price = 0;

var nameReg = /^[A-Za-z]*$/;
var phoneReg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hi");
  submit = true
  if(nameReg.test(f_name.value) == false || f_name.value ==""){
    fNameError.innerHTML = "Please enter a correct name "
    submit = false;
  }
  else 
    
  if(nameReg.test(l_name.value) == false || l_name.value ==""){
    lNameError.innerHTML = "Please enter a correct name "
    submit = false;
  }
  if(phoneReg.test(phone.value) == false || phone.value ==""){
    phoneError.innerHTML = "Please enter a correct Mobile number "
    submit = false;
  }
  if(address.value ==""){
    addError.innerHTML = "Please enter a correct address "
    submit = false;
  }
  if(tourlist.selectedIndex==0){
    tourError.innerHTML = "Please select a package "
    submit = false;
  }


  if(submit == true){
  userName.innerHTML = `${f_name.value} ${l_name.value}`;
  userPhone.innerHTML = phone.value;
  userAddress.innerHTML = address.value;
  userDate.innerHTML = date.value;
  userTime.innerHTML = time.value;
  userLanguage.innerHTML = language.value;
  userTour.innerHTML = tourList.options[tourList.selectedIndex].text;
  
  if(tourList.selectedIndex==1)
      price = 10000;
    else if(tourList.selectedIndex==2)
      price = 12000;
    else if(tourList.selectedIndex==3)
    price = 14000;
    else
      price = null;
  
  userCost.innerHTML = (price-(0.2*price));

  show.classList.remove("hidden");
  form.classList.add("hidden");
  }
});


