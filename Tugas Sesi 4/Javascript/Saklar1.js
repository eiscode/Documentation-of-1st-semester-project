let semuaNyala = false;
function Saklar1() {
    let toggle1 = document.getElementById("toggle1");
    let lampu1 = document.getElementById("lampu1");
    if (toggle1.checked) {
        lampu1.src = "Asset/Images/Candelier On.png"
    } else (
        lampu1.src = "Asset/Images/Candelier Off.png"
    )
}

function Saklar2() {
    let toggle2 = document.getElementById("toggle2");
    let lampu2 = document.getElementById("lampu2");
    if (toggle2.checked) {
        lampu2.src = "Asset/Images/Candelier On.png"
    } else (
        lampu2.src = "Asset/Images/Candelier Off.png"
    )
}

function Saklar3() {
    let toggle1 = document.getElementById("toggle1");
    let toggle2 = document.getElementById("toggle2");

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let tombol = document.getElementById("toggleAll")

    if (semuaNyala) {
        toggle1.checked = false;
        toggle2.checked = false;
        lampu1.src = "Asset/Images/Candelier Off.png";
        lampu2.src = "Asset/Images/Candelier Off.png";
        tombol.innerHTML = "🔥Nyalakan Semua🔥";
        semuaNyala = false;
        
    }   else {
        toggle1.checked = true;
        toggle2.checked = true;
        lampu1.src = "Asset/Images/Candelier On.png";
        lampu2.src = "Asset/Images/Candelier On.png";
        tombol.innerHTML = "💤Matikan Semua💤"
        semuaNyala = true;
    } 
}