(function () {
    let navbar = document.querySelector('#navbar');
    let hamburger = document.querySelector('#hamburger');
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
})()

function firstFunction() {
    var x = document.getElementById("firstInfoCard");
    var y = document.getElementById("firstInfoCard");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function secondFunction() {
    var x = document.getElementById("secondInfoCard");
    var y = document.getElementById("secondInfoCard");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function thirdFunction() {
    var x = document.getElementById("thirdInfoCard");
    var y = document.getElementById("thirdInfoCard");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function fourthFunction() {
    var x = document.getElementById("fourthInfoCard");
    var y = document.getElementById("fourthInfoCard");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function fifthFunction() {
    var x = document.getElementById("fifthInfoCard");
    var y = document.getElementById("fifthInfoCard");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function sixthFunction() {
    var x = document.getElementById("sixthInfoCard");
    var y = document.getElementById("sixthInfoCard");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);

// window.addEventListener("load", function(){
//     setTimeout(
//         function open(event){
//             document.querySelector(".popup").style.display = "block";
//         },
//         200 
//     )
// });

// document.querySelector("#close").addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "none";
// });