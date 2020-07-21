/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
var submit = $(".submit");
var write= $("#write").val();
var blank = $("div");

submit.on("click", doSomething);

function doSomething(){
  location.href = "howAreYouCopy.html";
}
