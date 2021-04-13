// Blocks
// var character = document.getElementById("character"); // gets it from html
var scruffs = document.getElementById("scruffs");
var labelScore = document.getElementById("scruffs_score");
var score = 0;

//scruffs.addEventListener("click",function(){jump(character)}); // click and call jump()
scruffs.addEventListener("mouseover",function() {jump(scruffs)});

function jump(cType){
    if(cType.classList == "animate"){return;}
    score +=1;
    labelScore.innerHTML="Scruffs Score: " + score;
    cType.classList.add("animate");
    setTimeout(function() {removeJump(cType)},1000); //300ms = length of animation
};

function removeJump(cType){
    cType.classList.remove("animate");
}

// function checkDead() {
//     let characterTop = parseInt(window.getComputedStyle(character)
//         .getPropertyValue("top"));
//     let blockLeft = parseInt(window.getComputedStyle(block)
//         .getPropertyValue("left"));
//     if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
//         block.style.animation = "none";
//        // alert("Game over");
//         block.style.animation = "block 5s linear";
//     }
// }
//
// setInterval(checkDead, 10); // 10ms