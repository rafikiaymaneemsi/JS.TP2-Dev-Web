"use strict";

import { afficher, variable } from "../utils/affichage.js";
import { demanderNombre } from "../utils/saisie.js";

export function exo2q1() {
    const a = 10;
    const b = 3;

    afficher(`
        ${variable("a", a)}<br>
        ${variable("b", b)}<br><br>
        ${variable("Somme", a + b)}<br>
        ${variable("Différence", a - b)}<br>
        ${variable("Produit", a * b)}<br>
        ${variable("Division", a / b)}<br>
        ${variable("Reste", a % b)}
    `);
}

export function exo2q2() {
    const a = demanderNombre("Entrez le premier nombre :");
    if (a === null) return;

    const b = demanderNombre("Entrez le deuxième nombre :");
    if (b === null) return;

    const moyenne = (a + b) / 2;
    let resultat = `
        ${variable("a", a)}<br>
        ${variable("b", b)}<br>
        ${variable("moyenne", moyenne)}
    `;

    if (Number.isInteger(moyenne)) {
        resultat += `<br>${variable("Parité", moyenne % 2 === 0 ? "Paire" : "Impaire")}`;
    } else {
        resultat += "<br>La moyenne n'est pas un nombre entier.";
    }

    afficher(resultat);
}
