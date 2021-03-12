 
 // create a "close" button and append it to each list
 var myNodeList= document.getElementsByTagName("LI");
 var i;

 for(i=0;i< myNodeList.length;i++){
 var span =document.createElement("SPAN");
 var txt = document.createTextNode("\u00D7");
 span.className ="close";  
 span.appendChild(txt);
 myNodeList[i].appendChild(span); 
};
 // click on close button to hide a list
 var close = document.getElementsByClassName("close");
 var i;
 for (i=0; i < close.length; i++){
   close[i].onclick = function(){
       var a = this.parentElement;
       a.style.display="none";
   }
 };

 //add a "checked" symbol when clicking on items
 var add = document.querySelector("ul");
 add.addEventListener('click', function(ev){
   if (ev.target.tagName === "LI"){
     ev.target.classList.toggle('checked');
   }
 }, false);
 

/*//create a new list when clicking on add button
 function newElement(){
   var li = document.createElement("li");
   var inputValue  = document.getElementById("inPut").value;
    var x = document.createTextNode(inputValue);
    li.appendChild(x);
    if (inputValue === '') {
      alert( "You must write something!");
      } else{
        document.getElementById("myUL").appendChild(li);
      }
          document.getElementById("inPut").value="";

  var span =document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className ="close";  
  span.appendChild(txt);
  li.appendChild(span);

 for (i=0; i < close.length; i++){
   close[i].onclick = function(){
     var a = this.parentElement;
     a.style.display="none";
      }
    } 
 };*/
 
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 
 let clocktime = new Date();
        let time = document.querySelector('.clockwise');
        time.innerHTML = clocktime.toUTCString();


