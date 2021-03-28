// ==UserScript==
// @name         Highlight Tables
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Highlights Final Year students and LIPA Students, the is also hotkeys added. Ctrl + "a" to approve Ctrl + "r" to reject Ctrl + "f" to enter finance page
// @author       You
// @match        https://supportfund.ljmu.ac.uk/Admin/ApprovalViewer?ApplicationID*
// @match        https://supportfund.ljmu.ac.uk/Admin/ArchivedAppViewer?ApplicationID=*
// @icon         https://www.google.com/s2/favicons?domain=ljmu.ac.uk
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var lipa_cell = document.getElementById("MainContent_TstudentStudyAtLIPA")
    if (lipa_cell.textContent == "Yes") {
        lipa_cell.style.backgroundColor = "rgb(250, 220, 0)";

    }
    var student_info_button = document.querySelector("[data-target='#studentinfo']").click();
    var mode_of_study = document.getElementById("MainContent_TstudentModeOfStudy")
    if (mode_of_study.textContent == "Part-Time") {
        mode_of_study.style.backgroundColor = "rgb(250, 220, 0)";
        }
    var final_year = document.getElementById("MainContent_TstudentOnFinalYear")
    if (final_year.textContent == "Yes") {
        final_year.style.backgroundColor = "rgb(250, 220, 0)";
    }

    window.addEventListener('keydown', (event) => {
        if (event.key == 'a' && event.ctrlKey) {
            event.preventDefault();
            document.getElementById("MainContent_btnApprove").click();
        }
        if (event.key == 'r' && event.ctrlKey) {
            event.preventDefault();
            document.getElementById("MainContent_btnReject").click();
        }
        if (event.key == 'f' && event.ctrlKey) {
            event.preventDefault();
            document.getElementById("MainContent_btnEditFinance").click();
        }
    })

})();