let semuaNyala = false;
function Saklar1() {
    let toggle1 = document.getElementById("toggle1");

    let lampu1 = document.getElementById("lampu1");
    if (toggle1.checked) {
        lampu1.src = "Asset/Images/Lampu Makan Biasa On.png"
    } else (
        lampu1.src = "Asset/Images/Lampu Makan Biasa Off.png"
    )
}
function Saklar2() {
    let toggle1 = document.getElementById("toggle1");
    
    let lampu1 = document.getElementById("lampu1");
    let tombol = document.getElementById("toggleAll")
    if (semuaNyala) {
        toggle1.checked = false;
        lampu1.src = "Asset/Images/Lampu Makan Biasa Off.png";
        tombol.innerHTML = "🔥Nyalakan Semua🔥";
        semuaNyala = false;
        
    }   else {
        toggle1.checked = true;
        lampu1.src = "Asset/Images/Lampu Makan Biasa On.png";
        tombol.innerHTML = "💤Matikan Semua💤"
        semuaNyala = true;
    } 
}
