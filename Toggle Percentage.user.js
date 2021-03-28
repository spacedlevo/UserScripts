// ==UserScript==
// @name         Toggle Percentage
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Simply toggles between the two % levels we use for students contributions
// @author       You
// @match        https://supportfund.ljmu.ac.uk/Admin/ApprovalViewer?ApplicationID=*
// @icon         https://www.google.com/s2/favicons?domain=ljmu.ac.uk
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var budget_table = document.getElementById("MainContent_BudgetSheet")
    var row_required = budget_table.getElementsByTagName('tr')[5]
    var new_row = document.createElement('tr');
    var amountLevelInput = document.getElementById("MainContent_AwardLevel")

    new_row.innerHTML = '<td colspan="2"><button id="award_level" type="button", class="btn btn-primary" style="min-width:100%">Toggle %</button></td>'
    row_required.parentNode.insertBefore(new_row, row_required)

    document.getElementById("award_level").addEventListener ("click", (event) => {
        if (amountLevelInput.value == "25") {
            amountLevelInput.value = "50"
        }
        else if (amountLevelInput.value == "50") {
            amountLevelInput.value = "25"
        }
    }
    );

})();