"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Bratlsoft - 2026-03-15
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

//Some of your epic battles:
const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];
// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];
//
// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//DONE: Check if the battle is over, and if so, announce the winner!

let size = BATTLEFIELD.length;
let winner = null;
let winType = "";

// Check Horizontal
for (let i = 0; i < size; i++) {
    let first = BATTLEFIELD[i][0];
    if (first === null) continue;

    let same = true;

    for (let j = 1; j < size; j++) {
        if (BATTLEFIELD[i][j] !== first) {
            same = false;
        }
    }

    if (same) {
        winner = first;
        winType = "horizontal";
    }
}

// Check Vertical
for (let j = 0; j < size; j++) {
    let first = BATTLEFIELD[0][j];
    if (first === null) continue;

    let same = true;

    for (let i = 1; i < size; i++) {
        if (BATTLEFIELD[i][j] !== first) {
            same = false;
        }
    }

    if (same) {
        winner = first;
        winType = "vertical";
    }
}

// Check Main Diagonal
let firstMain = BATTLEFIELD[0][0];
if (firstMain !== null) {
    let same = true;

    for (let i = 1; i < size; i++) {
        if (BATTLEFIELD[i][i] !== firstMain) {
            same = false;
        }
    }

    if (same) {
        winner = firstMain;
        winType = "main diagonal";
    }
}

// Check Anti Diagonal
let firstAnti = BATTLEFIELD[0][size - 1];
if (firstAnti !== null) {
    let same = true;

    for (let i = 1; i < size; i++) {
        if (BATTLEFIELD[i][size - 1 - i] !== firstAnti) {
            same = false;
        }
    }

    if (same) {
        winner = firstAnti;
        winType = "anti diagonal";
    }
}


if (winner !== null) {
    console.log(winner + " wins (" + winType + ")");
} else {
    console.log("No winner yet.");
}


