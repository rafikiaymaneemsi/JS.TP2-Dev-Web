"use strict";

import { afficher, variable } from "../utils/affichage.js";
import { demanderTexte, demanderAge } from "../utils/saisie.js";

export function exo1q1() {
    const nom = "Aymane";
    const age = 20;
    const etudiant = true;

    afficher(`
        ${variable("nom", nom)}<br>
        ${variable("age", age)}<br>
        ${variable("etudiant", etudiant)}
    `);
}

export function exo1q2() {
    const nom = demanderTexte("Entrez votre nom :");
    if (nom === null) return;

    const age = demanderAge("Entrez votre âge :");
    if (age === null) return;

    const ville = demanderTexte("Entrez votre ville :");
    if (ville === null) return;

    afficher(`
        ${variable("nom", nom)}<br>
        ${variable("age", age)}<br>
        ${variable("ville", ville)}
    `);
}
