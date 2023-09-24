/*
Crear un tablero de ajedrez 8x8 con los signos "#" y " ".
*/

for (let contador = 1; contador <= 8; contador++) {
    if (contador%2==0) {
        console.log("# # # #");
    }
    else{
        console.log(" # # # #");
    }
    
}

/*let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);*/

/*
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/