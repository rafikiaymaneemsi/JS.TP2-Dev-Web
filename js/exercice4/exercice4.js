"use strict";

import { afficher, variable } from "../utils/affichage.js";
import { demanderNombre, demanderTexte } from "../utils/saisie.js";

export function exo4q1() {
    const nombre = demanderNombre("Entrez un nombre entre 1 et 7 :");
    if (nombre === null) return;

    let jour;
    switch (nombre) {
        case 1: jour = "Lundi"; break;
        case 2: jour = "Mardi"; break;
        case 3: jour = "Mercredi"; break;
        case 4: jour = "Jeudi"; break;
        case 5: jour = "Vendredi"; break;
        case 6: jour = "Samedi"; break;
        case 7: jour = "Dimanche"; break;
        default: jour = "Nombre invalide";
    }

    afficher(`
        ${variable("nombre", nombre)}<br>
        ${variable("jour", jour)}
    `);
}

export function exo4q2() {
    const jour = demanderTexte("Entrez un jour de la semaine :");
    if (jour === null) return;

    let suivant;
    switch (jour.toLowerCase().trim()) {
        case "lundi": suivant = "Mardi"; break;
        case "mardi": suivant = "Mercredi"; break;
        case "mercredi": suivant = "Jeudi"; break;
        case "jeudi": suivant = "Vendredi"; break;
        case "vendredi": suivant = "Samedi"; break;
        case "samedi": suivant = "Dimanche"; break;
        case "dimanche": suivant = "Lundi"; break;
        default: suivant = "Jour invalide";
    }

    afficher(`
        ${variable("jour", jour)}<br>
        ${variable("jour suivant", suivant)}
    `);
}
