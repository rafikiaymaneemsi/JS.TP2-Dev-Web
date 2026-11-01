"use strict";

import { afficher, variable } from "../utils/affichage.js";
import { demanderTexte, demanderNombre, demanderAge } from "../utils/saisie.js";

export function exo3q1() {
    const age = demanderAge("Entrez votre âge :");
    if (age === null) return;

    afficher(`
        ${variable("age", age)}<br>
        ${age >= 18 ? "Accès autorisé." : "Accès refusé."}
    `);
}

export function exo3q2() {
    const age = demanderAge("Entrez votre âge :");
    if (age === null) return;

    const pays = demanderTexte("Entrez votre pays :");
    if (pays === null) return;

    let message;
    if (age >= 18 && pays.toLowerCase() === "maroc") {
        message = "Accès autorisé.";
    } else if (age >= 18) {
        message = "Vous êtes majeur, mais vous êtes étranger.";
    } else {
        message = "Accès refusé.";
    }

    afficher(`
        ${variable("age", age)}<br>
        ${variable("pays", pays)}<br><br>
        ${message}
    `);
}

export function exo3q3() {
    const note = demanderNombre("Entrez votre note :");
    if (note === null) return;

    if (note < 0 || note > 20) {
        afficher("La note doit être comprise entre 0 et 20.");
        return;
    }

    let appreciation;
    if (note >= 16) appreciation = "Excellent";
    else if (note >= 14) appreciation = "Bien";
    else if (note >= 12) appreciation = "Assez bien";
    else appreciation = "Insuffisant";

    afficher(`
        ${variable("note", note)}<br>
        ${variable("appréciation", appreciation)}
    `);
}

export function exo3q4() {
    const saisie = prompt("Entrez votre note :");
    if (saisie === null) return;

    const note = Number(saisie.trim().replace(",", "."));
    if (saisie.trim() === "" || isNaN(note)) {
        afficher("Erreur : veuillez saisir un nombre valide.");
    } else if (note < 0 || note > 20) {
        afficher("Erreur : la note doit être entre 0 et 20.");
    } else {
        let appreciation;
        if (note >= 16) appreciation = "Excellent";
        else if (note >= 14) appreciation = "Bien";
        else if (note >= 12) appreciation = "Assez bien";
        else appreciation = "Insuffisant";

        afficher(`
            ${variable("note", note)}<br>
            ${variable("appréciation", appreciation)}
        `);
    }
}
