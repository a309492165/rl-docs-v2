(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("vue"));
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else if(typeof exports === 'object')
        exports["vue-run-sfc"] = factory(require("vue"));
    else
        root["vue-run-sfc"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/ 	var installedModules = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/ 		if(installedModules[moduleId]) {
                /******/ 			return installedModules[moduleId].exports;
                /******/ 		}
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = installedModules[moduleId] = {
                /******/ 			i: moduleId,
                /******/ 			l: false,
                /******/ 			exports: {}
                /******/ 		};
            /******/
            /******/ 		// Execute the module function
            /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/ 		module.l = true;
            /******/
            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/ 	}
        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/ 	__webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/ 	__webpack_require__.c = installedModules;
        /******/
        /******/ 	// define getter function for harmony exports
        /******/ 	__webpack_require__.d = function(exports, name, getter) {
            /******/ 		if(!__webpack_require__.o(exports, name)) {
                /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
                /******/ 		}
            /******/ 	};
        /******/
        /******/ 	// define __esModule on exports
        /******/ 	__webpack_require__.r = function(exports) {
            /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/ 		}
            /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
            /******/ 	};
        /******/
        /******/ 	// create a fake namespace object
        /******/ 	// mode & 1: value is a module id, require it
        /******/ 	// mode & 2: merge all properties of value into the ns
        /******/ 	// mode & 4: return value when already ns object
        /******/ 	// mode & 8|1: behave like require
        /******/ 	__webpack_require__.t = function(value, mode) {
            /******/ 		if(mode & 1) value = __webpack_require__(value);
            /******/ 		if(mode & 8) return value;
            /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
            /******/ 		var ns = Object.create(null);
            /******/ 		__webpack_require__.r(ns);
            /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
            /******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
            /******/ 		return ns;
            /******/ 	};
        /******/
        /******/ 	// getDefaultExport function for compatibility with non-harmony modules
        /******/ 	__webpack_require__.n = function(module) {
            /******/ 		var getter = module && module.__esModule ?
                /******/ 			function getDefault() { return module['default']; } :
                /******/ 			function getModuleExports() { return module; };
            /******/ 		__webpack_require__.d(getter, 'a', getter);
            /******/ 		return getter;
            /******/ 	};
        /******/
        /******/ 	// Object.prototype.hasOwnProperty.call
        /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /******/
        /******/ 	// __webpack_public_path__
        /******/ 	__webpack_require__.p = "";
        /******/
        /******/
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
        /******/ })
        /************************************************************************/
        /******/ ({

            /***/ "00ee":
            /***/ (function(module, exports, __webpack_require__) {

                var wellKnownSymbol = __webpack_require__("b622");

                var TO_STRING_TAG = wellKnownSymbol('toStringTag');
                var test = {};

                test[TO_STRING_TAG] = 'z';

                module.exports = String(test) === '[object z]';


                /***/ }),

            /***/ "0366":
            /***/ (function(module, exports, __webpack_require__) {

                var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
                module.exports = function (fn, that, length) {
                    aFunction(fn);
                    if (that === undefined) return fn;
                    switch (length) {
                        case 0: return function () {
                            return fn.call(that);
                        };
                        case 1: return function (a) {
                            return fn.call(that, a);
                        };
                        case 2: return function (a, b) {
                            return fn.call(that, a, b);
                        };
                        case 3: return function (a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                    }
                    return function (/* ...args */) {
                        return fn.apply(that, arguments);
                    };
                };


                /***/ }),

            /***/ "04fc":
            /***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
                var content = __webpack_require__("aec1");
                if(typeof content === 'string') content = [[module.i, content, '']];
                if(content.locals) module.exports = content.locals;
// add the styles to the DOM
                var add = __webpack_require__("499e").default
                var update = add("7fc5818a", content, true, {"sourceMap":false,"shadowMode":false});

                /***/ }),

            /***/ "057f":
            /***/ (function(module, exports, __webpack_require__) {

                var toIndexedObject = __webpack_require__("fc6a");
                var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

                var toString = {}.toString;

                var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
                    ? Object.getOwnPropertyNames(window) : [];

                var getWindowNames = function (it) {
                    try {
                        return nativeGetOwnPropertyNames(it);
                    } catch (error) {
                        return windowNames.slice();
                    }
                };

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
                module.exports.f = function getOwnPropertyNames(it) {
                    return windowNames && toString.call(it) == '[object Window]'
                        ? getWindowNames(it)
                        : nativeGetOwnPropertyNames(toIndexedObject(it));
                };


                /***/ }),

            /***/ "06cf":
            /***/ (function(module, exports, __webpack_require__) {

                var DESCRIPTORS = __webpack_require__("83ab");
                var propertyIsEnumerableModule = __webpack_require__("d1e7");
                var createPropertyDescriptor = __webpack_require__("5c6c");
                var toIndexedObject = __webpack_require__("fc6a");
                var toPrimitive = __webpack_require__("c04e");
                var has = __webpack_require__("5135");
                var IE8_DOM_DEFINE = __webpack_require__("0cfb");

                var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
                exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
                    O = toIndexedObject(O);
                    P = toPrimitive(P, true);
                    if (IE8_DOM_DEFINE) try {
                        return nativeGetOwnPropertyDescriptor(O, P);
                    } catch (error) { /* empty */ }
                    if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
                };


                /***/ }),

            /***/ "0b6c":
            /***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// Define search commands. Depends on dialog.js or another
// implementation of the openDialog method.

// Replace works a little oddly -- it will do the replace on the next
// Ctrl-G (or whatever is bound to findNext) press. You prevent a
// replace by making sure the match is no longer selected when hitting
// Ctrl-G.

                (function(mod) {
                    if (true) // CommonJS
                        mod(__webpack_require__("56b3"), __webpack_require__("b933"), __webpack_require__("2aed"));
                    else {}
                })(function(CodeMirror) {
                    "use strict";

                    function searchOverlay(query, caseInsensitive) {
                        if (typeof query == "string")
                            query = new RegExp(query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), caseInsensitive ? "gi" : "g");
                        else if (!query.global)
                            query = new RegExp(query.source, query.ignoreCase ? "gi" : "g");

                        return {token: function(stream) {
                                query.lastIndex = stream.pos;
                                var match = query.exec(stream.string);
                                if (match && match.index == stream.pos) {
                                    stream.pos += match[0].length || 1;
                                    return "searching";
                                } else if (match) {
                                    stream.pos = match.index;
                                } else {
                                    stream.skipToEnd();
                                }
                            }};
                    }

                    function SearchState() {
                        this.posFrom = this.posTo = this.lastQuery = this.query = null;
                        this.overlay = null;
                    }

                    function getSearchState(cm) {
                        return cm.state.search || (cm.state.search = new SearchState());
                    }

                    function queryCaseInsensitive(query) {
                        return typeof query == "string" && query == query.toLowerCase();
                    }

                    function getSearchCursor(cm, query, pos) {
                        // Heuristic: if the query string is all lowercase, do a case insensitive search.
                        return cm.getSearchCursor(query, pos, {caseFold: queryCaseInsensitive(query), multiline: true});
                    }

                    function persistentDialog(cm, text, deflt, onEnter, onKeyDown) {
                        cm.openDialog(text, onEnter, {
                            value: deflt,
                            selectValueOnOpen: true,
                            closeOnEnter: false,
                            onClose: function() { clearSearch(cm); },
                            onKeyDown: onKeyDown
                        });
                    }

                    function dialog(cm, text, shortText, deflt, f) {
                        if (cm.openDialog) cm.openDialog(text, f, {value: deflt, selectValueOnOpen: true});
                        else f(prompt(shortText, deflt));
                    }

                    function confirmDialog(cm, text, shortText, fs) {
                        if (cm.openConfirm) cm.openConfirm(text, fs);
                        else if (confirm(shortText)) fs[0]();
                    }

                    function parseString(string) {
                        return string.replace(/\\([nrt\\])/g, function(match, ch) {
                            if (ch == "n") return "\n"
                            if (ch == "r") return "\r"
                            if (ch == "t") return "\t"
                            if (ch == "\\") return "\\"
                            return match
                        })
                    }

                    function parseQuery(query) {
                        var isRE = query.match(/^\/(.*)\/([a-z]*)$/);
                        if (isRE) {
                            try { query = new RegExp(isRE[1], isRE[2].indexOf("i") == -1 ? "" : "i"); }
                            catch(e) {} // Not a regular expression after all, do a string search
                        } else {
                            query = parseString(query)
                        }
                        if (typeof query == "string" ? query == "" : query.test(""))
                            query = /x^/;
                        return query;
                    }

                    function startSearch(cm, state, query) {
                        state.queryText = query;
                        state.query = parseQuery(query);
                        cm.removeOverlay(state.overlay, queryCaseInsensitive(state.query));
                        state.overlay = searchOverlay(state.query, queryCaseInsensitive(state.query));
                        cm.addOverlay(state.overlay);
                        if (cm.showMatchesOnScrollbar) {
                            if (state.annotate) { state.annotate.clear(); state.annotate = null; }
                            state.annotate = cm.showMatchesOnScrollbar(state.query, queryCaseInsensitive(state.query));
                        }
                    }

                    function doSearch(cm, rev, persistent, immediate) {
                        var state = getSearchState(cm);
                        if (state.query) return findNext(cm, rev);
                        var q = cm.getSelection() || state.lastQuery;
                        if (q instanceof RegExp && q.source == "x^") q = null
                        if (persistent && cm.openDialog) {
                            var hiding = null
                            var searchNext = function(query, event) {
                                CodeMirror.e_stop(event);
                                if (!query) return;
                                if (query != state.queryText) {
                                    startSearch(cm, state, query);
                                    state.posFrom = state.posTo = cm.getCursor();
                                }
                                if (hiding) hiding.style.opacity = 1
                                findNext(cm, event.shiftKey, function(_, to) {
                                    var dialog
                                    if (to.line < 3 && document.querySelector &&
                                        (dialog = cm.display.wrapper.querySelector(".CodeMirror-dialog")) &&
                                        dialog.getBoundingClientRect().bottom - 4 > cm.cursorCoords(to, "window").top)
                                        (hiding = dialog).style.opacity = .4
                                })
                            };
                            persistentDialog(cm, getQueryDialog(cm), q, searchNext, function(event, query) {
                                var keyName = CodeMirror.keyName(event)
                                var extra = cm.getOption('extraKeys'), cmd = (extra && extra[keyName]) || CodeMirror.keyMap[cm.getOption("keyMap")][keyName]
                                if (cmd == "findNext" || cmd == "findPrev" ||
                                    cmd == "findPersistentNext" || cmd == "findPersistentPrev") {
                                    CodeMirror.e_stop(event);
                                    startSearch(cm, getSearchState(cm), query);
                                    cm.execCommand(cmd);
                                } else if (cmd == "find" || cmd == "findPersistent") {
                                    CodeMirror.e_stop(event);
                                    searchNext(query, event);
                                }
                            });
                            if (immediate && q) {
                                startSearch(cm, state, q);
                                findNext(cm, rev);
                            }
                        } else {
                            dialog(cm, getQueryDialog(cm), "Search for:", q, function(query) {
                                if (query && !state.query) cm.operation(function() {
                                    startSearch(cm, state, query);
                                    state.posFrom = state.posTo = cm.getCursor();
                                    findNext(cm, rev);
                                });
                            });
                        }
                    }

                    function findNext(cm, rev, callback) {cm.operation(function() {
                        var state = getSearchState(cm);
                        var cursor = getSearchCursor(cm, state.query, rev ? state.posFrom : state.posTo);
                        if (!cursor.find(rev)) {
                            cursor = getSearchCursor(cm, state.query, rev ? CodeMirror.Pos(cm.lastLine()) : CodeMirror.Pos(cm.firstLine(), 0));
                            if (!cursor.find(rev)) return;
                        }
                        cm.setSelection(cursor.from(), cursor.to());
                        cm.scrollIntoView({from: cursor.from(), to: cursor.to()}, 20);
                        state.posFrom = cursor.from(); state.posTo = cursor.to();
                        if (callback) callback(cursor.from(), cursor.to())
                    });}

                    function clearSearch(cm) {cm.operation(function() {
                        var state = getSearchState(cm);
                        state.lastQuery = state.query;
                        if (!state.query) return;
                        state.query = state.queryText = null;
                        cm.removeOverlay(state.overlay);
                        if (state.annotate) { state.annotate.clear(); state.annotate = null; }
                    });}


                    function getQueryDialog(cm)  {
                        return '<span class="CodeMirror-search-label">' + cm.phrase("Search:") + '</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' + cm.phrase("(Use /re/ syntax for regexp search)") + '</span>';
                    }
                    function getReplaceQueryDialog(cm) {
                        return ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' + cm.phrase("(Use /re/ syntax for regexp search)") + '</span>';
                    }
                    function getReplacementQueryDialog(cm) {
                        return '<span class="CodeMirror-search-label">' + cm.phrase("With:") + '</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/>';
                    }
                    function getDoReplaceConfirm(cm) {
                        return '<span class="CodeMirror-search-label">' + cm.phrase("Replace?") + '</span> <button>' + cm.phrase("Yes") + '</button> <button>' + cm.phrase("No") + '</button> <button>' + cm.phrase("All") + '</button> <button>' + cm.phrase("Stop") + '</button> ';
                    }

                    function replaceAll(cm, query, text) {
                        cm.operation(function() {
                            for (var cursor = getSearchCursor(cm, query); cursor.findNext();) {
                                if (typeof query != "string") {
                                    var match = cm.getRange(cursor.from(), cursor.to()).match(query);
                                    cursor.replace(text.replace(/\$(\d)/g, function(_, i) {return match[i];}));
                                } else cursor.replace(text);
                            }
                        });
                    }

                    function replace(cm, all) {
                        if (cm.getOption("readOnly")) return;
                        var query = cm.getSelection() || getSearchState(cm).lastQuery;
                        var dialogText = '<span class="CodeMirror-search-label">' + (all ? cm.phrase("Replace all:") : cm.phrase("Replace:")) + '</span>';
                        dialog(cm, dialogText + getReplaceQueryDialog(cm), dialogText, query, function(query) {
                            if (!query) return;
                            query = parseQuery(query);
                            dialog(cm, getReplacementQueryDialog(cm), cm.phrase("Replace with:"), "", function(text) {
                                text = parseString(text)
                                if (all) {
                                    replaceAll(cm, query, text)
                                } else {
                                    clearSearch(cm);
                                    var cursor = getSearchCursor(cm, query, cm.getCursor("from"));
                                    var advance = function() {
                                        var start = cursor.from(), match;
                                        if (!(match = cursor.findNext())) {
                                            cursor = getSearchCursor(cm, query);
                                            if (!(match = cursor.findNext()) ||
                                                (start && cursor.from().line == start.line && cursor.from().ch == start.ch)) return;
                                        }
                                        cm.setSelection(cursor.from(), cursor.to());
                                        cm.scrollIntoView({from: cursor.from(), to: cursor.to()});
                                        confirmDialog(cm, getDoReplaceConfirm(cm), cm.phrase("Replace?"),
                                            [function() {doReplace(match);}, advance,
                                                function() {replaceAll(cm, query, text)}]);
                                    };
                                    var doReplace = function(match) {
                                        cursor.replace(typeof query == "string" ? text :
                                            text.replace(/\$(\d)/g, function(_, i) {return match[i];}));
                                        advance();
                                    };
                                    advance();
                                }
                            });
                        });
                    }

                    CodeMirror.commands.find = function(cm) {clearSearch(cm); doSearch(cm);};
                    CodeMirror.commands.findPersistent = function(cm) {clearSearch(cm); doSearch(cm, false, true);};
                    CodeMirror.commands.findPersistentNext = function(cm) {doSearch(cm, false, true, true);};
                    CodeMirror.commands.findPersistentPrev = function(cm) {doSearch(cm, true, true, true);};
                    CodeMirror.commands.findNext = doSearch;
                    CodeMirror.commands.findPrev = function(cm) {doSearch(cm, true);};
                    CodeMirror.commands.clearSearch = clearSearch;
                    CodeMirror.commands.replace = replace;
                    CodeMirror.commands.replaceAll = function(cm) {replace(cm, true);};
                });


                /***/ }),

            /***/ "0cfb":
            /***/ (function(module, exports, __webpack_require__) {

                var DESCRIPTORS = __webpack_require__("83ab");
                var fails = __webpack_require__("d039");
                var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
                module.exports = !DESCRIPTORS && !fails(function () {
                    return Object.defineProperty(createElement('div'), 'a', {
                        get: function () { return 7; }
                    }).a != 7;
                });


                /***/ }),

            /***/ "1276":
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";

                var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
                var isRegExp = __webpack_require__("44e7");
                var anObject = __webpack_require__("825a");
                var requireObjectCoercible = __webpack_require__("1d80");
                var speciesConstructor = __webpack_require__("4840");
                var advanceStringIndex = __webpack_require__("8aa5");
                var toLength = __webpack_require__("50c4");
                var callRegExpExec = __webpack_require__("14c3");
                var regexpExec = __webpack_require__("9263");
                var fails = __webpack_require__("d039");

                var arrayPush = [].push;
                var min = Math.min;
                var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
                var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
                fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
                    var internalSplit;
                    if (
                        'abbc'.split(/(b)*/)[1] == 'c' ||
                        'test'.split(/(?:)/, -1).length != 4 ||
                        'ab'.split(/(?:ab)*/).length != 2 ||
                        '.'.split(/(.?)(.?)/).length != 4 ||
                        '.'.split(/()()/).length > 1 ||
                        ''.split(/.?/).length
                    ) {
                        // based on es5-shim implementation, need to rework it
                        internalSplit = function (separator, limit) {
                            var string = String(requireObjectCoercible(this));
                            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                            if (lim === 0) return [];
                            if (separator === undefined) return [string];
                            // If `separator` is not a regex, use native split
                            if (!isRegExp(separator)) {
                                return nativeSplit.call(string, separator, lim);
                            }
                            var output = [];
                            var flags = (separator.ignoreCase ? 'i' : '') +
                                (separator.multiline ? 'm' : '') +
                                (separator.unicode ? 'u' : '') +
                                (separator.sticky ? 'y' : '');
                            var lastLastIndex = 0;
                            // Make `global` and avoid `lastIndex` issues by working with a copy
                            var separatorCopy = new RegExp(separator.source, flags + 'g');
                            var match, lastIndex, lastLength;
                            while (match = regexpExec.call(separatorCopy, string)) {
                                lastIndex = separatorCopy.lastIndex;
                                if (lastIndex > lastLastIndex) {
                                    output.push(string.slice(lastLastIndex, match.index));
                                    if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
                                    lastLength = match[0].length;
                                    lastLastIndex = lastIndex;
                                    if (output.length >= lim) break;
                                }
                                if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
                            }
                            if (lastLastIndex === string.length) {
                                if (lastLength || !separatorCopy.test('')) output.push('');
                            } else output.push(string.slice(lastLastIndex));
                            return output.length > lim ? output.slice(0, lim) : output;
                        };
                        // Chakra, V8
                    } else if ('0'.split(undefined, 0).length) {
                        internalSplit = function (separator, limit) {
                            return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
                        };
                    } else internalSplit = nativeSplit;

                    return [
                        // `String.prototype.split` method
                        // https://tc39.github.io/ecma262/#sec-string.prototype.split
                        function split(separator, limit) {
                            var O = requireObjectCoercible(this);
                            var splitter = separator == undefined ? undefined : separator[SPLIT];
                            return splitter !== undefined
                                ? splitter.call(separator, O, limit)
                                : internalSplit.call(String(O), separator, limit);
                        },
                        // `RegExp.prototype[@@split]` method
                        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
                        //
                        // NOTE: This cannot be properly polyfilled in engines that don't support
                        // the 'y' flag.
                        function (regexp, limit) {
                            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
                            if (res.done) return res.value;

                            var rx = anObject(regexp);
                            var S = String(this);
                            var C = speciesConstructor(rx, RegExp);

                            var unicodeMatching = rx.unicode;
                            var flags = (rx.ignoreCase ? 'i' : '') +
                                (rx.multiline ? 'm' : '') +
                                (rx.unicode ? 'u' : '') +
                                (SUPPORTS_Y ? 'y' : 'g');

                            // ^(? + rx + ) is needed, in combination with some S slicing, to
                            // simulate the 'y' flag.
                            var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
                            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                            if (lim === 0) return [];
                            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
                            var p = 0;
                            var q = 0;
                            var A = [];
                            while (q < S.length) {
                                splitter.lastIndex = SUPPORTS_Y ? q : 0;
                                var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                                var e;
                                if (
                                    z === null ||
                                    (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
                                ) {
                                    q = advanceStringIndex(S, q, unicodeMatching);
                                } else {
                                    A.push(S.slice(p, q));
                                    if (A.length === lim) return A;
                                    for (var i = 1; i <= z.length - 1; i++) {
                                        A.push(z[i]);
                                        if (A.length === lim) return A;
                                    }
                                    q = p = e;
                                }
                            }
                            A.push(S.slice(p));
                            return A;
                        }
                    ];
                }, !SUPPORTS_Y);


                /***/ }),

            /***/ "13d5":
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";

                var $ = __webpack_require__("23e7");
                var $reduce = __webpack_require__("d58f").left;
                var arrayMethodIsStrict = __webpack_require__("a640");
                var arrayMethodUsesToLength = __webpack_require__("ae40");

                var STRICT_METHOD = arrayMethodIsStrict('reduce');
                var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
                $({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
                    reduce: function reduce(callbackfn /* , initialValue */) {
                        return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
                    }
                });


                /***/ }),

            /***/ "14c3":
            /***/ (function(module, exports, __webpack_require__) {

                var classof = __webpack_require__("c6b6");
                var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
                module.exports = function (R, S) {
                    var exec = R.exec;
                    if (typeof exec === 'function') {
                        var result = exec.call(R, S);
                        if (typeof result !== 'object') {
                            throw TypeError('RegExp exec method returned something other than an Object or null');
                        }
                        return result;
                    }

                    if (classof(R) !== 'RegExp') {
                        throw TypeError('RegExp#exec called on incompatible receiver');
                    }

                    return regexpExec.call(R, S);
                };



                /***/ }),

            /***/ "164b":
            /***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

                (function(mod) {
                    if (true) // CommonJS
                        mod(__webpack_require__("56b3"));
                    else {}
                })(function(CodeMirror) {
                    "use strict";

                    CodeMirror.registerGlobalHelper("fold", "comment", function(mode) {
                        return mode.blockCommentStart && mode.blockCommentEnd;
                    }, function(cm, start) {
                        var mode = cm.getModeAt(start), startToken = mode.blockCommentStart, endToken = mode.blockCommentEnd;
                        if (!startToken || !endToken) return;
                        var line = start.line, lineText = cm.getLine(line);

                        var startCh;
                        for (var at = start.ch, pass = 0;;) {
                            var found = at <= 0 ? -1 : lineText.lastIndexOf(startToken, at - 1);
                            if (found == -1) {
                                if (pass == 1) return;
                                pass = 1;
                                at = lineText.length;
                                continue;
                            }
                            if (pass == 1 && found < start.ch) return;
                            if (/comment/.test(cm.getTokenTypeAt(CodeMirror.Pos(line, found + 1))) &&
                                (found == 0 || lineText.slice(found - endToken.length, found) == endToken ||
                                    !/comment/.test(cm.getTokenTypeAt(CodeMirror.Pos(line, found))))) {
                                startCh = found + startToken.length;
                                break;
                            }
                            at = found - 1;
                        }

                        var depth = 1, lastLine = cm.lastLine(), end, endCh;
                        outer: for (var i = line; i <= lastLine; ++i) {
                            var text = cm.getLine(i), pos = i == line ? startCh : 0;
                            for (;;) {
                                var nextOpen = text.indexOf(startToken, pos), nextClose = text.indexOf(endToken, pos);
                                if (nextOpen < 0) nextOpen = text.length;
                                if (nextClose < 0) nextClose = text.length;
                                pos = Math.min(nextOpen, nextClose);
                                if (pos == text.length) break;
                                if (pos == nextOpen) ++depth;
                                else if (!--depth) { end = i; endCh = pos; break outer; }
                                ++pos;
                            }
                        }
                        if (end == null || line == end && endCh == startCh) return;
                        return {from: CodeMirror.Pos(line, startCh),
                            to: CodeMirror.Pos(end, endCh)};
                    });

                });


                /***/ }),

            /***/ "19aa":
            /***/ (function(module, exports) {

                module.exports = function (it, Constructor, name) {
                    if (!(it instanceof Constructor)) {
                        throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
                    } return it;
                };


                /***/ }),

            /***/ "1b63":
            /***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

                (function(mod) {
                    if (true) // CommonJS
                        mod(__webpack_require__("56b3"), __webpack_require__("7b00"));
                    else {}
                })(function(CodeMirror) {
                    "use strict";

                    CodeMirror.defineMode("sass", function(config) {
                        var cssMode = CodeMirror.mimeModes["text/css"];
                        var propertyKeywords = cssMode.propertyKeywords || {},
                            colorKeywords = cssMode.colorKeywords || {},
                            valueKeywords = cssMode.valueKeywords || {},
                            fontProperties = cssMode.fontProperties || {};

                        function tokenRegexp(words) {
                            return new RegExp("^" + words.join("|"));
                        }

                        var keywords = ["true", "false", "null", "auto"];
                        var keywordsRegexp = new RegExp("^" + keywords.join("|"));

                        var operators = ["\\(", "\\)", "=", ">", "<", "==", ">=", "<=", "\\+", "-",
                            "\\!=", "/", "\\*", "%", "and", "or", "not", ";","\\{","\\}",":"];
                        var opRegexp = tokenRegexp(operators);

                        var pseudoElementsRegexp = /^::?[a-zA-Z_][\w\-]*/;

                        var word;

                        function isEndLine(stream) {
                            return !stream.peek() || stream.match(/\s+$/, false);
                        }

                        function urlTokens(stream, state) {
                            var ch = stream.peek();

                            if (ch === ")") {
                                stream.next();
                                state.tokenizer = tokenBase;
                                return "operator";
                            } else if (ch === "(") {
                                stream.next();
                                stream.eatSpace();

                                return "operator";
                            } else if (ch === "'" || ch === '"') {
                                state.tokenizer = buildStringTokenizer(stream.next());
                                return "string";
                            } else {
                                state.tokenizer = buildStringTokenizer(")", false);
                                return "string";
                            }
                        }
                        function comment(indentation, multiLine) {
                            return function(stream, state) {
                                if (stream.sol() && stream.indentation() <= indentation) {
                                    state.tokenizer = tokenBase;
                                    return tokenBase(stream, state);
                                }

                                if (multiLine && stream.skipTo("*/")) {
                                    stream.next();
                                    stream.next();
                                    state.tokenizer = tokenBase;
                                } else {
                                    stream.skipToEnd();
                                }

                                return "comment";
                            };
                        }

                        function buildStringTokenizer(quote, greedy) {
                            if (greedy == null) { greedy = true; }

                            function stringTokenizer(stream, state) {
                                var nextChar = stream.next();
                                var peekChar = stream.peek();
                                var previousChar = stream.string.charAt(stream.pos-2);

                                var endingString = ((nextChar !== "\\" && peekChar === quote) || (nextChar === quote && previousChar !== "\\"));

                                if (endingString) {
                                    if (nextChar !== quote && greedy) { stream.next(); }
                                    if (isEndLine(stream)) {
                                        state.cursorHalf = 0;
                                    }
                                    state.tokenizer = tokenBase;
                                    return "string";
                                } else if (nextChar === "#" && peekChar === "{") {
                                    state.tokenizer = buildInterpolationTokenizer(stringTokenizer);
                                    stream.next();
                                    return "operator";
                                } else {
                                    return "string";
                                }
                            }

                            return stringTokenizer;
                        }

                        function buildInterpolationTokenizer(currentTokenizer) {
                            return function(stream, state) {
                                if (stream.peek() === "}") {
                                    stream.next();
                                    state.tokenizer = currentTokenizer;
                                    return "operator";
                                } else {
                                    return tokenBase(stream, state);
                                }
                            };
                        }

                        function indent(state) {
                            if (state.indentCount == 0) {
                                state.indentCount++;
                                var lastScopeOffset = state.scopes[0].offset;
                                var currentOffset = lastScopeOffset + config.indentUnit;
                                state.scopes.unshift({ offset:currentOffset });
                            }
                        }

                        function dedent(state) {
                            if (state.scopes.length == 1) return;

                            state.scopes.shift();
                        }

                        function tokenBase(stream, state) {
                            var ch = stream.peek();

                            // Comment
                            if (stream.match("/*")) {
                                state.tokenizer = comment(stream.indentation(), true);
                                return state.tokenizer(stream, state);
                            }
                            if (stream.match("//")) {
                                state.tokenizer = comment(stream.indentation(), false);
                                return state.tokenizer(stream, state);
                            }

                            // Interpolation
                            if (stream.match("#{")) {
                                state.tokenizer = buildInterpolationTokenizer(tokenBase);
                                return "operator";
                            }

                            // Strings
                            if (ch === '"' || ch === "'") {
                                stream.next();
                                state.tokenizer = buildStringTokenizer(ch);
                                return "string";
                            }

                            if(!state.cursorHalf){// state.cursorHalf === 0
                                // first half i.e. before : for key-value pairs
                                // including selectors

                                if (ch === "-") {
                                    if (stream.match(/^-\w+-/)) {
                                        return "meta";
                                    }
                                }

                                if (ch === ".") {
                                    stream.next();
                                    if (stream.match(/^[\w-]+/)) {
                                        indent(state);
                                        return "qualifier";
                                    } else if (stream.peek() === "#") {
                                        indent(state);
                                        return "tag";
                                    }
                                }

                                if (ch === "#") {
                                    stream.next();
                                    // ID selectors
                                    if (stream.match(/^[\w-]+/)) {
                                        indent(state);
                                        return "builtin";
                                    }
                                    if (stream.peek() === "#") {
                                        indent(state);
                                        return "tag";
                                    }
                                }

                                // Variables
                                if (ch === "$") {
                                    stream.next();
                                    stream.eatWhile(/[\w-]/);
                                    return "variable-2";
                                }

                                // Numbers
                                if (stream.match(/^-?[0-9\.]+/))
                                    return "number";

                                // Units
                                if (stream.match(/^(px|em|in)\b/))
                                    return "unit";

                                if (stream.match(keywordsRegexp))
                                    return "keyword";

                                if (stream.match(/^url/) && stream.peek() === "(") {
                                    state.tokenizer = urlTokens;
                                    return "atom";
                                }

                                if (ch === "=") {
                                    // Match shortcut mixin definition
                                    if (stream.match(/^=[\w-]+/)) {
                                        indent(state);
                                        return "meta";
                                    }
                                }

                                if (ch === "+") {
                                    // Match shortcut mixin definition
                                    if (stream.match(/^\+[\w-]+/)){
                                        return "variable-3";
                                    }
                                }

                                if(ch === "@"){
                                    if(stream.match(/@extend/)){
                                        if(!stream.match(/\s*[\w]/))
                                            dedent(state);
                                    }
                                }


                                // Indent Directives
                                if (stream.match(/^@(else if|if|media|else|for|each|while|mixin|function)/)) {
                                    indent(state);
                                    return "def";
                                }

                                // Other Directives
                                if (ch === "@") {
                                    stream.next();
                                    stream.eatWhile(/[\w-]/);
                                    return "def";
                                }

                                if (stream.eatWhile(/[\w-]/)){
                                    if(stream.match(/ *: *[\w-\+\$#!\("']/,false)){
                                        word = stream.current().toLowerCase();
                                        var prop = state.prevProp + "-" + word;
                                        if (propertyKeywords.hasOwnProperty(prop)) {
                                            return "property";
                                        } else if (propertyKeywords.hasOwnProperty(word)) {
                                            state.prevProp = word;
                                            return "property";
                                        } else if (fontProperties.hasOwnProperty(word)) {
                                            return "property";
                                        }
                                        return "tag";
                                    }
                                    else if(stream.match(/ *:/,false)){
                                        indent(state);
                                        state.cursorHalf = 1;
                                        state.prevProp = stream.current().toLowerCase();
                                        return "property";
                                    }
                                    else if(stream.match(/ *,/,false)){
                                        return "tag";
                                    }
                                    else{
                                        indent(state);
                                        return "tag";
                                    }
                                }

                                if(ch === ":"){
                                    if (stream.match(pseudoElementsRegexp)){ // could be a pseudo-element
                                        return "variable-3";
                                    }
                                    stream.next();
                                    state.cursorHalf=1;
                                    return "operator";
                                }

                            } // cursorHalf===0 ends here
                            else{

                                if (ch === "#") {
                                    stream.next();
                                    // Hex numbers
                                    if (stream.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)){
                                        if (isEndLine(stream)) {
                                            state.cursorHalf = 0;
                                        }
                                        return "number";
                                    }
                                }

                                // Numbers
                                if (stream.match(/^-?[0-9\.]+/)){
                                    if (isEndLine(stream)) {
                                        state.cursorHalf = 0;
                                    }
                                    return "number";
                                }

                                // Units
                                if (stream.match(/^(px|em|in)\b/)){
                                    if (isEndLine(stream)) {
                                        state.cursorHalf = 0;
                                    }
                                    return "unit";
                                }

                                if (stream.match(keywordsRegexp)){
                                    if (isEndLine(stream)) {
                                        state.cursorHalf = 0;
                                    }
                                    return "keyword";
                                }

                                if (stream.match(/^url/) && stream.peek() === "(") {
                                    state.tokenizer = urlTokens;
                                    if (isEndLine(stream)) {
                                        state.cursorHalf = 0;
                                    }
                                    return "atom";
                                }

                                // Variables
                                if (ch === "$") {
                                    stream.next();
                                    stream.eatWhile(/[\w-]/);
                                    if (isEndLine(stream)) {
                                        state.cursorHalf = 0;
                                    }
                                    return "variable-2";
                                }

                                // bang character for !important, !default, etc.
                                if (ch === "!") {
                                    stream.next();
                                    state.cursorHalf = 0;
                                    return stream.match(/^[\w]+/) ? "keyword": "operator";
                                }

                                if (stream.match(opRegexp)){
                                    if (isEndLine(stream)) {
                                        state.cursorHalf = 0;
                                    }
                                    return "operator";
                                }

                                // attributes
                                if (stream.eatWhile(/[\w-]/)) {
                                    if (isEndLine(stream)) {
                                        state.cursorHalf = 0;
                                    }
                                    word = stream.current().toLowerCase();
                                    if (valueKeywords.hasOwnProperty(word)) {
                                        return "atom";
                                    } else if (colorKeywords.hasOwnProperty(word)) {
                                        return "keyword";
                                    } else if (propertyKeywords.hasOwnProperty(word)) {
                                        state.prevProp = stream.current().toLowerCase();
                                        return "property";
                                    } else {
                                        return "tag";
                                    }
                                }

                                //stream.eatSpace();
                                if (isEndLine(stream)) {
                                    state.cursorHalf = 0;
                                    return null;
                                }

                            } // else ends here

                            if (stream.match(opRegexp))
                                return "operator";

                            // If we haven't returned by now, we move 1 character
                            // and return an error
                            stream.next();
                            return null;
                        }

                        function tokenLexer(stream, state) {
                            if (stream.sol()) state.indentCount = 0;
                            var style = state.tokenizer(stream, state);
                            var current = stream.current();

                            if (current === "@return" || current === "}"){
                                dedent(state);
                            }

                            if (style !== null) {
                                var startOfToken = stream.pos - current.length;

                                var withCurrentIndent = startOfToken + (config.indentUnit * state.indentCount);

                                var newScopes = [];

                                for (var i = 0; i < state.scopes.length; i++) {
                                    var scope = state.scopes[i];

                                    if (scope.offset <= withCurrentIndent)
                                        newScopes.push(scope);
                                }

                                state.scopes = newScopes;
                            }


                            return style;
                        }

                        return {
                            startState: function() {
                                return {
                                    tokenizer: tokenBase,
                                    scopes: [{offset: 0, type: "sass"}],
                                    indentCount: 0,
                                    cursorHalf: 0,  // cursor half tells us if cursor lies after (1)
                                                    // or before (0) colon (well... more or less)
                                    definedVars: [],
                                    definedMixins: []
                                };
                            },
                            token: function(stream, state) {
                                var style = tokenLexer(stream, state);

                                state.lastToken = { style: style, content: stream.current() };

                                return style;
                            },

                            indent: function(state) {
                                return state.scopes[0].offset;
                            }
                        };
                    }, "css");

                    CodeMirror.defineMIME("text/x-sass", "sass");

                });


                /***/ }),

            /***/ "1be4":
            /***/ (function(module, exports, __webpack_require__) {

                var getBuiltIn = __webpack_require__("d066");

                module.exports = getBuiltIn('document', 'documentElement');


                /***/ }),

            /***/ "1c0b":
            /***/ (function(module, exports) {

                module.exports = function (it) {
                    if (typeof it != 'function') {
                        throw TypeError(String(it) + ' is not a function');
                    } return it;
                };


                /***/ }),

            /***/ "1c7e":
            /***/ (function(module, exports, __webpack_require__) {

                var wellKnownSymbol = __webpack_require__("b622");

                var ITERATOR = wellKnownSymbol('iterator');
                var SAFE_CLOSING = false;

                try {
                    var called = 0;
                    var iteratorWithReturn = {
                        next: function () {
                            return { done: !!called++ };
                        },
                        'return': function () {
                            SAFE_CLOSING = true;
                        }
                    };
                    iteratorWithReturn[ITERATOR] = function () {
                        return this;
                    };
                    // eslint-disable-next-line no-throw-literal
                    Array.from(iteratorWithReturn, function () { throw 2; });
                } catch (error) { /* empty */ }

                module.exports = function (exec, SKIP_CLOSING) {
                    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
                    var ITERATION_SUPPORT = false;
                    try {
                        var object = {};
                        object[ITERATOR] = function () {
                            return {
                                next: function () {
                                    return { done: ITERATION_SUPPORT = true };
                                }
                            };
                        };
                        exec(object);
                    } catch (error) { /* empty */ }
                    return ITERATION_SUPPORT;
                };


                /***/ }),

            /***/ "1cc7":
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_run_sfc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("39b9");
                /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_run_sfc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_run_sfc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
                /* unused harmony reexport * */
                /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_run_sfc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a);

                /***/ }),

            /***/ "1cdc":
            /***/ (function(module, exports, __webpack_require__) {

                var userAgent = __webpack_require__("342f");

                module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


                /***/ }),

            /***/ "1d80":
            /***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
                module.exports = function (it) {
                    if (it == undefined) throw TypeError("Can't call method on " + it);
                    return it;
                };


                /***/ }),

            /***/ "1dde":
            /***/ (function(module, exports, __webpack_require__) {

                var fails = __webpack_require__("d039");
                var wellKnownSymbol = __webpack_require__("b622");
                var V8_VERSION = __webpack_require__("2d00");

                var SPECIES = wellKnownSymbol('species');

                module.exports = function (METHOD_NAME) {
                    // We can't use this feature detection in V8 since it causes
                    // deoptimization and serious performance degradation
                    // https://github.com/zloirock/core-js/issues/677
                    return V8_VERSION >= 51 || !fails(function () {
                        var array = [];
                        var constructor = array.constructor = {};
                        constructor[SPECIES] = function () {
                            return { foo: 1 };
                        };
                        return array[METHOD_NAME](Boolean).foo !== 1;
                    });
                };


                /***/ }),

            /***/ "2266":
            /***/ (function(module, exports, __webpack_require__) {

                var anObject = __webpack_require__("825a");
                var isArrayIteratorMethod = __webpack_require__("e95a");
                var toLength = __webpack_require__("50c4");
                var bind = __webpack_require__("0366");
                var getIteratorMethod = __webpack_require__("35a1");
                var callWithSafeIterationClosing = __webpack_require__("9bdd");

                var Result = function (stopped, result) {
                    this.stopped = stopped;
                    this.result = result;
                };

                var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
                    var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
                    var iterator, iterFn, index, length, result, next, step;

                    if (IS_ITERATOR) {
                        iterator = iterable;
                    } else {
                        iterFn = getIteratorMethod(iterable);
                        if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
                        // optimisation for array iterators
                        if (isArrayIteratorMethod(iterFn)) {
                            for (index = 0, length = toLength(iterable.length); length > index; index++) {
                                result = AS_ENTRIES
                                    ? boundFunction(anObject(step = iterable[index])[0], step[1])
                                    : boundFunction(iterable[index]);
                                if (result && result instanceof Result) return result;
                            } return new Result(false);
                        }
                        iterator = iterFn.call(iterable);
                    }

                    next = iterator.next;
                    while (!(step = next.call(iterator)).done) {
                        result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
                        if (typeof result == 'object' && result && result instanceof Result) return result;
                    } return new Result(false);
                };

                iterate.stop = function (result) {
                    return new Result(true, result);
                };


                /***/ }),

            /***/ "23cb":
            /***/ (function(module, exports, __webpack_require__) {

                var toInteger = __webpack_require__("a691");

                var max = Math.max;
                var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
                module.exports = function (index, length) {
                    var integer = toInteger(index);
                    return integer < 0 ? max(integer + length, 0) : min(integer, length);
                };


                /***/ }),

            /***/ "23de":
            /***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// Highlighting text that matches the selection
//
// Defines an option highlightSelectionMatches, which, when enabled,
// will style strings that match the selection throughout the
// document.
//
// The option can be set to true to simply enable it, or to a
// {minChars, style, wordsOnly, showToken, delay} object to explicitly
// configure it. minChars is the minimum amount of characters that should be
// selected for the behavior to occur, and style is the token style to
// apply to the matches. This will be prefixed by "cm-" to create an
// actual CSS class name. If wordsOnly is enabled, the matches will be
// highlighted only if the selected text is a word. showToken, when enabled,
// will cause the current token to be highlighted when nothing is selected.
// delay is used to specify how much time to wait, in milliseconds, before
// highlighting the matches. If annotateScrollbar is enabled, the occurences
// will be highlighted on the scrollbar via the matchesonscrollbar addon.

                (function(mod) {
                    if (true) // CommonJS
                        mod(__webpack_require__("56b3"), __webpack_require__("715d"));
                    else {}
                })(function(CodeMirror) {
                    "use strict";

                    var defaults = {
                        style: "matchhighlight",
                        minChars: 2,
                        delay: 100,
                        wordsOnly: false,
                        annotateScrollbar: false,
                        showToken: false,
                        trim: true
                    }

                    function State(options) {
                        this.options = {}
                        for (var name in defaults)
                            this.options[name] = (options && options.hasOwnProperty(name) ? options : defaults)[name]
                        this.overlay = this.timeout = null;
                        this.matchesonscroll = null;
                        this.active = false;
                    }

                    CodeMirror.defineOption("highlightSelectionMatches", false, function(cm, val, old) {
                        if (old && old != CodeMirror.Init) {
                            removeOverlay(cm);
                            clearTimeout(cm.state.matchHighlighter.timeout);
                            cm.state.matchHighlighter = null;
                            cm.off("cursorActivity", cursorActivity);
                            cm.off("focus", onFocus)
                        }
                        if (val) {
                            var state = cm.state.matchHighlighter = new State(val);
                            if (cm.hasFocus()) {
                                state.active = true
                                highlightMatches(cm)
                            } else {
                                cm.on("focus", onFocus)
                            }
                            cm.on("cursorActivity", cursorActivity);
                        }
                    });

                    function cursorActivity(cm) {
                        var state = cm.state.matchHighlighter;
                        if (state.active || cm.hasFocus()) scheduleHighlight(cm, state)
                    }

                    function onFocus(cm) {
                        var state = cm.state.matchHighlighter
                        if (!state.active) {
                            state.active = true
                            scheduleHighlight(cm, state)
                        }
                    }

                    function scheduleHighlight(cm, state) {
                        clearTimeout(state.timeout);
                        state.timeout = setTimeout(function() {highlightMatches(cm);}, state.options.delay);
                    }

                    function addOverlay(cm, query, hasBoundary, style) {
                        var state = cm.state.matchHighlighter;
                        cm.addOverlay(state.overlay = makeOverlay(query, hasBoundary, style));
                        if (state.options.annotateScrollbar && cm.showMatchesOnScrollbar) {
                            var searchFor = hasBoundary ? new RegExp((/\w/.test(query.charAt(0)) ? "\\b" : "") +
                                query.replace(/[\\\[.+*?(){|^$]/g, "\\$&") +
                                (/\w/.test(query.charAt(query.length - 1)) ? "\\b" : "")) : query;
                            state.matchesonscroll = cm.showMatchesOnScrollbar(searchFor, false,
                                {className: "CodeMirror-selection-highlight-scrollbar"});
                        }
                    }

                    function removeOverlay(cm) {
                        var state = cm.state.matchHighlighter;
                        if (state.overlay) {
                            cm.removeOverlay(state.overlay);
                            state.overlay = null;
                            if (state.matchesonscroll) {
                                state.matchesonscroll.clear();
                                state.matchesonscroll = null;
                            }
                        }
                    }

                    function highlightMatches(cm) {
                        cm.operation(function() {
                            var state = cm.state.matchHighlighter;
                            removeOverlay(cm);
                            if (!cm.somethingSelected() && state.options.showToken) {
                                var re = state.options.showToken === true ? /[\w$]/ : state.options.showToken;
                                var cur = cm.getCursor(), line = cm.getLine(cur.line), start = cur.ch, end = start;
                                while (start && re.test(line.charAt(start - 1))) --start;
                                while (end < line.length && re.test(line.charAt(end))) ++end;
                                if (start < end)
                                    addOverlay(cm, line.slice(start, end), re, state.options.style);
                                return;
                            }
                            var from = cm.getCursor("from"), to = cm.getCursor("to");
                            if (from.line != to.line) return;
                            if (state.options.wordsOnly && !isWord(cm, from, to)) return;
                            var selection = cm.getRange(from, to)
                            if (state.options.trim) selection = selection.replace(/^\s+|\s+$/g, "")
                            if (selection.length >= state.options.minChars)
                                addOverlay(cm, selection, false, state.options.style);
                        });
                    }

                    function isWord(cm, from, to) {
                        var str = cm.getRange(from, to);
                        if (str.match(/^\w+$/) !== null) {
                            if (from.ch > 0) {
                                var pos = {line: from.line, ch: from.ch - 1};
                                var chr = cm.getRange(pos, from);
                                if (chr.match(/\W/) === null) return false;
                            }
                            if (to.ch < cm.getLine(from.line).length) {
                                var pos = {line: to.line, ch: to.ch + 1};
                                var chr = cm.getRange(to, pos);
                                if (chr.match(/\W/) === null) return false;
                            }
                            return true;
                        } else return false;
                    }

                    function boundariesAround(stream, re) {
                        return (!stream.start || !re.test(stream.string.charAt(stream.start - 1))) &&
                            (stream.pos == stream.string.length || !re.test(stream.string.charAt(stream.pos)));
                    }

                    function makeOverlay(query, hasBoundary, style) {
                        return {token: function(stream) {
                                if (stream.match(query) &&
                                    (!hasBoundary || boundariesAround(stream, hasBoundary)))
                                    return style;
                                stream.next();
                                stream.skipTo(query.charAt(0)) || stream.skipToEnd();
                            }};
                    }
                });


                /***/ }),

            /***/ "23e7":
            /***/ (function(module, exports, __webpack_require__) {

                var global = __webpack_require__("da84");
                var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
                var createNonEnumerableProperty = __webpack_require__("9112");
                var redefine = __webpack_require__("6eeb");
                var setGlobal = __webpack_require__("ce4e");
                var copyConstructorProperties = __webpack_require__("e893");
                var isForced = __webpack_require__("94ca");

                /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
                module.exports = function (options, source) {
                    var TARGET = options.target;
                    var GLOBAL = options.global;
                    var STATIC = options.stat;
                    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
                    if (GLOBAL) {
                        target = global;
                    } else if (STATIC) {
                        target = global[TARGET] || setGlobal(TARGET, {});
                    } else {
                        target = (global[TARGET] || {}).prototype;
                    }
                    if (target) for (key in source) {
                        sourceProperty = source[key];
                        if (options.noTargetGet) {
                            descriptor = getOwnPropertyDescriptor(target, key);
                            targetProperty = descriptor && descriptor.value;
                        } else targetProperty = target[key];
                        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
                        // contained in target
                        if (!FORCED && targetProperty !== undefined) {
                            if (typeof sourceProperty === typeof targetProperty) continue;
                            copyConstructorProperties(sourceProperty, targetProperty);
                        }
                        // add a flag to not completely full polyfills
                        if (options.sham || (targetProperty && targetProperty.sham)) {
                            createNonEnumerableProperty(sourceProperty, 'sham', true);
                        }
                        // extend global
                        redefine(target, key, sourceProperty, options);
                    }
                };


                /***/ }),

            /***/ "241c":
            /***/ (function(module, exports, __webpack_require__) {

                var internalObjectKeys = __webpack_require__("ca84");
                var enumBugKeys = __webpack_require__("7839");

                var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
                exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                    return internalObjectKeys(O, hiddenKeys);
                };


                /***/ }),

            /***/ "24fb":
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
                module.exports = function (useSourceMap) {
                    var list = []; // return the list of modules as css string

                    list.toString = function toString() {
                        return this.map(function (item) {
                            var content = cssWithMappingToString(item, useSourceMap);

                            if (item[2]) {
                                return "@media ".concat(item[2], " {").concat(content, "}");
                            }

                            return content;
                        }).join('');
                    }; // import a list of modules into the list
                    // eslint-disable-next-line func-names


                    list.i = function (modules, mediaQuery, dedupe) {
                        if (typeof modules === 'string') {
                            // eslint-disable-next-line no-param-reassign
                            modules = [[null, modules, '']];
                        }

                        var alreadyImportedModules = {};

                        if (dedupe) {
                            for (var i = 0; i < this.length; i++) {
                                // eslint-disable-next-line prefer-destructuring
                                var id = this[i][0];

                                if (id != null) {
                                    alreadyImportedModules[id] = true;
                                }
                            }
                        }

                        for (var _i = 0; _i < modules.length; _i++) {
                            var item = [].concat(modules[_i]);

                            if (dedupe && alreadyImportedModules[item[0]]) {
                                // eslint-disable-next-line no-continue
                                continue;
                            }

                            if (mediaQuery) {
                                if (!item[2]) {
                                    item[2] = mediaQuery;
                                } else {
                                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                                }
                            }

                            list.push(item);
                        }
                    };

                    return list;
                };

                function cssWithMappingToString(item, useSourceMap) {
                    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

                    var cssMapping = item[3];

                    if (!cssMapping) {
                        return content;
                    }

                    if (useSourceMap && typeof btoa === 'function') {
                        var sourceMapping = toComment(cssMapping);
                        var sourceURLs = cssMapping.sources.map(function (source) {
                            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
                        });
                        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
                    }

                    return [content].join('\n');
                } // Adapted from convert-source-map (MIT)


                function toComment(sourceMap) {
                    // eslint-disable-next-line no-undef
                    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
                    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
                    return "/*# ".concat(data, " */");
                }

                /***/ }),

            /***/ "25f0":
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";

                var redefine = __webpack_require__("6eeb");
                var anObject = __webpack_require__("825a");
                var fails = __webpack_require__("d039");
                var flags = __webpack_require__("ad6d");

                var TO_STRING = 'toString';
                var RegExpPrototype = RegExp.prototype;
                var nativeToString = RegExpPrototype[TO_STRING];

                var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
                var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
                if (NOT_GENERIC || INCORRECT_NAME) {
                    redefine(RegExp.prototype, TO_STRING, function toString() {
                        var R = anObject(this);
                        var p = String(R.source);
                        var rf = R.flags;
                        var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
                        return '/' + p + '/' + f;
                    }, { unsafe: true });
                }


                /***/ }),

            /***/ "2626":
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";

                var getBuiltIn = __webpack_require__("d066");
                var definePropertyModule = __webpack_require__("9bf2");
                var wellKnownSymbol = __webpack_require__("b622");
                var DESCRIPTORS = __webpack_require__("83ab");

                var SPECIES = wellKnownSymbol('species');

                module.exports = function (CONSTRUCTOR_NAME) {
                    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
                    var defineProperty = definePropertyModule.f;

                    if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
                        defineProperty(Constructor, SPECIES, {
                            configurable: true,
                            get: function () { return this; }
                        });
                    }
                };


                /***/ }),

            /***/ "2aed":
            /***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// Open simple dialogs on top of an editor. Relies on dialog.css.

                (function(mod) {
                    if (true) // CommonJS
                        mod(__webpack_require__("56b3"));
                    else {}
                })(function(CodeMirror) {
                    function dialogDiv(cm, template, bottom) {
                        var wrap = cm.getWrapperElement();
                        var dialog;
                        dialog = wrap.appendChild(document.createElement("div"));
                        if (bottom)
                            dialog.className = "CodeMirror-dialog CodeMirror-dialog-bottom";
                        else
                            dialog.className = "CodeMirror-dialog CodeMirror-dialog-top";

                        if (typeof template == "string") {
                            dialog.innerHTML = template;
                        } else { // Assuming it's a detached DOM element.
                            dialog.appendChild(template);
                        }
                        CodeMirror.addClass(wrap, 'dialog-opened');
                        return dialog;
                    }

                    function closeNotification(cm, newVal) {
                        if (cm.state.currentNotificationClose)
                            cm.state.currentNotificationClose();
                        cm.state.currentNotificationClose = newVal;
                    }

                    CodeMirror.defineExtension("openDialog", function(template, callback, options) {
                        if (!options) options = {};

                        closeNotification(this, null);

                        var dialog = dialogDiv(this, template, options.bottom);
                        var closed = false, me = this;
                        function close(newVal) {
                            if (typeof newVal == 'string') {
                                inp.value = newVal;
                            } else {
                                if (closed) return;
                                closed = true;
                                CodeMirror.rmClass(dialog.parentNode, 'dialog-opened');
                                dialog.parentNode.removeChild(dialog);
                                me.focus();

                                if (options.onClose) options.onClose(dialog);
                            }
                        }

                        var inp = dialog.getElementsByTagName("input")[0], button;
                        if (inp) {
                            inp.focus();

                            if (options.value) {
                                inp.value = options.value;
                                if (options.selectValueOnOpen !== false) {
                                    inp.select();
                                }
                            }

                            if (options.onInput)
                                CodeMirror.on(inp, "input", function(e) { options.onInput(e, inp.value, close);});
                            if (options.onKeyUp)
                                CodeMirror.on(inp, "keyup", function(e) {options.onKeyUp(e, inp.value, close);});

                            CodeMirror.on(inp, "keydown", function(e) {
                                if (options && options.onKeyDown && options.onKeyDown(e, inp.value, close)) { return; }
                                if (e.keyCode == 27 || (options.closeOnEnter !== false && e.keyCode == 13)) {
                                    inp.blur();
                                    CodeMirror.e_stop(e);
                                    close();
                                }
                                if (e.keyCode == 13) callback(inp.value, e);
                            });

                            if (options.closeOnBlur !== false) CodeMirror.on(dialog, "focusout", function (evt) {
                                if (evt.relatedTarget !== null) close();
                            });
                        } else if (button = dialog.getElementsByTagName("button")[0]) {
                            CodeMirror.on(button, "click", function() {
                                close();
                                me.focus();
                            });

                            if (options.closeOnBlur !== false) CodeMirror.on(button, "blur", close);

                            button.focus();
                        }
                        return close;
                    });

                    CodeMirror.defineExtension("openConfirm", function(template, callbacks, options) {
                        closeNotification(this, null);
                        var dialog = dialogDiv(this, template, options && options.bottom);
                        var buttons = dialog.getElementsByTagName("button");
                        var closed = false, me = this, blurring = 1;
                        function close() {
                            if (closed) return;
                            closed = true;
                            CodeMirror.rmClass(dialog.parentNode, 'dialog-opened');
                            dialog.parentNode.removeChild(dialog);
                            me.focus();
                        }
                        buttons[0].focus();
                        for (var i = 0; i < buttons.length; ++i) {
                            var b = buttons[i];
                            (function(callback) {
                                CodeMirror.on(b, "click", function(e) {
                                    CodeMirror.e_preventDefault(e);
                                    close();
                                    if (callback) callback(me);
                                });
                            })(callbacks[i]);
                            CodeMirror.on(b, "blur", function() {
                                --blurring;
                                setTimeout(function() { if (blurring <= 0) close(); }, 200);
                            });
                            CodeMirror.on(b, "focus", function() { ++blurring; });
                        }
                    });

                    /*
   * openNotification
   * Opens a notification, that can be closed with an optional timer
   * (default 5000ms timer) and always closes on click.
   *
   * If a notification is opened while another is opened, it will close the
   * currently opened one and open the new one immediately.
   */
                    CodeMirror.defineExtension("openNotification", function(template, options) {
                        closeNotification(this, close);
                        var dialog = dialogDiv(this, template, options && options.bottom);
                        var closed = false, doneTimer;
                        var duration = options && typeof options.duration !== "undefined" ? options.duration : 5000;

                        function close() {
                            if (closed) return;
                            closed = true;
                            clearTimeout(doneTimer);
                            CodeMirror.rmClass(dialog.parentNode, 'dialog-opened');
                            dialog.parentNode.removeChild(dialog);
                        }

                        CodeMirror.on(dialog, 'click', function(e) {
                            CodeMirror.e_preventDefault(e);
                            close();
                        });

                        if (duration)
                            doneTimer = setTimeout(close, duration);

                        return close;
                    });
                });


                /***/ }),

            /***/ "2c9e":
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_run_sfc_preview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("04fc");
                /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_run_sfc_preview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_run_sfc_preview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
                /* unused harmony reexport * */
                /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_run_sfc_preview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a);

                /***/ }),

            /***/ "2cf4":
            /***/ (function(module, exports, __webpack_require__) {

                var global = __webpack_require__("da84");
                var fails = __webpack_require__("d039");
                var classof = __webpack_require__("c6b6");
                var bind = __webpack_require__("0366");
                var html = __webpack_require__("1be4");
                var createElement = __webpack_require__("cc12");
                var IS_IOS = __webpack_require__("1cdc");

                var location = global.location;
                var set = global.setImmediate;
                var clear = global.clearImmediate;
                var process = global.process;
                var MessageChannel = global.MessageChannel;
                var Dispatch = global.Dispatch;
                var counter = 0;
                var queue = {};
                var ONREADYSTATECHANGE = 'onreadystatechange';
                var defer, channel, port;

                var run = function (id) {
                    // eslint-disable-next-line no-prototype-builtins
                    if (queue.hasOwnProperty(id)) {
                        var fn = queue[id];
                        delete queue[id];
                        fn();
                    }
                };

                var runner = function (id) {
                    return function () {
                        run(id);
                    };
                };

                var listener = function (event) {
                    run(event.data);
                };

                var post = function (id) {
                    // old engines have not location.origin
                    global.postMessage(id + '', location.protocol + '//' + location.host);
                };

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
                if (!set || !clear) {
                    set = function setImmediate(fn) {
                        var args = [];
                        var i = 1;
                        while (arguments.length > i) args.push(arguments[i++]);
                        queue[++counter] = function () {
                            // eslint-disable-next-line no-new-func
                            (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
                        };
                        defer(counter);
                        return counter;
                    };
                    clear = function clearImmediate(id) {
                        delete queue[id];
                    };
                    // Node.js 0.8-
                    if (classof(process) == 'process') {
                        defer = function (id) {
                            process.nextTick(runner(id));
                        };
                        // Sphere (JS game engine) Dispatch API
                    } else if (Dispatch && Dispatch.now) {
                        defer = function (id) {
                            Dispatch.now(runner(id));
                        };
                        // Browsers with MessageChannel, includes WebWorkers
                        // except iOS - https://github.com/zloirock/core-js/issues/624
                    } else if (MessageChannel && !IS_IOS) {
                        channel = new MessageChannel();
                        port = channel.port2;
                        channel.port1.onmessage = listener;
                        defer = bind(port.postMessage, port, 1);
                        // Browsers with postMessage, skip WebWorkers
                        // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
                    } else if (
                        global.addEventListener &&
                        typeof postMessage == 'function' &&
                        !global.importScripts &&
                        !fails(post) &&
                        location.protocol !== 'file:'
                    ) {
                        defer = post;
                        global.addEventListener('message', listener, false);
                        // IE8-
                    } else if (ONREADYSTATECHANGE in createElement('script')) {
                        defer = function (id) {
                            html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
                                html.removeChild(this);
                                run(id);
                            };
                        };
                        // Rest old browsers
                    } else {
                        defer = function (id) {
                            setTimeout(runner(id), 0);
                        };
                    }
                }

                module.exports = {
                    set: set,
                    clear: clear
                };


                /***/ }),

            /***/ "2d00":
            /***/ (function(module, exports, __webpack_require__) {

                var global = __webpack_require__("da84");
                var userAgent = __webpack_require__("342f");

                var process = global.process;
                var versions = process && process.versions;
                var v8 = versions && versions.v8;
                var match, version;

                if (v8) {
                    match = v8.split('.');
                    version = match[0] + match[1];
                } else if (userAgent) {
                    match = userAgent.match(/Edge\/(\d+)/);
                    if (!match || match[1] >= 74) {
                        match = userAgent.match(/Chrome\/(\d+)/);
                        if (match) version = match[1];
                    }
                }

                module.exports = version && +version;


                /***/ }),

            /***/ "2d82":
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_run_sfc_main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4637");
                /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_run_sfc_main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_run_sfc_main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
                /* unused harmony reexport * */
                /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_run_sfc_main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a);

                /***/ }),

            /***/ "2ff6":
            /***/ (function(module, exports, __webpack_require__) {

// Imports
                var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
                exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
                exports.push([module.i, ".vue-run-sfc{box-sizing:border-box;background:#fff;color:#303133}.vue-run-sfc:hover{box-shadow:0 0 8px 0 rgba(232,237,250,.6),0 2px 4px 0 rgba(232,237,250,.5)}.vue-run-sfc-editor{width:100%;font-size:14px;line-height:1.5em}.vue-run-sfc-editor .CodeMirror{height:inherit}.vue-run-sfc-editor .CodeMirror-scrollbar-filler,.vue-run-sfc-editor .CodeMirror-vscrollbar{display:none!important}.vue-run-sfc-editor .CodeMirror-sizer{padding-right:0!important}", ""]);
// Exports
                module.exports = exports;


                /***/ }),

            /***/ "31a4":
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOne", function() { return getOne; });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
                /* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("caad");
                /* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e260");
                /* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a15b");
                /* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("d81d");
                /* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
                /* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("d3b7");
                /* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
                /* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("e6cf");
                /* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__);
                /* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("3ca3");
                /* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
                /* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ddb0");
                /* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);








                var url = "https://wfwf9k3tn7.execute-api.us-west-2.amazonaws.com/production/process/";
                var getOne = function getOne(type, code) {
                    return window.fetch(url + new Date().getTime() + parseInt(Math.random() * 1000), {
                        method: "POST",
                        headers: new Headers({
                            "Content-Type": "application/json"
                        }),
                        body: JSON.stringify({
                            css: {
                                contentType: "css",
                                id: "css",
                                options: {},
                                syntax: type,
                                version: "default",
                                textInput: code
                            }
                        })
                    }).then(function (res) {
                        return res.json();
                    }).then(function (data) {
                        if (data.success) {
                            if (data.payload.css.errors && data.payload.css.errors.length) {
                                return {
                                    success: false,
                                    error: data.payload.css.errors.map(function (item) {
                                        return item.message;
                                    }).join("\n")
                                };
                            } else {
                                return {
                                    success: true,
                                    style: data.payload.css.textOutput
                                };
                            }
                        } else {
                            return {
                                success: false,
                                error: data.errors.map(function (item) {
                                    return item.message;
                                }).join("\n")
                            };
                        }
                    }, function (error) {
                        return Promise.resolve({
                            success: false,
                            error: error.message
                        });
                    });
                };
                var getStyles = function getStyles(styles) {
                    styles = styles.map(function (item) {
                        if (!item.lang) {
                            return Promise.resolve({
                                success: true,
                                style: item.content
                            });
                        } else if (["scss", "sass", "less", "stylus"].includes(item.lang)) {
                            return getOne(item.lang, item.content);
                        } else {
                            return Promise.resolve({
                                success: false,
                                error: ""
                            });
                        }
                    });
                    return Promise.all(styles);
                };

                /***/ }),

            /***/ "31c5":
            /***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

                (function(mod) {
                    if (true) // CommonJS
                        mod(__webpack_require__("56b3"));
                    else {}
                })(function(CodeMirror) {
                    "use strict";
                    var WRAP_CLASS = "CodeMirror-activeline";
                    var BACK_CLASS = "CodeMirror-activeline-background";
                    var GUTT_CLASS = "CodeMirror-activeline-gutter";

                    CodeMirror.defineOption("styleActiveLine", false, function(cm, val, old) {
                        var prev = old == CodeMirror.Init ? false : old;
                        if (val == prev) return
                        if (prev) {
                            cm.off("beforeSelectionChange", selectionChange);
                            clearActiveLines(cm);
                            delete cm.state.activeLines;
                        }
                        if (val) {
                            cm.state.activeLines = [];
                            updateActiveLines(cm, cm.listSelections());
                            cm.on("beforeSelectionChange", selectionChange);
                        }
                    });

                    function clearActiveLines(cm) {
                        for (var i = 0; i < cm.state.activeLines.length; i++) {
                            cm.removeLineClass(cm.state.activeLines[i], "wrap", WRAP_CLASS);
                            cm.removeLineClass(cm.state.activeLines[i], "background", BACK_CLASS);
                            cm.removeLineClass(cm.state.activeLines[i], "gutter", GUTT_CLASS);
                        }
                    }

                    function sameArray(a, b) {
                        if (a.length != b.length) return false;
                        for (var i = 0; i < a.length; i++)
                            if (a[i] != b[i]) return false;
                        return true;
                    }

                    function updateActiveLines(cm, ranges) {
                        var active = [];
                        for (var i = 0; i < ranges.length; i++) {
                            var range = ranges[i];
                            var option = cm.getOption("styleActiveLine");
                            if (typeof option == "object" && option.nonEmpty ? range.anchor.line != range.head.line : !range.empty())
                                continue
                            var line = cm.getLineHandleVisualStart(range.head.line);
                            if (active[active.length - 1] != line) active.push(line);
                        }
                        if (sameArray(cm.state.activeLines, active)) return;
                        cm.operation(function() {
                            clearActiveLines(cm);
                            for (var i = 0; i < active.length; i++) {
                                cm.addLineClass(active[i], "wrap", WRAP_CLASS);
                                cm.addLineClass(active[i], "background", BACK_CLASS);
                                cm.addLineClass(active[i], "gutter", GUTT_CLASS);
                            }
                            cm.state.activeLines = active;
                        });
                    }

                    function selectionChange(cm, sel) {
                        updateActiveLines(cm, sel.ranges);
                    }
                });


                /***/ }),

            /***/ "342f":
            /***/ (function(module, exports, __webpack_require__) {

                var getBuiltIn = __webpack_require__("d066");

                module.exports = getBuiltIn('navigator', 'userAgent') || '';


                /***/ }),

            /***/ "35a1":
            /***/ (function(module, exports, __webpack_require__) {

                var classof = __webpack_require__("f5df");
                var Iterators = __webpack_require__("3f8c");
                var wellKnownSymbol = __webpack_require__("b622");

                var ITERATOR = wellKnownSymbol('iterator');

                module.exports = function (it) {
                    if (it != undefined) return it[ITERATOR]
                        || it['@@iterator']
                        || Iterators[classof(it)];
                };


                /***/ }),

            /***/ "37e8":
            /***/ (function(module, exports, __webpack_require__) {

                var DESCRIPTORS = __webpack_require__("83ab");
                var definePropertyModule = __webpack_require__("9bf2");
                var anObject = __webpack_require__("825a");
                var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
                module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
                    anObject(O);
                    var keys = objectKeys(Properties);
                    var length = keys.length;
                    var index = 0;
                    var key;
                    while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
                    return O;
                };


                /***/ }),

            /***/ "39b9":
            /***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
                var content = __webpack_require__("2ff6");
                if(typeof content === 'string') content = [[module.i, content, '']];
                if(content.locals) module.exports = content.locals;
// add the styles to the DOM
                var add = __webpack_require__("499e").default
                var update = add("24b12cf3", content, true, {"sourceMap":false,"shadowMode":false});

                /***/ }),

            /***/ "3bbe":
            /***/ (function(module, exports, __webpack_require__) {

                var isObject = __webpack_require__("861d");

                module.exports = function (it) {
                    if (!isObject(it) && it !== null) {
                        throw TypeError("Can't set " + String(it) + ' as a prototype');
                    } return it;
                };


                /***/ }),

            /***/ "3c4e":
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var isMergeableObject = function isMergeableObject(value) {
                    return isNonNullObject(value)
                        && !isSpecial(value)
                };

                function isNonNullObject(value) {
                    return !!value && typeof value === 'object'
                }

                function isSpecial(value) {
                    var stringValue = Object.prototype.toString.call(value);

                    return stringValue === '[object RegExp]'
                        || stringValue === '[object Date]'
                        || isReactElement(value)
                }

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
                var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
                var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

                function isReactElement(value) {
                    return value.$$typeof === REACT_ELEMENT_TYPE
                }

                function emptyTarget(val) {
                    return Array.isArray(val) ? [] : {}
                }

                function cloneUnlessOtherwiseSpecified(value, options) {
                    return (options.clone !== false && options.isMergeableObject(value))
                        ? deepmerge(emptyTarget(value), value, options)
                        : value
                }

                function defaultArrayMerge(target, source, options) {
                    return target.concat(source).map(function(element) {
                        return cloneUnlessOtherwiseSpecified(element, options)
                    })
                }

                function getMergeFunction(key, options) {
                    if (!options.customMerge) {
                        return deepmerge
                    }
                    var customMerge = options.customMerge(key);
                    return typeof customMerge === 'function' ? customMerge : deepmerge
                }

                function getEnumerableOwnPropertySymbols(target) {
                    return Object.getOwnPropertySymbols
                        ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
                            return target.propertyIsEnumerable(symbol)
                        })
                        : []
                }

                function getKeys(target) {
                    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
                }

                function propertyIsOnObject(object, property) {
                    try {
                        return property in object
                    } catch(_) {
                        return false
                    }
                }

// Protects from prototype poisoning and unexpected merging up the prototype chain.
                function propertyIsUnsafe(target, key) {
                    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
                        && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
                            && Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
                }

                function mergeObject(target, source, options) {
                    var destination = {};
                    if (options.isMergeableObject(target)) {
                        getKeys(target).forEach(function(key) {
                            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                        });
                    }
                    getKeys(source).forEach(function(key) {
                        if (propertyIsUnsafe(target, key)) {
                            return
                        }

                        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
                            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
                        } else {
                            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                        }
                    });
                    return destination
                }

                function deepmerge(target, source, options) {
                    options = options || {};
                    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
                    // implementations can use it. The caller may not replace it.
                    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

                    var sourceIsArray = Array.isArray(source);
                    var targetIsArray = Array.isArray(target);
                    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

                    if (!sourceAndTargetTypesMatch) {
                        return cloneUnlessOtherwiseSpecified(source, options)
                    } else if (sourceIsArray) {
                        return options.arrayMerge(target, source, options)
                    } else {
                        return mergeObject(target, source, options)
                    }
                }

                deepmerge.all = function deepmergeAll(array, options) {
                    if (!Array.isArray(array)) {
                        throw new Error('first argument should be an array')
                    }

                    return array.reduce(function(prev, next) {
                        return deepmerge(prev, next, options)
                    }, {})
                };

                var deepmerge_1 = deepmerge;

                module.exports = deepmerge_1;


                /***/ }),

            /***/ "3c98":
            /***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

                (function(mod) {
                    if (true) // CommonJS
                        mod(__webpack_require__("56b3"));
                    else {}
                })(function(CodeMirror) {
                    var Pos = CodeMirror.Pos;

                    function forEach(arr, f) {
                        for (var i = 0, e = arr.length; i < e; ++i) f(arr[i]);
                    }

                    function arrayContains(arr, item) {
                        if (!Array.prototype.indexOf) {
                            var i = arr.length;
                            while (i--) {
                                if (arr[i] === item) {
                                    return true;
                                }
                            }
                            return false;
                        }
                        return arr.indexOf(item) != -1;
                    }

                    function scriptHint(editor, keywords, getToken, options) {
                        // Find the token at the cursor
                        var cur = editor.getCursor(), token = getToken(editor, cur);
                        if (/\b(?:string|comment)\b/.test(token.type)) return;
                        var innerMode = CodeMirror.innerMode(editor.getMode(), token.state);
                        if (innerMode.mode.helperType === "json") return;
                        token.state = innerMode.state;

                        // If it's not a 'word-style' token, ignore the token.
                        if (!/^[\w$_]*$/.test(token.string)) {
                            token = {start: cur.ch, end: cur.ch, string: "", state: token.state,
                                type: token.string == "." ? "property" : null};
                        } else if (token.end > cur.ch) {
                            token.end = cur.ch;
                            token.string = token.string.slice(0, cur.ch - token.start);
                        }

                        var tprop = token;
                        // If it is a property, find out what it is a property of.
                        while (tprop.type == "property") {
                            tprop = getToken(editor, Pos(cur.line, tprop.start));
                            if (tprop.string != ".") return;
                            tprop = getToken(editor, Pos(cur.line, tprop.start));
                            if (!context) var context = [];
                            context.push(tprop);
                        }
                        return {list: getCompletions(token, context, keywords, options),
                            from: Pos(cur.line, token.start),
                            to: Pos(cur.line, token.end)};
                    }

                    function javascriptHint(editor, options) {
                        return scriptHint(editor, javascriptKeywords,
                            function (e, cur) {return e.getTokenAt(cur);},
                            options);
                    };
                    CodeMirror.registerHelper("hint", "javascript", javascriptHint);

                    function getCoffeeScriptToken(editor, cur) {
                        // This getToken, it is for coffeescript, imitates the behavior of
                        // getTokenAt method in javascript.js, that is, returning "property"
                        // type and treat "." as indepenent token.
                        var token = editor.getTokenAt(cur);
                        if (cur.ch == token.start + 1 && token.string.charAt(0) == '.') {
                            token.end = token.start;
                            token.string = '.';
                            token.type = "property";
                        }
                        else if (/^\.[\w$_]*$/.test(token.string)) {
                            token.type = "property";
                            token.start++;
                            token.string = token.string.replace(/\./, '');
                        }
                        return token;
                    }

                    function coffeescriptHint(editor, options) {
                        return scriptHint(editor, coffeescriptKeywords, getCoffeeScriptToken, options);
                    }
                    CodeMirror.registerHelper("hint", "coffeescript", coffeescriptHint);

                    var stringProps = ("charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight " +
                        "toUpperCase toLowerCase split concat match replace search").split(" ");
                    var arrayProps = ("length concat join splice push pop shift unshift slice reverse sort indexOf " +
                        "lastIndexOf every some filter forEach map reduce reduceRight ").split(" ");
                    var funcProps = "prototype apply call bind".split(" ");
                    var javascriptKeywords = ("break case catch class const continue debugger default delete do else export extends false finally for function " +
                        "if in import instanceof new null return super switch this throw true try typeof var void while with yield").split(" ");
                    var coffeescriptKeywords = ("and break catch class continue delete do else extends false finally for " +
                        "if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes").split(" ");

                    function forAllProps(obj, callback) {
                        if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) {
                            for (var name in obj) callback(name)
                        } else {
                            for (var o = obj; o; o = Object.getPrototypeOf(o))
                                Object.getOwnPropertyNames(o).forEach(callback)
                        }
                    }

                    function getCompletions(token, context, keywords, options) {
                        var found = [], start = token.string, global = options && options.globalScope || window;
                        function maybeAdd(str) {
                            if (str.lastIndexOf(start, 0) == 0 && !arrayContains(found, str)) found.push(str);
                        }
                        function gatherCompletions(obj) {
                            if (typeof obj == "string") forEach(stringProps, maybeAdd);
                            else if (obj instanceof Array) forEach(arrayProps, maybeAdd);
                            else if (obj instanceof Function) forEach(funcProps, maybeAdd);
                            forAllProps(obj, maybeAdd)
                        }

                        if (context && context.length) {
                            // If this is a property, see if it belongs to some object we can
                            // find in the current environment.
                            var obj = context.pop(), base;
                            if (obj.type && obj.type.indexOf("variable") === 0) {
                                if (options && options.additionalContext)
                                    base = options.additionalContext[obj.string];
                                if (!options || options.useGlobalScope !== false)
                                    base = base || global[obj.string];
                            } else if (obj.type == "string") {
                                base = "";
                            } else if (obj.type == "atom") {
                                base = 1;
                            } else if (obj.type == "function") {
                                if (global.jQuery != null && (obj.string == '$' || obj.string == 'jQuery') &&
                                    (typeof global.jQuery == 'function'))
                                    base = global.jQuery();
                                else if (global._ != null && (obj.string == '_') && (typeof global._ == 'function'))
                                    base = global._();
                            }
                            while (base != null && context.length)
                                base = base[context.pop().string];
                            if (base != null) gatherCompletions(base);
                        } else {
                            // If not, just look in the global object, any local scope, and optional additional-context
                            // (reading into JS mode internals to get at the local and global variables)
                            for (var v = token.state.localVars; v; v = v.next) maybeAdd(v.name);
                            for (var c = token.state.context; c; c = c.prev)
                                for (var v = c.vars; v; v = v.next) maybeAdd(v.name)
                            for (var v = token.state.globalVars; v; v = v.next) maybeAdd(v.name);
                            if (options && options.additionalContext != null)
                                for (var key in options.additionalContext)
                                    maybeAdd(key);
                            if (!options || options.useGlobalScope !== false)
                                gatherCompletions(global);
                            forEach(keywords, maybeAdd);
                        }
                        return found;
                    }
                });


                /***/ }),

            /***/ "3ca3":
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";

                var charAt = __webpack_require__("6547").charAt;
                var InternalStateModule = __webpack_require__("69f3");
                var defineIterator = __webpack_require__("7dd0");

                var STRING_ITERATOR = 'String Iterator';
                var setInternalState = InternalStateModule.set;
                var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
                defineIterator(String, 'String', function (iterated) {
                    setInternalState(this, {
                        type: STRING_ITERATOR,
                        string: String(iterated),
                        index: 0
                    });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
                }, function next() {
                    var state = getInternalState(this);
                    var string = state.string;
                    var index = state.index;
                    var point;
                    if (index >= string.length) return { value: undefined, done: true };
                    point = charAt(string, index);
                    state.index += point.length;
                    return { value: point, done: false };
                });


                /***/ }),

            /***/ "3e52":
            /***/ (function(module, exports, __webpack_require__) {


                    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

                /***/ }),

            /***/ "3f8c":
            /***/ (function(module, exports) {

                module.exports = {};


                /***/ }),

            /***/ "428f":
            /***/ (function(module, exports, __webpack_require__) {

                var global = __webpack_require__("da84");

                module.exports = global;


                /***/ }),

            /***/ "44ad":
            /***/ (function(module, exports, __webpack_require__) {

                var fails = __webpack_require__("d039");
                var classof = __webpack_require__("c6b6");

                var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
                module.exports = fails(function () {
                    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
                    // eslint-disable-next-line no-prototype-builtins
                    return !Object('z').propertyIsEnumerable(0);
                }) ? function (it) {
                    return classof(it) == 'String' ? split.call(it, '') : Object(it);
                } : Object;


                /***/ }),

            /***/ "44d2":
            /***/ (function(module, exports, __webpack_require__) {

                var wellKnownSymbol = __webpack_require__("b622");
                var create = __webpack_require__("7c73");
                var definePropertyModule = __webpack_require__("9bf2");

                var UNSCOPABLES = wellKnownSymbol('unscopables');
                var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
                if (ArrayPrototype[UNSCOPABLES] == undefined) {
                    definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
                        configurable: true,
                        value: create(null)
                    });
                }

// add a key to Array.prototype[@@unscopables]
                module.exports = function (key) {
                    ArrayPrototype[UNSCOPABLES][key] = true;
                };


                /***/ }),

            /***/ "44de":
            /***/ (function(module, exports, __webpack_require__) {

                var global = __webpack_require__("da84");

                module.exports = function (a, b) {
                    var console = global.console;
                    if (console && console.error) {
                        arguments.length === 1 ? console.error(a) : console.error(a, b);
                    }
                };


                /***/ }),

            /***/ "44e7":
            /***/ (function(module, exports, __webpack_require__) {

                var isObject = __webpack_require__("861d");
                var classof = __webpack_require__("c6b6");
                var wellKnownSymbol = __webpack_require__("b622");

                var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
                module.exports = function (it) {
                    var isRegExp;
                    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
                };


                /***/ }),

            /***/ "4637":
            /***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
                var content = __webpack_require__("ce95");
                if(typeof content === 'string') content = [[module.i, content, '']];
                if(content.locals) module.exports = content.locals;
// add the styles to the DOM
                var add = __webpack_require__("499e").default
                var update = add("278599be", content, true, {"sourceMap":false,"shadowMode":false});

                /***/ }),

            /***/ "4840":
            /***/ (function(module, exports, __webpack_require__) {

                var anObject = __webpack_require__("825a");
                var aFunction = __webpack_require__("1c0b");
                var wellKnownSymbol = __webpack_require__("b622");

                var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
                module.exports = function (O, defaultConstructor) {
                    var C = anObject(O).constructor;
                    var S;
                    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
                };


                /***/ }),

            /***/ "4895":
            /***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

                (function(mod) {
                    if (true) // CommonJS
                        mod(__webpack_require__("56b3"));
                    else {}
                })(function(CodeMirror) {
                    "use strict";

                    function doFold(cm, pos, options, force) {
                        if (options && options.call) {
                            var finder = options;
                            options = null;
                        } else {
                            var finder = getOption(cm, options, "rangeFinder");
                        }
                        if (typeof pos == "number") pos = CodeMirror.Pos(pos, 0);
                        var minSize = getOption(cm, options, "minFoldSize");

                        function getRange(allowFolded) {
                            var range = finder(cm, pos);
                            if (!range || range.to.line - range.from.line < minSize) return null;
                            var marks = cm.findMarksAt(range.from);
                            for (var i = 0; i < marks.length; ++i) {
                                if (marks[i].__isFold && force !== "fold") {
                                    if (!allowFolded) return null;
                                    range.cleared = true;
                                    marks[i].clear();
                                }
                            }
                            return range;
                        }

                        var range = getRange(true);
                        if (getOption(cm, options, "scanUp")) while (!range && pos.line > cm.firstLine()) {
                            pos = CodeMirror.Pos(pos.line - 1, 0);
                            range = getRange(false);
                        }
                        if (!range || range.cleared || force === "unfold") return;

                        var myWidget = makeWidget(cm, options, range);
                        CodeMirror.on(myWidget, "mousedown", function(e) {
                            myRange.clear();
                            CodeMirror.e_preventDefault(e);
                        });
                        var myRange = cm.markText(range.from, range.to, {
                            replacedWith: myWidget,
                            clearOnEnter: getOption(cm, options, "clearOnEnter"),
                            __isFold: true
                        });
                        myRange.on("clear", function(from, to) {
                            CodeMirror.signal(cm, "unfold", cm, from, to);
                        });
                        CodeMirror.signal(cm, "fold", cm, range.from, range.to);
                    }

                    function makeWidget(cm, options, range) {
                        var widget = getOption(cm, options, "widget");

                        if (typeof widget == "function") {
                            widget = widget(range.from, range.to);
                        }

                        if (typeof widget == "string") {
                            var text = document.createTextNode(widget);
                            widget = document.createElement("span");
                            widget.appendChild(text);
                            widget.className = "CodeMirror-foldmarker";
                        } else if (widget) {
                            widget = widget.cloneNode(true)
                        }
                        return widget;
                    }

                    // Clumsy backwards-compatible interface
                    CodeMirror.newFoldFunction = function(rangeFinder, widget) {
                        return function(cm, pos) { doFold(cm, pos, {rangeFinder: rangeFinder, widget: widget}); };
                    };

                    // New-style interface
                    CodeMirror.defineExtension("foldCode", function(pos, options, force) {
                        doFold(this, pos, options, force);
                    });

                    CodeMirror.defineExtension("isFolded", function(pos) {
                        var marks = this.findMarksAt(pos);
                        for (var i = 0; i < marks.length; ++i)
                            if (marks[i].__isFold) return true;
                    });

                    CodeMirror.commands.toggleFold = function(cm) {
                        cm.foldCode(cm.getCursor());
                    };
                    CodeMirror.commands.fold = function(cm) {
                        cm.foldCode(cm.getCursor(), null, "fold");
                    };
                    CodeMirror.commands.unfold = function(cm) {
                        cm.foldCode(cm.getCursor(), null, "unfold");
                    };
                    CodeMirror.commands.foldAll = function(cm) {
                        cm.operation(function() {
                            for (var i = cm.firstLine(), e = cm.lastLine(); i <= e; i++)
                                cm.foldCode(CodeMirror.Pos(i, 0), null, "fold");
                        });
                    };
                    CodeMirror.commands.unfoldAll = function(cm) {
                        cm.operation(function() {
                            for (var i = cm.firstLine(), e = cm.lastLine(); i <= e; i++)
                                cm.foldCode(CodeMirror.Pos(i, 0), null, "unfold");
                        });
                    };

                    CodeMirror.registerHelper("fold", "combine", function() {
                        var funcs = Array.prototype.slice.call(arguments, 0);
                        return function(cm, start) {
                            for (var i = 0; i < funcs.length; ++i) {
                                var found = funcs[i](cm, start);
                                if (found) return found;
                            }
                        };
                    });

                    CodeMirror.registerHelper("fold", "auto", function(cm, start) {
                        var helpers = cm.getHelpers(start, "fold");
                        for (var i = 0; i < helpers.length; i++) {
                            var cur = helpers[i](cm, start);
                            if (cur) return cur;
                        }
                    });

                    var defaultOptions = {
                        rangeFinder: CodeMirror.fold.auto,
                        widget: "\u2194",
                        minFoldSize: 0,
                        scanUp: false,
                        clearOnEnter: true
                    };

                    CodeMirror.defineOption("foldOptions", null);

                    function getOption(cm, options, name) {
                        if (options && options[name] !== undefined)
                            return options[name];
                        var editorOptions = cm.options.foldOptions;
                        if (editorOptions && editorOptions[name] !== undefined)
                            return editorOptions[name];
                        return defaultOptions[name];
                    }

                    CodeMirror.defineExtension("foldOption", function(options, name) {
                        return getOption(this, options, name);
                    });
                });


                /***/ }),

            /***/ "4930":
            /***/ (function(module, exports, __webpack_require__) {

                var fails = __webpack_require__("d039");

                module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
                    // Chrome 38 Symbol has incorrect toString conversion
                    // eslint-disable-next-line no-undef
                    return !String(Symbol());
                });


                /***/ }),

            /***/ "498a":
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";

                var $ = __webpack_require__("23e7");
                var $trim = __webpack_require__("58a8").trim;
                var forcedStringTrimMethod = __webpack_require__("c8d2");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
                $({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
                    trim: function trim() {
                        return $trim(this);
                    }
                });


                /***/ }),

            /***/ "499e":
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
// ESM COMPAT FLAG
                __webpack_require__.r(__webpack_exports__);

// EXPORTS
                __webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
                /**
                 * Translates the list format produced by css-loader into something
                 * easier to manipulate.
                 */
                function listToStyles (parentId, list) {
                    var styles = []
                    var newStyles = {}
                    for (var i = 0; i < list.length; i++) {
                        var item = list[i]
                        var id = item[0]
                        var css = item[1]
                        var media = item[2]
                        var sourceMap = item[3]
                        var part = {
                            id: parentId + ':' + i,
                            css: css,
                            media: media,
                            sourceMap: sourceMap
                        }
                        if (!newStyles[id]) {
                            styles.push(newStyles[id] = { id: id, parts: [part] })
                        } else {
                            newStyles[id].parts.push(part)
                        }
                    }
                    return styles
                }

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
                /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



                var hasDocument = typeof document !== 'undefined'

                if (typeof DEBUG !== 'undefined' && DEBUG) {
                    if (!hasDocument) {
                        throw new Error(
                            'vue-style-loader cannot be used in a non-browser environment. ' +
                            "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
                        ) }
                }

                /*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

                var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

                var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
                var singletonElement = null
                var singletonCounter = 0
                var isProduction = false
                var noop = function () {}
                var options = null
                var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
                var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

                function addStylesClient (parentId, list, _isProduction, _options) {
                    isProduction = _isProduction

                    options = _options || {}

                    var styles = listToStyles(parentId, list)
                    addStylesToDom(styles)

                    return function update (newList) {
                        var mayRemove = []
                        for (var i = 0; i < styles.length; i++) {
                            var item = styles[i]
                            var domStyle = stylesInDom[item.id]
                            domStyle.refs--
                            mayRemove.push(domStyle)
                        }
                        if (newList) {
                            styles = listToStyles(parentId, newList)
                            addStylesToDom(styles)
                        } else {
                            styles = []
                        }
                        for (var i = 0; i < mayRemove.length; i++) {
                            var domStyle = mayRemove[i]
                            if (domStyle.refs === 0) {
                                for (var j = 0; j < domStyle.parts.length; j++) {
                                    domStyle.parts[j]()
                                }
                                delete stylesInDom[domStyle.id]
                            }
                        }
                    }
                }

                function addStylesToDom (styles /* Array<StyleObject> */) {
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i]
                        var domStyle = stylesInDom[item.id]
                        if (domStyle) {
                            domStyle.refs++
                            for (var j = 0; j < domStyle.parts.length; j++) {
                                domStyle.parts[j](item.parts[j])
                            }
                            for (; j < item.parts.length; j++) {
                                domStyle.parts.push(addStyle(item.parts[j]))
                            }
                            if (domStyle.parts.length > item.parts.length) {
                                domStyle.parts.length = item.parts.length
                            }
                        } else {
                            var parts = []
                            for (var j = 0; j < item.parts.length; j++) {
                                parts.push(addStyle(item.parts[j]))
                            }
                            stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
                        }
                    }
                }

                function createStyleElement () {
                    var styleElement = document.createElement('style')
                    styleElement.type = 'text/css'
                    head.appendChild(styleElement)
                    return styleElement
                }

                function addStyle (obj /* StyleObjectPart */) {
                    var update, remove
                    var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

                    if (styleElement) {
                        if (isProduction) {
                            // has SSR styles and in production mode.
                            // simply do nothing.
                            return noop
                        } else {
                            // has SSR styles but in dev mode.
                            // for some reason Chrome can't handle source map in server-rendered
                            // style tags - source maps in <style> only works if the style tag is
                            // created and inserted dynamically. So we remove the server rendered
                            // styles and inject new ones.
                            styleElement.parentNode.removeChild(styleElement)
                        }
                    }

                    if (isOldIE) {
                        // use singleton mode for IE9.
                        var styleIndex = singletonCounter++
                        styleElement = singletonElement || (singletonElement = createStyleElement())
                        update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
                        remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
                    } else {
                        // use multi-style-tag mode in all other cases
                        styleElement = createStyleElement()
                        update = applyToTag.bind(null, styleElement)
                        remove = function () {
                            styleElement.parentNode.removeChild(styleElement)
                        }
                    }

                    update(obj)

                    return function updateStyle (newObj /* StyleObjectPart */) {
                        if (newObj) {
                            if (newObj.css === obj.css &&
                                newObj.media === obj.media &&
                                newObj.sourceMap === obj.sourceMap) {
                                return
                            }
                            update(obj = newObj)
                        } else {
                            remove()
                        }
                    }
                }

                var replaceText = (function () {
                    var textStore = []

                    return function (index, replacement) {
                        textStore[index] = replacement
                        return textStore.filter(Boolean).join('\n')
                    }
                })()

                function applyToSingletonTag (styleElement, index, remove, obj) {
                    var css = remove ? '' : obj.css

                    if (styleElement.styleSheet) {
                        styleElement.styleSheet.cssText = replaceText(index, css)
                    } else {
                        var cssNode = document.createTextNode(css)
                        var childNodes = styleElement.childNodes
                        if (childNodes[index]) styleElement.removeChild(childNodes[index])
                        if (childNodes.length) {
                            styleElement.insertBefore(cssNode, childNodes[index])
                        } else {
                            styleElement.appendChild(cssNode)
                        }
                    }
                }

                function applyToTag (styleElement, obj) {
                    var css = obj.css
                    var media = obj.media
                    var sourceMap = obj.sourceMap

                    if (media) {
                        styleElement.setAttribute('media', media)
                    }
                    if (options.ssrId) {
                        styleElement.setAttribute(ssrIdKey, obj.id)
                    }

                    if (sourceMap) {
                        // https://developer.chrome.com/devtools/docs/javascript-debugging
                        // this makes source maps inside style tags work properly in Chrome
                        css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
                        // http://stackoverflow.com/a/26603875
                        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
                    }

                    if (styleElement.styleSheet) {
                        styleElement.styleSheet.cssText = css
                    } else {
                        while (styleElement.firstChild) {
                            styleElement.removeChild(styleElement.firstChild)
                        }
                        styleElement.appendChild(document.createTextNode(css))
                    }
                }


                /***/ }),

            /***/ "4ba6":
            /***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

                (function(mod) {
                    if (true) // CommonJS
                        mod(__webpack_require__("56b3"));
                    else {}
                })(function(CodeMirror) {
                    "use strict";

                    function Context(indented, column, type, info, align, prev) {
                        this.indented = indented;
                        this.column = column;
                        this.type = type;
                        this.info = info;
                        this.align = align;
                        this.prev = prev;
                    }
                    function pushContext(state, col, type, info) {
                        var indent = state.indented;
                        if (state.context && state.context.type == "statement" && type != "statement")
                            indent = state.context.indented;
                        return state.context = new Context(indent, col, type, info, null, state.context);
                    }
                    function popContext(state) {
                        var t = state.context.type;
                        if (t == ")" || t == "]" || t == "}")
                            state.indented = state.context.indented;
                        return state.context = state.context.prev;
                    }

                    function typeBefore(stream, state, pos) {
                        if (state.prevToken == "variable" || state.prevToken == "type") return true;
                        if (/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(stream.string.slice(0, pos))) return true;
                        if (state.typeAtEndOfLine && stream.column() == stream.indentation()) return true;
                    }

                    function isTopScope(context) {
                        for (;;) {
                            if (!context || context.type == "top") return true;
                            if (context.type == "}" && context.prev.info != "namespace") return false;
                            context = context.prev;
                        }
                    }

                    CodeMirror.defineMode("clike", function(config, parserConfig) {
                        var indentUnit = config.indentUnit,
                            statementIndentUnit = parserConfig.statementIndentUnit || indentUnit,
                            dontAlignCalls = parserConfig.dontAlignCalls,
                            keywords = parserConfig.keywords || {},
                            types = parserConfig.types || {},
                            builtin = parserConfig.builtin || {},
                            blockKeywords = parserConfig.blockKeywords || {},
                            defKeywords = parserConfig.defKeywords || {},
                            atoms = parserConfig.atoms || {},
                            hooks = parserConfig.hooks || {},
                            multiLineStrings = parserConfig.multiLineStrings,
                            indentStatements = parserConfig.indentStatements !== false,
                            indentSwitch = parserConfig.indentSwitch !== false,
                            namespaceSeparator = parserConfig.namespaceSeparator,
                            isPunctuationChar = parserConfig.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
                            numberStart = parserConfig.numberStart || /[\d\.]/,
                            number = parserConfig.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
                            isOperatorChar = parserConfig.isOperatorChar || /[+\-*&%=<>!?|\/]/,
                            isIdentifierChar = parserConfig.isIdentifierChar || /[\w\$_\xa1-\uffff]/,
                            // An optional function that takes a {string} token and returns true if it
                            // should be treated as a builtin.
                            isReservedIdentifier = parserConfig.isReservedIdentifier || false;

                        var curPunc, isDefKeyword;

                        function tokenBase(stream, state) {
                            var ch = stream.next();
                            if (hooks[ch]) {
                                var result = hooks[ch](stream, state);
                                if (result !== false) return result;
                            }
                            if (ch == '"' || ch == "'") {
                                state.tokenize = tokenString(ch);
                                return state.tokenize(stream, state);
                            }
                            if (isPunctuationChar.test(ch)) {
                                curPunc = ch;
                                return null;
                            }
                            if (numberStart.test(ch)) {
                                stream.backUp(1)
                                if (stream.match(number)) return "number"
                                stream.next()
                            }
                            if (ch == "/") {
                                if (stream.eat("*")) {
                                    state.tokenize = tokenComment;
                                    return tokenComment(stream, state);
                                }
                                if (stream.eat("/")) {
                                    stream.skipToEnd();
                                    return "comment";
                                }
                            }
                            if (isOperatorChar.test(ch)) {
                                while (!stream.match(/^\/[\/*]/, false) && stream.eat(isOperatorChar)) {}
                                return "operator";
                            }
                            stream.eatWhile(isIdentifierChar);
                            if (namespaceSeparator) while (stream.match(namespaceSeparator))
                                stream.eatWhile(isIdentifierChar);

                            var cur = stream.current();
                            if (contains(keywords, cur)) {
                                if (contains(blockKeywords, cur)) curPunc = "newstatement";
                                if (contains(defKeywords, cur)) isDefKeyword = true;
                                return "keyword";
                            }
                            if (contains(types, cur)) return "type";
                            if (contains(builtin, cur)
                                || (isReservedIdentifier && isReservedIdentifier(cur))) {
                                if (contains(blockKeywords, cur)) curPunc = "newstatement";
                                return "builtin";
                            }
                            if (contains(atoms, cur)) return "atom";
                            return "variable";
                        }

                        function tokenString(quote) {
                            return function(stream, state) {
                                var escaped = false, next, end = false;
                                while ((next = stream.next()) != null) {
                                    if (next == quote && !escaped) {end = true; break;}
                                    escaped = !escaped && next == "\\";
                                }
                                if (end || !(escaped || multiLineStrings))
                                    state.tokenize = null;
                                return "string";
                            };
                        }

                        function tokenComment(stream, state) {
                            var maybeEnd = false, ch;
                            while (ch = stream.next()) {
                                if (ch == "/" && maybeEnd) {
                                    state.tokenize = null;
                                    break;
                                }
                                maybeEnd = (ch == "*");
                            }
                            return "comment";
                        }

                        function maybeEOL(stream, state) {
                            if (parserConfig.typeFirstDefinitions && stream.eol() && isTopScope(state.context))
                                state.typeAtEndOfLine = typeBefore(stream, state, stream.pos)
                        }

                        // Interface

                        return {
                            startState: function(basecolumn) {
                                return {
                                    tokenize: null,
                                    context: new Context((basecolumn || 0) - indentUnit, 0, "top", null, false),
                                    indented: 0,
                                    startOfLine: true,
                                    prevToken: null
                                };
                            },

                            token: function(stream, state) {
                                var ctx = state.context;
                                if (stream.sol()) {
                                    if (ctx.align == null) ctx.align = false;
                                    state.indented = stream.indentation();
                                    state.startOfLine = true;
                                }
                                if (stream.eatSpace()) { maybeEOL(stream, state); return null; }
                                curPunc = isDefKeyword = null;
                                var style = (state.tokenize || tokenBase)(stream, state);
                                if (style == "comment" || style == "meta") return style;
                                if (ctx.align == null) ctx.align = true;

                                if (curPunc == ";" || curPunc == ":" || (curPunc == "," && stream.match(/^\s*(?:\/\/.*)?$/, false)))
                                    while (state.context.type == "statement") popContext(state);
                                else if (curPunc == "{") pushContext(state, stream.column(), "}");
                                else if (curPunc == "[") pushContext(state, stream.column(), "]");
                                else if (curPunc == "(") pushContext(state, stream.column(), ")");
                                else if (curPunc == "}") {
                                    while (ctx.type == "statement") ctx = popContext(state);
                                    if (ctx.type == "}") ctx = popContext(state);
                                    while (ctx.type == "statement") ctx = popContext(state);
                                }
                                else if (curPunc == ctx.type) popContext(state);
                                else if (indentStatements &&
                                    (((ctx.type == "}" || ctx.type == "top") && curPunc != ";") ||
                                        (ctx.type == "statement" && curPunc == "newstatement"))) {
                                    pushContext(state, stream.column(), "statement", stream.current());
                                }

                                if (style == "variable" &&
                                    ((state.prevToken == "def" ||
                                        (parserConfig.typeFirstDefinitions && typeBefore(stream, state, stream.start) &&
                                            isTopScope(state.context) && stream.match(/^\s*\(/, false)))))
                                    style = "def";

                                if (hooks.token) {
                                    var result = hooks.token(stream, state, style);
                                    if (result !== undefined) style = result;
                                }

                                if (style == "def" && parserConfig.styleDefs === false) style = "variable";

                                state.startOfLine = false;
                                state.prevToken = isDefKeyword ? "def" : style || curPunc;
                                maybeEOL(stream, state);
                                return style;
                            },

                            indent: function(state, textAfter) {
                                if (state.tokenize != tokenBase && state.tokenize != null || state.typeAtEndOfLine) return CodeMirror.Pass;
                                var ctx = state.context, firstChar = textAfter && textAfter.charAt(0);
                                var closing = firstChar == ctx.type;
                                if (ctx.type == "statement" && firstChar == "}") ctx = ctx.prev;
                                if (parserConfig.dontIndentStatements)
                                    while (ctx.type == "statement" && parserConfig.dontIndentStatements.test(ctx.info))
                                        ctx = ctx.prev
                                if (hooks.indent) {
                                    var hook = hooks.indent(state, ctx, textAfter, indentUnit);
                                    if (typeof hook == "number") return hook
                                }
                                var switchBlock = ctx.prev && ctx.prev.info == "switch";
                                if (parserConfig.allmanIndentation && /[{(]/.test(firstChar)) {
                                    while (ctx.type != "top" && ctx.type != "}") ctx = ctx.prev
                                    return ctx.indented
                                }
                                if (ctx.type == "statement")
                                    return ctx.indented + (firstChar == "{" ? 0 : statementIndentUnit);
                                if (ctx.align && (!dontAlignCalls || ctx.type != ")"))
                                    return ctx.column + (closing ? 0 : 1);
                                if (ctx.type == ")" && !closing)
                                    return ctx.indented + statementIndentUnit;

                                return ctx.indented + (closing ? 0 : indentUnit) +
                                    (!closing && switchBlock && !/^(?:case|default)\b/.test(textAfter) ? indentUnit : 0);
                            },

                            electricInput: indentSwitch ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/,
                            blockCommentStart: "/*",
                            blockCommentEnd: "*/",
                            blockCommentContinue: " * ",
                            lineComment: "//",
                            fold: "brace"
                        };
                    });

                    function words(str) {
                        var obj = {}, words = str.split(" ");
                        for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
                        return obj;
                    }
                    function contains(words, word) {
                        if (typeof words === "function") {
                            return words(word);
                        } else {
                            return words.propertyIsEnumerable(word);
                        }
                    }
                    var cKeywords = "auto if break case register continue return default do sizeof " +
                        "static else struct switch extern typedef union for goto while enum const " +
                        "volatile inline restrict asm fortran";

                    // Keywords from https://en.cppreference.com/w/cpp/keyword includes C++20.
                    var cppKeywords = "alignas alignof and and_eq audit axiom bitand bitor catch " +
                        "class compl concept constexpr const_cast decltype delete dynamic_cast " +
                        "explicit export final friend import module mutable namespace new noexcept " +
                        "not not_eq operator or or_eq override private protected public " +
                        "reinterpret_cast requires static_assert static_cast template this " +
                        "thread_local throw try typeid typename using virtual xor xor_eq";

                    var objCKeywords = "bycopy byref in inout oneway out self super atomic nonatomic retain copy " +
                        "readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd " +
                        "@interface @implementation @end @protocol @encode @property @synthesize @dynamic @class " +
                        "@public @package @private @protected @required @optional @try @catch @finally @import " +
                        "@selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available";

                    var objCBuiltins = "FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION " +
                        " NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER " +
                        "NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION " +
                        "NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT"

                    // Do not use this. Use the cTypes function below. This is global just to avoid
                    // excessive calls when cTypes is being called multiple times during a parse.
                    var basicCTypes = words("int long char short double float unsigned signed " +
                        "void bool");

                    // Do not use this. Use the objCTypes function below. This is global just to avoid
                    // excessive calls when objCTypes is being called multiple times during a parse.
                    var basicObjCTypes = words("SEL instancetype id Class Protocol BOOL");

                    // Returns true if identifier is a "C" type.
                    // C type is defined as those that are reserved by the compiler (basicTypes),
                    // and those that end in _t (Reserved by POSIX for types)
                    // http://www.gnu.org/software/libc/manual/html_node/Reserved-Names.html
                    function cTypes(identifier) {
                        return contains(basicCTypes, identifier) || /.+_t$/.test(identifier);
                    }

                    // Returns true if identifier is a "Objective C" type.
                    function objCTypes(identifier) {
                        return cTypes(identifier) || contains(basicObjCTypes, identifier);
                    }

                    var cBlockKeywords = "case do else for if switch while struct enum union";
                    var cDefKeywords = "struct enum union";

                    function cppHook(stream, state) {
                        if (!state.startOfLine) return false
                        for (var ch, next = null; ch = stream.peek();) {
                            if (ch == "\\" && stream.match(/^.$/)) {
                                next = cppHook
                                break
                            } else if (ch == "/" && stream.match(/^\/[\/\*]/, false)) {
                                break
                            }
                            stream.next()
                        }
                        state.tokenize = next
                        return "meta"
                    }

                    function pointerHook(_stream, state) {
                        if (state.prevToken == "type") return "type";
                        return false;
                    }

                    // For C and C++ (and ObjC): identifiers starting with __
                    // or _ followed by a capital letter are reserved for the compiler.
                    function cIsReservedIdentifier(token) {
                        if (!token || token.length < 2) return false;
                        if (token[0] != '_') return false;
                        return (token[1] == '_') || (token[1] !== token[1].toLowerCase());
                    }

                    function cpp14Literal(stream) {
                        stream.eatWhile(/[\w\.']/);
                        return "number";
                    }

                    function cpp11StringHook(stream, state) {
                        stream.backUp(1);
                        // Raw strings.
                        if (stream.match(/(R|u8R|uR|UR|LR)/)) {
                            var match = stream.match(/"([^\s\\()]{0,16})\(/);
                            if (!match) {
                                return false;
                            }
                            state.cpp11RawStringDelim = match[1];
                            state.tokenize = tokenRawString;
                            return tokenRawString(stream, state);
                        }
                        // Unicode strings/chars.
                        if (stream.match(/(u8|u|U|L)/)) {
                            if (stream.match(/["']/, /* eat */ false)) {
                                return "string";
                            }
                            return false;
                        }
                        // Ignore this hook.
                        stream.next();
                        return false;
                    }

                    function cppLooksLikeConstructor(word) {
                        var lastTwo = /(\w+)::~?(\w+)$/.exec(word);
                        return lastTwo && lastTwo[1] == lastTwo[2];
                    }

                    // C#-style strings where "" escapes a quote.
                    function tokenAtString(stream, state) {
                        var next;
                        while ((next = stream.next()) != null) {
                            if (next == '"' && !stream.eat('"')) {
                                state.tokenize = null;
                                break;
                            }
                        }
                        return "string";
                    }

                    // C++11 raw string literal is <prefix>"<delim>( anything )<delim>", where
                    // <delim> can be a string up to 16 characters long.
                    function tokenRawString(stream, state) {
                        // Escape characters that have special regex meanings.
                        var delim = state.cpp11RawStringDelim.replace(/[^\w\s]/g, '\\$&');
                        var match = stream.match(new RegExp(".*?\\)" + delim + '"'));
                        if (match)
                            state.tokenize = null;
                        else
                            stream.skipToEnd();
                        return "string";
                    }

                    function def(mimes, mode) {
                        if (typeof mimes == "string") mimes = [mimes];
                        var words = [];
                        function add(obj) {
                            if (obj) for (var prop in obj) if (obj.hasOwnProperty(prop))
                                words.push(prop);
                        }
                        add(mode.keywords);
                        add(mode.types);
                        add(mode.builtin);
                        add(mode.atoms);
                        if (words.length) {
                            mode.helperType = mimes[0];
                            CodeMirror.registerHelper("hintWords", mimes[0], words);
                        }

                        for (var i = 0; i < mimes.length; ++i)
                            CodeMirror.defineMIME(mimes[i], mode);
                    }

                    def(["text/x-csrc", "text/x-c", "text/x-chdr"], {
                        name: "clike",
                        keywords: words(cKeywords),
                        types: cTypes,
                        blockKeywords: words(cBlockKeywords),
                        defKeywords: words(cDefKeywords),
                        typeFirstDefinitions: true,
                        atoms: words("NULL true false"),
                        isReservedIdentifier: cIsReservedIdentifier,
                        hooks: {
                            "#": cppHook,
                            "*": pointerHook,
                        },
                        modeProps: {fold: ["brace", "include"]}
                    });

                    def(["text/x-c++src", "text/x-c++hdr"], {
                        name: "clike",
                        keywords: words(cKeywords + " " + cppKeywords),
                        types: cTypes,
                        blockKeywords: words(cBlockKeywords + " class try catch"),
                        defKeywords: words(cDefKeywords + " class namespace"),
                        typeFirstDefinitions: true,
                        atoms: words("true false NULL nullptr"),
                        dontIndentStatements: /^template$/,
                        isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
                        isReservedIdentifier: cIsReservedIdentifier,
                        hooks: {
                            "#": cppHook,
                            "*": pointerHook,
                            "u": cpp11StringHook,
                            "U": cpp11StringHook,
                            "L": cpp11StringHook,
                            "R": cpp11StringHook,
                            "0": cpp14Literal,
                            "1": cpp14Literal,
                            "2": cpp14Literal,
                            "3": cpp14Literal,
                            "4": cpp14Literal,
                            "5": cpp14Literal,
                            "6": cpp14Literal,
                            "7": cpp14Literal,
                            "8": cpp14Literal,
                            "9": cpp14Literal,
                            token: function(stream, state, style) {
                                if (style == "variable" && stream.peek() == "(" &&
                                    (state.prevToken == ";" || state.prevToken == null ||
                                        state.prevToken == "}") &&
                                    cppLooksLikeConstructor(stream.current()))
                                    return "def";
                            }
                        },
                        namespaceSeparator: "::",
                        modeProps: {fold: ["brace", "include"]}
                    });

                    def("text/x-java", {
                        name: "clike",
                        keywords: words("abstract assert break case catch class const continue default " +
                            "do else enum extends final finally for goto if implements import " +
                            "instanceof interface native new package private protected public " +
                            "return static strictfp super switch synchronized this throw throws transient " +
                            "try volatile while @interface"),
                        types: words("byte short int long float double boolean char void Boolean Byte Character Double Float " +
                            "Integer Long Number Object Short String StringBuffer StringBuilder Void"),
                        blockKeywords: words("catch class do else finally for if switch try while"),
                        defKeywords: words("class interface enum @interface"),
                        typeFirstDefinitions: true,
                        atoms: words("true false null"),
                        number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
                        hooks: {
                            "@": function(stream) {
                                // Don't match the @interface keyword.
                                if (stream.match('interface', false)) return false;

                                stream.eatWhile(/[\w\$_]/);
                                return "meta";
                            }
                        },
                        modeProps: {fold: ["brace", "import"]}
                    });

                    def("text/x-csharp", {
                        name: "clike",
                        keywords: words("abstract as async await base break case catch checked class const continue" +
                            " default delegate do else enum event explicit extern finally fixed for" +
                            " foreach goto if implicit in interface internal is lock namespace new" +
                            " operator out override params private protected public readonly ref return sealed" +
                            " sizeof stackalloc static struct switch this throw try typeof unchecked" +
                            " unsafe using virtual void volatile while add alias ascending descending dynamic from get" +
                            " global group into join let orderby partial remove select set value var yield"),
                        types: words("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func" +
                            " Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32" +
                            " UInt64 bool byte char decimal double short int long object"  +
                            " sbyte float string ushort uint ulong"),
                        blockKeywords: words("catch class do else finally for foreach if struct switch try while"),
                        defKeywords: words("class interface namespace struct var"),
                        typeFirstDefinitions: true,
                        atoms: words("true false null"),
                        hooks: {
                            "@": function(stream, state) {
                                if (stream.eat('"')) {
                                    state.tokenize = tokenAtString;
                                    return tokenAtString(stream, state);
                                }
                                stream.eatWhile(/[\w\$_]/);
                                return "meta";
                            }
                        }
                    });

                    function tokenTripleString(stream, state) {
                        var escaped = false;
                        while (!stream.eol()) {
                            if (!escaped && stream.match('"""')) {
                                state.tokenize = null;
                                break;
                            }
                            escaped = stream.next() == "\\" && !escaped;
                        }
                        return "string";
                    }

                    function tokenNestedComment(depth) {
                        return function (stream, state) {
                            var ch
                            while (ch = stream.next()) {
                                if (ch == "*" && stream.eat("/")) {
                                    if (depth == 1) {
                                        state.tokenize = null
                                        break
                                    } else {
                                        state.tokenize = tokenNestedComment(depth - 1)
                                        return state.tokenize(stream, state)
                                    }
                                } else if (ch == "/" && stream.eat("*")) {
                                    state.tokenize = tokenNestedComment(depth + 1)
                                    return state.tokenize(stream, state)
                                }
                            }
                            return "comment"
                        }
                    }

                    def("text/x-scala", {
                        name: "clike",
                        keywords: words(
                            /* scala */
                            "abstract case catch class def do else extends final finally for forSome if " +
                            "implicit import lazy match new null object override package private protected return " +
                            "sealed super this throw trait try type val var while with yield _ " +

                            /* package scala */
                            "assert assume require print println printf readLine readBoolean readByte readShort " +
                            "readChar readInt readLong readFloat readDouble"
                        ),
                        types: words(
                            "AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either " +
                            "Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable " +
                            "Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering " +
                            "Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder " +
                            "StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector " +

                            /* package java.lang */
                            "Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable " +
                            "Compiler Double Exception Float Integer Long Math Number Object Package Pair Process " +
                            "Runtime Runnable SecurityManager Short StackTraceElement StrictMath String " +
                            "StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"
                        ),
                        multiLineStrings: true,
                        blockKeywords: words("catch class enum do else finally for forSome if match switch try while"),
                        defKeywords: words("class enum def object package trait type val var"),
                        atoms: words("true false null"),
                        indentStatements: false,
                        indentSwitch: false,
                        isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
                        hooks: {
                            "@": function(stream) {
                                stream.eatWhile(/[\w\$_]/);
                                return "meta";
                            },
                            '"': function(stream, state) {
                                if (!stream.match('""')) return false;
                                state.tokenize = tokenTripleString;
                                return state.tokenize(stream, state);
                            },
                            "'": function(stream) {
                                stream.eatWhile(/[\w\$_\xa1-\uffff]/);
                                return "atom";
                            },
                            "=": function(stream, state) {
                                var cx = state.context
                                if (cx.type == "}" && cx.align && stream.eat(">")) {
                                    state.context = new Context(cx.indented, cx.column, cx.type, cx.info, null, cx.prev)
                                    return "operator"
                                } else {
                                    return false
                                }
                            },

                            "/": function(stream, state) {
                                if (!stream.eat("*")) return false
                                state.tokenize = tokenNestedComment(1)
                                return state.tokenize(stream, state)
                            }
                        },
                        modeProps: {closeBrackets: {pairs: '()[]{}""', triples: '"'}}
                    });

                    function tokenKotlinString(tripleString){
                        return function (stream, state) {
                            var escaped = false, next, end = false;
                            while (!stream.eol()) {
                                if (!tripleString && !escaped && stream.match('"') ) {end = true; break;}
                                if (tripleString && stream.match('"""')) {end = true; break;}
                                next = stream.next();
                                if(!escaped && next == "$" && stream.match('{'))
                                    stream.skipTo("}");
                                escaped = !escaped && next == "\\" && !tripleString;
                            }
                            if (end || !tripleString)
                                state.tokenize = null;
                            return "string";
                        }
                    }

                    def("text/x-kotlin", {
                        name: "clike",
                        keywords: words(
                            /*keywords*/
                            "package as typealias class interface this super val operator " +
                            "var fun for is in This throw return annotation " +
                            "break continue object if else while do try when !in !is as? " +

                            /*soft keywords*/
                            "file import where by get set abstract enum open inner override private public internal " +
                            "protected catch finally out final vararg reified dynamic companion constructor init " +
                            "sealed field property receiver param sparam lateinit data inline noinline tailrec " +
                            "external annotation crossinline const operator infix suspend actual expect setparam"
                        ),
                        types: words(
                            /* package java.lang */
                            "Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable " +
                            "Compiler Double Exception Float Integer Long Math Number Object Package Pair Process " +
                            "Runtime Runnable SecurityManager Short StackTraceElement StrictMath String " +
                            "StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray " +
                            "ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy " +
                            "LazyThreadSafetyMode LongArray Nothing ShortArray Unit"
                        ),
                        intendSwitch: false,
                        indentStatements: false,
                        multiLineStrings: true,
                        number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
                        blockKeywords: words("catch class do else finally for if where try while enum"),
                        defKeywords: words("class val var object interface fun"),
                        atoms: words("true false null this"),
                        hooks: {
                            "@": function(stream) {
                                stream.eatWhile(/[\w\$_]/);
                                return "meta";
                            },
                            '*': function(_stream, state) {
                                return state.prevToken == '.' ? 'variable' : 'operator';
                            },
                            '"': function(stream, state) {
                                state.tokenize = tokenKotlinString(stream.match('""'));
                                return state.tokenize(stream, state);
                            },
                            "/": function(stream, state) {
                                if (!stream.eat("*")) return false;
                                state.tokenize = tokenNestedComment(1);
                                return state.tokenize(stream, state)
                            },
                            indent: function(state, ctx, textAfter, indentUnit) {
                                var firstChar = textAfter && textAfter.charAt(0);
                                if ((state.prevToken == "}" || state.prevToken == ")") && textAfter == "")
                                    return state.indented;
                                if ((state.prevToken == "operator" && textAfter != "}" && state.context.type != "}") ||
                                    state.prevToken == "variable" && firstChar == "." ||
                                    (state.prevToken == "}" || state.prevToken == ")") && firstChar == ".")
                                    return indentUnit * 2 + ctx.indented;
                                if (ctx.align && ctx.type == "}")
                                    return ctx.indented + (state.context.type == (textAfter || "").charAt(0) ? 0 : indentUnit);
                            }
                        },
                        modeProps: {closeBrackets: {triples: '"'}}
                    });

                    def(["x-shader/x-vertex", "x-shader/x-fragment"], {
                        name: "clike",
                        keywords: words("sampler1D sampler2D sampler3D samplerCube " +
                            "sampler1DShadow sampler2DShadow " +
                            "const attribute uniform varying " +
                            "break continue discard return " +
                            "for while do if else struct " +
                            "in out inout"),
                        types: words("float int bool void " +
                            "vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 " +
                            "mat2 mat3 mat4"),
                        blockKeywords: words("for while do if else struct"),
                        builtin: words("radians degrees sin cos tan asin acos atan " +
                            "pow exp log exp2 sqrt inversesqrt " +
                            "abs sign floor ceil fract mod min max clamp mix step smoothstep " +
                            "length distance dot cross normalize ftransform faceforward " +
                            "reflect refract matrixCompMult " +
                            "lessThan lessThanEqual greaterThan greaterThanEqual " +
                            "equal notEqual any all not " +
                            "texture1D texture1DProj texture1DLod texture1DProjLod " +
                            "texture2D texture2DProj texture2DLod texture2DProjLod " +
                            "texture3D texture3DProj texture3DLod texture3DProjLod " +
                            "textureCube textureCubeLod " +
                            "shadow1D shadow2D shadow1DProj shadow2DProj " +
                            "shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod " +
                            "dFdx dFdy fwidth " +
                            "noise1 noise2 noise3 noise4"),
                        atoms: words("true false " +
                            "gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex " +
                            "gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 " +
                            "gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 " +
                            "gl_FogCoord gl_PointCoord " +
                            "gl_Position gl_PointSize gl_ClipVertex " +
                            "gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor " +
                            "gl_TexCoord gl_FogFragCoord " +
                            "gl_FragCoord gl_FrontFacing " +
                            "gl_FragData gl_FragDepth " +
                            "gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix " +
                            "gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse " +
                            "gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse " +
                            "gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose " +
                            "gl_ProjectionMatrixInverseTranspose " +
                            "gl_ModelViewProjectionMatrixInverseTranspose " +
                            "gl_TextureMatrixInverseTranspose " +
                            "gl_NormalScale gl_DepthRange gl_ClipPlane " +
                            "gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel " +
                            "gl_FrontLightModelProduct gl_BackLightModelProduct " +
                            "gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ " +
                            "gl_FogParameters " +
                            "gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords " +
                            "gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats " +
                            "gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits " +
                            "gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits " +
                            "gl_MaxDrawBuffers"),
                        indentSwitch: false,
                        hooks: {"#": cppHook},
                        modeProps: {fold: ["brace", "include"]}
                    });

                    def("text/x-nesc", {
                        name: "clike",
                        keywords: words(cKeywords + " as atomic async call command component components configuration event generic " +
                            "implementation includes interface module new norace nx_struct nx_union post provides " +
                            "signal task uses abstract extends"),
                        types: cTypes,
                        blockKeywords: words(cBlockKeywords),
                        atoms: words("null true false"),
                        hooks: {"#": cppHook},
                        modeProps: {fold: ["brace", "include"]}
                    });

                    def("text/x-objectivec", {
                        name: "clike",
                        keywords: words(cKeywords + " " + objCKeywords),
                        types: objCTypes,
                        builtin: words(objCBuiltins),
                        blockKeywords: words(cBlockKeywords + " @synthesize @try @catch @finally @autoreleasepool @synchronized"),
                        defKeywords: words(cDefKeywords + " @interface @implementation @protocol @class"),
                        dontIndentStatements: /^@.*$/,
                        typeFirstDefinitions: true,
                        atoms: words("YES NO NULL Nil nil true false nullptr"),
                        isReservedIdentifier: cIsReservedIdentifier,
                        hooks: {
                            "#": cppHook,
                            "*": pointerHook,
                        },
                        modeProps: {fold: ["brace", "include"]}
                    });

                    def("text/x-objectivec++", {
                        name: "clike",
                        keywords: words(cKeywords + " " + objCKeywords + " " + cppKeywords),
                        types: objCTypes,
                        builtin: words(objCBuiltins),
                        blockKeywords: words(cBlockKeywords + " @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),
                        defKeywords: words(cDefKeywords + " @interface @implementation @protocol @class class namespace"),
                        dontIndentStatements: /^@.*$|^template$/,
                        typeFirstDefinitions: true,
                        atoms: words("YES NO NULL Nil nil true false nullptr"),
                        isReservedIdentifier: cIsReservedIdentifier,
                        hooks: {
                            "#": cppHook,
                            "*": pointerHook,
                            "u": cpp11StringHook,
                            "U": cpp11StringHook,
                            "L": cpp11StringHook,
                            "R": cpp11StringHook,
                            "0": cpp14Literal,
                            "1": cpp14Literal,
                            "2": cpp14Literal,
                            "3": cpp14Literal,
                            "4": cpp14Literal,
                            "5": cpp14Literal,
                            "6": cpp14Literal,
                            "7": cpp14Literal,
                            "8": cpp14Literal,
                            "9": cpp14Literal,
                            token: function(stream, state, style) {
                                if (style == "variable" && stream.peek() == "(" &&
                                    (state.prevToken == ";" || state.prevToken == null ||
                                        state.prevToken == "}") &&
                                    cppLooksLikeConstructor(stream.current()))
                                    return "def";
                            }
                        },
                        namespaceSeparator: "::",
                        modeProps: {fold: ["brace", "include"]}
                    });

                    def("text/x-squirrel", {
                        name: "clike",
                        keywords: words("base break clone continue const default delete enum extends function in class" +
                            " foreach local resume return this throw typeof yield constructor instanceof static"),
                        types: cTypes,
                        blockKeywords: words("case catch class else for foreach if switch try while"),
                        defKeywords: words("function local class"),
                        typeFirstDefinitions: true,
                        atoms: words("true false null"),
                        hooks: {"#": cppHook},
                        modeProps: {fold: ["brace", "include"]}
                    });

                    // Ceylon Strings need to deal with interpolation
                    var stringTokenizer = null;
                    function tokenCeylonString(type) {
                        return function(stream, state) {
                            var escaped = false, next, end = false;
                            while (!stream.eol()) {
                                if (!escaped && stream.match('"') &&
                                    (type == "single" || stream.match('""'))) {
                                    end = true;
                                    break;
                                }
                                if (!escaped && stream.match('``')) {
                                    stringTokenizer = tokenCeylonString(type);
                                    end = true;
                                    break;
                                }
                                next = stream.next();
                                escaped = type == "single" && !escaped && next == "\\";
                            }
                            if (end)
                                state.tokenize = null;
                            return "string";
                        }
                    }

                    def("text/x-ceylon", {
                        name: "clike",
                        keywords: words("abstracts alias assembly assert assign break case catch class continue dynamic else" +
                            " exists extends finally for function given if import in interface is let module new" +
                            " nonempty object of out outer package return satisfies super switch then this throw" +
                            " try value void while"),
                        types: function(word) {
                            // In Ceylon all identifiers that start with an uppercase are types
                            var first = word.charAt(0);
                            return (first === first.toUpperCase() && first !== first.toLowerCase());
                        },
                        blockKeywords: words("case catch class dynamic else finally for function if interface module new object switch try while"),
                        defKeywords: words("class dynamic function interface module object package value"),
                        builtin: words("abstract actual aliased annotation by default deprecated doc final formal late license" +
                            " native optional sealed see serializable shared suppressWarnings tagged throws variable"),
                        isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
                        isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
                        numberStart: /[\d#$]/,
                        number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
                        multiLineStrings: true,
                        typeFirstDefinitions: true,
                        atoms: words("true false null larger smaller equal empty finished"),
                        indentSwitch: false,
                        styleDefs: false,
                        hooks: {
                            "@": function(stream) {
                                stream.eatWhile(/[\w\$_]/);
                                return "meta";
                            },
                            '"': function(stream, state) {
                                state.tokenize = tokenCeylonString(stream.match('""') ? "triple" : "single");
                                return state.tokenize(stream, state);
                            },
                            '`': function(stream, state) {
                                if (!stringTokenizer || !stream.match('`')) return false;
                                state.tokenize = stringTokenizer;
                                stringTokenizer = null;
                                return state.tokenize(stream, state);
                            },
                            "'": function(stream) {
                                stream.eatWhile(/[\w\$_\xa1-\uffff]/);
                                return "atom";
                            },
                            token: function(_stream, state, style) {
                                if ((style == "variable" || style == "type") &&
                                    state.prevToken == ".") {
                                    return "variable-2";
                                }
                            }
                        },
                        modeProps: {
                            fold: ["brace", "import"],
                            closeBrackets: {triples: '"'}
                        }
                    });

                });


                /***/ }),

            /***/ "4d64":
            /***/ (function(module, exports, __webpack_require__) {

                var toIndexedObject = __webpack_require__("fc6a");
                var toLength = __webpack_require__("50c4");
                var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
                var createMethod = function (IS_INCLUDES) {
                    return function ($this, el, fromIndex) {
                        var O = toIndexedObject($this);
                        var length = toLength(O.length);
                        var index = toAbsoluteIndex(fromIndex, length);
                        var value;
                        // Array#includes uses SameValueZero equality algorithm
                        // eslint-disable-next-line no-self-compare
                        if (IS_INCLUDES && el != el) while (length > index) {
                            value = O[index++];
                            // eslint-disable-next-line no-self-compare
                            if (value != value) return true;
                            // Array#indexOf ignores holes, Array#includes - not
                        } else for (;length > index; index++) {
                            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                        } return !IS_INCLUDES && -1;
                    };
                };

                module.exports = {
                    // `Array.prototype.includes` method
                    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
                    includes: createMethod(true),
                    // `Array.prototype.indexOf` method
                    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
                    indexOf: createMethod(false)
                };


                /***/ }),

            /***/ "4de4":
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";

                var $ = __webpack_require__("23e7");
                var $filter = __webpack_require__("b727").filter;
                var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
                var arrayMethodUsesToLength = __webpack_require__("ae40");

                var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
                var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
                $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
                    filter: function filter(callbackfn /* , thisArg */) {
                        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                    }
                });


                /***/ }),

            /***/ "4df4":
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";

                var bind = __webpack_require__("0366");
                var toObject = __webpack_require__("7b0b");
                var callWithSafeIterationClosing = __webpack_require__("9bdd");
                var isArrayIteratorMethod = __webpack_require__("e95a");
                var toLength = __webpack_require__("50c4");
                var createProperty = __webpack_require__("8418");
                var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
                module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
                    var O = toObject(arrayLike);
                    var C = typeof this == 'function' ? this : Array;
                    var argumentsLength = arguments.length;
                    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
                    var mapping = mapfn !== undefined;
                    var iteratorMethod = getIteratorMethod(O);
                    var index = 0;
                    var length, result, step, iterator, next, value;
                    if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
                    // if the target is not iterable or it's an array with the default iterator - use a simple case
                    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
                        iterator = iteratorMethod.call(O);
                        next = iterator.next;
                        result = new C();
                        for (;!(step = next.call(iterator)).done; index++) {
                            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
                            createProperty(result, index, value);
                        }
                    } else {
                        length = toLength(O.length);
                        result = new C(length);
                        for (;length > index; index++) {
                            value = mapping ? mapfn(O[index], index) : O[index];
                            createProperty(result, index, value);
                        }
                    }
                    result.length = index;
                    return result;
                };


                /***/ }),

            /***/ "50c4":
            /***/ (function(module, exports, __webpack_require__) {

                var toInteger = __webpack_require__("a691");

                var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
                module.exports = function (argument) {
                    return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
                };


                /***/ }),

            /***/ "5135":
            /***/ (function(module, exports) {

                var hasOwnProperty = {}.hasOwnProperty;

                module.exports = function (it, key) {
                    return hasOwnProperty.call(it, key);
                };


                /***/ }),

            /***/ "5692":
            /***/ (function(module, exports, __webpack_require__) {

                var IS_PURE = __webpack_require__("c430");
                var store = __webpack_require__("c6cd");

                (module.exports = function (key, value) {
                    return store[key] || (store[key] = value !== undefined ? value : {});
                })('versions', []).push({
                    version: '3.6.5',
                    mode: IS_PURE ? 'pure' : 'global',
                    copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
                });


                /***/ }),

            /***/ "56b3":
            /***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// This is CodeMirror (https://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .

                (function (global, factory) {
                    true ? module.exports = factory() :
                        undefined;
                }(this, (function () { 'use strict';

                    // Kludges for bugs and behavior differences that can't be feature
                    // detected are enabled based on userAgent etc sniffing.
                    var userAgent = navigator.userAgent;
                    var platform = navigator.platform;

                    var gecko = /gecko\/\d/i.test(userAgent);
                    var ie_upto10 = /MSIE \d/.test(userAgent);
                    var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
                    var edge = /Edge\/(\d+)/.exec(userAgent);
                    var ie = ie_upto10 || ie_11up || edge;
                    var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
                    var webkit = !edge && /WebKit\//.test(userAgent);
                    var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
                    var chrome = !edge && /Chrome\//.test(userAgent);
                    var presto = /Opera\//.test(userAgent);
                    var safari = /Apple Computer/.test(navigator.vendor);
                    var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
                    var phantom = /PhantomJS/.test(userAgent);

                    var ios = !edge && /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent);
                    var android = /Android/.test(userAgent);
                    // This is woefully incomplete. Suggestions for alternative methods welcome.
                    var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
                    var mac = ios || /Mac/.test(platform);
                    var chromeOS = /\bCrOS\b/.test(userAgent);
                    var windows = /win/i.test(platform);

                    var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
                    if (presto_version) { presto_version = Number(presto_version[1]); }
                    if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
                    // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
                    var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
                    var captureRightClick = gecko || (ie && ie_version >= 9);

                    function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

                    var rmClass = function(node, cls) {
                        var current = node.className;
                        var match = classTest(cls).exec(current);
                        if (match) {
                            var after = current.slice(match.index + match[0].length);
                            node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
                        }
                    };

                    function removeChildren(e) {
                        for (var count = e.childNodes.length; count > 0; --count)
                        { e.removeChild(e.firstChild); }
                        return e
                    }

                    function removeChildrenAndAdd(parent, e) {
                        return removeChildren(parent).appendChild(e)
                    }

                    function elt(tag, content, className, style) {
                        var e = document.createElement(tag);
                        if (className) { e.className = className; }
                        if (style) { e.style.cssText = style; }
                        if (typeof content == "string") { e.appendChild(document.createTextNode(content)); }
                        else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]); } }
                        return e
                    }
                    // wrapper for elt, which removes the elt from the accessibility tree
                    function eltP(tag, content, className, style) {
                        var e = elt(tag, content, className, style);
                        e.setAttribute("role", "presentation");
                        return e
                    }

                    var range;
                    if (document.createRange) { range = function(node, start, end, endNode) {
                        var r = document.createRange();
                        r.setEnd(endNode || node, end);
                        r.setStart(node, start);
                        return r
                    }; }
                    else { range = function(node, start, end) {
                        var r = document.body.createTextRange();
                        try { r.moveToElementText(node.parentNode); }
                        catch(e) { return r }
                        r.collapse(true);
                        r.moveEnd("character", end);
                        r.moveStart("character", start);
                        return r
                    }; }

                    function contains(parent, child) {
                        if (child.nodeType == 3) // Android browser always returns false when child is a textnode
                        { child = child.parentNode; }
                        if (parent.contains)
                        { return parent.contains(child) }
                        do {
                            if (child.nodeType == 11) { child = child.host; }
                            if (child == parent) { return true }
                        } while (child = child.parentNode)
                    }

                    function activeElt() {
                        // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
                        // IE < 10 will throw when accessed while the page is loading or in an iframe.
                        // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
                        var activeElement;
                        try {
                            activeElement = document.activeElement;
                        } catch(e) {
                            activeElement = document.body || null;
                        }
                        while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
                        { activeElement = activeElement.shadowRoot.activeElement; }
                        return activeElement
                    }

                    function addClass(node, cls) {
                        var current = node.className;
                        if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls; }
                    }
                    function joinClasses(a, b) {
                        var as = a.split(" ");
                        for (var i = 0; i < as.length; i++)
                        { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i]; } }
                        return b
                    }

                    var selectInput = function(node) { node.select(); };
                    if (ios) // Mobile Safari apparently has a bug where select() is broken.
                    { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; }; }
                    else if (ie) // Suppress mysterious IE10 errors
                    { selectInput = function(node) { try { node.select(); } catch(_e) {} }; }

                    function bind(f) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        return function(){return f.apply(null, args)}
                    }

                    function copyObj(obj, target, overwrite) {
                        if (!target) { target = {}; }
                        for (var prop in obj)
                        { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
                        { target[prop] = obj[prop]; } }
                        return target
                    }

                    // Counts the column offset in a string, taking tabs into account.
                    // Used mostly to find indentation.
                    function countColumn(string, end, tabSize, startIndex, startValue) {
                        if (end == null) {
                            end = string.search(/[^\s\u00a0]/);
                            if (end == -1) { end = string.length; }
                        }
                        for (var i = startIndex || 0, n = startValue || 0;;) {
                            var nextTab = string.indexOf("\t", i);
                            if (nextTab < 0 || nextTab >= end)
                            { return n + (end - i) }
                            n += nextTab - i;
                            n += tabSize - (n % tabSize);
                            i = nextTab + 1;
                        }
                    }

                    var Delayed = function() {
                        this.id = null;
                        this.f = null;
                        this.time = 0;
                        this.handler = bind(this.onTimeout, this);
                    };
                    Delayed.prototype.onTimeout = function (self) {
                        self.id = 0;
                        if (self.time <= +new Date) {
                            self.f();
                        } else {
                            setTimeout(self.handler, self.time - +new Date);
                        }
                    };
                    Delayed.prototype.set = function (ms, f) {
                        this.f = f;
                        var time = +new Date + ms;
                        if (!this.id || time < this.time) {
                            clearTimeout(this.id);
                            this.id = setTimeout(this.handler, ms);
                            this.time = time;
                        }
                    };

                    function indexOf(array, elt) {
                        for (var i = 0; i < array.length; ++i)
                        { if (array[i] == elt) { return i } }
                        return -1
                    }

                    // Number of pixels added to scroller and sizer to hide scrollbar
                    var scrollerGap = 50;

                    // Returned or thrown by various protocols to signal 'I'm not
                    // handling this'.
                    var Pass = {toString: function(){return "CodeMirror.Pass"}};

                    // Reused option objects for setSelection & friends
                    var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

                    // The inverse of countColumn -- find the offset that corresponds to
                    // a particular column.
                    function findColumn(string, goal, tabSize) {
                        for (var pos = 0, col = 0;;) {
                            var nextTab = string.indexOf("\t", pos);
                            if (nextTab == -1) { nextTab = string.length; }
                            var skipped = nextTab - pos;
                            if (nextTab == string.length || col + skipped >= goal)
                            { return pos + Math.min(skipped, goal - col) }
                            col += nextTab - pos;
                            col += tabSize - (col % tabSize);
                            pos = nextTab + 1;
                            if (col >= goal) { return pos }
                        }
                    }

                    var spaceStrs = [""];
                    function spaceStr(n) {
                        while (spaceStrs.length <= n)
                        { spaceStrs.push(lst(spaceStrs) + " "); }
                        return spaceStrs[n]
                    }

                    function lst(arr) { return arr[arr.length-1] }

                    function map(array, f) {
                        var out = [];
                        for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i); }
                        return out
                    }

                    function insertSorted(array, value, score) {
                        var pos = 0, priority = score(value);
                        while (pos < array.length && score(array[pos]) <= priority) { pos++; }
                        array.splice(pos, 0, value);
                    }

                    function nothing() {}

                    function createObj(base, props) {
                        var inst;
                        if (Object.create) {
                            inst = Object.create(base);
                        } else {
                            nothing.prototype = base;
                            inst = new nothing();
                        }
                        if (props) { copyObj(props, inst); }
                        return inst
                    }

                    var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
                    function isWordCharBasic(ch) {
                        return /\w/.test(ch) || ch > "\x80" &&
                            (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
                    }
                    function isWordChar(ch, helper) {
                        if (!helper) { return isWordCharBasic(ch) }
                        if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
                        return helper.test(ch)
                    }

                    function isEmpty(obj) {
                        for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
                        return true
                    }

                    // Extending unicode characters. A series of a non-extending char +
                    // any number of extending chars is treated as a single unit as far
                    // as editing and measuring is concerned. This is not fully correct,
                    // since some scripts/fonts/browsers also treat other configurations
                    // of code points as a group.
                    var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
                    function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

                    // Returns a number from the range [`0`; `str.length`] unless `pos` is outside that range.
                    function skipExtendingChars(str, pos, dir) {
                        while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) { pos += dir; }
                        return pos
                    }

                    // Returns the value from the range [`from`; `to`] that satisfies
                    // `pred` and is closest to `from`. Assumes that at least `to`
                    // satisfies `pred`. Supports `from` being greater than `to`.
                    function findFirst(pred, from, to) {
                        // At any point we are certain `to` satisfies `pred`, don't know
                        // whether `from` does.
                        var dir = from > to ? -1 : 1;
                        for (;;) {
                            if (from == to) { return from }
                            var midF = (from + to) / 2, mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF);
                            if (mid == from) { return pred(mid) ? from : to }
                            if (pred(mid)) { to = mid; }
                            else { from = mid + dir; }
                        }
                    }

                    // BIDI HELPERS

                    function iterateBidiSections(order, from, to, f) {
                        if (!order) { return f(from, to, "ltr", 0) }
                        var found = false;
                        for (var i = 0; i < order.length; ++i) {
                            var part = order[i];
                            if (part.from < to && part.to > from || from == to && part.to == from) {
                                f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i);
                                found = true;
                            }
                        }
                        if (!found) { f(from, to, "ltr"); }
                    }

                    var bidiOther = null;
                    function getBidiPartAt(order, ch, sticky) {
                        var found;
                        bidiOther = null;
                        for (var i = 0; i < order.length; ++i) {
                            var cur = order[i];
                            if (cur.from < ch && cur.to > ch) { return i }
                            if (cur.to == ch) {
                                if (cur.from != cur.to && sticky == "before") { found = i; }
                                else { bidiOther = i; }
                            }
                            if (cur.from == ch) {
                                if (cur.from != cur.to && sticky != "before") { found = i; }
                                else { bidiOther = i; }
                            }
                        }
                        return found != null ? found : bidiOther
                    }

                    // Bidirectional ordering algorithm
                    // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
                    // that this (partially) implements.

                    // One-char codes used for character types:
                    // L (L):   Left-to-Right
                    // R (R):   Right-to-Left
                    // r (AL):  Right-to-Left Arabic
                    // 1 (EN):  European Number
                    // + (ES):  European Number Separator
                    // % (ET):  European Number Terminator
                    // n (AN):  Arabic Number
                    // , (CS):  Common Number Separator
                    // m (NSM): Non-Spacing Mark
                    // b (BN):  Boundary Neutral
                    // s (B):   Paragraph Separator
                    // t (S):   Segment Separator
                    // w (WS):  Whitespace
                    // N (ON):  Other Neutrals

                    // Returns null if characters are ordered as they appear
                    // (left-to-right), or an array of sections ({from, to, level}
                    // objects) in the order in which they occur visually.
                    var bidiOrdering = (function() {
                        // Character types for codepoints 0 to 0xff
                        var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
                        // Character types for codepoints 0x600 to 0x6f9
                        var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
                        function charType(code) {
                            if (code <= 0xf7) { return lowTypes.charAt(code) }
                            else if (0x590 <= code && code <= 0x5f4) { return "R" }
                            else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
                            else if (0x6ee <= code && code <= 0x8ac) { return "r" }
                            else if (0x2000 <= code && code <= 0x200b) { return "w" }
                            else if (code == 0x200c) { return "b" }
                            else { return "L" }
                        }

                        var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
                        var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;

                        function BidiSpan(level, from, to) {
                            this.level = level;
                            this.from = from; this.to = to;
                        }

                        return function(str, direction) {
                            var outerType = direction == "ltr" ? "L" : "R";

                            if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) { return false }
                            var len = str.length, types = [];
                            for (var i = 0; i < len; ++i)
                            { types.push(charType(str.charCodeAt(i))); }

                            // W1. Examine each non-spacing mark (NSM) in the level run, and
                            // change the type of the NSM to the type of the previous
                            // character. If the NSM is at the start of the level run, it will
                            // get the type of sor.
                            for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
                                var type = types[i$1];
                                if (type == "m") { types[i$1] = prev; }
                                else { prev = type; }
                            }

                            // W2. Search backwards from each instance of a European number
                            // until the first strong type (R, L, AL, or sor) is found. If an
                            // AL is found, change the type of the European number to Arabic
                            // number.
                            // W3. Change all ALs to R.
                            for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
                                var type$1 = types[i$2];
                                if (type$1 == "1" && cur == "r") { types[i$2] = "n"; }
                                else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R"; } }
                            }

                            // W4. A single European separator between two European numbers
                            // changes to a European number. A single common separator between
                            // two numbers of the same type changes to that type.
                            for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
                                var type$2 = types[i$3];
                                if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1"; }
                                else if (type$2 == "," && prev$1 == types[i$3+1] &&
                                    (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1; }
                                prev$1 = type$2;
                            }

                            // W5. A sequence of European terminators adjacent to European
                            // numbers changes to all European numbers.
                            // W6. Otherwise, separators and terminators change to Other
                            // Neutral.
                            for (var i$4 = 0; i$4 < len; ++i$4) {
                                var type$3 = types[i$4];
                                if (type$3 == ",") { types[i$4] = "N"; }
                                else if (type$3 == "%") {
                                    var end = (void 0);
                                    for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
                                    var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
                                    for (var j = i$4; j < end; ++j) { types[j] = replace; }
                                    i$4 = end - 1;
                                }
                            }

                            // W7. Search backwards from each instance of a European number
                            // until the first strong type (R, L, or sor) is found. If an L is
                            // found, then change the type of the European number to L.
                            for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
                                var type$4 = types[i$5];
                                if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L"; }
                                else if (isStrong.test(type$4)) { cur$1 = type$4; }
                            }

                            // N1. A sequence of neutrals takes the direction of the
                            // surrounding strong text if the text on both sides has the same
                            // direction. European and Arabic numbers act as if they were R in
                            // terms of their influence on neutrals. Start-of-level-run (sor)
                            // and end-of-level-run (eor) are used at level run boundaries.
                            // N2. Any remaining neutrals take the embedding direction.
                            for (var i$6 = 0; i$6 < len; ++i$6) {
                                if (isNeutral.test(types[i$6])) {
                                    var end$1 = (void 0);
                                    for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
                                    var before = (i$6 ? types[i$6-1] : outerType) == "L";
                                    var after = (end$1 < len ? types[end$1] : outerType) == "L";
                                    var replace$1 = before == after ? (before ? "L" : "R") : outerType;
                                    for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1; }
                                    i$6 = end$1 - 1;
                                }
                            }

                            // Here we depart from the documented algorithm, in order to avoid
                            // building up an actual levels array. Since there are only three
                            // levels (0, 1, 2) in an implementation that doesn't take
                            // explicit embedding into account, we can build up the order on
                            // the fly, without following the level-based algorithm.
                            var order = [], m;
                            for (var i$7 = 0; i$7 < len;) {
                                if (countsAsLeft.test(types[i$7])) {
                                    var start = i$7;
                                    for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
                                    order.push(new BidiSpan(0, start, i$7));
                                } else {
                                    var pos = i$7, at = order.length, isRTL = direction == "rtl" ? 1 : 0;
                                    for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
                                    for (var j$2 = pos; j$2 < i$7;) {
                                        if (countsAsNum.test(types[j$2])) {
                                            if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)); at += isRTL; }
                                            var nstart = j$2;
                                            for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
                                            order.splice(at, 0, new BidiSpan(2, nstart, j$2));
                                            at += isRTL;
                                            pos = j$2;
                                        } else { ++j$2; }
                                    }
                                    if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)); }
                                }
                            }
                            if (direction == "ltr") {
                                if (order[0].level == 1 && (m = str.match(/^\s+/))) {
                                    order[0].from = m[0].length;
                                    order.unshift(new BidiSpan(0, 0, m[0].length));
                                }
                                if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
                                    lst(order).to -= m[0].length;
                                    order.push(new BidiSpan(0, len - m[0].length, len));
                                }
                            }

                            return direction == "rtl" ? order.reverse() : order
                        }
                    })();

                    // Get the bidi ordering for the given line (and cache it). Returns
                    // false for lines that are fully left-to-right, and an array of
                    // BidiSpan objects otherwise.
                    function getOrder(line, direction) {
                        var order = line.order;
                        if (order == null) { order = line.order = bidiOrdering(line.text, direction); }
                        return order
                    }

                    // EVENT HANDLING

                    // Lightweight event framework. on/off also work on DOM nodes,
                    // registering native DOM handlers.

                    var noHandlers = [];

                    var on = function(emitter, type, f) {
                        if (emitter.addEventListener) {
                            emitter.addEventListener(type, f, false);
                        } else if (emitter.attachEvent) {
                            emitter.attachEvent("on" + type, f);
                        } else {
                            var map = emitter._handlers || (emitter._handlers = {});
                            map[type] = (map[type] || noHandlers).concat(f);
                        }
                    };

                    function getHandlers(emitter, type) {
                        return emitter._handlers && emitter._handlers[type] || noHandlers
                    }

                    function off(emitter, type, f) {
                        if (emitter.removeEventListener) {
                            emitter.removeEventListener(type, f, false);
                        } else if (emitter.detachEvent) {
                            emitter.detachEvent("on" + type, f);
                        } else {
                            var map = emitter._handlers, arr = map && map[type];
                            if (arr) {
                                var index = indexOf(arr, f);
                                if (index > -1)
                                { map[type] = arr.slice(0, index).concat(arr.slice(index + 1)); }
                            }
                        }
                    }

                    function signal(emitter, type /*, values...*/) {
                        var handlers = getHandlers(emitter, type);
                        if (!handlers.length) { return }
                        var args = Array.prototype.slice.call(arguments, 2);
                        for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args); }
                    }

                    // The DOM events that CodeMirror handles can be overridden by
                    // registering a (non-DOM) handler on the editor for the event name,
                    // and preventDefault-ing the event in that handler.
                    function signalDOMEvent(cm, e, override) {
                        if (typeof e == "string")
                        { e = {type: e, preventDefault: function() { this.defaultPrevented = true; }}; }
                        signal(cm, override || e.type, cm, e);
                        return e_defaultPrevented(e) || e.codemirrorIgnore
                    }

                    function signalCursorActivity(cm) {
                        var arr = cm._handlers && cm._handlers.cursorActivity;
                        if (!arr) { return }
                        var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
                        for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
                        { set.push(arr[i]); } }
                    }

                    function hasHandler(emitter, type) {
                        return getHandlers(emitter, type).length > 0
                    }

                    // Add on and off methods to a constructor's prototype, to make
                    // registering events on such objects more convenient.
                    function eventMixin(ctor) {
                        ctor.prototype.on = function(type, f) {on(this, type, f);};
                        ctor.prototype.off = function(type, f) {off(this, type, f);};
                    }

                    // Due to the fact that we still support jurassic IE versions, some
                    // compatibility wrappers are needed.

                    function e_preventDefault(e) {
                        if (e.preventDefault) { e.preventDefault(); }
                        else { e.returnValue = false; }
                    }
                    function e_stopPropagation(e) {
                        if (e.stopPropagation) { e.stopPropagation(); }
                        else { e.cancelBubble = true; }
                    }
                    function e_defaultPrevented(e) {
                        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
                    }
                    function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}

                    function e_target(e) {return e.target || e.srcElement}
                    function e_button(e) {
                        var b = e.which;
                        if (b == null) {
                            if (e.button & 1) { b = 1; }
                            else if (e.button & 2) { b = 3; }
                            else if (e.button & 4) { b = 2; }
                        }
                        if (mac && e.ctrlKey && b == 1) { b = 3; }
                        return b
                    }

                    // Detect drag-and-drop
                    var dragAndDrop = function() {
                        // There is *some* kind of drag-and-drop support in IE6-8, but I
                        // couldn't get it to work yet.
                        if (ie && ie_version < 9) { return false }
                        var div = elt('div');
                        return "draggable" in div || "dragDrop" in div
                    }();

                    var zwspSupported;
                    function zeroWidthElement(measure) {
                        if (zwspSupported == null) {
                            var test = elt("span", "\u200b");
                            removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
                            if (measure.firstChild.offsetHeight != 0)
                            { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8); }
                        }
                        var node = zwspSupported ? elt("span", "\u200b") :
                            elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
                        node.setAttribute("cm-text", "");
                        return node
                    }

                    // Feature-detect IE's crummy client rect reporting for bidi text
                    var badBidiRects;
                    function hasBadBidiRects(measure) {
                        if (badBidiRects != null) { return badBidiRects }
                        var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
                        var r0 = range(txt, 0, 1).getBoundingClientRect();
                        var r1 = range(txt, 1, 2).getBoundingClientRect();
                        removeChildren(measure);
                        if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
                        return badBidiRects = (r1.right - r0.right < 3)
                    }

                    // See if "".split is the broken IE version, if so, provide an
                    // alternative way to split lines.
                    var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
                        var pos = 0, result = [], l = string.length;
                        while (pos <= l) {
                            var nl = string.indexOf("\n", pos);
                            if (nl == -1) { nl = string.length; }
                            var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
                            var rt = line.indexOf("\r");
                            if (rt != -1) {
                                result.push(line.slice(0, rt));
                                pos += rt + 1;
                            } else {
                                result.push(line);
                                pos = nl + 1;
                            }
                        }
                        return result
                    } : function (string) { return string.split(/\r\n?|\n/); };

                    var hasSelection = window.getSelection ? function (te) {
                        try { return te.selectionStart != te.selectionEnd }
                        catch(e) { return false }
                    } : function (te) {
                        var range;
                        try {range = te.ownerDocument.selection.createRange();}
                        catch(e) {}
                        if (!range || range.parentElement() != te) { return false }
                        return range.compareEndPoints("StartToEnd", range) != 0
                    };

                    var hasCopyEvent = (function () {
                        var e = elt("div");
                        if ("oncopy" in e) { return true }
                        e.setAttribute("oncopy", "return;");
                        return typeof e.oncopy == "function"
                    })();

                    var badZoomedRects = null;
                    function hasBadZoomedRects(measure) {
                        if (badZoomedRects != null) { return badZoomedRects }
                        var node = removeChildrenAndAdd(measure, elt("span", "x"));
                        var normal = node.getBoundingClientRect();
                        var fromRange = range(node, 0, 1).getBoundingClientRect();
                        return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
                    }

                    // Known modes, by name and by MIME
                    var modes = {}, mimeModes = {};

                    // Extra arguments are stored as the mode's dependencies, which is
                    // used by (legacy) mechanisms like loadmode.js to automatically
                    // load a mode. (Preferred mechanism is the require/define calls.)
                    function defineMode(name, mode) {
                        if (arguments.length > 2)
                        { mode.dependencies = Array.prototype.slice.call(arguments, 2); }
                        modes[name] = mode;
                    }

                    function defineMIME(mime, spec) {
                        mimeModes[mime] = spec;
                    }

                    // Given a MIME type, a {name, ...options} config object, or a name
                    // string, return a mode config object.
                    function resolveMode(spec) {
                        if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
                            spec = mimeModes[spec];
                        } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
                            var found = mimeModes[spec.name];
                            if (typeof found == "string") { found = {name: found}; }
                            spec = createObj(found, spec);
                            spec.name = found.name;
                        } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
                            return resolveMode("application/xml")
                        } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
                            return resolveMode("application/json")
                        }
                        if (typeof spec == "string") { return {name: spec} }
                        else { return spec || {name: "null"} }
                    }

                    // Given a mode spec (anything that resolveMode accepts), find and
                    // initialize an actual mode object.
                    function getMode(options, spec) {
                        spec = resolveMode(spec);
                        var mfactory = modes[spec.name];
                        if (!mfactory) { return getMode(options, "text/plain") }
                        var modeObj = mfactory(options, spec);
                        if (modeExtensions.hasOwnProperty(spec.name)) {
                            var exts = modeExtensions[spec.name];
                            for (var prop in exts) {
                                if (!exts.hasOwnProperty(prop)) { continue }
                                if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop]; }
                                modeObj[prop] = exts[prop];
                            }
                        }
                        modeObj.name = spec.name;
                        if (spec.helperType) { modeObj.helperType = spec.helperType; }
                        if (spec.modeProps) { for (var prop$1 in spec.modeProps)
                        { modeObj[prop$1] = spec.modeProps[prop$1]; } }

                        return modeObj
                    }

                    // This can be used to attach properties to mode objects from
                    // outside the actual mode definition.
                    var modeExtensions = {};
                    function extendMode(mode, properties) {
                        var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
                        copyObj(properties, exts);
                    }

                    function copyState(mode, state) {
                        if (state === true) { return state }
                        if (mode.copyState) { return mode.copyState(state) }
                        var nstate = {};
                        for (var n in state) {
                            var val = state[n];
                            if (val instanceof Array) { val = val.concat([]); }
                            nstate[n] = val;
                        }
                        return nstate
                    }

                    // Given a mode and a state (for that mode), find the inner mode and
                    // state at the position that the state refers to.
                    function innerMode(mode, state) {
                        var info;
                        while (mode.innerMode) {
                            info = mode.innerMode(state);
                            if (!info || info.mode == mode) { break }
                            state = info.state;
                            mode = info.mode;
                        }
                        return info || {mode: mode, state: state}
                    }

                    function startState(mode, a1, a2) {
                        return mode.startState ? mode.startState(a1, a2) : true
                    }

                    // STRING STREAM

                    // Fed to the mode parsers, provides helper functions to make
                    // parsers more succinct.

                    var StringStream = function(string, tabSize, lineOracle) {
                        this.pos = this.start = 0;
                        this.string = string;
                        this.tabSize = tabSize || 8;
                        this.lastColumnPos = this.lastColumnValue = 0;
                        this.lineStart = 0;
                        this.lineOracle = lineOracle;
                    };

                    StringStream.prototype.eol = function () {return this.pos >= this.string.length};
                    StringStream.prototype.sol = function () {return this.pos == this.lineStart};
                    StringStream.prototype.peek = function () {return this.string.charAt(this.pos) || undefined};
                    StringStream.prototype.next = function () {
                        if (this.pos < this.string.length)
                        { return this.string.charAt(this.pos++) }
                    };
                    StringStream.prototype.eat = function (match) {
                        var ch = this.string.charAt(this.pos);
                        var ok;
                        if (typeof match == "string") { ok = ch == match; }
                        else { ok = ch && (match.test ? match.test(ch) : match(ch)); }
                        if (ok) {++this.pos; return ch}
                    };
                    StringStream.prototype.eatWhile = function (match) {
                        var start = this.pos;
                        while (this.eat(match)){}
                        return this.pos > start
                    };
                    StringStream.prototype.eatSpace = function () {
                        var start = this.pos;
                        while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this.pos; }
                        return this.pos > start
                    };
                    StringStream.prototype.skipToEnd = function () {this.pos = this.string.length;};
                    StringStream.prototype.skipTo = function (ch) {
                        var found = this.string.indexOf(ch, this.pos);
                        if (found > -1) {this.pos = found; return true}
                    };
                    StringStream.prototype.backUp = function (n) {this.pos -= n;};
                    StringStream.prototype.column = function () {
                        if (this.lastColumnPos < this.start) {
                            this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
                            this.lastColumnPos = this.start;
                        }
                        return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
                    };
                    StringStream.prototype.indentation = function () {
                        return countColumn(this.string, null, this.tabSize) -
                            (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
                    };
                    StringStream.prototype.match = function (pattern, consume, caseInsensitive) {
                        if (typeof pattern == "string") {
                            var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; };
                            var substr = this.string.substr(this.pos, pattern.length);
                            if (cased(substr) == cased(pattern)) {
                                if (consume !== false) { this.pos += pattern.length; }
                                return true
                            }
                        } else {
                            var match = this.string.slice(this.pos).match(pattern);
                            if (match && match.index > 0) { return null }
                            if (match && consume !== false) { this.pos += match[0].length; }
                            return match
                        }
                    };
                    StringStream.prototype.current = function (){return this.string.slice(this.start, this.pos)};
                    StringStream.prototype.hideFirstChars = function (n, inner) {
                        this.lineStart += n;
                        try { return inner() }
                        finally { this.lineStart -= n; }
                    };
                    StringStream.prototype.lookAhead = function (n) {
                        var oracle = this.lineOracle;
                        return oracle && oracle.lookAhead(n)
                    };
                    StringStream.prototype.baseToken = function () {
                        var oracle = this.lineOracle;
                        return oracle && oracle.baseToken(this.pos)
                    };

                    // Find the line object corresponding to the given line number.
                    function getLine(doc, n) {
                        n -= doc.first;
                        if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
                        var chunk = doc;
                        while (!chunk.lines) {
                            for (var i = 0;; ++i) {
                                var child = chunk.children[i], sz = child.chunkSize();
                                if (n < sz) { chunk = child; break }
                                n -= sz;
                            }
                        }
                        return chunk.lines[n]
                    }

                    // Get the part of a document between two positions, as an array of
                    // strings.
                    function getBetween(doc, start, end) {
                        var out = [], n = start.line;
                        doc.iter(start.line, end.line + 1, function (line) {
                            var text = line.text;
                            if (n == end.line) { text = text.slice(0, end.ch); }
                            if (n == start.line) { text = text.slice(start.ch); }
                            out.push(text);
                            ++n;
                        });
                        return out
                    }
                    // Get the lines between from and to, as array of strings.
                    function getLines(doc, from, to) {
                        var out = [];
                        doc.iter(from, to, function (line) { out.push(line.text); }); // iter aborts when callback returns truthy value
                        return out
                    }

                    // Update the height of a line, propagating the height change
                    // upwards to parent nodes.
                    function updateLineHeight(line, height) {
                        var diff = height - line.height;
                        if (diff) { for (var n = line; n; n = n.parent) { n.height += diff; } }
                    }

                    // Given a line object, find its line number by walking up through
                    // its parent links.
                    function lineNo(line) {
                        if (line.parent == null) { return null }
                        var cur = line.parent, no = indexOf(cur.lines, line);
                        for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
                            for (var i = 0;; ++i) {
                                if (chunk.children[i] == cur) { break }
                                no += chunk.children[i].chunkSize();
                            }
                        }
                        return no + cur.first
                    }

                    // Find the line at the given vertical position, using the height
                    // information in the document tree.
                    function lineAtHeight(chunk, h) {
                        var n = chunk.first;
                        outer: do {
                            for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
                                var child = chunk.children[i$1], ch = child.height;
                                if (h < ch) { chunk = child; continue outer }
                                h -= ch;
                                n += child.chunkSize();
                            }
                            return n
                        } while (!chunk.lines)
                        var i = 0;
                        for (; i < chunk.lines.length; ++i) {
                            var line = chunk.lines[i], lh = line.height;
                            if (h < lh) { break }
                            h -= lh;
                        }
                        return n + i
                    }

                    function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

                    function lineNumberFor(options, i) {
                        return String(options.lineNumberFormatter(i + options.firstLineNumber))
                    }

                    // A Pos instance represents a position within the text.
                    function Pos(line, ch, sticky) {
                        if ( sticky === void 0 ) sticky = null;

                        if (!(this instanceof Pos)) { return new Pos(line, ch, sticky) }
                        this.line = line;
                        this.ch = ch;
                        this.sticky = sticky;
                    }

                    // Compare two positions, return 0 if they are the same, a negative
                    // number when a is less, and a positive number otherwise.
                    function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

                    function equalCursorPos(a, b) { return a.sticky == b.sticky && cmp(a, b) == 0 }

                    function copyPos(x) {return Pos(x.line, x.ch)}
                    function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
                    function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

                    // Most of the external API clips given positions to make sure they
                    // actually exist within the document.
                    function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
                    function clipPos(doc, pos) {
                        if (pos.line < doc.first) { return Pos(doc.first, 0) }
                        var last = doc.first + doc.size - 1;
                        if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
                        return clipToLen(pos, getLine(doc, pos.line).text.length)
                    }
                    function clipToLen(pos, linelen) {
                        var ch = pos.ch;
                        if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
                        else if (ch < 0) { return Pos(pos.line, 0) }
                        else { return pos }
                    }
                    function clipPosArray(doc, array) {
                        var out = [];
                        for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]); }
                        return out
                    }

                    var SavedContext = function(state, lookAhead) {
                        this.state = state;
                        this.lookAhead = lookAhead;
                    };

                    var Context = function(doc, state, line, lookAhead) {
                        this.state = state;
                        this.doc = doc;
                        this.line = line;
                        this.maxLookAhead = lookAhead || 0;
                        this.baseTokens = null;
                        this.baseTokenPos = 1;
                    };

                    Context.prototype.lookAhead = function (n) {
                        var line = this.doc.getLine(this.line + n);
                        if (line != null && n > this.maxLookAhead) { this.maxLookAhead = n; }
                        return line
                    };

                    Context.prototype.baseToken = function (n) {
                        if (!this.baseTokens) { return null }
                        while (this.baseTokens[this.baseTokenPos] <= n)
                        { this.baseTokenPos += 2; }
                        var type = this.baseTokens[this.baseTokenPos + 1];
                        return {type: type && type.replace(/( |^)overlay .*/, ""),
                            size: this.baseTokens[this.baseTokenPos] - n}
                    };

                    Context.prototype.nextLine = function () {
                        this.line++;
                        if (this.maxLookAhead > 0) { this.maxLookAhead--; }
                    };

                    Context.fromSaved = function (doc, saved, line) {
                        if (saved instanceof SavedContext)
                        { return new Context(doc, copyState(doc.mode, saved.state), line, saved.lookAhead) }
                        else
                        { return new Context(doc, copyState(doc.mode, saved), line) }
                    };

                    Context.prototype.save = function (copy) {
                        var state = copy !== false ? copyState(this.doc.mode, this.state) : this.state;
                        return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state
                    };


                    // Compute a style array (an array starting with a mode generation
                    // -- for invalidation -- followed by pairs of end positions and
                    // style strings), which is used to highlight the tokens on the
                    // line.
                    function highlightLine(cm, line, context, forceToEnd) {
                        // A styles array always starts with a number identifying the
                        // mode/overlays that it is based on (for easy invalidation).
                        var st = [cm.state.modeGen], lineClasses = {};
                        // Compute the base array of styles
                        runMode(cm, line.text, cm.doc.mode, context, function (end, style) { return st.push(end, style); },
                            lineClasses, forceToEnd);
                        var state = context.state;

                        // Run overlays, adjust style array.
                        var loop = function ( o ) {
                            context.baseTokens = st;
                            var overlay = cm.state.overlays[o], i = 1, at = 0;
                            context.state = true;
                            runMode(cm, line.text, overlay.mode, context, function (end, style) {
                                var start = i;
                                // Ensure there's a token end at the current position, and that i points at it
                                while (at < end) {
                                    var i_end = st[i];
                                    if (i_end > end)
                                    { st.splice(i, 1, end, st[i+1], i_end); }
                                    i += 2;
                                    at = Math.min(end, i_end);
                                }
                                if (!style) { return }
                                if (overlay.opaque) {
                                    st.splice(start, i - start, end, "overlay " + style);
                                    i = start + 2;
                                } else {
                                    for (; start < i; start += 2) {
                                        var cur = st[start+1];
                                        st[start+1] = (cur ? cur + " " : "") + "overlay " + style;
                                    }
                                }
                            }, lineClasses);
                            context.state = state;
                            context.baseTokens = null;
                            context.baseTokenPos = 1;
                        };

                        for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );

                        return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
                    }

                    function getLineStyles(cm, line, updateFrontier) {
                        if (!line.styles || line.styles[0] != cm.state.modeGen) {
                            var context = getContextBefore(cm, lineNo(line));
                            var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
                            var result = highlightLine(cm, line, context);
                            if (resetState) { context.state = resetState; }
                            line.stateAfter = context.save(!resetState);
                            line.styles = result.styles;
                            if (result.classes) { line.styleClasses = result.classes; }
                            else if (line.styleClasses) { line.styleClasses = null; }
                            if (updateFrontier === cm.doc.highlightFrontier)
                            { cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier); }
                        }
                        return line.styles
                    }

                    function getContextBefore(cm, n, precise) {
                        var doc = cm.doc, display = cm.display;
                        if (!doc.mode.startState) { return new Context(doc, true, n) }
                        var start = findStartLine(cm, n, precise);
                        var saved = start > doc.first && getLine(doc, start - 1).stateAfter;
                        var context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, startState(doc.mode), start);

                        doc.iter(start, n, function (line) {
                            processLine(cm, line.text, context);
                            var pos = context.line;
                            line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
                            context.nextLine();
                        });
                        if (precise) { doc.modeFrontier = context.line; }
                        return context
                    }

                    // Lightweight form of highlight -- proceed over this line and
                    // update state, but don't save a style array. Used for lines that
                    // aren't currently visible.
                    function processLine(cm, text, context, startAt) {
                        var mode = cm.doc.mode;
                        var stream = new StringStream(text, cm.options.tabSize, context);
                        stream.start = stream.pos = startAt || 0;
                        if (text == "") { callBlankLine(mode, context.state); }
                        while (!stream.eol()) {
                            readToken(mode, stream, context.state);
                            stream.start = stream.pos;
                        }
                    }

                    function callBlankLine(mode, state) {
                        if (mode.blankLine) { return mode.blankLine(state) }
                        if (!mode.innerMode) { return }
                        var inner = innerMode(mode, state);
                        if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
                    }

                    function readToken(mode, stream, state, inner) {
                        for (var i = 0; i < 10; i++) {
                            if (inner) { inner[0] = innerMode(mode, state).mode; }
                            var style = mode.token(stream, state);
                            if (stream.pos > stream.start) { return style }
                        }
                        throw new Error("Mode " + mode.name + " failed to advance stream.")
                    }

                    var Token = function(stream, type, state) {
                        this.start = stream.start; this.end = stream.pos;
                        this.string = stream.current();
                        this.type = type || null;
                        this.state = state;
                    };

                    // Utility for getTokenAt and getLineTokens
                    function takeToken(cm, pos, precise, asArray) {
                        var doc = cm.doc, mode = doc.mode, style;
                        pos = clipPos(doc, pos);
                        var line = getLine(doc, pos.line), context = getContextBefore(cm, pos.line, precise);
                        var stream = new StringStream(line.text, cm.options.tabSize, context), tokens;
                        if (asArray) { tokens = []; }
                        while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
                            stream.start = stream.pos;
                            style = readToken(mode, stream, context.state);
                            if (asArray) { tokens.push(new Token(stream, style, copyState(doc.mode, context.state))); }
                        }
                        return asArray ? tokens : new Token(stream, style, context.state)
                    }

                    function extractLineClasses(type, output) {
                        if (type) { for (;;) {
                            var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
                            if (!lineClass) { break }
                            type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
                            var prop = lineClass[1] ? "bgClass" : "textClass";
                            if (output[prop] == null)
                            { output[prop] = lineClass[2]; }
                            else if (!(new RegExp("(?:^|\\s)" + lineClass[2] + "(?:$|\\s)")).test(output[prop]))
                            { output[prop] += " " + lineClass[2]; }
                        } }
                        return type
                    }

                    // Run the given mode's parser over a line, calling f for each token.
                    function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
                        var flattenSpans = mode.flattenSpans;
                        if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans; }
                        var curStart = 0, curStyle = null;
                        var stream = new StringStream(text, cm.options.tabSize, context), style;
                        var inner = cm.options.addModeClass && [null];
                        if (text == "") { extractLineClasses(callBlankLine(mode, context.state), lineClasses); }
                        while (!stream.eol()) {
                            if (stream.pos > cm.options.maxHighlightLength) {
                                flattenSpans = false;
                                if (forceToEnd) { processLine(cm, text, context, stream.pos); }
                                stream.pos = text.length;
                                style = null;
                            } else {
                                style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses);
                            }
                            if (inner) {
                                var mName = inner[0].name;
                                if (mName) { style = "m-" + (style ? mName + " " + style : mName); }
                            }
                            if (!flattenSpans || curStyle != style) {
                                while (curStart < stream.start) {
                                    curStart = Math.min(stream.start, curStart + 5000);
                                    f(curStart, curStyle);
                                }
                                curStyle = style;
                            }
                            stream.start = stream.pos;
                        }
                        while (curStart < stream.pos) {
                            // Webkit seems to refuse to render text nodes longer than 57444
                            // characters, and returns inaccurate measurements in nodes
                            // starting around 5000 chars.
                            var pos = Math.min(stream.pos, curStart + 5000);
                            f(pos, curStyle);
                            curStart = pos;
                        }
                    }

                    // Finds the line to start with when starting a parse. Tries to
                    // find a line with a stateAfter, so that it can start with a
                    // valid state. If that fails, it returns the line with the
                    // smallest indentation, which tends to need the least context to
                    // parse correctly.
                    function findStartLine(cm, n, precise) {
                        var minindent, minline, doc = cm.doc;
                        var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
                        for (var search = n; search > lim; --search) {
                            if (search <= doc.first) { return doc.first }
                            var line = getLine(doc, search - 1), after = line.stateAfter;
                            if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier))
                            { return search }
                            var indented = countColumn(line.text, null, cm.options.tabSize);
                            if (minline == null || minindent > indented) {
                                minline = search - 1;
                                minindent = indented;
                            }
                        }
                        return minline
                    }

                    function retreatFrontier(doc, n) {
                        doc.modeFrontier = Math.min(doc.modeFrontier, n);
                        if (doc.highlightFrontier < n - 10) { return }
                        var start = doc.first;
                        for (var line = n - 1; line > start; line--) {
                            var saved = getLine(doc, line).stateAfter;
                            // change is on 3
                            // state on line 1 looked ahead 2 -- so saw 3
                            // test 1 + 2 < 3 should cover this
                            if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
                                start = line + 1;
                                break
                            }
                        }
                        doc.highlightFrontier = Math.min(doc.highlightFrontier, start);
                    }

                    // Optimize some code when these features are not used.
                    var sawReadOnlySpans = false, sawCollapsedSpans = false;

                    function seeReadOnlySpans() {
                        sawReadOnlySpans = true;
                    }

                    function seeCollapsedSpans() {
                        sawCollapsedSpans = true;
                    }

                    // TEXTMARKER SPANS

                    function MarkedSpan(marker, from, to) {
                        this.marker = marker;
                        this.from = from; this.to = to;
                    }

                    // Search an array of spans for a span matching the given marker.
                    function getMarkedSpanFor(spans, marker) {
                        if (spans) { for (var i = 0; i < spans.length; ++i) {
                            var span = spans[i];
                            if (span.marker == marker) { return span }
                        } }
                    }
                    // Remove a span from an array, returning undefined if no spans are
                    // left (we don't store arrays for lines without spans).
                    function removeMarkedSpan(spans, span) {
                        var r;
                        for (var i = 0; i < spans.length; ++i)
                        { if (spans[i] != span) { (r || (r = [])).push(spans[i]); } }
                        return r
                    }
                    // Add a span to a line.
                    function addMarkedSpan(line, span) {
                        line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
                        span.marker.attachLine(line);
                    }

                    // Used for the algorithm that adjusts markers for a change in the
                    // document. These functions cut an array of spans at a given
                    // character position, returning an array of remaining chunks (or
                    // undefined if nothing remains).
                    function markedSpansBefore(old, startCh, isInsert) {
                        var nw;
                        if (old) { for (var i = 0; i < old.length; ++i) {
                            var span = old[i], marker = span.marker;
                            var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
                            if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
                                var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh)
                                ;(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
                            }
                        } }
                        return nw
                    }
                    function markedSpansAfter(old, endCh, isInsert) {
                        var nw;
                        if (old) { for (var i = 0; i < old.length; ++i) {
                            var span = old[i], marker = span.marker;
                            var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
                            if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
                                var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh)
                                ;(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
                                    span.to == null ? null : span.to - endCh));
                            }
                        } }
                        return nw
                    }

                    // Given a change object, compute the new set of marker spans that
                    // cover the line in which the change took place. Removes spans
                    // entirely within the change, reconnects spans belonging to the
                    // same marker that appear on both sides of the change, and cuts off
                    // spans partially within the change. Returns an array of span
                    // arrays with one element for each line in (after) the change.
                    function stretchSpansOverChange(doc, change) {
                        if (change.full) { return null }
                        var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
                        var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
                        if (!oldFirst && !oldLast) { return null }

                        var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
                        // Get the spans that 'stick out' on both sides
                        var first = markedSpansBefore(oldFirst, startCh, isInsert);
                        var last = markedSpansAfter(oldLast, endCh, isInsert);

                        // Next, merge those two ends
                        var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
                        if (first) {
                            // Fix up .to properties of first
                            for (var i = 0; i < first.length; ++i) {
                                var span = first[i];
                                if (span.to == null) {
                                    var found = getMarkedSpanFor(last, span.marker);
                                    if (!found) { span.to = startCh; }
                                    else if (sameLine) { span.to = found.to == null ? null : found.to + offset; }
                                }
                            }
                        }
                        if (last) {
                            // Fix up .from in last (or move them into first in case of sameLine)
                            for (var i$1 = 0; i$1 < last.length; ++i$1) {
                                var span$1 = last[i$1];
                                if (span$1.to != null) { span$1.to += offset; }
                                if (span$1.from == null) {
                                    var found$1 = getMarkedSpanFor(first, span$1.marker);
                                    if (!found$1) {
                                        span$1.from = offset;
                                        if (sameLine) { (first || (first = [])).push(span$1); }
                                    }
                                } else {
                                    span$1.from += offset;
                                    if (sameLine) { (first || (first = [])).push(span$1); }
                                }
                            }
                        }
                        // Make sure we didn't create any zero-length spans
                        if (first) { first = clearEmptySpans(first); }
                        if (last && last != first) { last = clearEmptySpans(last); }

                        var newMarkers = [first];
                        if (!sameLine) {
                            // Fill gap with whole-line-spans
                            var gap = change.text.length - 2, gapMarkers;
                            if (gap > 0 && first)
                            { for (var i$2 = 0; i$2 < first.length; ++i$2)
                            { if (first[i$2].to == null)
                            { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)); } } }
                            for (var i$3 = 0; i$3 < gap; ++i$3)
                            { newMarkers.push(gapMarkers); }
                            newMarkers.push(last);
                        }
                        return newMarkers
                    }

                    // Remove spans that are empty and don't have a clearWhenEmpty
                    // option of false.
                    function clearEmptySpans(spans) {
                        for (var i = 0; i < spans.length; ++i) {
                            var span = spans[i];
                            if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
                            { spans.splice(i--, 1); }
                        }
                        if (!spans.length) { return null }
                        return spans
                    }

                    // Used to 'clip' out readOnly ranges when making a change.
                    function removeReadOnlyRanges(doc, from, to) {
                        var markers = null;
                        doc.iter(from.line, to.line + 1, function (line) {
                            if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
                                var mark = line.markedSpans[i].marker;
                                if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
                                { (markers || (markers = [])).push(mark); }
                            } }
                        });
                        if (!markers) { return null }
                        var parts = [{from: from, to: to}];
                        for (var i = 0; i < markers.length; ++i) {
                            var mk = markers[i], m = mk.find(0);
                            for (var j = 0; j < parts.length; ++j) {
                                var p = parts[j];
                                if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
                                var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
                                if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
                                { newParts.push({from: p.from, to: m.from}); }
                                if (dto > 0 || !mk.inclusiveRight && !dto)
                                { newParts.push({from: m.to, to: p.to}); }
                                parts.splice.apply(parts, newParts);
                                j += newParts.length - 3;
                            }
                        }
                        return parts
                    }

                    // Connect or disconnect spans from a line.
                    function detachMarkedSpans(line) {
                        var spans = line.markedSpans;
                        if (!spans) { return }
                        for (var i = 0; i < spans.length; ++i)
                        { spans[i].marker.detachLine(line); }
                        line.markedSpans = null;
                    }
                    function attachMarkedSpans(line, spans) {
                        if (!spans) { return }
                        for (var i = 0; i < spans.length; ++i)
                        { spans[i].marker.attachLine(line); }
                        line.markedSpans = spans;
                    }

                    // Helpers used when computing which overlapping collapsed span
                    // counts as the larger one.
                    function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
                    function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

                    // Returns a number indicating which of two overlapping collapsed
                    // spans is larger (and thus includes the other). Falls back to
                    // comparing ids when the spans cover exactly the same range.
                    function compareCollapsedMarkers(a, b) {
                        var lenDiff = a.lines.length - b.lines.length;
                        if (lenDiff != 0) { return lenDiff }
                        var aPos = a.find(), bPos = b.find();
                        var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
                        if (fromCmp) { return -fromCmp }
                        var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
                        if (toCmp) { return toCmp }
                        return b.id - a.id
                    }

                    // Find out whether a line ends or starts in a collapsed span. If
                    // so, return the marker for that span.
                    function collapsedSpanAtSide(line, start) {
                        var sps = sawCollapsedSpans && line.markedSpans, found;
                        if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
                            sp = sps[i];
                            if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
                                (!found || compareCollapsedMarkers(found, sp.marker) < 0))
                            { found = sp.marker; }
                        } }
                        return found
                    }
                    function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
                    function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

                    function collapsedSpanAround(line, ch) {
                        var sps = sawCollapsedSpans && line.markedSpans, found;
                        if (sps) { for (var i = 0; i < sps.length; ++i) {
                            var sp = sps[i];
                            if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) &&
                                (!found || compareCollapsedMarkers(found, sp.marker) < 0)) { found = sp.marker; }
                        } }
                        return found
                    }

                    // Test whether there exists a collapsed span that partially
                    // overlaps (covers the start or end, but not both) of a new span.
                    // Such overlap is not allowed.
                    function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
                        var line = getLine(doc, lineNo);
                        var sps = sawCollapsedSpans && line.markedSpans;
                        if (sps) { for (var i = 0; i < sps.length; ++i) {
                            var sp = sps[i];
                            if (!sp.marker.collapsed) { continue }
                            var found = sp.marker.find(0);
                            var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
                            var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
                            if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
                            if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
                                fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
                            { return true }
                        } }
                    }

                    // A visual line is a line as drawn on the screen. Folding, for
                    // example, can cause multiple logical lines to appear on the same
                    // visual line. This finds the start of the visual line that the
                    // given line is part of (usually that is the line itself).
                    function visualLine(line) {
                        var merged;
                        while (merged = collapsedSpanAtStart(line))
                        { line = merged.find(-1, true).line; }
                        return line
                    }

                    function visualLineEnd(line) {
                        var merged;
                        while (merged = collapsedSpanAtEnd(line))
                        { line = merged.find(1, true).line; }
                        return line
                    }

                    // Returns an array of logical lines that continue the visual line
                    // started by the argument, or undefined if there are no such lines.
                    function visualLineContinued(line) {
                        var merged, lines;
                        while (merged = collapsedSpanAtEnd(line)) {
                            line = merged.find(1, true).line
                            ;(lines || (lines = [])).push(line);
                        }
                        return lines
                    }

                    // Get the line number of the start of the visual line that the
                    // given line number is part of.
                    function visualLineNo(doc, lineN) {
                        var line = getLine(doc, lineN), vis = visualLine(line);
                        if (line == vis) { return lineN }
                        return lineNo(vis)
                    }

                    // Get the line number of the start of the next visual line after
                    // the given line.
                    function visualLineEndNo(doc, lineN) {
                        if (lineN > doc.lastLine()) { return lineN }
                        var line = getLine(doc, lineN), merged;
                        if (!lineIsHidden(doc, line)) { return lineN }
                        while (merged = collapsedSpanAtEnd(line))
                        { line = merged.find(1, true).line; }
                        return lineNo(line) + 1
                    }

                    // Compute whether a line is hidden. Lines count as hidden when they
                    // are part of a visual line that starts with another line, or when
                    // they are entirely covered by collapsed, non-widget span.
                    function lineIsHidden(doc, line) {
                        var sps = sawCollapsedSpans && line.markedSpans;
                        if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
                            sp = sps[i];
                            if (!sp.marker.collapsed) { continue }
                            if (sp.from == null) { return true }
                            if (sp.marker.widgetNode) { continue }
                            if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
                            { return true }
                        } }
                    }
                    function lineIsHiddenInner(doc, line, span) {
                        if (span.to == null) {
                            var end = span.marker.find(1, true);
                            return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
                        }
                        if (span.marker.inclusiveRight && span.to == line.text.length)
                        { return true }
                        for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
                            sp = line.markedSpans[i];
                            if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
                                (sp.to == null || sp.to != span.from) &&
                                (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
                                lineIsHiddenInner(doc, line, sp)) { return true }
                        }
                    }

                    // Find the height above the given line.
                    function heightAtLine(lineObj) {
                        lineObj = visualLine(lineObj);

                        var h = 0, chunk = lineObj.parent;
                        for (var i = 0; i < chunk.lines.length; ++i) {
                            var line = chunk.lines[i];
                            if (line == lineObj) { break }
                            else { h += line.height; }
                        }
                        for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
                            for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
                                var cur = p.children[i$1];
                                if (cur == chunk) { break }
                                else { h += cur.height; }
                            }
                        }
                        return h
                    }

                    // Compute the character length of a line, taking into account
                    // collapsed ranges (see markText) that might hide parts, and join
                    // other lines onto it.
                    function lineLength(line) {
                        if (line.height == 0) { return 0 }
                        var len = line.text.length, merged, cur = line;
                        while (merged = collapsedSpanAtStart(cur)) {
                            var found = merged.find(0, true);
                            cur = found.from.line;
                            len += found.from.ch - found.to.ch;
                        }
                        cur = line;
                        while (merged = collapsedSpanAtEnd(cur)) {
                            var found$1 = merged.find(0, true);
                            len -= cur.text.length - found$1.from.ch;
                            cur = found$1.to.line;
                            len += cur.text.length - found$1.to.ch;
                        }
                        return len
                    }

                    // Find the longest line in the document.
                    function findMaxLine(cm) {
                        var d = cm.display, doc = cm.doc;
                        d.maxLine = getLine(doc, doc.first);
                        d.maxLineLength = lineLength(d.maxLine);
                        d.maxLineChanged = true;
                        doc.iter(function (line) {
                            var len = lineLength(line);
                            if (len > d.maxLineLength) {
                                d.maxLineLength = len;
                                d.maxLine = line;
                            }
                        });
                    }

                    // LINE DATA STRUCTURE

                    // Line objects. These hold state related to a line, including
                    // highlighting info (the styles array).
                    var Line = function(text, markedSpans, estimateHeight) {
                        this.text = text;
                        attachMarkedSpans(this, markedSpans);
                        this.height = estimateHeight ? estimateHeight(this) : 1;
                    };

                    Line.prototype.lineNo = function () { return lineNo(this) };
                    eventMixin(Line);

                    // Change the content (text, markers) of a line. Automatically
                    // invalidates cached information and tries to re-estimate the
                    // line's height.
                    function updateLine(line, text, markedSpans, estimateHeight) {
                        line.text = text;
                        if (line.stateAfter) { line.stateAfter = null; }
                        if (line.styles) { line.styles = null; }
                        if (line.order != null) { line.order = null; }
                        detachMarkedSpans(line);
                        attachMarkedSpans(line, markedSpans);
                        var estHeight = estimateHeight ? estimateHeight(line) : 1;
                        if (estHeight != line.height) { updateLineHeight(line, estHeight); }
                    }

                    // Detach a line from the document tree and its markers.
                    function cleanUpLine(line) {
                        line.parent = null;
                        detachMarkedSpans(line);
                    }

                    // Convert a style as returned by a mode (either null, or a string
                    // containing one or more styles) to a CSS style. This is cached,
                    // and also looks for line-wide styles.
                    var styleToClassCache = {}, styleToClassCacheWithMode = {};
                    function interpretTokenStyle(style, options) {
                        if (!style || /^\s*$/.test(style)) { return null }
                        var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
                        return cache[style] ||
                            (cache[style] = style.replace(/\S+/g, "cm-$&"))
                    }

                    // Render the DOM representation of the text of a line. Also builds
                    // up a 'line map', which points at the DOM nodes that represent
                    // specific stretches of text, and is used by the measuring code.
                    // The returned object contains the DOM node, this map, and
                    // information about line-wide styles that were set by the mode.
                    function buildLineContent(cm, lineView) {
                        // The padding-right forces the element to have a 'border', which
                        // is needed on Webkit to be able to get line-level bounding
                        // rectangles for it (in measureChar).
                        var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
                        var builder = {pre: eltP("pre", [content], "CodeMirror-line"), content: content,
                            col: 0, pos: 0, cm: cm,
                            trailingSpace: false,
                            splitSpaces: cm.getOption("lineWrapping")};
                        lineView.measure = {};

                        // Iterate over the logical lines that make up this visual line.
                        for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
                            var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0);
                            builder.pos = 0;
                            builder.addToken = buildToken;
                            // Optionally wire in some hacks into the token-rendering
                            // algorithm, to deal with browser quirks.
                            if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction)))
                            { builder.addToken = buildTokenBadBidi(builder.addToken, order); }
                            builder.map = [];
                            var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
                            insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
                            if (line.styleClasses) {
                                if (line.styleClasses.bgClass)
                                { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || ""); }
                                if (line.styleClasses.textClass)
                                { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || ""); }
                            }

                            // Ensure at least a single node is present, for measuring.
                            if (builder.map.length == 0)
                            { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))); }

                            // Store the map and a cache object for the current logical line
                            if (i == 0) {
                                lineView.measure.map = builder.map;
                                lineView.measure.cache = {};
                            } else {
                                (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
                                ;(lineView.measure.caches || (lineView.measure.caches = [])).push({});
                            }
                        }

                        // See issue #2901
                        if (webkit) {
                            var last = builder.content.lastChild;
                            if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
                            { builder.content.className = "cm-tab-wrap-hack"; }
                        }

                        signal(cm, "renderLine", cm, lineView.line, builder.pre);
                        if (builder.pre.className)
                        { builder.textClass = joinClasses(builder.pre.className, builder.textClass || ""); }

                        return builder
                    }

                    function defaultSpecialCharPlaceholder(ch) {
                        var token = elt("span", "\u2022", "cm-invalidchar");
                        token.title = "\\u" + ch.charCodeAt(0).toString(16);
                        token.setAttribute("aria-label", token.title);
                        return token
                    }

                    // Build up the DOM representation for a single token, and add it to
                    // the line map. Takes care to render special characters separately.
                    function buildToken(builder, text, style, startStyle, endStyle, css, attributes) {
                        if (!text) { return }
                        var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text;
                        var special = builder.cm.state.specialChars, mustWrap = false;
                        var content;
                        if (!special.test(text)) {
                            builder.col += text.length;
                            content = document.createTextNode(displayText);
                            builder.map.push(builder.pos, builder.pos + text.length, content);
                            if (ie && ie_version < 9) { mustWrap = true; }
                            builder.pos += text.length;
                        } else {
                            content = document.createDocumentFragment();
                            var pos = 0;
                            while (true) {
                                special.lastIndex = pos;
                                var m = special.exec(text);
                                var skipped = m ? m.index - pos : text.length - pos;
                                if (skipped) {
                                    var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
                                    if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])); }
                                    else { content.appendChild(txt); }
                                    builder.map.push(builder.pos, builder.pos + skipped, txt);
                                    builder.col += skipped;
                                    builder.pos += skipped;
                                }
                                if (!m) { break }
                                pos += skipped + 1;
                                var txt$1 = (void 0);
                                if (m[0] == "\t") {
                                    var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
                                    txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
                                    txt$1.setAttribute("role", "presentation");
                                    txt$1.setAttribute("cm-text", "\t");
                                    builder.col += tabWidth;
                                } else if (m[0] == "\r" || m[0] == "\n") {
                                    txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
                                    txt$1.setAttribute("cm-text", m[0]);
                                    builder.col += 1;
                                } else {
                                    txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
                                    txt$1.setAttribute("cm-text", m[0]);
                                    if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])); }
                                    else { content.appendChild(txt$1); }
                                    builder.col += 1;
                                }
                                builder.map.push(builder.pos, builder.pos + 1, txt$1);
                                builder.pos++;
                            }
                        }
                        builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32;
                        if (style || startStyle || endStyle || mustWrap || css) {
                            var fullStyle = style || "";
                            if (startStyle) { fullStyle += startStyle; }
                            if (endStyle) { fullStyle += endStyle; }
                            var token = elt("span", [content], fullStyle, css);
                            if (attributes) {
                                for (var attr in attributes) { if (attributes.hasOwnProperty(attr) && attr != "style" && attr != "class")
                                { token.setAttribute(attr, attributes[attr]); } }
                            }
                            return builder.content.appendChild(token)
                        }
                        builder.content.appendChild(content);
                    }

                    // Change some spaces to NBSP to prevent the browser from collapsing
                    // trailing spaces at the end of a line when rendering text (issue #1362).
                    function splitSpaces(text, trailingBefore) {
                        if (text.length > 1 && !/  /.test(text)) { return text }
                        var spaceBefore = trailingBefore, result = "";
                        for (var i = 0; i < text.length; i++) {
                            var ch = text.charAt(i);
                            if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
                            { ch = "\u00a0"; }
                            result += ch;
                            spaceBefore = ch == " ";
                        }
                        return result
                    }

                    // Work around nonsense dimensions being reported for stretches of
                    // right-to-left text.
                    function buildTokenBadBidi(inner, order) {
                        return function (builder, text, style, startStyle, endStyle, css, attributes) {
                            style = style ? style + " cm-force-border" : "cm-force-border";
                            var start = builder.pos, end = start + text.length;
                            for (;;) {
                                // Find the part that overlaps with the start of this text
                                var part = (void 0);
                                for (var i = 0; i < order.length; i++) {
                                    part = order[i];
                                    if (part.to > start && part.from <= start) { break }
                                }
                                if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, css, attributes) }
                                inner(builder, text.slice(0, part.to - start), style, startStyle, null, css, attributes);
                                startStyle = null;
                                text = text.slice(part.to - start);
                                start = part.to;
                            }
                        }
                    }

                    function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
                        var widget = !ignoreWidget && marker.widgetNode;
                        if (widget) { builder.map.push(builder.pos, builder.pos + size, widget); }
                        if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
                            if (!widget)
                            { widget = builder.content.appendChild(document.createElement("span")); }
                            widget.setAttribute("cm-marker", marker.id);
                        }
                        if (widget) {
                            builder.cm.display.input.setUneditable(widget);
                            builder.content.appendChild(widget);
                        }
                        builder.pos += size;
                        builder.trailingSpace = false;
                    }

                    // Outputs a number of spans to make up a line, taking highlighting
                    // and marked text into account.
                    function insertLineContent(line, builder, styles) {
                        var spans = line.markedSpans, allText = line.text, at = 0;
                        if (!spans) {
                            for (var i$1 = 1; i$1 < styles.length; i$1+=2)
                            { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)); }
                            return
                        }

                        var len = allText.length, pos = 0, i = 1, text = "", style, css;
                        var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, collapsed, attributes;
                        for (;;) {
                            if (nextChange == pos) { // Update current marker set
                                spanStyle = spanEndStyle = spanStartStyle = css = "";
                                attributes = null;
                                collapsed = null; nextChange = Infinity;
                                var foundBookmarks = [], endStyles = (void 0);
                                for (var j = 0; j < spans.length; ++j) {
                                    var sp = spans[j], m = sp.marker;
                                    if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
                                        foundBookmarks.push(m);
                                    } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
                                        if (sp.to != null && sp.to != pos && nextChange > sp.to) {
                                            nextChange = sp.to;
                                            spanEndStyle = "";
                                        }
                                        if (m.className) { spanStyle += " " + m.className; }
                                        if (m.css) { css = (css ? css + ";" : "") + m.css; }
                                        if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle; }
                                        if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to); }
                                        // support for the old title property
                                        // https://github.com/codemirror/CodeMirror/pull/5673
                                        if (m.title) { (attributes || (attributes = {})).title = m.title; }
                                        if (m.attributes) {
                                            for (var attr in m.attributes)
                                            { (attributes || (attributes = {}))[attr] = m.attributes[attr]; }
                                        }
                                        if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
                                        { collapsed = sp; }
                                    } else if (sp.from > pos && nextChange > sp.from) {
                                        nextChange = sp.from;
                                    }
                                }
                                if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
                                { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1]; } } }

                                if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
                                { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]); } }
                                if (collapsed && (collapsed.from || 0) == pos) {
                                    buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                                        collapsed.marker, collapsed.from == null);
                                    if (collapsed.to == null) { return }
                                    if (collapsed.to == pos) { collapsed = false; }
                                }
                            }
                            if (pos >= len) { break }

                            var upto = Math.min(len, nextChange);
                            while (true) {
                                if (text) {
                                    var end = pos + text.length;
                                    if (!collapsed) {
                                        var tokenText = end > upto ? text.slice(0, upto - pos) : text;
                                        builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                                            spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", css, attributes);
                                    }
                                    if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
                                    pos = end;
                                    spanStartStyle = "";
                                }
                                text = allText.slice(at, at = styles[i++]);
                                style = interpretTokenStyle(styles[i++], builder.cm.options);
                            }
                        }
                    }


                    // These objects are used to represent the visible (currently drawn)
                    // part of the document. A LineView may correspond to multiple
                    // logical lines, if those are connected by collapsed ranges.
                    function LineView(doc, line, lineN) {
                        // The starting line
                        this.line = line;
                        // Continuing lines, if any
                        this.rest = visualLineContinued(line);
                        // Number of logical lines in this visual line
                        this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
                        this.node = this.text = null;
                        this.hidden = lineIsHidden(doc, line);
                    }

                    // Create a range of LineView objects for the given lines.
                    function buildViewArray(cm, from, to) {
                        var array = [], nextPos;
                        for (var pos = from; pos < to; pos = nextPos) {
                            var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
                            nextPos = pos + view.size;
                            array.push(view);
                        }
                        return array
                    }

                    var operationGroup = null;

                    function pushOperation(op) {
                        if (operationGroup) {
                            operationGroup.ops.push(op);
                        } else {
                            op.ownsGroup = operationGroup = {
                                ops: [op],
                                delayedCallbacks: []
                            };
                        }
                    }

                    function fireCallbacksForOps(group) {
                        // Calls delayed callbacks and cursorActivity handlers until no
                        // new ones appear
                        var callbacks = group.delayedCallbacks, i = 0;
                        do {
                            for (; i < callbacks.length; i++)
                            { callbacks[i].call(null); }
                            for (var j = 0; j < group.ops.length; j++) {
                                var op = group.ops[j];
                                if (op.cursorActivityHandlers)
                                { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
                                { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm); } }
                            }
                        } while (i < callbacks.length)
                    }

                    function finishOperation(op, endCb) {
                        var group = op.ownsGroup;
                        if (!group) { return }

                        try { fireCallbacksForOps(group); }
                        finally {
                            operationGroup = null;
                            endCb(group);
                        }
                    }

                    var orphanDelayedCallbacks = null;

                    // Often, we want to signal events at a point where we are in the
                    // middle of some work, but don't want the handler to start calling
                    // other methods on the editor, which might be in an inconsistent
                    // state or simply not expect any other events to happen.
                    // signalLater looks whether there are any handlers, and schedules
                    // them to be executed when the last operation ends, or, if no
                    // operation is active, when a timeout fires.
                    function signalLater(emitter, type /*, values...*/) {
                        var arr = getHandlers(emitter, type);
                        if (!arr.length) { return }
                        var args = Array.prototype.slice.call(arguments, 2), list;
                        if (operationGroup) {
                            list = operationGroup.delayedCallbacks;
                        } else if (orphanDelayedCallbacks) {
                            list = orphanDelayedCallbacks;
                        } else {
                            list = orphanDelayedCallbacks = [];
                            setTimeout(fireOrphanDelayed, 0);
                        }
                        var loop = function ( i ) {
                            list.push(function () { return arr[i].apply(null, args); });
                        };

                        for (var i = 0; i < arr.length; ++i)
                            loop( i );
                    }

                    function fireOrphanDelayed() {
                        var delayed = orphanDelayedCallbacks;
                        orphanDelayedCallbacks = null;
                        for (var i = 0; i < delayed.length; ++i) { delayed[i](); }
                    }

                    // When an aspect of a line changes, a string is added to
                    // lineView.changes. This updates the relevant part of the line's
                    // DOM structure.
                    function updateLineForChanges(cm, lineView, lineN, dims) {
                        for (var j = 0; j < lineView.changes.length; j++) {
                            var type = lineView.changes[j];
                            if (type == "text") { updateLineText(cm, lineView); }
                            else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims); }
                            else if (type == "class") { updateLineClasses(cm, lineView); }
                            else if (type == "widget") { updateLineWidgets(cm, lineView, dims); }
                        }
                        lineView.changes = null;
                    }

                    // Lines with gutter elements, widgets or a background class need to
                    // be wrapped, and have the extra elements added to the wrapper div
                    function ensureLineWrapped(lineView) {
                        if (lineView.node == lineView.text) {
                            lineView.node = elt("div", null, null, "position: relative");
                            if (lineView.text.parentNode)
                            { lineView.text.parentNode.replaceChild(lineView.node, lineView.text); }
                            lineView.node.appendChild(lineView.text);
                            if (ie && ie_version < 8) { lineView.node.style.zIndex = 2; }
                        }
                        return lineView.node
                    }

                    function updateLineBackground(cm, lineView) {
                        var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
                        if (cls) { cls += " CodeMirror-linebackground"; }
                        if (lineView.background) {
                            if (cls) { lineView.background.className = cls; }
                            else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
                        } else if (cls) {
                            var wrap = ensureLineWrapped(lineView);
                            lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
                            cm.display.input.setUneditable(lineView.background);
                        }
                    }

                    // Wrapper around buildLineContent which will reuse the structure
                    // in display.externalMeasured when possible.
                    function getLineContent(cm, lineView) {
                        var ext = cm.display.externalMeasured;
                        if (ext && ext.line == lineView.line) {
                            cm.display.externalMeasured = null;
                            lineView.measure = ext.measure;
                            return ext.built
                        }
                        return buildLineContent(cm, lineView)
                    }

                    // Redraw the line's text. Interacts with the background and text
                    // classes because the mode may output tokens that influence these
                    // classes.
                    function updateLineText(cm, lineView) {
                        var cls = lineView.text.className;
                        var built = getLineContent(cm, lineView);
                        if (lineView.text == lineView.node) { lineView.node = built.pre; }
                        lineView.text.parentNode.replaceChild(built.pre, lineView.text);
                        lineView.text = built.pre;
                        if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
                            lineView.bgClass = built.bgClass;
                            lineView.textClass = built.textClass;
                            updateLineClasses(cm, lineView);
                        } else if (cls) {
                            lineView.text.className = cls;
                        }
                    }

                    function updateLineClasses(cm, lineView) {
                        updateLineBackground(cm, lineView);
                        if (lineView.line.wrapClass)
                        { ensureLineWrapped(lineView).className = lineView.line.wrapClass; }
                        else if (lineView.node != lineView.text)
                        { lineView.node.className = ""; }
                        var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
                        lineView.text.className = textClass || "";
                    }

                    function updateLineGutter(cm, lineView, lineN, dims) {
                        if (lineView.gutter) {
                            lineView.node.removeChild(lineView.gutter);
                            lineView.gutter = null;
                        }
                        if (lineView.gutterBackground) {
                            lineView.node.removeChild(lineView.gutterBackground);
                            lineView.gutterBackground = null;
                        }
                        if (lineView.line.gutterClass) {
                            var wrap = ensureLineWrapped(lineView);
                            lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
                                ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"));
                            cm.display.input.setUneditable(lineView.gutterBackground);
                            wrap.insertBefore(lineView.gutterBackground, lineView.text);
                        }
                        var markers = lineView.line.gutterMarkers;
                        if (cm.options.lineNumbers || markers) {
                            var wrap$1 = ensureLineWrapped(lineView);
                            var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"));
                            cm.display.input.setUneditable(gutterWrap);
                            wrap$1.insertBefore(gutterWrap, lineView.text);
                            if (lineView.line.gutterClass)
                            { gutterWrap.className += " " + lineView.line.gutterClass; }
                            if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
                            { lineView.lineNumber = gutterWrap.appendChild(
                                elt("div", lineNumberFor(cm.options, lineN),
                                    "CodeMirror-linenumber CodeMirror-gutter-elt",
                                    ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))); }
                            if (markers) { for (var k = 0; k < cm.display.gutterSpecs.length; ++k) {
                                var id = cm.display.gutterSpecs[k].className, found = markers.hasOwnProperty(id) && markers[id];
                                if (found)
                                { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
                                    ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))); }
                            } }
                        }
                    }

                    function updateLineWidgets(cm, lineView, dims) {
                        if (lineView.alignable) { lineView.alignable = null; }
                        var isWidget = classTest("CodeMirror-linewidget");
                        for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
                            next = node.nextSibling;
                            if (isWidget.test(node.className)) { lineView.node.removeChild(node); }
                        }
                        insertLineWidgets(cm, lineView, dims);
                    }

                    // Build a line's DOM representation from scratch
                    function buildLineElement(cm, lineView, lineN, dims) {
                        var built = getLineContent(cm, lineView);
                        lineView.text = lineView.node = built.pre;
                        if (built.bgClass) { lineView.bgClass = built.bgClass; }
                        if (built.textClass) { lineView.textClass = built.textClass; }

                        updateLineClasses(cm, lineView);
                        updateLineGutter(cm, lineView, lineN, dims);
                        insertLineWidgets(cm, lineView, dims);
                        return lineView.node
                    }

                    // A lineView may contain multiple logical lines (when merged by
                    // collapsed spans). The widgets for all of them need to be drawn.
                    function insertLineWidgets(cm, lineView, dims) {
                        insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
                        if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
                        { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false); } }
                    }

                    function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
                        if (!line.widgets) { return }
                        var wrap = ensureLineWrapped(lineView);
                        for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
                            var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget" + (widget.className ? " " + widget.className : ""));
                            if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true"); }
                            positionLineWidget(widget, node, lineView, dims);
                            cm.display.input.setUneditable(node);
                            if (allowAbove && widget.above)
                            { wrap.insertBefore(node, lineView.gutter || lineView.text); }
                            else
                            { wrap.appendChild(node); }
                            signalLater(widget, "redraw");
                        }
                    }

                    function positionLineWidget(widget, node, lineView, dims) {
                        if (widget.noHScroll) {
                            (lineView.alignable || (lineView.alignable = [])).push(node);
                            var width = dims.wrapperWidth;
                            node.style.left = dims.fixedPos + "px";
                            if (!widget.coverGutter) {
                                width -= dims.gutterTotalWidth;
                                node.style.paddingLeft = dims.gutterTotalWidth + "px";
                            }
                            node.style.width = width + "px";
                        }
                        if (widget.coverGutter) {
                            node.style.zIndex = 5;
                            node.style.position = "relative";
                            if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px"; }
                        }
                    }

                    function widgetHeight(widget) {
                        if (widget.height != null) { return widget.height }
                        var cm = widget.doc.cm;
                        if (!cm) { return 0 }
                        if (!contains(document.body, widget.node)) {
                            var parentStyle = "position: relative;";
                            if (widget.coverGutter)
                            { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;"; }
                            if (widget.noHScroll)
                            { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;"; }
                            removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
                        }
                        return widget.height = widget.node.parentNode.offsetHeight
                    }

                    // Return true when the given mouse event happened in a widget
                    function eventInWidget(display, e) {
                        for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
                            if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
                                (n.parentNode == display.sizer && n != display.mover))
                            { return true }
                        }
                    }

                    // POSITION MEASUREMENT

                    function paddingTop(display) {return display.lineSpace.offsetTop}
                    function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
                    function paddingH(display) {
                        if (display.cachedPaddingH) { return display.cachedPaddingH }
                        var e = removeChildrenAndAdd(display.measure, elt("pre", "x", "CodeMirror-line-like"));
                        var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
                        var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
                        if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data; }
                        return data
                    }

                    function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
                    function displayWidth(cm) {
                        return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
                    }
                    function displayHeight(cm) {
                        return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
                    }

                    // Ensure the lineView.wrapping.heights array is populated. This is
                    // an array of bottom offsets for the lines that make up a drawn
                    // line. When lineWrapping is on, there might be more than one
                    // height.
                    function ensureLineHeights(cm, lineView, rect) {
                        var wrapping = cm.options.lineWrapping;
                        var curWidth = wrapping && displayWidth(cm);
                        if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
                            var heights = lineView.measure.heights = [];
                            if (wrapping) {
                                lineView.measure.width = curWidth;
                                var rects = lineView.text.firstChild.getClientRects();
                                for (var i = 0; i < rects.length - 1; i++) {
                                    var cur = rects[i], next = rects[i + 1];
                                    if (Math.abs(cur.bottom - next.bottom) > 2)
                                    { heights.push((cur.bottom + next.top) / 2 - rect.top); }
                                }
                            }
                            heights.push(rect.bottom - rect.top);
                        }
                    }

                    // Find a line map (mapping character offsets to text nodes) and a
                    // measurement cache for the given line number. (A line view might
                    // contain multiple lines when collapsed ranges are present.)
                    function mapFromLineView(lineView, line, lineN) {
                        if (lineView.line == line)
                        { return {map: lineView.measure.map, cache: lineView.measure.cache} }
                        for (var i = 0; i < lineView.rest.length; i++)
                        { if (lineView.rest[i] == line)
                        { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
                        for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
                        { if (lineNo(lineView.rest[i$1]) > lineN)
                        { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
                    }

                    // Render a line into the hidden node display.externalMeasured. Used
                    // when measurement is needed for a line that's not in the viewport.
                    function updateExternalMeasurement(cm, line) {
                        line = visualLine(line);
                        var lineN = lineNo(line);
                        var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
                        view.lineN = lineN;
                        var built = view.built = buildLineContent(cm, view);
                        view.text = built.pre;
                        removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
                        return view
                    }

                    // Get a {top, bottom, left, right} box (in line-local coordinates)
                    // for a given character.
                    function measureChar(cm, line, ch, bias) {
                        return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
                    }

                    // Find a line view that corresponds to the given line number.
                    function findViewForLine(cm, lineN) {
                        if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
                        { return cm.display.view[findViewIndex(cm, lineN)] }
                        var ext = cm.display.externalMeasured;
                        if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
                        { return ext }
                    }

                    // Measurement can be split in two steps, the set-up work that
                    // applies to the whole line, and the measurement of the actual
                    // character. Functions like coordsChar, that need to do a lot of
                    // measurements in a row, can thus ensure that the set-up work is
                    // only done once.
                    function prepareMeasureForLine(cm, line) {
                        var lineN = lineNo(line);
                        var view = findViewForLine(cm, lineN);
                        if (view && !view.text) {
                            view = null;
                        } else if (view && view.changes) {
                            updateLineForChanges(cm, view, lineN, getDimensions(cm));
                            cm.curOp.forceUpdate = true;
                        }
                        if (!view)
                        { view = updateExternalMeasurement(cm, line); }

                        var info = mapFromLineView(view, line, lineN);
                        return {
                            line: line, view: view, rect: null,
                            map: info.map, cache: info.cache, before: info.before,
                            hasHeights: false
                        }
                    }

                    // Given a prepared measurement object, measures the position of an
                    // actual character (or fetches it from the cache).
                    function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
                        if (prepared.before) { ch = -1; }
                        var key = ch + (bias || ""), found;
                        if (prepared.cache.hasOwnProperty(key)) {
                            found = prepared.cache[key];
                        } else {
                            if (!prepared.rect)
                            { prepared.rect = prepared.view.text.getBoundingClientRect(); }
                            if (!prepared.hasHeights) {
                                ensureLineHeights(cm, prepared.view, prepared.rect);
                                prepared.hasHeights = true;
                            }
                            found = measureCharInner(cm, prepared, ch, bias);
                            if (!found.bogus) { prepared.cache[key] = found; }
                        }
                        return {left: found.left, right: found.right,
                            top: varHeight ? found.rtop : found.top,
                            bottom: varHeight ? found.rbottom : found.bottom}
                    }

                    var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

                    function nodeAndOffsetInLineMap(map, ch, bias) {
                        var node, start, end, collapse, mStart, mEnd;
                        // First, search the line map for the text node corresponding to,
                        // or closest to, the target character.
                        for (var i = 0; i < map.length; i += 3) {
                            mStart = map[i];
                            mEnd = map[i + 1];
                            if (ch < mStart) {
                                start = 0; end = 1;
                                collapse = "left";
                            } else if (ch < mEnd) {
                                start = ch - mStart;
                                end = start + 1;
                            } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
                                end = mEnd - mStart;
                                start = end - 1;
                                if (ch >= mEnd) { collapse = "right"; }
                            }
                            if (start != null) {
                                node = map[i + 2];
                                if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
                                { collapse = bias; }
                                if (bias == "left" && start == 0)
                                { while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
                                    node = map[(i -= 3) + 2];
                                    collapse = "left";
                                } }
                                if (bias == "right" && start == mEnd - mStart)
                                { while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
                                    node = map[(i += 3) + 2];
                                    collapse = "right";
                                } }
                                break
                            }
                        }
                        return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
                    }

                    function getUsefulRect(rects, bias) {
                        var rect = nullRect;
                        if (bias == "left") { for (var i = 0; i < rects.length; i++) {
                            if ((rect = rects[i]).left != rect.right) { break }
                        } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
                            if ((rect = rects[i$1]).left != rect.right) { break }
                        } }
                        return rect
                    }

                    function measureCharInner(cm, prepared, ch, bias) {
                        var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
                        var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

                        var rect;
                        if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
                            for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
                                while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start; }
                                while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end; }
                                if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
                                { rect = node.parentNode.getBoundingClientRect(); }
                                else
                                { rect = getUsefulRect(range(node, start, end).getClientRects(), bias); }
                                if (rect.left || rect.right || start == 0) { break }
                                end = start;
                                start = start - 1;
                                collapse = "right";
                            }
                            if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect); }
                        } else { // If it is a widget, simply get the box for the whole widget.
                            if (start > 0) { collapse = bias = "right"; }
                            var rects;
                            if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
                            { rect = rects[bias == "right" ? rects.length - 1 : 0]; }
                            else
                            { rect = node.getBoundingClientRect(); }
                        }
                        if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
                            var rSpan = node.parentNode.getClientRects()[0];
                            if (rSpan)
                            { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom}; }
                            else
                            { rect = nullRect; }
                        }

                        var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
                        var mid = (rtop + rbot) / 2;
                        var heights = prepared.view.measure.heights;
                        var i = 0;
                        for (; i < heights.length - 1; i++)
                        { if (mid < heights[i]) { break } }
                        var top = i ? heights[i - 1] : 0, bot = heights[i];
                        var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
                            right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
                            top: top, bottom: bot};
                        if (!rect.left && !rect.right) { result.bogus = true; }
                        if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

                        return result
                    }

                    // Work around problem with bounding client rects on ranges being
                    // returned incorrectly when zoomed on IE10 and below.
                    function maybeUpdateRectForZooming(measure, rect) {
                        if (!window.screen || screen.logicalXDPI == null ||
                            screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
                        { return rect }
                        var scaleX = screen.logicalXDPI / screen.deviceXDPI;
                        var scaleY = screen.logicalYDPI / screen.deviceYDPI;
                        return {left: rect.left * scaleX, right: rect.right * scaleX,
                            top: rect.top * scaleY, bottom: rect.bottom * scaleY}
                    }

                    function clearLineMeasurementCacheFor(lineView) {
                        if (lineView.measure) {
                            lineView.measure.cache = {};
                            lineView.measure.heights = null;
                            if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
                            { lineView.measure.caches[i] = {}; } }
                        }
                    }

                    function clearLineMeasurementCache(cm) {
                        cm.display.externalMeasure = null;
                        removeChildren(cm.display.lineMeasure);
                        for (var i = 0; i < cm.display.view.length; i++)
                        { clearLineMeasurementCacheFor(cm.display.view[i]); }
                    }

                    function clearCaches(cm) {
                        clearLineMeasurementCache(cm);
                        cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
                        if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true; }
                        cm.display.lineNumChars = null;
                    }

                    function pageScrollX() {
                        // Work around https://bugs.chromium.org/p/chromium/issues/detail?id=489206
                        // which causes page_Offset and bounding client rects to use
                        // different reference viewports and invalidate our calculations.
                        if (chrome && android) { return -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) }
                        return window.pageXOffset || (document.documentElement || document.body).scrollLeft
                    }
                    function pageScrollY() {
                        if (chrome && android) { return -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) }
                        return window.pageYOffset || (document.documentElement || document.body).scrollTop
                    }

                    function widgetTopHeight(lineObj) {
                        var height = 0;
                        if (lineObj.widgets) { for (var i = 0; i < lineObj.widgets.length; ++i) { if (lineObj.widgets[i].above)
                        { height += widgetHeight(lineObj.widgets[i]); } } }
                        return height
                    }

                    // Converts a {top, bottom, left, right} box from line-local
                    // coordinates into another coordinate system. Context may be one of
                    // "line", "div" (display.lineDiv), "local"./null (editor), "window",
                    // or "page".
                    function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
                        if (!includeWidgets) {
                            var height = widgetTopHeight(lineObj);
                            rect.top += height; rect.bottom += height;
                        }
                        if (context == "line") { return rect }
                        if (!context) { context = "local"; }
                        var yOff = heightAtLine(lineObj);
                        if (context == "local") { yOff += paddingTop(cm.display); }
                        else { yOff -= cm.display.viewOffset; }
                        if (context == "page" || context == "window") {
                            var lOff = cm.display.lineSpace.getBoundingClientRect();
                            yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
                            var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
                            rect.left += xOff; rect.right += xOff;
                        }
                        rect.top += yOff; rect.bottom += yOff;
                        return rect
                    }

                    // Coverts a box from "div" coords to another coordinate system.
                    // Context may be "window", "page", "div", or "local"./null.
                    function fromCoordSystem(cm, coords, context) {
                        if (context == "div") { return coords }
                        var left = coords.left, top = coords.top;
                        // First move into "page" coordinate system
                        if (context == "page") {
                            left -= pageScrollX();
                            top -= pageScrollY();
                        } else if (context == "local" || !context) {
                            var localBox = cm.display.sizer.getBoundingClientRect();
                            left += localBox.left;
                            top += localBox.top;
                        }

                        var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
                        return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
                    }

                    function charCoords(cm, pos, context, lineObj, bias) {
                        if (!lineObj) { lineObj = getLine(cm.doc, pos.line); }
                        return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
                    }

                    // Returns a box for a given cursor position, which may have an
                    // 'other' property containing the position of the secondary cursor
                    // on a bidi boundary.
                    // A cursor Pos(line, char, "before") is on the same visual line as `char - 1`
                    // and after `char - 1` in writing order of `char - 1`
                    // A cursor Pos(line, char, "after") is on the same visual line as `char`
                    // and before `char` in writing order of `char`
                    // Examples (upper-case letters are RTL, lower-case are LTR):
                    //     Pos(0, 1, ...)
                    //     before   after
                    // ab     a|b     a|b
                    // aB     a|B     aB|
                    // Ab     |Ab     A|b
                    // AB     B|A     B|A
                    // Every position after the last character on a line is considered to stick
                    // to the last character on the line.
                    function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
                        lineObj = lineObj || getLine(cm.doc, pos.line);
                        if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
                        function get(ch, right) {
                            var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
                            if (right) { m.left = m.right; } else { m.right = m.left; }
                            return intoCoordSystem(cm, lineObj, m, context)
                        }
                        var order = getOrder(lineObj, cm.doc.direction), ch = pos.ch, sticky = pos.sticky;
                        if (ch >= lineObj.text.length) {
                            ch = lineObj.text.length;
                            sticky = "before";
                        } else if (ch <= 0) {
                            ch = 0;
                            sticky = "after";
                        }
                        if (!order) { return get(sticky == "before" ? ch - 1 : ch, sticky == "before") }

                        function getBidi(ch, partPos, invert) {
                            var part = order[partPos], right = part.level == 1;
                            return get(invert ? ch - 1 : ch, right != invert)
                        }
                        var partPos = getBidiPartAt(order, ch, sticky);
                        var other = bidiOther;
                        var val = getBidi(ch, partPos, sticky == "before");
                        if (other != null) { val.other = getBidi(ch, other, sticky != "before"); }
                        return val
                    }

                    // Used to cheaply estimate the coordinates for a position. Used for
                    // intermediate scroll updates.
                    function estimateCoords(cm, pos) {
                        var left = 0;
                        pos = clipPos(cm.doc, pos);
                        if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch; }
                        var lineObj = getLine(cm.doc, pos.line);
                        var top = heightAtLine(lineObj) + paddingTop(cm.display);
                        return {left: left, right: left, top: top, bottom: top + lineObj.height}
                    }

                    // Positions returned by coordsChar contain some extra information.
                    // xRel is the relative x position of the input coordinates compared
                    // to the found position (so xRel > 0 means the coordinates are to
                    // the right of the character position, for example). When outside
                    // is true, that means the coordinates lie outside the line's
                    // vertical range.
                    function PosWithInfo(line, ch, sticky, outside, xRel) {
                        var pos = Pos(line, ch, sticky);
                        pos.xRel = xRel;
                        if (outside) { pos.outside = outside; }
                        return pos
                    }

                    // Compute the character position closest to the given coordinates.
                    // Input must be lineSpace-local ("div" coordinate system).
                    function coordsChar(cm, x, y) {
                        var doc = cm.doc;
                        y += cm.display.viewOffset;
                        if (y < 0) { return PosWithInfo(doc.first, 0, null, -1, -1) }
                        var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
                        if (lineN > last)
                        { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, null, 1, 1) }
                        if (x < 0) { x = 0; }

                        var lineObj = getLine(doc, lineN);
                        for (;;) {
                            var found = coordsCharInner(cm, lineObj, lineN, x, y);
                            var collapsed = collapsedSpanAround(lineObj, found.ch + (found.xRel > 0 || found.outside > 0 ? 1 : 0));
                            if (!collapsed) { return found }
                            var rangeEnd = collapsed.find(1);
                            if (rangeEnd.line == lineN) { return rangeEnd }
                            lineObj = getLine(doc, lineN = rangeEnd.line);
                        }
                    }

                    function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
                        y -= widgetTopHeight(lineObj);
                        var end = lineObj.text.length;
                        var begin = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y; }, end, 0);
                        end = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch).top > y; }, begin, end);
                        return {begin: begin, end: end}
                    }

                    function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
                        if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
                        var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
                        return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop)
                    }

                    // Returns true if the given side of a box is after the given
                    // coordinates, in top-to-bottom, left-to-right order.
                    function boxIsAfter(box, x, y, left) {
                        return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x
                    }

                    function coordsCharInner(cm, lineObj, lineNo, x, y) {
                        // Move y into line-local coordinate space
                        y -= heightAtLine(lineObj);
                        var preparedMeasure = prepareMeasureForLine(cm, lineObj);
                        // When directly calling `measureCharPrepared`, we have to adjust
                        // for the widgets at this line.
                        var widgetHeight = widgetTopHeight(lineObj);
                        var begin = 0, end = lineObj.text.length, ltr = true;

                        var order = getOrder(lineObj, cm.doc.direction);
                        // If the line isn't plain left-to-right text, first figure out
                        // which bidi section the coordinates fall into.
                        if (order) {
                            var part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)
                            (cm, lineObj, lineNo, preparedMeasure, order, x, y);
                            ltr = part.level != 1;
                            // The awkward -1 offsets are needed because findFirst (called
                            // on these below) will treat its first bound as inclusive,
                            // second as exclusive, but we want to actually address the
                            // characters in the part's range
                            begin = ltr ? part.from : part.to - 1;
                            end = ltr ? part.to : part.from - 1;
                        }

                        // A binary search to find the first character whose bounding box
                        // starts after the coordinates. If we run across any whose box wrap
                        // the coordinates, store that.
                        var chAround = null, boxAround = null;
                        var ch = findFirst(function (ch) {
                            var box = measureCharPrepared(cm, preparedMeasure, ch);
                            box.top += widgetHeight; box.bottom += widgetHeight;
                            if (!boxIsAfter(box, x, y, false)) { return false }
                            if (box.top <= y && box.left <= x) {
                                chAround = ch;
                                boxAround = box;
                            }
                            return true
                        }, begin, end);

                        var baseX, sticky, outside = false;
                        // If a box around the coordinates was found, use that
                        if (boxAround) {
                            // Distinguish coordinates nearer to the left or right side of the box
                            var atLeft = x - boxAround.left < boxAround.right - x, atStart = atLeft == ltr;
                            ch = chAround + (atStart ? 0 : 1);
                            sticky = atStart ? "after" : "before";
                            baseX = atLeft ? boxAround.left : boxAround.right;
                        } else {
                            // (Adjust for extended bound, if necessary.)
                            if (!ltr && (ch == end || ch == begin)) { ch++; }
                            // To determine which side to associate with, get the box to the
                            // left of the character and compare it's vertical position to the
                            // coordinates
                            sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" :
                                (measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight <= y) == ltr ?
                                    "after" : "before";
                            // Now get accurate coordinates for this place, in order to get a
                            // base X position
                            var coords = cursorCoords(cm, Pos(lineNo, ch, sticky), "line", lineObj, preparedMeasure);
                            baseX = coords.left;
                            outside = y < coords.top ? -1 : y >= coords.bottom ? 1 : 0;
                        }

                        ch = skipExtendingChars(lineObj.text, ch, 1);
                        return PosWithInfo(lineNo, ch, sticky, outside, x - baseX)
                    }

                    function coordsBidiPart(cm, lineObj, lineNo, preparedMeasure, order, x, y) {
                        // Bidi parts are sorted left-to-right, and in a non-line-wrapping
                        // situation, we can take this ordering to correspond to the visual
                        // ordering. This finds the first part whose end is after the given
                        // coordinates.
                        var index = findFirst(function (i) {
                            var part = order[i], ltr = part.level != 1;
                            return boxIsAfter(cursorCoords(cm, Pos(lineNo, ltr ? part.to : part.from, ltr ? "before" : "after"),
                                "line", lineObj, preparedMeasure), x, y, true)
                        }, 0, order.length - 1);
                        var part = order[index];
                        // If this isn't the first part, the part's start is also after
                        // the coordinates, and the coordinates aren't on the same line as
                        // that start, move one part back.
                        if (index > 0) {
                            var ltr = part.level != 1;
                            var start = cursorCoords(cm, Pos(lineNo, ltr ? part.from : part.to, ltr ? "after" : "before"),
                                "line", lineObj, preparedMeasure);
                            if (boxIsAfter(start, x, y, true) && start.top > y)
                            { part = order[index - 1]; }
                        }
                        return part
                    }

                    function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
                        // In a wrapped line, rtl text on wrapping boundaries can do things
                        // that don't correspond to the ordering in our `order` array at
                        // all, so a binary search doesn't work, and we want to return a
                        // part that only spans one line so that the binary search in
                        // coordsCharInner is safe. As such, we first find the extent of the
                        // wrapped line, and then do a flat search in which we discard any
                        // spans that aren't on the line.
                        var ref = wrappedLineExtent(cm, lineObj, preparedMeasure, y);
                        var begin = ref.begin;
                        var end = ref.end;
                        if (/\s/.test(lineObj.text.charAt(end - 1))) { end--; }
                        var part = null, closestDist = null;
                        for (var i = 0; i < order.length; i++) {
                            var p = order[i];
                            if (p.from >= end || p.to <= begin) { continue }
                            var ltr = p.level != 1;
                            var endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right;
                            // Weigh against spans ending before this, so that they are only
                            // picked if nothing ends after
                            var dist = endX < x ? x - endX + 1e9 : endX - x;
                            if (!part || closestDist > dist) {
                                part = p;
                                closestDist = dist;
                            }
                        }
                        if (!part) { part = order[order.length - 1]; }
                        // Clip the part to the wrapped line.
                        if (part.from < begin) { part = {from: begin, to: part.to, level: part.level}; }
                        if (part.to > end) { part = {from: part.from, to: end, level: part.level}; }
                        return part
                    }

                    var measureText;
                    // Compute the default text height.
                    function textHeight(display) {
                        if (display.cachedTextHeight != null) { return display.cachedTextHeight }
                        if (measureText == null) {
                            measureText = elt("pre", null, "CodeMirror-line-like");
                            // Measure a bunch of lines, for browsers that compute
                            // fractional heights.
                            for (var i = 0; i < 49; ++i) {
                                measureText.appendChild(document.createTextNode("x"));
                                measureText.appendChild(elt("br"));
                            }
                            measureText.appendChild(document.createTextNode("x"));
                        }
                        removeChildrenAndAdd(display.measure, measureText);
                        var height = measureText.offsetHeight / 50;
                        if (height > 3) { display.cachedTextHeight = height; }
                        removeChildren(display.measure);
                        return height || 1
                    }

                    // Compute the default character width.
                    function charWidth(display) {
                        if (display.cachedCharWidth != null) { return display.cachedCharWidth }
                        var anchor = elt("span", "xxxxxxxxxx");
                        var pre = elt("pre", [anchor], "CodeMirror-line-like");
                        removeChildrenAndAdd(display.measure, pre);
                        var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
                        if (width > 2) { display.cachedCharWidth = width; }
                        return width || 10
                    }

                    // Do a bulk-read of the DOM positions and sizes needed to draw the
                    // view, so that we don't interleave reading and writing to the DOM.
                    function getDimensions(cm) {
                        var d = cm.display, left = {}, width = {};
                        var gutterLeft = d.gutters.clientLeft;
                        for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
                            var id = cm.display.gutterSpecs[i].className;
                            left[id] = n.offsetLeft + n.clientLeft + gutterLeft;
                            width[id] = n.clientWidth;
                        }
                        return {fixedPos: compensateForHScroll(d),
                            gutterTotalWidth: d.gutters.offsetWidth,
                            gutterLeft: left,
                            gutterWidth: width,
                            wrapperWidth: d.wrapper.clientWidth}
                    }

                    // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
                    // but using getBoundingClientRect to get a sub-pixel-accurate
                    // result.
                    function compensateForHScroll(display) {
                        return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
                    }

                    // Returns a function that estimates the height of a line, to use as
                    // first approximation until the line becomes visible (and is thus
                    // properly measurable).
                    function estimateHeight(cm) {
                        var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
                        var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
                        return function (line) {
                            if (lineIsHidden(cm.doc, line)) { return 0 }

                            var widgetsHeight = 0;
                            if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
                                if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height; }
                            } }

                            if (wrapping)
                            { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
                            else
                            { return widgetsHeight + th }
                        }
                    }

                    function estimateLineHeights(cm) {
                        var doc = cm.doc, est = estimateHeight(cm);
                        doc.iter(function (line) {
                            var estHeight = est(line);
                            if (estHeight != line.height) { updateLineHeight(line, estHeight); }
                        });
                    }

                    // Given a mouse event, find the corresponding position. If liberal
                    // is false, it checks whether a gutter or scrollbar was clicked,
                    // and returns null if it was. forRect is used by rectangular
                    // selections, and tries to estimate a character position even for
                    // coordinates beyond the right of the text.
                    function posFromMouse(cm, e, liberal, forRect) {
                        var display = cm.display;
                        if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

                        var x, y, space = display.lineSpace.getBoundingClientRect();
                        // Fails unpredictably on IE[67] when mouse is dragged around quickly.
                        try { x = e.clientX - space.left; y = e.clientY - space.top; }
                        catch (e$1) { return null }
                        var coords = coordsChar(cm, x, y), line;
                        if (forRect && coords.xRel > 0 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
                            var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
                            coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
                        }
                        return coords
                    }

                    // Find the view element corresponding to a given line. Return null
                    // when the line isn't visible.
                    function findViewIndex(cm, n) {
                        if (n >= cm.display.viewTo) { return null }
                        n -= cm.display.viewFrom;
                        if (n < 0) { return null }
                        var view = cm.display.view;
                        for (var i = 0; i < view.length; i++) {
                            n -= view[i].size;
                            if (n < 0) { return i }
                        }
                    }

                    // Updates the display.view data structure for a given change to the
                    // document. From and to are in pre-change coordinates. Lendiff is
                    // the amount of lines added or subtracted by the change. This is
                    // used for changes that span multiple lines, or change the way
                    // lines are divided into visual lines. regLineChange (below)
                    // registers single-line changes.
                    function regChange(cm, from, to, lendiff) {
                        if (from == null) { from = cm.doc.first; }
                        if (to == null) { to = cm.doc.first + cm.doc.size; }
                        if (!lendiff) { lendiff = 0; }

                        var display = cm.display;
                        if (lendiff && to < display.viewTo &&
                            (display.updateLineNumbers == null || display.updateLineNumbers > from))
                        { display.updateLineNumbers = from; }

                        cm.curOp.viewChanged = true;

                        if (from >= display.viewTo) { // Change after
                            if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
                            { resetView(cm); }
                        } else if (to <= display.viewFrom) { // Change before
                            if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
                                resetView(cm);
                            } else {
                                display.viewFrom += lendiff;
                                display.viewTo += lendiff;
                            }
                        } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
                            resetView(cm);
                        } else if (from <= display.viewFrom) { // Top overlap
                            var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
                            if (cut) {
                                display.view = display.view.slice(cut.index);
                                display.viewFrom = cut.lineN;
                                display.viewTo += lendiff;
                            } else {
                                resetView(cm);
                            }
                        } else if (to >= display.viewTo) { // Bottom overlap
                            var cut$1 = viewCuttingPoint(cm, from, from, -1);
                            if (cut$1) {
                                display.view = display.view.slice(0, cut$1.index);
                                display.viewTo = cut$1.lineN;
                            } else {
                                resetView(cm);
                            }
                        } else { // Gap in the middle
                            var cutTop = viewCuttingPoint(cm, from, from, -1);
                            var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
                            if (cutTop && cutBot) {
                                display.view = display.view.slice(0, cutTop.index)
                                    .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
                                    .concat(display.view.slice(cutBot.index));
                                display.viewTo += lendiff;
                            } else {
                                resetView(cm);
                            }
                        }

                        var ext = display.externalMeasured;
                        if (ext) {
                            if (to < ext.lineN)
                            { ext.lineN += lendiff; }
                            else if (from < ext.lineN + ext.size)
                            { display.externalMeasured = null; }
                        }
                    }

                    // Register a change to a single line. Type must be one of "text",
                    // "gutter", "class", "widget"
                    function regLineChange(cm, line, type) {
                        cm.curOp.viewChanged = true;
                        var display = cm.display, ext = cm.display.externalMeasured;
                        if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
                        { display.externalMeasured = null; }

                        if (line < display.viewFrom || line >= display.viewTo) { return }
                        var lineView = display.view[findViewIndex(cm, line)];
                        if (lineView.node == null) { return }
                        var arr = lineView.changes || (lineView.changes = []);
                        if (indexOf(arr, type) == -1) { arr.push(type); }
                    }

                    // Clear the view.
                    function resetView(cm) {
                        cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
                        cm.display.view = [];
                        cm.display.viewOffset = 0;
                    }

                    function viewCuttingPoint(cm, oldN, newN, dir) {
                        var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
                        if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
                        { return {index: index, lineN: newN} }
                        var n = cm.display.viewFrom;
                        for (var i = 0; i < index; i++)
                        { n += view[i].size; }
                        if (n != oldN) {
                            if (dir > 0) {
                                if (index == view.length - 1) { return null }
                                diff = (n + view[index].size) - oldN;
                                index++;
                            } else {
                                diff = n - oldN;
                            }
                            oldN += diff; newN += diff;
                        }
                        while (visualLineNo(cm.doc, newN) != newN) {
                            if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
                            newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
                            index += dir;
                        }
                        return {index: index, lineN: newN}
                    }

                    // Force the view to cover a given range, adding empty view element
                    // or clipping off existing ones as needed.
                    function adjustView(cm, from, to) {
                        var display = cm.display, view = display.view;
                        if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
                            display.view = buildViewArray(cm, from, to);
                            display.viewFrom = from;
                        } else {
                            if (display.viewFrom > from)
                            { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view); }
                            else if (display.viewFrom < from)
                            { display.view = display.view.slice(findViewIndex(cm, from)); }
                            display.viewFrom = from;
                            if (display.viewTo < to)
                            { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)); }
                            else if (display.viewTo > to)
                            { display.view = display.view.slice(0, findViewIndex(cm, to)); }
                        }
                        display.viewTo = to;
                    }

                    // Count the number of lines in the view whose DOM representation is
                    // out of date (or nonexistent).
                    function countDirtyView(cm) {
                        var view = cm.display.view, dirty = 0;
                        for (var i = 0; i < view.length; i++) {
                            var lineView = view[i];
                            if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty; }
                        }
                        return dirty
                    }

                    function updateSelection(cm) {
                        cm.display.input.showSelection(cm.display.input.prepareSelection());
                    }

                    function prepareSelection(cm, primary) {
                        if ( primary === void 0 ) primary = true;

                        var doc = cm.doc, result = {};
                        var curFragment = result.cursors = document.createDocumentFragment();
                        var selFragment = result.selection = document.createDocumentFragment();

                        for (var i = 0; i < doc.sel.ranges.length; i++) {
                            if (!primary && i == doc.sel.primIndex) { continue }
                            var range = doc.sel.ranges[i];
                            if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) { continue }
                            var collapsed = range.empty();
                            if (collapsed || cm.options.showCursorWhenSelecting)
                            { drawSelectionCursor(cm, range.head, curFragment); }
                            if (!collapsed)
                            { drawSelectionRange(cm, range, selFragment); }
                        }
                        return result
                    }

                    // Draws a cursor for the given range
                    function drawSelectionCursor(cm, head, output) {
                        var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

                        var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
                        cursor.style.left = pos.left + "px";
                        cursor.style.top = pos.top + "px";
                        cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

                        if (pos.other) {
                            // Secondary cursor, shown when on a 'jump' in bi-directional text
                            var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
                            otherCursor.style.display = "";
                            otherCursor.style.left = pos.other.left + "px";
                            otherCursor.style.top = pos.other.top + "px";
                            otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
                        }
                    }

                    function cmpCoords(a, b) { return a.top - b.top || a.left - b.left }

                    // Draws the given range as a highlighted selection
                    function drawSelectionRange(cm, range, output) {
                        var display = cm.display, doc = cm.doc;
                        var fragment = document.createDocumentFragment();
                        var padding = paddingH(cm.display), leftSide = padding.left;
                        var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
                        var docLTR = doc.direction == "ltr";

                        function add(left, top, width, bottom) {
                            if (top < 0) { top = 0; }
                            top = Math.round(top);
                            bottom = Math.round(bottom);
                            fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")));
                        }

                        function drawForLine(line, fromArg, toArg) {
                            var lineObj = getLine(doc, line);
                            var lineLen = lineObj.text.length;
                            var start, end;
                            function coords(ch, bias) {
                                return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
                            }

                            function wrapX(pos, dir, side) {
                                var extent = wrappedLineExtentChar(cm, lineObj, null, pos);
                                var prop = (dir == "ltr") == (side == "after") ? "left" : "right";
                                var ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1);
                                return coords(ch, prop)[prop]
                            }

                            var order = getOrder(lineObj, doc.direction);
                            iterateBidiSections(order, fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir, i) {
                                var ltr = dir == "ltr";
                                var fromPos = coords(from, ltr ? "left" : "right");
                                var toPos = coords(to - 1, ltr ? "right" : "left");

                                var openStart = fromArg == null && from == 0, openEnd = toArg == null && to == lineLen;
                                var first = i == 0, last = !order || i == order.length - 1;
                                if (toPos.top - fromPos.top <= 3) { // Single line
                                    var openLeft = (docLTR ? openStart : openEnd) && first;
                                    var openRight = (docLTR ? openEnd : openStart) && last;
                                    var left = openLeft ? leftSide : (ltr ? fromPos : toPos).left;
                                    var right = openRight ? rightSide : (ltr ? toPos : fromPos).right;
                                    add(left, fromPos.top, right - left, fromPos.bottom);
                                } else { // Multiple lines
                                    var topLeft, topRight, botLeft, botRight;
                                    if (ltr) {
                                        topLeft = docLTR && openStart && first ? leftSide : fromPos.left;
                                        topRight = docLTR ? rightSide : wrapX(from, dir, "before");
                                        botLeft = docLTR ? leftSide : wrapX(to, dir, "after");
                                        botRight = docLTR && openEnd && last ? rightSide : toPos.right;
                                    } else {
                                        topLeft = !docLTR ? leftSide : wrapX(from, dir, "before");
                                        topRight = !docLTR && openStart && first ? rightSide : fromPos.right;
                                        botLeft = !docLTR && openEnd && last ? leftSide : toPos.left;
                                        botRight = !docLTR ? rightSide : wrapX(to, dir, "after");
                                    }
                                    add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom);
                                    if (fromPos.bottom < toPos.top) { add(leftSide, fromPos.bottom, null, toPos.top); }
                                    add(botLeft, toPos.top, botRight - botLeft, toPos.bottom);
                                }

                                if (!start || cmpCoords(fromPos, start) < 0) { start = fromPos; }
                                if (cmpCoords(toPos, start) < 0) { start = toPos; }
                                if (!end || cmpCoords(fromPos, end) < 0) { end = fromPos; }
                                if (cmpCoords(toPos, end) < 0) { end = toPos; }
                            });
                            return {start: start, end: end}
                        }

                        var sFrom = range.from(), sTo = range.to();
                        if (sFrom.line == sTo.line) {
                            drawForLine(sFrom.line, sFrom.ch, sTo.ch);
                        } else {
                            var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
                            var singleVLine = visualLine(fromLine) == visualLine(toLine);
                            var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
                            var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
                            if (singleVLine) {
                                if (leftEnd.top < rightStart.top - 2) {
                                    add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
                                    add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
                                } else {
                                    add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
                                }
                            }
                            if (leftEnd.bottom < rightStart.top)
                            { add(leftSide, leftEnd.bottom, null, rightStart.top); }
                        }

                        output.appendChild(fragment);
                    }

                    // Cursor-blinking
                    function restartBlink(cm) {
                        if (!cm.state.focused) { return }
                        var display = cm.display;
                        clearInterval(display.blinker);
                        var on = true;
                        display.cursorDiv.style.visibility = "";
                        if (cm.options.cursorBlinkRate > 0)
                        { display.blinker = setInterval(function () { return display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden"; },
                            cm.options.cursorBlinkRate); }
                        else if (cm.options.cursorBlinkRate < 0)
                        { display.cursorDiv.style.visibility = "hidden"; }
                    }

                    function ensureFocus(cm) {
                        if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm); }
                    }

                    function delayBlurEvent(cm) {
                        cm.state.delayingBlurEvent = true;
                        setTimeout(function () { if (cm.state.delayingBlurEvent) {
                            cm.state.delayingBlurEvent = false;
                            onBlur(cm);
                        } }, 100);
                    }

                    function onFocus(cm, e) {
                        if (cm.state.delayingBlurEvent) { cm.state.delayingBlurEvent = false; }

                        if (cm.options.readOnly == "nocursor") { return }
                        if (!cm.state.focused) {
                            signal(cm, "focus", cm, e);
                            cm.state.focused = true;
                            addClass(cm.display.wrapper, "CodeMirror-focused");
                            // This test prevents this from firing when a context
                            // menu is closed (since the input reset would kill the
                            // select-all detection hack)
                            if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
                                cm.display.input.reset();
                                if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20); } // Issue #1730
                            }
                            cm.display.input.receivedFocus();
                        }
                        restartBlink(cm);
                    }
                    function onBlur(cm, e) {
                        if (cm.state.delayingBlurEvent) { return }

                        if (cm.state.focused) {
                            signal(cm, "blur", cm, e);
                            cm.state.focused = false;
                            rmClass(cm.display.wrapper, "CodeMirror-focused");
                        }
                        clearInterval(cm.display.blinker);
                        setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false; } }, 150);
                    }

                    // Read the actual heights of the rendered lines, and update their
                    // stored heights to match.
                    function updateHeightsInViewport(cm) {
                        var display = cm.display;
                        var prevBottom = display.lineDiv.offsetTop;
                        for (var i = 0; i < display.view.length; i++) {
                            var cur = display.view[i], wrapping = cm.options.lineWrapping;
                            var height = (void 0), width = 0;
                            if (cur.hidden) { continue }
                            if (ie && ie_version < 8) {
                                var bot = cur.node.offsetTop + cur.node.offsetHeight;
                                height = bot - prevBottom;
                                prevBottom = bot;
                            } else {
                                var box = cur.node.getBoundingClientRect();
                                height = box.bottom - box.top;
                                // Check that lines don't extend past the right of the current
                                // editor width
                                if (!wrapping && cur.text.firstChild)
                                { width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1; }
                            }
                            var diff = cur.line.height - height;
                            if (diff > .005 || diff < -.005) {
                                updateLineHeight(cur.line, height);
                                updateWidgetHeight(cur.line);
                                if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
                                { updateWidgetHeight(cur.rest[j]); } }
                            }
                            if (width > cm.display.sizerWidth) {
                                var chWidth = Math.ceil(width / charWidth(cm.display));
                                if (chWidth > cm.display.maxLineLength) {
                                    cm.display.maxLineLength = chWidth;
                                    cm.display.maxLine = cur.line;
                                    cm.display.maxLineChanged = true;
                                }
                            }
                        }
                    }

                    // Read and store the height of line widgets associated with the
                    // given line.
                    function updateWidgetHeight(line) {
                        if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i) {
                            var w = line.widgets[i], parent = w.node.parentNode;
                            if (parent) { w.height = parent.offsetHeight; }
                        } }
                    }

                    // Compute the lines that are visible in a given viewport (defaults
                    // the the current scroll position). viewport may contain top,
                    // height, and ensure (see op.scrollToPos) properties.
                    function visibleLines(display, doc, viewport) {
                        var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
                        top = Math.floor(top - paddingTop(display));
                        var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

                        var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
                        // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
                        // forces those lines into the viewport (if possible).
                        if (viewport && viewport.ensure) {
                            var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
                            if (ensureFrom < from) {
                                from = ensureFrom;
                                to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
                            } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
                                from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
                                to = ensureTo;
                            }
                        }
                        return {from: from, to: Math.max(to, from + 1)}
                    }

                    // SCROLLING THINGS INTO VIEW

                    // If an editor sits on the top or bottom of the window, partially
                    // scrolled out of view, this ensures that the cursor is visible.
                    function maybeScrollWindow(cm, rect) {
                        if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

                        var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
                        if (rect.top + box.top < 0) { doScroll = true; }
                        else if (rect.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) { doScroll = false; }
                        if (doScroll != null && !phantom) {
                            var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (rect.left) + "px; width: " + (Math.max(2, rect.right - rect.left)) + "px;"));
                            cm.display.lineSpace.appendChild(scrollNode);
                            scrollNode.scrollIntoView(doScroll);
                            cm.display.lineSpace.removeChild(scrollNode);
                        }
                    }

                    // Scroll a given position into view (immediately), verifying that
                    // it actually became visible (as line heights are accurately
                    // measured, the position of something may 'drift' during drawing).
                    function scrollPosIntoView(cm, pos, end, margin) {
                        if (margin == null) { margin = 0; }
                        var rect;
                        if (!cm.options.lineWrapping && pos == end) {
                            // Set pos and end to the cursor positions around the character pos sticks to
                            // If pos.sticky == "before", that is around pos.ch - 1, otherwise around pos.ch
                            // If pos == Pos(_, 0, "before"), pos and end are unchanged
                            pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
                            end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
                        }
                        for (var limit = 0; limit < 5; limit++) {
                            var changed = false;
                            var coords = cursorCoords(cm, pos);
                            var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
                            rect = {left: Math.min(coords.left, endCoords.left),
                                top: Math.min(coords.top, endCoords.top) - margin,
                                right: Math.max(coords.left, endCoords.left),
                                bottom: Math.max(coords.bottom, endCoords.bottom) + margin};
                            var scrollPos = calculateScrollPos(cm, rect);
                            var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
                            if (scrollPos.scrollTop != null) {
                                updateScrollTop(cm, scrollPos.scrollTop);
                                if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true; }
                            }
                            if (scrollPos.scrollLeft != null) {
                                setScrollLeft(cm, scrollPos.scrollLeft);
                                if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true; }
                            }
                            if (!changed) { break }
                        }
                        return rect
                    }

                    // Scroll a given set of coordinates into view (immediately).
                    function scrollIntoView(cm, rect) {
                        var scrollPos = calculateScrollPos(cm, rect);
                        if (scrollPos.scrollTop != null) { updateScrollTop(cm, scrollPos.scrollTop); }
                        if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft); }
                    }

                    // Calculate a new scroll position needed to scroll the given
                    // rectangle into view. Returns an object with scrollTop and
                    // scrollLeft properties. When these are undefined, the
                    // vertical/horizontal position does not need to be adjusted.
                    function calculateScrollPos(cm, rect) {
                        var display = cm.display, snapMargin = textHeight(cm.display);
                        if (rect.top < 0) { rect.top = 0; }
                        var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
                        var screen = displayHeight(cm), result = {};
                        if (rect.bottom - rect.top > screen) { rect.bottom = rect.top + screen; }
                        var docBottom = cm.doc.height + paddingVert(display);
                        var atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin;
                        if (rect.top < screentop) {
                            result.scrollTop = atTop ? 0 : rect.top;
                        } else if (rect.bottom > screentop + screen) {
                            var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen);
                            if (newTop != screentop) { result.scrollTop = newTop; }
                        }

                        var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
                        var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
                        var tooWide = rect.right - rect.left > screenw;
                        if (tooWide) { rect.right = rect.left + screenw; }
                        if (rect.left < 10)
                        { result.scrollLeft = 0; }
                        else if (rect.left < screenleft)
                        { result.scrollLeft = Math.max(0, rect.left - (tooWide ? 0 : 10)); }
                        else if (rect.right > screenw + screenleft - 3)
                        { result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw; }
                        return result
                    }

                    // Store a relative adjustment to the scroll position in the current
                    // operation (to be applied when the operation finishes).
                    function addToScrollTop(cm, top) {
                        if (top == null) { return }
                        resolveScrollToPos(cm);
                        cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
                    }

                    // Make sure that at the end of the operation the current cursor is
                    // shown.
                    function ensureCursorVisible(cm) {
                        resolveScrollToPos(cm);
                        var cur = cm.getCursor();
                        cm.curOp.scrollToPos = {from: cur, to: cur, margin: cm.options.cursorScrollMargin};
                    }

                    function scrollToCoords(cm, x, y) {
                        if (x != null || y != null) { resolveScrollToPos(cm); }
                        if (x != null) { cm.curOp.scrollLeft = x; }
                        if (y != null) { cm.curOp.scrollTop = y; }
                    }

                    function scrollToRange(cm, range) {
                        resolveScrollToPos(cm);
                        cm.curOp.scrollToPos = range;
                    }

                    // When an operation has its scrollToPos property set, and another
                    // scroll action is applied before the end of the operation, this
                    // 'simulates' scrolling that position into view in a cheap way, so
                    // that the effect of intermediate scroll commands is not ignored.
                    function resolveScrollToPos(cm) {
                        var range = cm.curOp.scrollToPos;
                        if (range) {
                            cm.curOp.scrollToPos = null;
                            var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
                            scrollToCoordsRange(cm, from, to, range.margin);
                        }
                    }

                    function scrollToCoordsRange(cm, from, to, margin) {
                        var sPos = calculateScrollPos(cm, {
                            left: Math.min(from.left, to.left),
                            top: Math.min(from.top, to.top) - margin,
                            right: Math.max(from.right, to.right),
                            bottom: Math.max(from.bottom, to.bottom) + margin
                        });
                        scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
                    }

                    // Sync the scrollable area and scrollbars, ensure the viewport
                    // covers the visible area.
                    function updateScrollTop(cm, val) {
                        if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
                        if (!gecko) { updateDisplaySimple(cm, {top: val}); }
                        setScrollTop(cm, val, true);
                        if (gecko) { updateDisplaySimple(cm); }
                        startWorker(cm, 100);
                    }

                    function setScrollTop(cm, val, forceScroll) {
                        val = Math.max(0, Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val));
                        if (cm.display.scroller.scrollTop == val && !forceScroll) { return }
                        cm.doc.scrollTop = val;
                        cm.display.scrollbars.setScrollTop(val);
                        if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val; }
                    }

                    // Sync scroller and scrollbar, ensure the gutter elements are
                    // aligned.
                    function setScrollLeft(cm, val, isScroller, forceScroll) {
                        val = Math.max(0, Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth));
                        if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) { return }
                        cm.doc.scrollLeft = val;
                        alignHorizontally(cm);
                        if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val; }
                        cm.display.scrollbars.setScrollLeft(val);
                    }

                    // SCROLLBARS

                    // Prepare DOM reads needed to update the scrollbars. Done in one
                    // shot to minimize update/measure roundtrips.
                    function measureForScrollbars(cm) {
                        var d = cm.display, gutterW = d.gutters.offsetWidth;
                        var docH = Math.round(cm.doc.height + paddingVert(cm.display));
                        return {
                            clientHeight: d.scroller.clientHeight,
                            viewHeight: d.wrapper.clientHeight,
                            scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
                            viewWidth: d.wrapper.clientWidth,
                            barLeft: cm.options.fixedGutter ? gutterW : 0,
                            docHeight: docH,
                            scrollHeight: docH + scrollGap(cm) + d.barHeight,
                            nativeBarWidth: d.nativeBarWidth,
                            gutterWidth: gutterW
                        }
                    }

                    var NativeScrollbars = function(place, scroll, cm) {
                        this.cm = cm;
                        var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
                        var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
                        vert.tabIndex = horiz.tabIndex = -1;
                        place(vert); place(horiz);

                        on(vert, "scroll", function () {
                            if (vert.clientHeight) { scroll(vert.scrollTop, "vertical"); }
                        });
                        on(horiz, "scroll", function () {
                            if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal"); }
                        });

                        this.checkedZeroWidth = false;
                        // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
                        if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px"; }
                    };

                    NativeScrollbars.prototype.update = function (measure) {
                        var needsH = measure.scrollWidth > measure.clientWidth + 1;
                        var needsV = measure.scrollHeight > measure.clientHeight + 1;
                        var sWidth = measure.nativeBarWidth;

                        if (needsV) {
                            this.vert.style.display = "block";
                            this.vert.style.bottom = needsH ? sWidth + "px" : "0";
                            var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
                            // A bug in IE8 can cause this value to be negative, so guard it.
                            this.vert.firstChild.style.height =
                                Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
                        } else {
                            this.vert.style.display = "";
                            this.vert.firstChild.style.height = "0";
                        }

                        if (needsH) {
                            this.horiz.style.display = "block";
                            this.horiz.style.right = needsV ? sWidth + "px" : "0";
                            this.horiz.style.left = measure.barLeft + "px";
                            var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
                            this.horiz.firstChild.style.width =
                                Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
                        } else {
                            this.horiz.style.display = "";
                            this.horiz.firstChild.style.width = "0";
                        }

                        if (!this.checkedZeroWidth && measure.clientHeight > 0) {
                            if (sWidth == 0) { this.zeroWidthHack(); }
                            this.checkedZeroWidth = true;
                        }

                        return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
                    };

                    NativeScrollbars.prototype.setScrollLeft = function (pos) {
                        if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos; }
                        if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz"); }
                    };

                    NativeScrollbars.prototype.setScrollTop = function (pos) {
                        if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos; }
                        if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert, "vert"); }
                    };

                    NativeScrollbars.prototype.zeroWidthHack = function () {
                        var w = mac && !mac_geMountainLion ? "12px" : "18px";
                        this.horiz.style.height = this.vert.style.width = w;
                        this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
                        this.disableHoriz = new Delayed;
                        this.disableVert = new Delayed;
                    };

                    NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay, type) {
                        bar.style.pointerEvents = "auto";
                        function maybeDisable() {
                            // To find out whether the scrollbar is still visible, we
                            // check whether the element under the pixel in the bottom
                            // right corner of the scrollbar box is the scrollbar box
                            // itself (when the bar is still visible) or its filler child
                            // (when the bar is hidden). If it is still visible, we keep
                            // it enabled, if it's hidden, we disable pointer events.
                            var box = bar.getBoundingClientRect();
                            var elt = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2)
                                : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);
                            if (elt != bar) { bar.style.pointerEvents = "none"; }
                            else { delay.set(1000, maybeDisable); }
                        }
                        delay.set(1000, maybeDisable);
                    };

                    NativeScrollbars.prototype.clear = function () {
                        var parent = this.horiz.parentNode;
                        parent.removeChild(this.horiz);
                        parent.removeChild(this.vert);
                    };

                    var NullScrollbars = function () {};

                    NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
                    NullScrollbars.prototype.setScrollLeft = function () {};
                    NullScrollbars.prototype.setScrollTop = function () {};
                    NullScrollbars.prototype.clear = function () {};

                    function updateScrollbars(cm, measure) {
                        if (!measure) { measure = measureForScrollbars(cm); }
                        var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
                        updateScrollbarsInner(cm, measure);
                        for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
                            if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
                            { updateHeightsInViewport(cm); }
                            updateScrollbarsInner(cm, measureForScrollbars(cm));
                            startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
                        }
                    }

                    // Re-synchronize the fake scrollbars with the actual size of the
                    // content.
                    function updateScrollbarsInner(cm, measure) {
                        var d = cm.display;
                        var sizes = d.scrollbars.update(measure);

                        d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
                        d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
                        d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";

                        if (sizes.right && sizes.bottom) {
                            d.scrollbarFiller.style.display = "block";
                            d.scrollbarFiller.style.height = sizes.bottom + "px";
                            d.scrollbarFiller.style.width = sizes.right + "px";
                        } else { d.scrollbarFiller.style.display = ""; }
                        if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
                            d.gutterFiller.style.display = "block";
                            d.gutterFiller.style.height = sizes.bottom + "px";
                            d.gutterFiller.style.width = measure.gutterWidth + "px";
                        } else { d.gutterFiller.style.display = ""; }
                    }

                    var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

                    function initScrollbars(cm) {
                        if (cm.display.scrollbars) {
                            cm.display.scrollbars.clear();
                            if (cm.display.scrollbars.addClass)
                            { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
                        }

                        cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
                            cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
                            // Prevent clicks in the scrollbars from killing focus
                            on(node, "mousedown", function () {
                                if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0); }
                            });
                            node.setAttribute("cm-not-content", "true");
                        }, function (pos, axis) {
                            if (axis == "horizontal") { setScrollLeft(cm, pos); }
                            else { updateScrollTop(cm, pos); }
                        }, cm);
                        if (cm.display.scrollbars.addClass)
                        { addClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
                    }

                    // Operations are used to wrap a series of changes to the editor
                    // state in such a way that each change won't have to update the
                    // cursor and display (which would be awkward, slow, and
                    // error-prone). Instead, display updates are batched and then all
                    // combined and executed at once.

                    var nextOpId = 0;
                    // Start a new operation.
                    function startOperation(cm) {
                        cm.curOp = {
                            cm: cm,
                            viewChanged: false,      // Flag that indicates that lines might need to be redrawn
                            startHeight: cm.doc.height, // Used to detect need to update scrollbar
                            forceUpdate: false,      // Used to force a redraw
                            updateInput: 0,       // Whether to reset the input textarea
                            typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
                            changeObjs: null,        // Accumulated changes, for firing change events
                            cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
                            cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
                            selectionChanged: false, // Whether the selection needs to be redrawn
                            updateMaxLine: false,    // Set when the widest line needs to be determined anew
                            scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
                            scrollToPos: null,       // Used to scroll to a specific position
                            focus: false,
                            id: ++nextOpId           // Unique ID
                        };
                        pushOperation(cm.curOp);
                    }

                    // Finish an operation, updating the display and signalling delayed events
                    function endOperation(cm) {
                        var op = cm.curOp;
                        if (op) { finishOperation(op, function (group) {
                            for (var i = 0; i < group.ops.length; i++)
                            { group.ops[i].cm.curOp = null; }
                            endOperations(group);
                        }); }
                    }

                    // The DOM updates done when an operation finishes are batched so
                    // that the minimum number of relayouts are required.
                    function endOperations(group) {
                        var ops = group.ops;
                        for (var i = 0; i < ops.length; i++) // Read DOM
                        { endOperation_R1(ops[i]); }
                        for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
                        { endOperation_W1(ops[i$1]); }
                        for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
                        { endOperation_R2(ops[i$2]); }
                        for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
                        { endOperation_W2(ops[i$3]); }
                        for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
                        { endOperation_finish(ops[i$4]); }
                    }

                    function endOperation_R1(op) {
                        var cm = op.cm, display = cm.display;
                        maybeClipScrollbars(cm);
                        if (op.updateMaxLine) { findMaxLine(cm); }

                        op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
                            op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                                op.scrollToPos.to.line >= display.viewTo) ||
                            display.maxLineChanged && cm.options.lineWrapping;
                        op.update = op.mustUpdate &&
                            new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
                    }

                    function endOperation_W1(op) {
                        op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
                    }

                    function endOperation_R2(op) {
                        var cm = op.cm, display = cm.display;
                        if (op.updatedDisplay) { updateHeightsInViewport(cm); }

                        op.barMeasure = measureForScrollbars(cm);

                        // If the max line changed since it was last measured, measure it,
                        // and ensure the document's width matches it.
                        // updateDisplay_W2 will use these properties to do the actual resizing
                        if (display.maxLineChanged && !cm.options.lineWrapping) {
                            op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
                            cm.display.sizerWidth = op.adjustWidthTo;
                            op.barMeasure.scrollWidth =
                                Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
                            op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
                        }

                        if (op.updatedDisplay || op.selectionChanged)
                        { op.preparedSelection = display.input.prepareSelection(); }
                    }

                    function endOperation_W2(op) {
                        var cm = op.cm;

                        if (op.adjustWidthTo != null) {
                            cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
                            if (op.maxScrollLeft < cm.doc.scrollLeft)
                            { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true); }
                            cm.display.maxLineChanged = false;
                        }

                        var takeFocus = op.focus && op.focus == activeElt();
                        if (op.preparedSelection)
                        { cm.display.input.showSelection(op.preparedSelection, takeFocus); }
                        if (op.updatedDisplay || op.startHeight != cm.doc.height)
                        { updateScrollbars(cm, op.barMeasure); }
                        if (op.updatedDisplay)
                        { setDocumentHeight(cm, op.barMeasure); }

                        if (op.selectionChanged) { restartBlink(cm); }

                        if (cm.state.focused && op.updateInput)
                        { cm.display.input.reset(op.typing); }
                        if (takeFocus) { ensureFocus(op.cm); }
                    }

                    function endOperation_finish(op) {
                        var cm = op.cm, display = cm.display, doc = cm.doc;

                        if (op.updatedDisplay) { postUpdateDisplay(cm, op.update); }

                        // Abort mouse wheel delta measurement, when scrolling explicitly
                        if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
                        { display.wheelStartX = display.wheelStartY = null; }

                        // Propagate the scroll position to the actual DOM scroller
                        if (op.scrollTop != null) { setScrollTop(cm, op.scrollTop, op.forceScroll); }

                        if (op.scrollLeft != null) { setScrollLeft(cm, op.scrollLeft, true, true); }
                        // If we need to scroll a specific position into view, do so.
                        if (op.scrollToPos) {
                            var rect = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
                                clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
                            maybeScrollWindow(cm, rect);
                        }

                        // Fire events for markers that are hidden/unidden by editing or
                        // undoing
                        var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
                        if (hidden) { for (var i = 0; i < hidden.length; ++i)
                        { if (!hidden[i].lines.length) { signal(hidden[i], "hide"); } } }
                        if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
                        { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide"); } } }

                        if (display.wrapper.offsetHeight)
                        { doc.scrollTop = cm.display.scroller.scrollTop; }

                        // Fire change events, and delayed event handlers
                        if (op.changeObjs)
                        { signal(cm, "changes", cm, op.changeObjs); }
                        if (op.update)
                        { op.update.finish(); }
                    }

                    // Run the given function in an operation
                    function runInOp(cm, f) {
                        if (cm.curOp) { return f() }
                        startOperation(cm);
                        try { return f() }
                        finally { endOperation(cm); }
                    }
                    // Wraps a function in an operation. Returns the wrapped function.
                    function operation(cm, f) {
                        return function() {
                            if (cm.curOp) { return f.apply(cm, arguments) }
                            startOperation(cm);
                            try { return f.apply(cm, arguments) }
                            finally { endOperation(cm); }
                        }
                    }
                    // Used to add methods to editor and doc instances, wrapping them in
                    // operations.
                    function methodOp(f) {
                        return function() {
                            if (this.curOp) { return f.apply(this, arguments) }
                            startOperation(this);
                            try { return f.apply(this, arguments) }
                            finally { endOperation(this); }
                        }
                    }
                    function docMethodOp(f) {
                        return function() {
                            var cm = this.cm;
                            if (!cm || cm.curOp) { return f.apply(this, arguments) }
                            startOperation(cm);
                            try { return f.apply(this, arguments) }
                            finally { endOperation(cm); }
                        }
                    }

                    // HIGHLIGHT WORKER

                    function startWorker(cm, time) {
                        if (cm.doc.highlightFrontier < cm.display.viewTo)
                        { cm.state.highlight.set(time, bind(highlightWorker, cm)); }
                    }

                    function highlightWorker(cm) {
                        var doc = cm.doc;
                        if (doc.highlightFrontier >= cm.display.viewTo) { return }
                        var end = +new Date + cm.options.workTime;
                        var context = getContextBefore(cm, doc.highlightFrontier);
                        var changedLines = [];

                        doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
                            if (context.line >= cm.display.viewFrom) { // Visible
                                var oldStyles = line.styles;
                                var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc.mode, context.state) : null;
                                var highlighted = highlightLine(cm, line, context, true);
                                if (resetState) { context.state = resetState; }
                                line.styles = highlighted.styles;
                                var oldCls = line.styleClasses, newCls = highlighted.classes;
                                if (newCls) { line.styleClasses = newCls; }
                                else if (oldCls) { line.styleClasses = null; }
                                var ischange = !oldStyles || oldStyles.length != line.styles.length ||
                                    oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
                                for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i]; }
                                if (ischange) { changedLines.push(context.line); }
                                line.stateAfter = context.save();
                                context.nextLine();
                            } else {
                                if (line.text.length <= cm.options.maxHighlightLength)
                                { processLine(cm, line.text, context); }
                                line.stateAfter = context.line % 5 == 0 ? context.save() : null;
                                context.nextLine();
                            }
                            if (+new Date > end) {
                                startWorker(cm, cm.options.workDelay);
                                return true
                            }
                        });
                        doc.highlightFrontier = context.line;
                        doc.modeFrontier = Math.max(doc.modeFrontier, context.line);
                        if (changedLines.length) { runInOp(cm, function () {
                            for (var i = 0; i < changedLines.length; i++)
                            { regLineChange(cm, changedLines[i], "text"); }
                        }); }
                    }

                    // DISPLAY DRAWING

                    var DisplayUpdate = function(cm, viewport, force) {
                        var display = cm.display;

                        this.viewport = viewport;
                        // Store some values that we'll need later (but don't want to force a relayout for)
                        this.visible = visibleLines(display, cm.doc, viewport);
                        this.editorIsHidden = !display.wrapper.offsetWidth;
                        this.wrapperHeight = display.wrapper.clientHeight;
                        this.wrapperWidth = display.wrapper.clientWidth;
                        this.oldDisplayWidth = displayWidth(cm);
                        this.force = force;
                        this.dims = getDimensions(cm);
                        this.events = [];
                    };

                    DisplayUpdate.prototype.signal = function (emitter, type) {
                        if (hasHandler(emitter, type))
                        { this.events.push(arguments); }
                    };
                    DisplayUpdate.prototype.finish = function () {
                        for (var i = 0; i < this.events.length; i++)
                        { signal.apply(null, this.events[i]); }
                    };

                    function maybeClipScrollbars(cm) {
                        var display = cm.display;
                        if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
                            display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
                            display.heightForcer.style.height = scrollGap(cm) + "px";
                            display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
                            display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
                            display.scrollbarsClipped = true;
                        }
                    }

                    function selectionSnapshot(cm) {
                        if (cm.hasFocus()) { return null }
                        var active = activeElt();
                        if (!active || !contains(cm.display.lineDiv, active)) { return null }
                        var result = {activeElt: active};
                        if (window.getSelection) {
                            var sel = window.getSelection();
                            if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
                                result.anchorNode = sel.anchorNode;
                                result.anchorOffset = sel.anchorOffset;
                                result.focusNode = sel.focusNode;
                                result.focusOffset = sel.focusOffset;
                            }
                        }
                        return result
                    }

                    function restoreSelection(snapshot) {
                        if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt()) { return }
                        snapshot.activeElt.focus();
                        if (!/^(INPUT|TEXTAREA)$/.test(snapshot.activeElt.nodeName) &&
                            snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
                            var sel = window.getSelection(), range = document.createRange();
                            range.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
                            range.collapse(false);
                            sel.removeAllRanges();
                            sel.addRange(range);
                            sel.extend(snapshot.focusNode, snapshot.focusOffset);
                        }
                    }

                    // Does the actual updating of the line display. Bails out
                    // (returning false) when there is nothing to be done and forced is
                    // false.
                    function updateDisplayIfNeeded(cm, update) {
                        var display = cm.display, doc = cm.doc;

                        if (update.editorIsHidden) {
                            resetView(cm);
                            return false
                        }

                        // Bail out if the visible area is already rendered and nothing changed.
                        if (!update.force &&
                            update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
                            (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
                            display.renderedView == display.view && countDirtyView(cm) == 0)
                        { return false }

                        if (maybeUpdateLineNumberWidth(cm)) {
                            resetView(cm);
                            update.dims = getDimensions(cm);
                        }

                        // Compute a suitable new viewport (from & to)
                        var end = doc.first + doc.size;
                        var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
                        var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
                        if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom); }
                        if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo); }
                        if (sawCollapsedSpans) {
                            from = visualLineNo(cm.doc, from);
                            to = visualLineEndNo(cm.doc, to);
                        }

                        var different = from != display.viewFrom || to != display.viewTo ||
                            display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
                        adjustView(cm, from, to);





