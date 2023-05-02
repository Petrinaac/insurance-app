let table = document.getElementById("table")

// Vytvoření hlavičky, která se načte při spuštění stránky

function createHeader() {
    let tr = document.createElement("tr");

    let header = ["Jméno a Příjmení", "Věk", "Telefonní číslo"]

    for(let i = 0; i < header.length; i++) {
        let th = document.createElement("th")
        th.textContent = header[i]
        tr.appendChild(th)
    }
    table.appendChild(tr)
}

// vytvoření nového řádku s daty pokaždý když pojištěnec vyplní inputy

function createNewRow() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
  
    let newRow = document.createElement("tr");
    table.appendChild(newRow);
    
    for (let i = 0; i < 3; i++) {
      
      // Když chybí nějaký údaj, nevypíše se nový řádek

      if (!firstName || !lastName || isNaN(age)  || isNaN(phone)) {
        alert("Zadal jste špatné údaje");
        return;
      }

      let td = document.createElement("td");
      newRow.appendChild(td);

      // kdyz vyplnim input "0"  = dostanu firstName a přijmeni atd.

      if (i === 0) {
        td.textContent = firstName + " " + lastName;
      } else if (i === 1) {
        td.textContent = age;
      } else if (i === 2) {
        td.textContent = phone;
      } 
    } 
  }


let button = document.getElementById("button")
button.addEventListener("click", createNewRow)

// při načtení stránky chci jen hlavičku tabulky 

window.onload = function() {
    createHeader()
}
