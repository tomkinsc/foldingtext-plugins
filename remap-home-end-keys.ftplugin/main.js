define(function(require, exports, module) {
	'use strict';

	var Extensions = require('ft/core/extensions').Extensions;

	Extensions.addInit(function (editor) {
		editor.addKeyMap({
            'Home' : 'moveToBeginningOfLine',
            'End' : 'moveToEndOfLine',
            'Shift-Home' : 'moveToBeginningOfLineAndModifySelection',
            'Shift-End' : 'moveToEndOfLineAndModifySelection'
        });
	}, Extensions.PriorityLast);
});