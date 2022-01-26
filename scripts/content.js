Mousetrap.bind(['a'], function () { // reload page
	window.location.reload();
});

Mousetrap.bind(['q'], function () { // go back
	window.history.back();
});

Mousetrap.bind(['u'], function () { // check if nation updated
	window.location.replace("https://www.nationstates.net/page=reports/view=self/filter=change/template-overall=none");
});

Mousetrap.bind(['s'], function () { // endorse nation
	document.getElementsByClassName('endorse button icon wa')[0].click();
});

Mousetrap.bind(['r'], function () { // confirm wa join
	document.getElementsByClassName('button primary icon approve big')[0].click();
});

Mousetrap.bind(['f'], function () { // move to region
	document.getElementsByName('move_region')[0].click();
});

Mousetrap.bind(['b'], function () { // relocate to DBZ
	if (window.location.href == "https://www.nationstates.net/region=devide_by_zero") {
		document.getElementsByName('move_region')[0].click();
	} else {
		window.location.replace("https://www.nationstates.net/region=devide_by_zero");
	}
});

Mousetrap.bind(['e'], function () { // resign and apply
	if (window.location.href == "https://www.nationstates.net/page=un") {
		document.getElementsByClassName('button icon')[1].click();
	} else {
		window.location.replace("https://www.nationstates.net/page=un");
	}
});

Mousetrap.bind(['w'], function () { // go to current region (wont work on template none and probably never will)
	if (window.location.href == "https://www.nationstates.net/page=change_region") { // if on post-relocation page
		document.getElementsByClassName('info')[0].querySelector('a').click(); // click the region link on the relocation page
	} else { // otherwise just click the region link through the sidebar
		document.getElementById('panelregionbar').querySelector('a').click()
	}
});

Mousetrap.bind(['d'], function () { // RO functionality
	var current_nation = document.getElementById("loggedin").getAttribute("data-nname");
	// If on the regional control page, open own regional officer page
	if (window.location.href == "https://www.nationstates.net/page=region_control") {
		window.location.replace("https://www.nationstates.net/page=regional_officer/nation=" + current_nation);
	}
	// If on on own regional officer page, assign officer role
	else if (window.location.href == "https://www.nationstates.net/page=regional_officer/nation=" + current_nation) {
		document.getElementsByName("office_name")[0].value = "barack obama";
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
		window.location.replace("https://www.nationstates.net/page=region_control");
	}
});