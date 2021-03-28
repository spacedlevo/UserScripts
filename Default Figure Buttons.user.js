// ==UserScript==
// @name         Default Figure Buttons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds Buttons to place commonly used figures into the staff values.
// @author       You
// @match        https://supportfund.ljmu.ac.uk/Admin/StudentFinanceEditor?app=*
// @icon         https://www.google.com/s2/favicons?domain=ljmu.ac.uk
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var maintainceLoanInput = document.getElementsByName("ctl00$MainContent$ctl04")[0]
    var rentInput = document.getElementsByName("ctl00$MainContent$ctl64")[0]
    var tablepanel = document.getElementById("MainContent_mainDiv")
    var npiInput = document.getElementsByName("ctl00$MainContent$ctl61")[0]
    var inputs = tablepanel.getElementsByTagName("input")
    const style = document.createElement('style');
    style.innerHTML = '.custombtn {margin-bottom: 5px; margin-left: 5px; margin-right: 5px;}';
    document.head.appendChild(style)

    for (let i of inputs) {
        i.step = "1"
    };

    /*--- Create a button in a container div.  It will be styled and
    positioned with CSS.
    */
    var zNode = document.createElement('div');
    zNode.innerHTML = '<button id="nimaxbutton" type="button", class="custombtn btn btn-primary btn-lg">Max NI</button>'
                      + '<button id="fnimaxbutton" type="button", class="custombtn btn btn-primary btn-lg">Final NI</button>'
                      + '<button id="engmaxbutton" type="button", class="custombtn btn btn-primary btn-lg">Eng Max</button>'
                      + '<button id="finalengmaxbutton" type="button", class="custombtn btn btn-primary btn-lg">Final Eng</button>'
                      + '<button id="maxrent" type="button", class="custombtn btn btn-primary btn-lg">Max Rent</button>'
                      + '<button id="npibutton" type="button", class="custombtn btn btn-primary btn-lg">NPI</button>'
                ;
    zNode.setAttribute('id', 'myContainer');
    tablepanel.prepend(zNode);

    //--- Activate the newly added button.
    document.getElementById("nimaxbutton").addEventListener ("click", (event) => {
            maintainceLoanInput.value = "122.87"
    }
    );
        document.getElementById("fnimaxbutton").addEventListener ("click", (event) => {
            maintainceLoanInput.value = "114.87"
    }
    );
        document.getElementById("engmaxbutton").addEventListener ("click", (event) => {
            maintainceLoanInput.value = "175.51"
    }
    );
        document.getElementById("finalengmaxbutton").addEventListener ("click", (event) => {
            maintainceLoanInput.value = "162.72"
    }
    );
        document.getElementById("maxrent").addEventListener ("click", (event) => {
            rentInput.value = "120"
    }
    );
        document.getElementById("npibutton").addEventListener("click", (event) => {
            if (npiInput.value == "154") {
                npiInput.value = "130"
            }
            else if (npiInput.value == "130") {
                npiInput.value = "154"
            }
            else {
                npiInput.value = "154"
            }
        });


})();