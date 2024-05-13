// ==UserScript==
// @name            Logout from all devices by default
// @description     Mark "log out of all devices" by default when logging out of Stack Exchange sites
// @namespace       Violentmonkey Scripts
// @grant           none
// @inject-into     page
// @match           https://stackoverflow.com/users/logout
// @match           https://serverfault.com/users/logout
// @match           https://superuser.com/users/logout
// @match           https://*.stackexchange.com/users/logout
// @match           https://askubuntu.com/users/logout
// @match           https://stackapps.com/users/logout
// @match           https://mathoverflow.net/users/logout
// @match           https://pt.stackoverflow.com/users/logout
// @match           https://ja.stackoverflow.com/users/logout
// @match           https://ru.stackoverflow.com/users/logout
// @match           https://es.stackoverflow.com/users/logout
// @match           https://meta.stackoverflow.com/users/logout
// @match           https://meta.serverfault.com/users/logout
// @match           https://meta.superuser.com/users/logout
// @match           https://meta.askubuntu.com/users/logout
// @match           https://meta.mathoverflow.net/users/logout
// @match           https://pt.meta.stackoverflow.com/users/logout
// @match           https://ja.meta.stackoverflow.com/users/logout
// @match           https://ru.meta.stackoverflow.com/users/logout
// @match           https://es.meta.stackoverflow.com/users/logout
// @match           https://stackoverflowteams.com/c/users/logout
// @namespace       https://github.com/PurpleMagick/
// @version         1.0
// @author          VLAZ
// ==/UserScript==
(function() {
	document.querySelector("#everywhere").checked = true;
})();
