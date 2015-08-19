define(function(require, exports, module) {
	'use strict';

	var Extensions = require('ft/core/extensions').Extensions;

	Extensions.addInit(function (editor) {
        editor.cm().setOption('indentWithTabs', false);
		editor.addKeyMap({
            'Tab' : function(editor) {
              if (editor.cm().somethingSelected()) {
                editor.cm().indentSelection("add");
              } else {
                editor.cm().replaceSelection(editor.cm().getOption("indentWithTabs")? "\t":
                  Array(editor.cm().getOption("indentUnit") + 1).join(" "), "end", "+input");
              }
            },
            'Shift-Tab': function(editor){
                editor.cm().indentSelection("subtract");
            }
        });
	}, Extensions.PriorityLast);
});