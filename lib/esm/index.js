import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { useState, useEffect, createRef, useRef, forwardRef, useImperativeHandle } from 'react';
import { v4 } from 'uuid';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign$1 = function () {
  __assign$1 = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign$1.apply(this, arguments);
};
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

var pipe = function (arg) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    return fns.reduce(function (acc, fn) { return fn(acc); }, arg);
};
var arrayToObject = function (arr) {
    return arr.reduce(function (acc, curr) { return (__assign$1(__assign$1({}, acc), curr)); }, {});
};
var range = function (n) { return __spreadArray([], __read(new Array(n).keys()), false); };
var daysInMonth = function (year, month) {
    return new Date(year, month + 1, 0).getDate();
};
var getWeekday = function (year, month, day) {
    return new Date(year, month, day).toLocaleDateString("default", {
        weekday: "short",
    });
};

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$4 = ".input-component-wrapper {\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: white;\n  box-sizing: border-box;\n  height: 40px;\n  display: flex;\n}\n.input-component-wrapper .input-component {\n  border: none;\n  height: 100%;\n  outline: none;\n  font-size: 15px;\n  width: 100%;\n}";
styleInject(css_248z$4);

var Input = function (props) {
    var _a = __read(useState(""), 2), value = _a[0], setValue = _a[1];
    useEffect(function () {
        if (props.value)
            setValue(props.value);
    }, []);
    var handleContent = function (event) {
        var content = event.target.value;
        setValue(content);
        if (props.onChange)
            props.onChange(content);
    };
    return (jsx("div", __assign$1({ className: "input-component-wrapper" }, { children: jsx("input", { type: props.type, className: "input-component", value: value, placeholder: props === null || props === void 0 ? void 0 : props.placeholder, onChange: handleContent }) })));
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && /*#__PURE__*/React.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return /*#__PURE__*/React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return /*#__PURE__*/React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return /*#__PURE__*/React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? /*#__PURE__*/React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function MdArrowDropDown(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 10l5 5 5-5z"}}]})(props);}function MdArrowDropUp(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 14l5-5 5 5z"}}]})(props);}

var css_248z$3 = ".select-component-wrapper {\n  background-color: red;\n}\n.select-component-wrapper .select-input {\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: white;\n  box-sizing: border-box;\n  height: 40px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n.select-component-wrapper .select-input:hover {\n  cursor: pointer;\n}\n.select-component-wrapper .select-input .select-content {\n  width: 100%;\n  flex-grow: 1;\n  padding-left: 10px;\n  display: flex;\n}\n.select-component-wrapper .select-input .arrow-icon {\n  font-size: 25px;\n}\n.select-component-wrapper .options-wrapper {\n  display: relative;\n  width: 100%;\n}\n.select-component-wrapper .options-wrapper .select-options {\n  position: absolute;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;\n  z-index: 999;\n}\n.select-component-wrapper .options-wrapper .select-options .option {\n  padding: 10px;\n  display: flex;\n  justify-content: flex-start;\n}\n.select-component-wrapper .options-wrapper .select-options .option:hover {\n  background-color: #eaeaea;\n  cursor: pointer;\n}\n.select-component-wrapper .options-wrapper .select-options .option.empty-message {\n  display: flex;\n  justify-content: center;\n}\n.select-component-wrapper .options-wrapper .select-options .option.empty-message:hover {\n  background-color: transparent;\n}";
styleInject(css_248z$3);

var Select = function (props) {
    var _a = __read(useState(), 2), content = _a[0], setContent = _a[1];
    var _b = __read(useState(""), 2), contentDisplay = _b[0], setContentDisplay = _b[1];
    var _c = __read(useState(false), 2), isOpened = _c[0], setIsOpened = _c[1];
    useEffect(function () {
        if (content)
            setContentDisplay(content.label);
        if (props.onChange)
            props.onChange(content === null || content === void 0 ? void 0 : content.value);
    }, [content]);
    useEffect(function () {
        var selectedOption = props.options.find(function (i) { return i.value === props.value; });
        setContent(selectedOption);
    }, [props.value]);
    var optionsWrapperRef = createRef();
    var optionsRef = createRef();
    useEffect(function () {
        var wrapperWidth = optionsWrapperRef.current
            .offsetWidth;
        var options = optionsRef.current;
        if (options) {
            options.style.width = "".concat(wrapperWidth, "px");
        }
    }, [optionsWrapperRef, optionsRef]);
    var handleClick = function (event) {
        var _a;
        if (optionsRef) {
            var isRelated = (_a = optionsRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target);
            if (!isRelated)
                setIsOpened(!isOpened);
        }
    };
    var handleBlur = function (event) {
        if (event.relatedTarget !== optionsRef.current) {
            setIsOpened(false);
        }
    };
    var handleChange = function (option) {
        setContent(option);
        setIsOpened(false);
    };
    var options = props.options || [];
    var Options = options.map(function (option) {
        return (jsx("div", __assign$1({ className: "option", onClick: function () { return handleChange(option); } }, { children: jsx("span", { children: option.label }) }), v4()));
    });
    var EmptyMessage = (jsx("div", __assign$1({ className: "option empty-message" }, { children: jsx("span", { children: "No options " }) })));
    return (jsxs("div", __assign$1({ className: "select-component-wrapper", onClick: handleClick, onBlur: handleBlur, tabIndex: 0 }, { children: [jsxs("div", __assign$1({ className: "select-input" }, { children: [jsx("div", __assign$1({ className: "select-content" }, { children: contentDisplay })), isOpened ? (jsx(MdArrowDropUp, { className: "arrow-icon" })) : (jsx(MdArrowDropDown, { className: "arrow-icon" }))] })), jsx("div", __assign$1({ className: "options-wrapper", ref: optionsWrapperRef }, { children: isOpened && (jsx("div", __assign$1({ className: "select-options", ref: optionsRef, tabIndex: 0 }, { children: options.length ? Options : EmptyMessage }))) }))] })));
};

var YearBox = function (props) {
    var _a = __read(useState(props.year), 2), year = _a[0], setYear = _a[1];
    var _b = __read(useState(false), 2), edit = _b[0], setEdit = _b[1];
    var handlePress = function (event) {
        if (event.key === "Enter") {
            props.setYear(year);
            setEdit(false);
        }
    };
    var handleChange = function (event) {
        setYear(Number(event.target.value));
    };
    return (jsxs("div", __assign$1({ className: "calendar-header", "data-type": "calendar" }, { children: [jsx("input", { type: "button", value: "<", onClick: props.goPrevious, className: "calendar-arrow", "data-type": "calendar" }), edit ? (jsx("input", { className: "edit-year-input", onKeyDown: handlePress, onChange: handleChange, value: year })) : (jsx("span", __assign$1({ onClick: function () { return setEdit(true); } }, { children: props.year }))), jsx("input", { type: "button", value: ">", onClick: props.goNext, className: "calendar-arrow", "data-type": "calendar" })] })));
};

var Month = function (props) {
    var monthName = new Date(props.year, props.month).toLocaleDateString("default", {
        month: "long",
    });
    return (jsxs("div", __assign$1({ className: "calendar-month", "data-type": "calendar" }, { children: [jsx("input", { type: "button", value: "<", onClick: props.goPrevious, className: "calendar-arrow" }), jsx("span", __assign$1({ className: "month-name" }, { children: monthName })), jsx("input", { type: "button", value: ">", onClick: props.goNext, className: "calendar-arrow" })] })));
};

var Day = function (props) {
    var weekdaysArray = range(7).map(function (count) {
        return getWeekday(2022, 2, 6 + count);
    });
    var WeekDays = weekdaysArray.map(function (i) { return jsx("span", { children: i }, i); });
    var generateDaysArray = function () {
        var monthLength = daysInMonth(props.year, props.month);
        var firstWeekday = getWeekday(props.year, props.month, 1);
        var firstWeekdayIndex = weekdaysArray.indexOf(firstWeekday);
        var daysArray = range(6).map(function (_) { return range(7); });
        var firstWeekLength = 7 - firstWeekdayIndex;
        var parsedDaysArray = daysArray.map(function (weekArr, index) {
            if (index === 0) {
                return weekArr.map(function (_day, dayIndex) {
                    return dayIndex >= firstWeekdayIndex
                        ? dayIndex - firstWeekdayIndex + 1
                        : null;
                });
            }
            return weekArr.map(function (day) {
                var currentDay = firstWeekLength + 1 + day + (index - 1) * 7;
                return currentDay < monthLength + 1 ? currentDay : null;
            });
        });
        return parsedDaysArray;
    };
    var Days = generateDaysArray().map(function (weekArr, index) { return (jsx("div", __assign$1({ className: "calendar-week" }, { children: jsx(Fragment, { children: weekArr.map(function (day, i) { return (jsx("div", __assign$1({ className: day === props.day ? "selected" : "", onClick: function () { return day && props.setDay(day); } }, { children: jsx("span", { children: day || "" }) }), "day-".concat(i, "-").concat(day))); }) }) }), index)); });
    return (jsxs("div", __assign$1({ className: "calendar-days" }, { children: [jsx("div", __assign$1({ className: "weekdays" }, { children: WeekDays })), Days] })));
};

var DateComponent = function (props) {
    var year = props.year, month = props.month, day = props.day, setMonth = props.setMonth, setYear = props.setYear, setDay = props.setDay;
    useEffect(function () {
        var monthString = "0".concat(month + 1).split("").slice(-2).join("");
        var dayString = "0".concat(day).split("").slice(-2).join("");
        var dateString = "".concat(year, "/").concat(monthString, "/").concat(dayString);
        props.setInput(dateString);
    }, [props]);
    var changeMonth = function (count) { return function () {
        if (count < 0) {
            if (month > 0)
                setMonth(month + count);
            if (month === 0) {
                setYear(year - 1);
                setMonth(11);
            }
        }
        if (count > 0) {
            if (month < 11)
                setMonth(month + count);
            if (month === 11) {
                setYear(year + 1);
                setMonth(0);
            }
        }
    }; };
    var handleSetDay = function (d) {
        setDay(d);
    };
    return (jsxs("div", __assign$1({ className: "calendar-wrapper", tabIndex: 0, onBlur: props.handleBlur }, { children: [jsx(YearBox, { year: year, setYear: setYear, goPrevious: function () { return setYear(year - 1); }, goNext: function () { return setYear(year + 1); } }), jsx(Month, { year: year, month: month, goPrevious: changeMonth(-1), goNext: changeMonth(1) }), jsx(Day, { year: year, month: month, day: day, setDay: handleSetDay })] })));
};

var css_248z$2 = ".date-component-wrapper {\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: white;\n  box-sizing: border-box;\n  height: 40px;\n  position: relative;\n}\n.date-component-wrapper .input-component {\n  border: none;\n  height: 100%;\n  outline: none;\n  font-size: 15px;\n  width: 100%;\n}\n.date-component-wrapper .calendar-wrapper {\n  left: 0;\n  top: 40px;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n  border-radius: 4px;\n  position: absolute;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n}\n.date-component-wrapper .calendar-wrapper .calendar-arrow {\n  border: none;\n  background-color: transparent;\n  font-weight: bold;\n}\n.date-component-wrapper .calendar-wrapper .calendar-arrow:hover {\n  cursor: pointer;\n}\n.date-component-wrapper .calendar-wrapper .calendar-header {\n  border-bottom: 1px solid black;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.date-component-wrapper .calendar-wrapper .calendar-header .edit-year-input {\n  width: 50px;\n}\n.date-component-wrapper .calendar-wrapper .calendar-month {\n  padding: 20px 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.date-component-wrapper .calendar-wrapper .calendar-month .month-name {\n  font-size: 25px;\n  text-transform: uppercase;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .weekdays,\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week {\n  display: grid;\n  grid-template-columns: repeat(7, 14%);\n  padding-left: 1%;\n  padding-right: 1%;\n  justify-items: center;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .weekdays > div:hover,\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week > div:hover {\n  cursor: pointer;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .weekdays .selected,\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week .selected {\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .weekdays .selected span,\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week .selected span {\n  height: 25px;\n  width: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  border-radius: 50%;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week {\n  height: 16.6666666667%;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}";
styleInject(css_248z$2);

var handleDisplayBlur = function (componentRef, displayHandler) {
    return function (event) {
        var _a;
        var relatedTarget = event.relatedTarget;
        var isComponentRelated = (_a = componentRef.current) === null || _a === void 0 ? void 0 : _a.contains(relatedTarget);
        if (!relatedTarget || !isComponentRelated) {
            displayHandler(false);
        }
    };
};

var DatePicker = function (props) {
    var _a = __read(useState(""), 2), value = _a[0], setValue = _a[1];
    var _b = __read(useState(false), 2), showCalendar = _b[0], setShowCalendar = _b[1];
    var _c = __read(useState(Number(new Date().getFullYear())), 2), year = _c[0], setYear = _c[1];
    var _d = __read(useState(Number(new Date().getMonth())), 2), month = _d[0], setMonth = _d[1];
    var _e = __read(useState(Number(new Date().getDate())), 2), day = _e[0], setDay = _e[1];
    var handleContent = function (event) { return setValue(event.currentTarget.value); };
    var componentRef = useRef(null);
    var parseString = function (v) {
        var _a = __read(v.split(/[\/\-]/).map(function (i) { return Number(i); }), 3), y = _a[0], m = _a[1], d = _a[2];
        if (m >= 1 && m <= 12 && d >= 1 && d <= 31) {
            setYear(y);
            setMonth(m - 1);
            setDay(d);
            return v.split(/[\/\-]/).join("/");
        }
        else {
            setValue("");
            return "";
        }
    };
    useEffect(function () {
        if (props.value) {
            setValue(props.value);
            var value_1 = parseString(props.value);
            setValue(value_1);
        }
    }, []);
    useEffect(function () {
        if (props.onChange) {
            props.onChange(value);
        }
    }, [value]);
    var handleBlur = handleDisplayBlur(componentRef, setShowCalendar);
    var handlePress = function (event) {
        if (event.key === "Enter") {
            parseString(value);
        }
    };
    return (jsxs("div", __assign$1({ className: "date-component-wrapper", ref: componentRef }, { children: [jsx("input", { type: "text", className: "input-component", value: value, onChange: handleContent, onFocus: function () { return setShowCalendar(true); }, onBlur: handleBlur, onKeyDown: handlePress }), showCalendar && (jsx(DateComponent, { handleBlur: handleBlur, setInput: setValue, year: year, month: month, day: day, setYear: setYear, setMonth: setMonth, setDay: setDay }))] })));
};

// THIS FILE IS AUTO GENERATED
function BiCheckboxChecked(props) {
  return GenIcon({
    "tag": "svg",
    "attr": {
      "viewBox": "0 0 24 24"
    },
    "child": [{
      "tag": "path",
      "attr": {
        "d": "M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"
      }
    }, {
      "tag": "path",
      "attr": {
        "d": "M10.996 12.556 9.7 11.285l-1.4 1.43 2.704 2.647 4.699-4.651-1.406-1.422z"
      }
    }]
  })(props);
}
function BiCheckbox(props) {
  return GenIcon({
    "tag": "svg",
    "attr": {
      "viewBox": "0 0 24 24"
    },
    "child": [{
      "tag": "path",
      "attr": {
        "d": "M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"
      }
    }]
  })(props);
}

var css_248z$1 = ".select-component-wrapper {\n  background-color: red;\n  overflow: hidden;\n}\n.select-component-wrapper .select-input {\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: white;\n  box-sizing: border-box;\n  height: 40px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  overflow: hidden;\n}\n.select-component-wrapper .select-input:hover {\n  cursor: pointer;\n}\n.select-component-wrapper .select-input .select-content {\n  width: 100%;\n  flex-grow: 1;\n  padding-left: 10px;\n  display: flex;\n  display: -webkit-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: start;\n  -webkit-line-clamp: 2;\n  /* number of lines to show */\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.select-component-wrapper .select-input .arrow-icon {\n  font-size: 25px;\n}\n.select-component-wrapper .options-wrapper {\n  display: relative;\n  width: 100%;\n}\n.select-component-wrapper .options-wrapper .select-options {\n  position: absolute;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;\n  z-index: 999;\n}\n.select-component-wrapper .options-wrapper .select-options .option {\n  padding: 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.select-component-wrapper .options-wrapper .select-options .option svg {\n  height: 25px;\n  width: 25px;\n}\n.select-component-wrapper .options-wrapper .select-options .option:hover {\n  background-color: #eaeaea;\n  cursor: pointer;\n}\n.select-component-wrapper .options-wrapper .select-options .option.empty-message {\n  display: flex;\n  justify-content: center;\n}\n.select-component-wrapper .options-wrapper .select-options .option.empty-message:hover {\n  background-color: transparent;\n}";
styleInject(css_248z$1);

var Multiselect = function (props) {
    var _a = __read(useState([]), 2), content = _a[0], setContent = _a[1];
    var _b = __read(useState([]), 2), contentDisplay = _b[0], setContentDisplay = _b[1];
    var _c = __read(useState(false), 2), isOpened = _c[0], setIsOpened = _c[1];
    var selectedValues = content.map(function (c) { return c.value; });
    useEffect(function () {
        var displayLabels = content.map(function (c) { return c.label; });
        setContentDisplay(displayLabels);
        if (props.onChange)
            props.onChange(selectedValues);
    }, [content]);
    useEffect(function () {
        if (props.value) {
            var parsedValue = props.options.filter(function (o) {
                return props.value.includes(o.value);
            });
            setContent(parsedValue);
        }
    }, [props.value]);
    var optionsWrapperRef = createRef();
    var optionsRef = createRef();
    var componentRef = createRef();
    useEffect(function () {
        var wrapperWidth = optionsWrapperRef.current
            .offsetWidth;
        var options = optionsRef.current;
        if (options) {
            options.style.width = "".concat(wrapperWidth, "px");
        }
    }, [optionsWrapperRef, optionsRef]);
    var handleClick = function (event) {
        var _a;
        if (optionsRef) {
            var isRelated = (_a = optionsRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target);
            if (!isRelated)
                setIsOpened(!isOpened);
        }
    };
    var handleBlur = handleDisplayBlur(componentRef, setIsOpened);
    var handleChange = function (option) {
        var isSelected = content.find(function (c) { return c.value === option.value; });
        if (isSelected) {
            var selected = content.filter(function (c) { return c.value !== option.value; });
            setContent(selected);
        }
        else {
            setContent(__spreadArray(__spreadArray([], __read(content), false), [option], false));
        }
    };
    var options = props.options || [];
    var Options = options.map(function (option) {
        var isSelected = content.some(function (c) { return c.value === option.value; });
        var Icon = isSelected ? BiCheckboxChecked : BiCheckbox;
        return (jsxs("div", __assign$1({ className: "option", onClick: function () { return handleChange(option); } }, { children: [jsx(Icon, {}), " ", jsx("span", { children: option.label })] }), v4()));
    });
    var EmptyMessage = (jsx("div", __assign$1({ className: "option empty-message" }, { children: jsx("span", { children: "No options " }) })));
    return (jsxs("div", __assign$1({ className: "select-component-wrapper", onClick: handleClick, onBlur: handleBlur, tabIndex: 0, ref: componentRef }, { children: [jsxs("div", __assign$1({ className: "select-input" }, { children: [jsx("div", __assign$1({ className: "select-content" }, { children: contentDisplay.join(", ") })), isOpened ? (jsx(MdArrowDropUp, { className: "arrow-icon" })) : (jsx(MdArrowDropDown, { className: "arrow-icon" }))] })), jsx("div", __assign$1({ className: "options-wrapper", ref: optionsWrapperRef }, { children: isOpened && (jsx("div", __assign$1({ className: "select-options", ref: optionsRef, tabIndex: 0 }, { children: options.length ? Options : EmptyMessage }))) }))] })));
};

var inputsOptionsDefault = {
    input: Input,
    select: Select,
    multiselect: Multiselect,
    datePicker: DatePicker,
};

var inferType = function (typeValue, collection) {
    return collection[typeValue];
};

var ValidationType;
(function (ValidationType) {
    ValidationType["EMAIL"] = "email";
    ValidationType["PASSWORD"] = "password";
})(ValidationType || (ValidationType = {}));

var errorMessages = {
    required: "Field required",
    email: "Must be a valid email",
    password: "Password must have between 8 and 12 characters, an uppercase letter, a lowercase letter, a special character and a number ",
};

var getDefaultResult = function () { return ({ error: false, message: "" }); };
var required = function (item) {
    var _a;
    if ((_a = item.config.validation) === null || _a === void 0 ? void 0 : _a.required) {
        var state = item.state;
        var hasError = state === undefined || state === null || state === "";
        return {
            item: item,
            result: {
                error: hasError,
                message: hasError ? errorMessages.required : "",
            },
        };
    }
    return { item: item, result: getDefaultResult() };
};
var callback = function (_a) {
    var _b;
    var item = _a.item, result = _a.result;
    if (result.error)
        return { item: item, result: result };
    if ((_b = item.config.validation) === null || _b === void 0 ? void 0 : _b.callback) {
        var state = item.state;
        var allInputsStates = item.inputRefs.map(function (i) {
            var _a;
            return (_a = {},
                _a[i.current.getName()] = i.current.getValue(),
                _a);
        });
        var values = arrayToObject(allInputsStates);
        return {
            item: item,
            result: item.config.validation.callback(state, values),
        };
    }
    return {
        item: item,
        result: result,
    };
};
var email = function (_a) {
    var _b;
    var item = _a.item, result = _a.result;
    if (result.error)
        return { item: item, result: result };
    var regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var state = item.state;
    var isValid = regex.test(state);
    if (((_b = item.config.validation) === null || _b === void 0 ? void 0 : _b.type) === ValidationType.EMAIL) {
        return {
            item: item,
            result: {
                error: !isValid,
                message: isValid ? "" : errorMessages.email,
            },
        };
    }
    return {
        item: item,
        result: result,
    };
};
var password = function (_a) {
    var _b;
    var item = _a.item, result = _a.result;
    if (result.error)
        return { item: item, result: result };
    var regex = /((?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])){8,12}/;
    var state = item.state;
    var isValid = regex.test(state);
    if (((_b = item.config.validation) === null || _b === void 0 ? void 0 : _b.type) === ValidationType.PASSWORD) {
        return {
            item: item,
            result: {
                error: !isValid,
                message: isValid ? "" : errorMessages.password,
            },
        };
    }
    return {
        item: item,
        result: result,
    };
};

var validator = function (item) {
    return pipe(item, required, email, password, callback);
};

var InputWrapper = forwardRef(function (props, ref) {
    var _a = __read(useState(props.formData[props.itemData.name] || ""), 2), value = _a[0], setValue = _a[1];
    var _b = __read(useState(""), 2), error = _b[0], setError = _b[1];
    var Component = props.component;
    useImperativeHandle(ref, function () { return ({
        getValue: function () { return value; },
        getName: function () { return props.itemData.name; },
        getErrorMessage: function () { return error; },
    }); });
    useEffect(function () {
        var message = validator(__assign$1(__assign$1({}, props.itemData), { state: value, inputRefs: props.inputsRefs })).result.message;
        setError(message);
        props.updateOnChange();
    }, [value]);
    return (jsxs("div", __assign$1({ className: "form-input-wrapper" }, { children: [jsx(Component, __assign$1({}, props, { value: props.formData[props.itemData.name], onChange: setValue })), jsx("div", __assign$1({ className: "error-message" }, { children: jsx("span", { children: props.showErrors && error }) }))] })));
});

var css_248z = "span {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.form-builder {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  width: 100%;\n}\n.form-builder__title-wrapper {\n  padding: 20px 0;\n}\n.form-builder__title-wrapper .form-builder__title {\n  display: flex;\n  justify-content: center;\n  font-size: 30px;\n}\n.form-builder__items {\n  column-gap: 10px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  background-color: white;\n  box-sizing: border-box;\n}\n.form-builder__items .form_builder__item {\n  display: flex;\n  flex-direction: column;\n}\n.form-builder__items .form_builder__item + .form_builder__item {\n  margin-top: 20px;\n}\n.form-builder__items .form_builder__item + .form_builder__item[class*=\" col-\"] {\n  margin-top: 0;\n}\n.form-builder__items .form_builder__item-label {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: flex-start;\n}\n.form-builder__items .form_builder__item.col-1 {\n  grid-column: span 1;\n}\n.form-builder__items .form_builder__item.col-2 {\n  grid-column: span 2;\n}\n.form-builder__items .form_builder__item.col-3 {\n  grid-column: span 3;\n}\n.form-builder__items .form_builder__item.col-4 {\n  grid-column: span 4;\n}\n.form-builder__items .form_builder__item.col-5 {\n  grid-column: span 5;\n}\n.form-builder__items .form_builder__item.col-6 {\n  grid-column: span 6;\n}\n.form-builder__items .form_builder__item.col-7 {\n  grid-column: span 7;\n}\n.form-builder__items .form_builder__item.col-8 {\n  grid-column: span 8;\n}\n.form-builder__items .form_builder__item.col-9 {\n  grid-column: span 9;\n}\n.form-builder__items .form_builder__item.col-10 {\n  grid-column: span 10;\n}\n.form-builder__items .form_builder__item.col-11 {\n  grid-column: span 11;\n}\n.form-builder__items .form_builder__item.col-12 {\n  grid-column: span 12;\n}\n.form-builder .form-builder__buttons {\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n}\n.form-builder .form-builder__buttons .form-builder__button {\n  width: 80px;\n  height: 40px;\n  background-color: white;\n  border-radius: 3px;\n  border: 1px solid black;\n}\n.form-builder .form-builder__buttons .form-builder__button + .form-builder__button {\n  margin-left: 40px;\n}\n.form-builder .form-builder__buttons .form-builder__button:active {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.form-builder .form-builder__buttons .form-builder__button:hover {\n  cursor: pointer;\n}\n\n.form-input-wrapper .error-message {\n  color: #b33030;\n  font-size: 12px;\n  height: 25px;\n  display: flex;\n  align-items: center;\n}";
styleInject(css_248z);

var FormBuilder = function (props) {
    var _a = __read(useState(true), 1), showErrors = _a[0];
    var inputsOptions = props.inputsOptions
        ? __assign$1(__assign$1({}, inputsOptionsDefault), props.inputsOptions) : inputsOptionsDefault;
    var _b = __read(useState({}), 2), payload = _b[0], setPayload = _b[1];
    useEffect(function () {
        if (props.formContent)
            setPayload(props.formContent);
    }, [props.formContent]);
    var inputsRefs = [];
    var updateOnChange = function () {
        if (props.onChange) {
            var payloads = inputsRefs.map(function (i) { return [
                i.current.getName(),
                i.current.getValue(),
            ]; });
            props.onChange(Object.fromEntries(payloads));
        }
    };
    var InputsData = props.config.map(function (item) {
        var _a, _b;
        var Component = inferType(item.config.inputType, inputsOptions);
        var colStyle = ((_a = item.config.style) === null || _a === void 0 ? void 0 : _a.cols)
            ? "col-".concat((_b = item.config.style) === null || _b === void 0 ? void 0 : _b.cols)
            : "col-12";
        var ref = createRef();
        inputsRefs.push(ref);
        var component = (jsxs("div", __assign$1({ className: "form_builder__item ".concat(colStyle) }, { children: [jsx("div", __assign$1({ className: "form_builder__item-label" }, { children: jsx("span", { children: item.label }) })), jsx(InputWrapper, __assign$1({ component: Component, itemData: item, showErrors: showErrors, formData: payload, ref: ref, inputsRefs: inputsRefs, updateOnChange: updateOnChange }, item.config.props))] }), v4()));
        return { component: component, ref: ref, name: item.name };
    });
    var Inputs = InputsData.map(function (i) { return i.component; });
    var onClickSubmit = function () {
        var data = InputsData.map(function (i) {
            var _a;
            var _b;
            return (_a = {},
                _a[i.name] = (_b = i.ref.current) === null || _b === void 0 ? void 0 : _b.getValue(),
                _a);
        });
        var errors = InputsData.map(function (i) { var _a; return (_a = i.ref.current) === null || _a === void 0 ? void 0 : _a.getErrorMessage(); });
        var isFormValid = Object.values(errors).every(function (i) { return !i; });
        if (isFormValid) {
            if (props.onValid) {
                props.onValid(arrayToObject(data));
                setPayload(arrayToObject(data));
            }
        }
        else {
            if (props.onInvalid)
                props.onInvalid(arrayToObject(data));
        }
    };
    var clearForm = function () {
        var clearedPayload = Object.keys(payload).map(function (k) { return [k, ""]; });
        setPayload(Object.fromEntries(clearedPayload));
    };
    var Buttons = (jsxs("div", __assign$1({ className: "form-builder__buttons" }, { children: [jsx("button", __assign$1({ className: "form-builder__button", onClick: onClickSubmit }, { children: "SUBMIT" })), jsx("button", __assign$1({ className: "form-builder__button", onClick: clearForm }, { children: "CLEAR" }))] })));
    return (jsxs("div", __assign$1({ className: "form-builder" }, { children: [jsx("div", __assign$1({ className: "form-builder__title-wrapper" }, { children: jsx("span", __assign$1({ className: "form-builder__title" }, { children: props.title })) })), jsx("div", __assign$1({ className: "form-builder__items" }, { children: Inputs })), (props.submitButton && props.submitButton(onClickSubmit)) || Buttons] })));
};

var configForm = function (inputsOptions) { return function (formConfig) {
    return FormBuilder(__assign$1(__assign$1({}, inputsOptions), formConfig));
}; };

export { configForm as FormBuilder, ValidationType, configForm as default };
