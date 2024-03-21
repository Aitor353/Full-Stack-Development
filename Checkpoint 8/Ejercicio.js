const myList = ["velma", "scout", "jane", "john", "harry"];

// Bucle "for"
for (nombre in myList) {
    console.log(myList[nombre]);
}

// Bucle "while"
var i = 0;
while (i < myList.length) {
  console.log(myList[i]);
  i++;
}

// Función de flecha
saludo = () => { console.log("Hola"); }