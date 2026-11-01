"use strict";

import { afficher, variable } from "../utils/affichage.js";
import { demanderNombre } from "../utils/saisie.js";

export function exo5q1() {
    let resultat = "";

    for (let i = 1; i <= 10; i++) {
        resultat += `${variable("nombre", i)}<br>`;
    }

    afficher(resultat);
}

export function exo5q2() {
    let resultat = "";

    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            resultat += `${variable("nombre pair", i)}<br>`;
        }
    }

    afficher(resultat);
}

export function exo5q3() {
    const nombre = demanderNombre("Entrez un nombre entier positif :");
    if (nombre === null) return;

    if (!Number.isInteger(nombre) || nombre < 0) {
        afficher("Veuillez entrer un entier positif.");
        return;
    }

    if (nombre > 170) {
        afficher("Nombre trop grand pour calculer la factorielle avec précision.");
        return;
    }

    let factorielle = 1;
    for (let i = 1; i <= nombre; i++) {
        factorielle *= i;
    }

    afficher(`
        ${variable("nombre", nombre)}<br>
        ${variable("factorielle", factorielle)}
    `);
}
