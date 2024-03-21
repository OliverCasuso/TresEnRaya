const readlineSync = require('readline-sync');

// Función para imprimir el tablero
function printBoard(board) {
    for (let i = 0; i < 3; i++) {
        console.log(board[i].join(' | '));
        if (i < 2) console.log('---------');
    }
}

// Función para verificar si hay un ganador
function checkWinner(board, player) {
    // Verificar filas y columnas
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true; // Filas
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true; // Columnas
    }

    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true; // Diagonal \
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true; // Diagonal /
    
    return false;
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

            // Verificar si hay un ganador
            if (checkWinner(board, currentPlayer)) {
                console.clear();
                printBoard(board);
                console.log(`¡${currentPlayer} ha ganado!`);
                break;
            }

            // Cambiar al siguiente jugador
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            // Verificar si el tablero está lleno (empate)
            let isFull = true;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] === ' ') {
                        isFull = false;
                        break;
                    }
                }
            }
            if (isFull) {
                console.clear();
                printBoard(board);
                console.log("¡El juego ha terminado en empate!");
                break;
            }

        } else {
            console.log("¡Casilla ocupada! Por favor, elige otra.");
            readlineSync.question('Presiona Enter para continuar...');
        }
    }
}

// Llamar a la función principal
main();