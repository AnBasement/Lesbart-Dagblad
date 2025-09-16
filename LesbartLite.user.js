// ==UserScript==
// @name         Gjør DB.no mer lesbar
// @namespace    http://tampermonkey.net/
// @version      1.7
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
        document.querySelectorAll('div.breaking-just-now-slug').forEach(el => el.remove());
    }

    // Endrer bakgrunnen på artikler til hvit.
    function hvitBakgrunn() {
        document.querySelectorAll('article div[class^="content bg-"]').forEach(div => {
            // Fjern alle eksisterende klasser, og legg til kun ønsket klasse
            div.className = "content bg-white";
        });
    }

    // Fjerner flere plagsomme elementer, kickere
    function fjernKickerAbove() {
        document.querySelectorAll('div.kicker.above').forEach(el => el.remove());
    }

    // Hindrer automatisk avspilling av videoer
    function stoppAutospill() {
        document.querySelectorAll('video').forEach(video => {
            video.autoplay = false; // Deaktiver autoplay
            video.pause(); // Pauser video om aktiv
    });
}

    // Fjerner DB-pluss
    function fjernPluss() {
        document.querySelectorAll('article[data-label="pluss"]').forEach(el => el.remove());
    }

    // Fjerner reklame for DB Pluss
    function fjernKjopPluss() {
        document.querySelectorAll('a[href^="https://www.dagbladet.no/kjop-pluss"]').forEach(el => el.remove());
    }

    // Kjør når siden lastes inn
    fjernRullendeTekst();
    hvitBakgrunn();
    fjernKickerAbove();
    stoppAutospill();
    fjernPluss();
    fjernKjopPluss();

    // Kjør ved dynamisk innlasting
    const observer = new MutationObserver(() => {
        fjernRullendeTekst();
        hvitBakgrunn();
    fjernKickerAbove();
    stoppAutospill();
    fjernPluss();
    fjernKjopPluss();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
