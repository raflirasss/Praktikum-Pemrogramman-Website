document.querySelectorAll("#option a").forEach((a) => {
    //jika di click menjalankan sebuah function computerchoice
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })

})

function computerChoice(element){
    let pilihanUser = element.target.innerText;
    let pilihanComputer = document.querySelector("#result");
    let choices = ["Rock","Paper","Scissors"];
    pilihanComputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    //logika game nya
    if(pilihanUser == pilihanComputer){
        // alert("SERI");
        setTimeout(() => alert("SERI"), 500)
    }
    //user menang
    if(pilihanUser == "Rock" && pilihanComputer == "Scissors"){
        setTimeOut(() => alert("Selamat Kamu Menang!"), 300);
    } else if(pilihanUser == "Paper" && pilihanComputer == "Rock"){
        alert("Selamat Kamu Menang!")
    } else if(pilihanUser == "Scissors" && pilihanComputer == "Paper"){
        alert("Selamat Kamu Menang!")
    }
    //user kalah
    if(pilihanUser == "Scissors" && pilihanComputer == "Rock"){
        alert("Yaelah gitu doang kalah bro")
    } else if(pilihanUser == "Rock" && pilihanComputer == "Paper"){
        alert("Yaelah kalah wkwk")
    } else if (pilihanUser == "Paper" && pilihanComputer == "Scissors"){
        alert("jah kalah wkwk")
    }
}