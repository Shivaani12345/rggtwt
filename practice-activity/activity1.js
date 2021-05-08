score=0;
function update_s(){
    score=score + 1;
    document.getElementById("score").innerHTML="Score: " + score;
}
function save_s(){
    localStorage.setItem("score",score);
}
function NEXT_page(){
    window.location="activity_2.html";
}