document.addEventListener('keyup', function (event) { // keyup may seem less intuitive, but it's
    // already the standard in breeze-like scripts, and it prevents holding down a key spamming the server
    if (event.shiftKey || event.ctrlKey || event.altKey || document.activeElement.tagName === 'INPUT' ||
        document.activeElement.tagName === 'TEXTAREA') { // locks you out of the script while you're holding down a modifier
        // key or typing in an input
    } else {
        switch (event.code) { // event.code is the key that was pressed
            case 'KeyA': // reload page
                window.location.reload();
                break;
            case 'KeyB': // move to suspicious
                if (window.location.href === "https://www.nationstates.net/region=suspicious") {
                    document.getElementsByName('move_region')[0].click();
                } else {
                    window.location.assign("https://www.nationstates.net/region=suspicious");
                }
                break;
            case 'KeyD': // appoint yourself as and/or deappoint ROs
                let current_nation = document.getElementById("loggedin").getAttribute("data-nname");
                // If on the regional control page, open own regional officer page
                if (window.location.href === "https://www.nationstates.net/page=region_control") {
                    window.location.assign("https://www.nationstates.net/page=regional_officer/nation=" + current_nation);
                }
                // If on own regional officer page, assign officer role
                else if (window.location.href === "https://www.nationstates.net/page=regional_officer/nation=" + current_nation) {
                    document.getElementsByName("office_name")[0].value = "Raider Unity";
                    document.getElementsByName("authority_A")[0].checked = true;
                    document.getElementsByName("authority_C")[0].checked = true;
                    document.getElementsByName("authority_E")[0].checked = true;
                    document.getElementsByName("authority_P")[0].checked = true;
                    document.getElementsByName('editofficer')[0].click();
                }
                // If on someone else's regional officer page, dismiss them
                else if (window.location.href.includes("regional_officer")) {
                    document.getElementsByName('abolishofficer')[0].click();
                }
                // If on none of these pages, open regional control page
                else {
                    window.location.assign("https://www.nationstates.net/page=region_control");
                }
                break;
            case 'KeyE': // apply/resign to WA
                let current_nation = document.getElementById("loggedin").getAttribute("data-nname");
                let data = { "action": "join_UN", "chk": chk, "submit": "1" };
                let time = Date.now();
                fetch('https://www.nationstates.net/template-overall=none/page=UN_status?userclick=' + time, {
                    method: 'POST',
                    headers: {
                        "User-Agent": "This is a feather application accessing the UN Status join CGI script in use by " + current_nation
                    },
                    body: { data },
                });
                break;
            case 'KeyF': // move to region whose page you're currently on
                if (window.location.href.includes("region=")) {
                    document.getElementsByName('move_region')[0].click();
                }
                break;
            case 'KeyK': // eject nation
                if (window.location.href.includes("nation=")) {
                    document.getElementsByName('eject')[0].click();
                }
                break;
            case 'KeyO': // ban nation
                if (window.location.href.includes("nation=")) {
                    document.getElementsByName('ban')[0].click();
                }
                break;
            case 'KeyQ': // go back
                window.history.back();
                break;
            case 'KeyR': // leave WA
                let current_nation = document.getElementById("loggedin").getAttribute("data-nname");
                let data = { "action": "resign", "chk": chk, "submit": "1" };
                let time = Date.now();
                fetch('https://www.nationstates.net/template-overall=none/page=UN_status?userclick=' + time, {
                    method: 'POST',
                    headers: {
                        "User-Agent": "This is a feather application accessing the UN Status join CGI script in use by " + current_nation
                    },
                    body: { data },
                });
                break;
            case 'KeyS': // endorse nation
                if (window.location.href.includes("nation=")) {
                    document.getElementsByClassName('endorse button icon wa')[0].click();
                }
                break;
            case 'KeyU': // check if you updated
                window.location.assign("https://www.nationstates.net/page=reports/view=self/filter=change/template-overall=none");
                break;
            case 'KeyV': // Copy the current nation to the clipboard
                let NationLink = document.getElementsByClassName("bellink quietlink");
                let NationURL = NationLink[0].href;
                navigator.clipboard.writeText(NationURL);
                break;
            case 'KeyZ': // go to current region page
                if (window.location.href === "https://www.nationstates.net/page=change_region") { // if on post-relocation page
                    document.getElementsByClassName('info')[0].querySelector('a').click(); // click the region link on the relocation page
                } else { // otherwise just click the region link through the sidebar
                    document.getElementById('panelregionbar').querySelector('a').click();
                }
                break;
        } // end switch
    } // end else
}); // end event listener
