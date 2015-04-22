$(document).ready(function(){
    url = "https://spreadsheets.google.com/feeds/list/1MQnK8Wl5IfnBgLBP9Ab-pCp6Di-V3vRmNoi2sRC3N2E/od6/public/values?alt=json"

	$.getJSON(url, function(json){
		var data = clean_google_sheet_json(json);
	    compile_and_insert_html('#table_template','#myTable',data);
	    compile_and_insert_html('#section_template','#mySection',data);
	    compile_and_insert_html('#grid_template','#myGrid',data);
	});

});

// Takes in template id, compiles the template to html using data json object
// and then inserts it into given div id
function compile_and_insert_html(template_id, div_id, data) {
	var template = _.template($(template_id).html());
	var template_html = template({
		'rows': data
	});
	$(div_id).html(template_html);
}


// takes in JSON object from google sheets and turns into a json formatted 
// this way based on the original google Doc
// [
// 	{
// 		'column1': info1,
// 		'column2': info2,
// 	}
// ]
function clean_google_sheet_json(data){
	var formatted_json = [];
	var elem = {};
	var real_keyname = '';
	$.each(data.feed.entry, function(i, entry) {
		elem = {};
		$.each(entry, function(key, value){
			// fields that were in the spreadsheet start with gsx$
			if (key.indexOf("gsx$") == 0) 
			{
				// get everything after gsx$
				real_keyname = key.substring(4); 
				elem[real_keyname] = value['$t'];
			}
		});
		formatted_json.push(elem);
	});
	return formatted_json;
}
