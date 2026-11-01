"use strict";

import { afficher, variable } from "../utils/affichage.js";

export function exo6q1() {
    let motDePasse;

    do {
        motDePasse = prompt("Entrez le mot de passe :");
        if (motDePasse === null) return;

        if (motDePasse !== "emsi2025") {
            alert("Mot de passe incorrect. Réessayez.");
        }
    } while (motDePasse !== "emsi2025");

    afficher(`${variable("motDePasse", motDePasse)}<br>Bienvenue !`);
}

export function exo6q2() {
    let motDePasse;
    let tentatives = 0;
    const maximum = 3;

    while (tentatives < maximum) {
        motDePasse = prompt("Entrez le mot de passe :");
        if (motDePasse === null) return;

        tentatives++;
        if (motDePasse === "emsi2025") {
            afficher(`
                ${variable("tentatives", tentatives)}<br>
                Bienvenue !
            `);
            return;
        }
    }

    afficher(`
        ${variable("tentatives", tentatives)}<br>
        Compte bloqué.
    `);
}
