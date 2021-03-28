// ==UserScript==
// @name         Save Key Hotkeys
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Budget Page Keyboard Shortscuts, s to save and b to go back.
// @author       You
// @match        https://supportfund.ljmu.ac.uk/Admin/StudentFinanceEditor?app=*
// @icon         https://www.google.com/s2/favicons?domain=ljmu.ac.uk
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('keydown', (event) => {
     if (event.key == 's') {
         document.getElementById('MainContent_FinanceEditConfirm').click();
         }
     if (event.key =='b') {
         document.getElementById('MainContent_FinanceEditCancel').click();
         }
    })

})();