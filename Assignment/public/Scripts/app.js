/* app.js
   Name: Indrajith Ram Loganathan
   Student ID: 301248231
   Date: 12/02/2023
*/



(function () {
    function start() {
        console.log("App Started...");
    }
    window.addEventListener("load", start);
})();

// Script for the Alert message afte rsubmitting webform in conatact page 

function alertMessage() {
    var name = document.getElementById("name").value;
    alert("Hello " + name + "! Thank you for reaching out. Will respond to you shortly!\n You will be redirected to Home page");
}