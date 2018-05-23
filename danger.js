function alertTest() {
    alert("danger! danger!");
}
/*document.getElementById("button1").onclick=function(){
    alertTest();
}*/
window.onload=function(){
    document.getElementById("button1").onclick=function(){
        alertTest();
    }
}