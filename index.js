let ersteZahl
let zweiteZahl

function myFunction() {
      
      
      let ersteZahl = document.getElementById("ersteZahl").value
      let zweiteZahl = document.getElementById("zweiteZahl").value

      let ergebnis = parseInt(ersteZahl) + parseInt(zweiteZahl)


      let ergebnisDisplay = document.createElement("p")
      ergebnisDisplay.innerHTML = ergebnis
      ergebnisDisplay.id = "ergebnis"
      document.body.appendChild(ergebnisDisplay)
       
}

function einsDrücken(){
      ersteZahl = 1
}
