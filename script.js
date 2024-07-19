var settingsmenu=document.querySelector(".settings-menu");
var darkBtn=document.getElementById("dark-btn");

var dt=localStorage.getItem("theme");
//alert(dt);
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");

}

darkBtn.onclick=function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    var dt=localStorage.getItem("theme");
       // alert(dt);
    
    if(localStorage.getItem("theme")=="true"){
        //alert("hello1");
        localStorage.setItem("theme",false);
        var dt=localStorage.getItem("theme");
        //alert(dt);

    }
    else {
        localStorage.setItem("theme",true);
      //  alert("hello");
    }
    
}



if(localStorage.getItem("theme")=="true"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
  //  alert ("new hello1");
}

else if(localStorage.getItem("theme")=="false"){
    //alert ("new hello");
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
  
}
else{
    localStorage.setItem("theme",true);
  //  alert ("new hello2");
}