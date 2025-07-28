// ==UserScript==
// @name         Gjør DB.no mer lesbar
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Gjør Dagbladets nettsider mer lesbare.
// @author       AnBasement
// @match        https://www.dagbladet.no/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Fjerner elementer med rullende tekst
    function fjernRullendeTekst() {
        document.querySelectorAll('div.breaking-rolling-text-slug').forEach(el => el.remove());
    }

    // Kjør når siden lastes inn
    fjernRullendeTekst();

    // Kjør ved dynamisk innlasting
    const observer = new MutationObserver(() => {
        fjernRullendeTekst();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
