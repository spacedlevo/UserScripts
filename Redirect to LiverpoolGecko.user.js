// ==UserScript==
// @name        Redirect to Liverpool Gecko
// @namespace   Violentmonkey Scripts
// @match       https://www.liverpoolecho.co.uk/news*
// @match       https://www.liverpoolecho.co.uk/sport*
// @match       https://www.liverpoolecho.co.uk/whats-on*
// @grant       none
// @version     1.0
// @run-at      document-start
// @license     MIT
// @author      fmpundit
// @description This will redirect Liverpool Echo posts to no clutter site Liverpool Gecko
// ==/UserScript==

const liverpoolGecko = "http://www.liverpoolgecko.co.uk"
location.replace(liverpoolGecko + location.pathname)