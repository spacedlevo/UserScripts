// ==UserScript==
// @name         Payment Dates
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tries working out the next avaliable Friday, which will be the payment date. If it has been sent to finance it works out the next Friday, if not, it looks at the next Tuesday from the Process date and then the Friday after
// @author       You
// @match        https://supportfund.ljmu.ac.uk/Admin/PaymentConfirmation?ApplicationID=*
// @icon         https://www.google.com/s2/favicons?domain=ljmu.ac.uk
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var table = document.getElementById("MainContent_PaymentsTable").getElementsByTagName('tbody')[0];

    function getNextDayOfWeek(date, dayOfWeek) {
        // Code to check that date and dayOfWeek are valid left as an exercise ;)

        var resultDate = new Date(date.getTime());
        resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
        return resultDate;
    }

    function convertStringDate(string) {

        var split_string = string.split('/')
        let day = split_string[0]
        let month = split_string[1]
        let year = split_string[2]
        let date_formatted = year + '-' + month + '-' + day
        let sent_to_finance = new Date(date_formatted)
        return sent_to_finance;
    }

    function createStringDate(dateObject) {
        var dd = String(dateObject.getDate()).padStart(2, '0');
        var mm = String(dateObject.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = String(dateObject.getFullYear());

        var string_date = dd + '/' + mm + '/' + yyyy;
        return string_date

    }

    for (var theRow of table.rows) {
        var cell_value = theRow.cells[5].innerText
        if (cell_value == 'Sent to Finance') {
            var new_header = document.createElement('th')
            new_header.innerText = "Payment Date"
            theRow.append(new_header)
        }
        else if (cell_value == '') {
            let use_date = convertStringDate(theRow.cells[0].innerText)
            let next_tuesday = getNextDayOfWeek(use_date, 2)
            let payment_date = getNextDayOfWeek(next_tuesday, 5)
            let stringPaymentDate = createStringDate(payment_date)
            let new_cell = document.createElement('td')
            new_cell.innerText = stringPaymentDate
            theRow.append(new_cell)
        }
        else {
            let use_date = convertStringDate(theRow.cells[5].innerText)
            let payment_date = getNextDayOfWeek(use_date, 5)
            let stringPaymentDate = createStringDate(payment_date)
            let new_cell = document.createElement('td')
            new_cell.innerText = stringPaymentDate
            theRow.append(new_cell)
        }
    }



})();