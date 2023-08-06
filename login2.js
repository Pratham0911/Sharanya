function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
if(username=="Pratham Saxena"&& password=="hello") {
   window.open("Prahlad.html")
    return false;
}
else{
    alert("Currently you doesn't have enough sense to open.");
}
}