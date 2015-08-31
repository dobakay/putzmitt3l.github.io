var cv = (function($) {
    'use strict';

    var cvModule = {};

    var cvJson = null;

    function syntaxHighlight(json) {
            json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                var cls = 'number';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key';
                    }
                    else {
                        cls = 'string';
                    }
                }
                else if (/true|false/.test(match)) {
                    cls = 'boolean';
                }
                else if (/null/.test(match)) {
                    cls = 'null';
                }
                return '<span class="' + cls + '">' + match + '</span>';
            });
        }

    cvModule.init = function () {
        // load cv
        $.getJSON('./cv.json', function(json) {
            cvJson = json;
            var jsonString = JSON.stringify(json, undefined, 4);
            $('.wrapper pre').html(syntaxHighlight(jsonString));
        });

        // attach eventListeners
        (function () {
            var $doc = $(document);
            $doc.on('click', '.convert-to.controls .html', function (e) {

            });
        })();
    }

    return cvModule;

}(jQuery));


cv.init();
