$.getJSON(chrome.extension.getURL("spacex.json"), function(json) {

	var values = {};

	var regExp = /\[(.*?)\]/;

	$.each(json, function(key, value) {
			var expanded = "";

			if(value instanceof Array) {
				var possibles = [];
				$.each(value, function(key, value) {
					if(value.indexOf('[') == -1) {
						possibles.push(value);
					} else {
						possibles.push(regExp.exec(value)[1]);
					}
				});
				expanded = possibles.join(' / ');
			} else {
				if(value.indexOf('[') == -1) {
					expanded = value;
				} else {
					expanded = regExp.exec(value)[1];
				}
			}

			values[key] = expanded;
		});

	$('span.message_body').each(function(i) {
		var html = $(this).html();

		$.each(values, function(key, value) {
			html = html.replace(key, "<span title='" + key + "'><i><b>" + value + "</b></i></span>");
		});

		$(this).html(html);

	});
});
