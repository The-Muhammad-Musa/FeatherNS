Mousetrap.bind(['a'], function(){ // reload page
    window.location.reload();
});

Mousetrap.bind(['q'], function(){ // go back
    window.history.back();
});

Mousetrap.bind(['u'], function(){ // check if nation updated
    window.location.replace("https://www.nationstates.net/page=reports/view=self/filter=change/template-overall=none");
});

Mousetrap.bind(['s'], function(){ // endorse nation
    $('button[class="endorse button icon wa"]').trigger('click');
});

Mousetrap.bind(['r'], function(){ // confirm wa join
    $('button[class="button primary icon approve big"]').trigger('click');
});

Mousetrap.bind(['f'], function(){ // move region
    $("button[name=move_region]").trigger("click");
});

Mousetrap.bind(['b'], function(){ // relocate to DBZ
	if (window.location.href == "https://www.nationstates.net/region=devide_by_zero"){
		$('button[name=move_region]').trigger('click');
	}
	else {
		window.location.replace("https://www.nationstates.net/region=devide_by_zero");
	}
});

Mousetrap.bind(['e'], function(){ // resign and apply
	if (window.location.href == "https://www.nationstates.net/page=un"){
		$('button[class="button icon"]').trigger('click');
	}
	else {
		window.location.replace("https://www.nationstates.net/page=un");
	}
});

Mousetrap.bind(['w'], function(){ // go to current region (doesnt work on template none)
    if (window.location.href == "https://www.nationstates.net/page=change_region"){
        $('#main').children('#content').children('.info').children('a')[0].click(); 
    } else {
        $('#panel').children('.panelcontent').children('.menu').children('li').children('a')[0].click();
    }
});

Mousetrap.bind(['d'], function(){ // RO functionality
	var current_nation = $("#loggedin").attr("data-nname");
	// If on the regional control page, open own regional officer page
	if (window.location.href.indexOf("/page=region_control") !== -1){
		window.location.replace("https://www.nationstates.net/page=regional_officer/nation=" + current_nation);
	}
	// If on on own regional officer page, assign officer role
	else if (window.location.href.indexOf("/page=regional_officer") !== -1 && window.location.href.indexOf(current_nation) !== -1) {
		$("input[name=office_name]").val("barack obama");
		$("input[name=authority_A]").prop("checked", true);
		$("input[name=authority_C]").prop("checked", true);
		$("input[name=authority_E]").prop("checked", true);
		$("input[name=authority_P]").prop("checked", true);
		$("button[name=editofficer]").trigger("click");
	}
	// If on someone else's regional officer page, dismiss them
	else if (window.location.href.indexOf("/page=regional_officer") !== -1) {
		$("button[name=abolishofficer]").trigger("click");
	}
	// If on none of these pages, open regional control page
	else {
		window.location.replace("https://www.nationstates.net/page=region_control");
	}
});
