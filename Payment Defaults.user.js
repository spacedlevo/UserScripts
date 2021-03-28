// ==UserScript==
// @name         Payment Defaults
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Prepopulates commonly used values into the payment form
// @author       You
// @match        https://supportfund.ljmu.ac.uk/Admin/PaymentConfirmation?ApplicationID=*
// @icon         https://www.google.com/s2/favicons?domain=ljmu.ac.uk
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const today = new Date()
    const divdeBy = 2
    const set_days = 30
    const standardAward = get_amount(document.getElementById("MainContent_FormSuggested").value)

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = String(today.getFullYear());
    var string_date = yyyy + '-' + mm + '-' + dd;

    function get_amount(string) {
        var removeCurrency = string.replace('£', '')
        return Number(removeCurrency)
    }

    document.getElementById("MainContent_FormPaymentDate").value = string_date
    document.getElementById("MainContent_IntPaymentStart").value = string_date
    document.getElementById("MainContent_IntPaymentQuantity").value = divdeBy
    document.getElementById("MainContent_IntPaymentInterval").value = set_days
    document.getElementById("MainContent_IntFormPaymentType").value = "J"
    document.getElementById("MainContent_IntervalPaymentMethodDropdown").value = "BACS"
    document.getElementById("MainContent_PaymentMethodDropdown").value = "BACS"
    document.getElementById("MainContent_FormPaymentAmount").value = standardAward
    document.getElementById("MainContent_FormPaymentType").value = "J"
    document.getElementById("MainContent_IntPaymentAmount").value = standardAward / divdeBy


})();