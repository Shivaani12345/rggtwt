function B(){
    window.location="activity_1.html";
}
function gS(){
    score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h1>Score: " + score +"</h1>";
}