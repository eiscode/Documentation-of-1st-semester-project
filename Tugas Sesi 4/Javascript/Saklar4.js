let semuaNyala = false;
function Saklar1() {
    let toggle1 = document.getElementById("toggle1");
    let lampu1 = document.getElementById("lampu1");
    if (toggle1.checked) {
        lampu1.src = "Asset/Images/Lampu Kamar On.png"
    } else (
        lampu1.src = "Asset/Images/Lampu Kamar Off.png"
    )
}

function Saklar2() {
    let toggle2 = document.getElementById("toggle2");
    let lampu2 = document.getElementById("lampu2");
    if (toggle2.checked) {
        lampu2.src = "Asset/Images/Lampu Kamar On.png"
    } else (
        lampu2.src = "Asset/Images/Lampu Kamar Off.png"
    )
}

function Saklar3() {
    let toggle3 = document.getElementById("toggle3");
    let lampu3 = document.getElementById("lampu3");
    
    if (toggle3.checked) {
        lampu3.src = "Asset/Images/Lampu Kamar On.png"
    } else (
        lampu3.src = "Asset/Images/Lampu Kamar Off.png"
    )
}

function Saklar4() {
    let toggle4 = document.getElementById("toggle4");
    let lampu4 = document.getElementById("lampu4");
    if (toggle4.checked) {
        lampu4.src = "Asset/Images/Lampu Kamar On.png"
    } else (
        lampu4.src = "Asset/Images/Lampu Kamar Off.png"
    )
}

function Saklar5() {
    let toggle1 = document.getElementById("toggle1");
    let toggle2 = document.getElementById("toggle2");
    let toggle3 = document.getElementById("toggle3");
    let toggle4 = document.getElementById("toggle4");


    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    let tombol = document.getElementById("toggleAll")

    if (semuaNyala) {
        toggle1.checked = false;
        toggle2.checked = false;
        toggle3.checked = false;
        toggle4.checked = false;
        lampu1.src = "Asset/Images/Lampu Kamar Off.png";
        lampu2.src = "Asset/Images/Lampu Kamar Off.png";
        lampu3.src = "Asset/Images/Lampu Kamar Off.png";
        lampu4.src = "Asset/Images/Lampu Kamar Off.png";
        tombol.innerHTML = "🔥Nyalakan Semua🔥";
        semuaNyala = false;
        
    }   else {
        toggle1.checked = true;
        toggle2.checked = true;
        toggle3.checked = true;
        toggle4.checked = true;
        lampu1.src = "Asset/Images/Lampu Kamar On.png";
        lampu2.src = "Asset/Images/Lampu Kamar On.png";
        lampu3.src = "Asset/Images/Lampu Kamar On.png";
        lampu4.src = "Asset/Images/Lampu Kamar On.png";
        tombol.innerHTML = "💤Matikan Semua💤"
        semuaNyala = true;
    } 
}