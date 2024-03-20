const readlineSync = require('readline-sync');

// Función para imprimir el tablero
function printBoard(board) {
    for (let i = 0; i < 3; i++) {
        console.log(board[i].join(' | '));
        if (i < 2) console.log('---------');
    }
}

// Función principal
function main() {
    let board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];

    let currentPlayer = 'X';

    console.log("¡Bienvenido al juego del Tres en Raya!");

    // Bucle principal
    while (true) {
        console.clear();
        printBoard(board);
        console.log(`Turno de ${currentPlayer}`);

        // Coordenadas para colocar la ficha
        let row = parseInt(readlineSync.question('Fila (0-2): '));
        let col = parseInt(readlineSync.question('Columna (0-2): '));

        // Verificar si la casilla está vacía y colocar la ficha del jugador
        if (board[row][col] === ' ') {
            board[row][col] = currentPlayer;

            // Cambiar al siguiente jugador
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        } else {
            console.log("¡Casilla ocupada! Por favor, elige otra.");
            readlineSync.question('Presiona Enter para continuar...');
        }
    }
}

// Llamar a la función principal
main();