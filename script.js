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

const loginForm = document.getElementByID("loginForm");
const loginButton = document.getElementByID("enterUser");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        console.log("error");
    }
}