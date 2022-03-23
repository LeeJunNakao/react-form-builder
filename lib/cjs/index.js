'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var uuid = require('uuid');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Buttons = (props) => {
    return (jsxRuntime.jsxs("div", Object.assign({ className: "form-builder__buttons" }, { children: [jsxRuntime.jsx("button", Object.assign({ className: "form-builder__button", onClick: props.onSubmit }, { children: "SUBMIT" })), jsxRuntime.jsx("button", Object.assign({ className: "form-builder__button", onClick: props.clear }, { children: "CLEAR" }))] })));
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

const Input = (props) => {
    const [value, setValue] = React.useState(props.value || "");
    React.useEffect(() => {
        if (props.value)
            setValue(props.value);
    }, []);
    React.useEffect(() => {
        if (props.shouldClear)
            setValue("");
    }, [props.shouldClear]);
    const handleContent = (event) => {
        const content = event.target.value;
        setValue(content);
    };
    const handleBlur = () => {
        if (props.onChange)
            props.onChange(value);
    };
    return (jsxRuntime.jsx("div", Object.assign({ className: "input-component-wrapper" }, { children: jsxRuntime.jsx("input", { type: props.type, className: "input-component", value: value, placeholder: props === null || props === void 0 ? void 0 : props.placeholder, onChange: handleContent, onBlur: handleBlur }) })));
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React__default["default"].createContext && /*#__PURE__*/React__default["default"].createContext(DefaultContext);

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
    return /*#__PURE__*/React__default["default"].createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return /*#__PURE__*/React__default["default"].createElement(IconBase, __assign({
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
    return /*#__PURE__*/React__default["default"].createElement("svg", __assign({
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
    }), title && /*#__PURE__*/React__default["default"].createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? /*#__PURE__*/React__default["default"].createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function MdArrowDropDown(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 10l5 5 5-5z"}}]})(props);}function MdArrowDropUp(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 14l5-5 5 5z"}}]})(props);}

const Options$1 = (props) => {
    const options = (props.options || []).map((option) => {
        return (jsxRuntime.jsx("div", Object.assign({ className: "option", onClick: () => props.handleChange(option) }, { children: jsxRuntime.jsx("span", { children: option.label }) }), uuid.v4()));
    });
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: options });
};

var css_248z$3 = ".select-component-wrapper {\n  background-color: red;\n}\n.select-component-wrapper .select-input {\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: white;\n  box-sizing: border-box;\n  height: 40px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n.select-component-wrapper .select-input:hover {\n  cursor: pointer;\n}\n.select-component-wrapper .select-input .select-content {\n  width: 100%;\n  flex-grow: 1;\n  padding-left: 10px;\n  display: flex;\n}\n.select-component-wrapper .select-input .arrow-icon {\n  font-size: 25px;\n}\n.select-component-wrapper .options-wrapper {\n  display: relative;\n  width: 100%;\n}\n.select-component-wrapper .options-wrapper .select-options {\n  position: absolute;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;\n  z-index: 999;\n}\n.select-component-wrapper .options-wrapper .select-options .option {\n  padding: 10px;\n  display: flex;\n  justify-content: flex-start;\n}\n.select-component-wrapper .options-wrapper .select-options .option:hover {\n  background-color: #eaeaea;\n  cursor: pointer;\n}\n.select-component-wrapper .options-wrapper .select-options .option.empty-message {\n  display: flex;\n  justify-content: center;\n}\n.select-component-wrapper .options-wrapper .select-options .option.empty-message:hover {\n  background-color: transparent;\n}";
styleInject(css_248z$3);

const Select = (props) => {
    const [content, setContent] = React.useState();
    const [contentDisplay, setContentDisplay] = React.useState("");
    const [isOpened, setIsOpened] = React.useState(false);
    const options = props.options || [];
    React.useEffect(() => {
        if (props.value) {
            const optionSelected = options.find((i) => i.value === props.value);
            if (optionSelected)
                setContent(optionSelected);
        }
    }, []);
    React.useEffect(() => {
        if (content) {
            setContentDisplay(content.label);
        }
    }, [content]);
    React.useEffect(() => {
        if (props.shouldClear)
            setContent(undefined);
    }, [props.shouldClear]);
    const optionsWrapperRef = React.createRef();
    const optionsRef = React.createRef();
    React.useEffect(() => {
        const wrapperWidth = optionsWrapperRef.current
            .offsetWidth;
        const options = optionsRef.current;
        if (options) {
            options.style.width = `${wrapperWidth}px`;
        }
    }, [optionsWrapperRef, optionsRef]);
    const handleClick = (event) => {
        var _a;
        if (optionsRef) {
            const isRelated = (_a = optionsRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target);
            if (!isRelated)
                setIsOpened(!isOpened);
        }
    };
    const handleBlur = (event) => {
        if (event.relatedTarget !== optionsRef.current) {
            setIsOpened(false);
        }
    };
    const handleChange = (option) => {
        setContent(option);
        setIsOpened(false);
        if (props.onChange)
            props.onChange(option.value);
    };
    return (jsxRuntime.jsxs("div", Object.assign({ className: "select-component-wrapper", onClick: handleClick, onBlur: handleBlur, tabIndex: 0 }, { children: [jsxRuntime.jsxs("div", Object.assign({ className: "select-input" }, { children: [jsxRuntime.jsx("div", Object.assign({ className: "select-content" }, { children: contentDisplay })), isOpened ? (jsxRuntime.jsx(MdArrowDropUp, { className: "arrow-icon" })) : (jsxRuntime.jsx(MdArrowDropDown, { className: "arrow-icon" }))] })), jsxRuntime.jsx("div", Object.assign({ className: "options-wrapper", ref: optionsWrapperRef }, { children: isOpened && (jsxRuntime.jsx("div", Object.assign({ className: "select-options", ref: optionsRef, tabIndex: 0 }, { children: options.length ? (jsxRuntime.jsx(Options$1, { options: options, handleChange: handleChange })) : (jsxRuntime.jsx("div", Object.assign({ className: "option empty-message" }, { children: jsxRuntime.jsx("span", { children: "No options " }) }))) }))) }))] })));
};

const YearBox = (props) => {
    const [year, setYear] = React.useState(props.year);
    const [edit, setEdit] = React.useState(false);
    const handlePress = (event) => {
        if (event.key === "Enter") {
            props.setYear(year);
            setEdit(false);
        }
    };
    const handleChange = (event) => {
        setYear(Number(event.target.value));
    };
    return (jsxRuntime.jsxs("div", Object.assign({ className: "calendar-header", "data-type": "calendar" }, { children: [jsxRuntime.jsx("input", { type: "button", value: "<", onClick: props.goPrevious, className: "calendar-arrow", "data-type": "calendar" }), edit ? (jsxRuntime.jsx("input", { className: "edit-year-input", onKeyDown: handlePress, onChange: handleChange, value: year })) : (jsxRuntime.jsx("span", Object.assign({ onClick: () => setEdit(true) }, { children: props.year }))), jsxRuntime.jsx("input", { type: "button", value: ">", onClick: props.goNext, className: "calendar-arrow", "data-type": "calendar" })] })));
};

const Month = (props) => {
    const monthName = new Date(props.year, props.month).toLocaleDateString("default", {
        month: "long",
    });
    return (jsxRuntime.jsxs("div", Object.assign({ className: "calendar-month", "data-type": "calendar" }, { children: [jsxRuntime.jsx("input", { type: "button", value: "<", onClick: props.goPrevious, className: "calendar-arrow" }), jsxRuntime.jsx("span", Object.assign({ className: "month-name" }, { children: monthName })), jsxRuntime.jsx("input", { type: "button", value: ">", onClick: props.goNext, className: "calendar-arrow" })] })));
};

const pipe = (arg, ...fns) => {
    return fns.reduce((acc, fn) => fn(acc), arg);
};
const range = (n) => [...new Array(n).keys()];
const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getWeekday = (year, month, day) => new Date(year, month, day).toLocaleDateString("default", {
    weekday: "short",
});

const Day = (props) => {
    const weekdaysArray = range(7).map((count) => getWeekday(2022, 2, 6 + count));
    const WeekDays = weekdaysArray.map((i) => jsxRuntime.jsx("span", { children: i }, i));
    const generateDaysArray = () => {
        const monthLength = daysInMonth(props.year, props.month);
        const firstWeekday = getWeekday(props.year, props.month, 1);
        const firstWeekdayIndex = weekdaysArray.indexOf(firstWeekday);
        const daysArray = range(6).map((_) => range(7));
        const firstWeekLength = 7 - firstWeekdayIndex;
        const parsedDaysArray = daysArray.map((weekArr, index) => {
            if (index === 0) {
                return weekArr.map((_day, dayIndex) => dayIndex >= firstWeekdayIndex
                    ? dayIndex - firstWeekdayIndex + 1
                    : null);
            }
            return weekArr.map((day) => {
                const currentDay = firstWeekLength + 1 + day + (index - 1) * 7;
                return currentDay < monthLength + 1 ? currentDay : null;
            });
        });
        return parsedDaysArray;
    };
    const Days = generateDaysArray().map((weekArr, index) => (jsxRuntime.jsx("div", Object.assign({ className: "calendar-week" }, { children: jsxRuntime.jsx(jsxRuntime.Fragment, { children: weekArr.map((day, i) => (jsxRuntime.jsx("div", Object.assign({ className: day === props.day ? "selected" : "", onClick: () => day && props.setDay(day) }, { children: jsxRuntime.jsx("span", { children: day || "" }) }), `day-${i}-${day}`))) }) }), index)));
    return (jsxRuntime.jsxs("div", Object.assign({ className: "calendar-days" }, { children: [jsxRuntime.jsx("div", Object.assign({ className: "weekdays" }, { children: WeekDays })), Days] })));
};

const DateComponent = (props) => {
    const { year, month, day, setMonth, setYear, setDay } = props;
    React.useEffect(() => {
        const monthString = `0${month + 1}`.split("").slice(-2).join("");
        const dayString = `0${day}`.split("").slice(-2).join("");
        const dateString = `${year}/${monthString}/${dayString}`;
        props.setInput(dateString);
    }, [props]);
    const changeMonth = (count) => () => {
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
    };
    const handleSetDay = (d) => {
        setDay(d);
    };
    return (jsxRuntime.jsxs("div", Object.assign({ className: "calendar-wrapper", tabIndex: 0, onBlur: props.handleBlur }, { children: [jsxRuntime.jsx(YearBox, { year: year, setYear: setYear, goPrevious: () => setYear(year - 1), goNext: () => setYear(year + 1) }), jsxRuntime.jsx(Month, { year: year, month: month, goPrevious: changeMonth(-1), goNext: changeMonth(1) }), jsxRuntime.jsx(Day, { year: year, month: month, day: day, setDay: handleSetDay })] })));
};

var css_248z$2 = ".date-component-wrapper {\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: white;\n  box-sizing: border-box;\n  height: 40px;\n  position: relative;\n}\n.date-component-wrapper .input-component {\n  border: none;\n  height: 100%;\n  outline: none;\n  font-size: 15px;\n  width: 100%;\n}\n.date-component-wrapper .calendar-wrapper {\n  left: 0;\n  top: 40px;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n  border-radius: 4px;\n  position: absolute;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n}\n.date-component-wrapper .calendar-wrapper .calendar-arrow {\n  border: none;\n  background-color: transparent;\n  font-weight: bold;\n}\n.date-component-wrapper .calendar-wrapper .calendar-arrow:hover {\n  cursor: pointer;\n}\n.date-component-wrapper .calendar-wrapper .calendar-header {\n  border-bottom: 1px solid black;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.date-component-wrapper .calendar-wrapper .calendar-header .edit-year-input {\n  width: 50px;\n}\n.date-component-wrapper .calendar-wrapper .calendar-month {\n  padding: 20px 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.date-component-wrapper .calendar-wrapper .calendar-month .month-name {\n  font-size: 25px;\n  text-transform: uppercase;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .weekdays,\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week {\n  display: grid;\n  grid-template-columns: repeat(7, 14%);\n  padding-left: 1%;\n  padding-right: 1%;\n  justify-items: center;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .weekdays > div:hover,\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week > div:hover {\n  cursor: pointer;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .weekdays .selected,\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week .selected {\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .weekdays .selected span,\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week .selected span {\n  height: 25px;\n  width: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  border-radius: 50%;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week {\n  height: 16.6666666667%;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}";
styleInject(css_248z$2);

const handleDisplayBlur = (componentRef, displayHandler) => (event) => {
    var _a;
    const { relatedTarget } = event;
    const isComponentRelated = (_a = componentRef.current) === null || _a === void 0 ? void 0 : _a.contains(relatedTarget);
    if (!relatedTarget || !isComponentRelated) {
        displayHandler(false);
    }
};

const DatePicker = (props) => {
    const [value, setValue] = React.useState("");
    const [showCalendar, setShowCalendar] = React.useState(false);
    const [year, setYear] = React.useState(Number(new Date().getFullYear()));
    const [month, setMonth] = React.useState(Number(new Date().getMonth()));
    const [day, setDay] = React.useState(Number(new Date().getDate()));
    const handleContent = (event) => setValue(event.currentTarget.value);
    const componentRef = React.useRef(null);
    const parseString = (v) => {
        const [y, m, d] = v.split(/[\/\-]/).map((i) => Number(i));
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
    React.useEffect(() => {
        if (props.value) {
            setValue(props.value);
            const value = parseString(props.value);
            setValue(value);
        }
    }, []);
    React.useEffect(() => {
        if (props.onChange) {
            props.onChange(value);
        }
    }, [value]);
    const handleBlur = handleDisplayBlur(componentRef, setShowCalendar);
    const handlePress = (event) => {
        if (event.key === "Enter") {
            parseString(value);
        }
    };
    return (jsxRuntime.jsxs("div", Object.assign({ className: "date-component-wrapper", ref: componentRef }, { children: [jsxRuntime.jsx("input", { type: "text", className: "input-component", value: value, onChange: handleContent, onFocus: () => setShowCalendar(true), onBlur: handleBlur, onKeyDown: handlePress }), showCalendar && (jsxRuntime.jsx(DateComponent, { handleBlur: handleBlur, setInput: setValue, year: year, month: month, day: day, setYear: setYear, setMonth: setMonth, setDay: setDay }))] })));
};

const SelectInput = (props) => {
    return (jsxRuntime.jsxs("div", Object.assign({ className: "select-input" }, { children: [jsxRuntime.jsx("div", Object.assign({ className: "select-content" }, { children: props.contentDisplay.join(", ") })), props.isOpened ? (jsxRuntime.jsx(MdArrowDropUp, { className: "arrow-icon" })) : (jsxRuntime.jsx(MdArrowDropDown, { className: "arrow-icon" }))] })));
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

const Options = (props) => {
    const optionsDOM = props.options.map((option) => {
        const isSelected = props.content.some((c) => c.value === option.value);
        const Icon = isSelected ? BiCheckboxChecked : BiCheckbox;
        return (jsxRuntime.jsxs("div", Object.assign({ className: "option", onClick: () => props.handleChange(option) }, { children: [jsxRuntime.jsx(Icon, {}), " ", jsxRuntime.jsx("span", { children: option.label })] }), uuid.v4()));
    });
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: optionsDOM });
};

const OptionsWrapper = (props) => {
    return (jsxRuntime.jsx("div", Object.assign({ className: "options-wrapper", ref: props.optionsWrapperRef }, { children: props.isOpened && (jsxRuntime.jsx("div", Object.assign({ className: "select-options", ref: props.optionsRef, tabIndex: 0 }, { children: props.options.length ? (jsxRuntime.jsx(Options, { options: props.options, content: props.content, handleChange: props.handleChange })) : (jsxRuntime.jsx("div", Object.assign({ className: "option empty-message" }, { children: jsxRuntime.jsx("span", { children: "No options " }) }))) }))) })));
};

var css_248z$1 = ".select-component-wrapper {\n  background-color: red;\n  overflow: hidden;\n}\n.select-component-wrapper .select-input {\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: white;\n  box-sizing: border-box;\n  height: 40px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  overflow: hidden;\n}\n.select-component-wrapper .select-input:hover {\n  cursor: pointer;\n}\n.select-component-wrapper .select-input .select-content {\n  width: 100%;\n  flex-grow: 1;\n  padding-left: 10px;\n  display: flex;\n  display: -webkit-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: start;\n  -webkit-line-clamp: 2;\n  /* number of lines to show */\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.select-component-wrapper .select-input .arrow-icon {\n  font-size: 25px;\n}\n.select-component-wrapper .options-wrapper {\n  display: relative;\n  width: 100%;\n}\n.select-component-wrapper .options-wrapper .select-options {\n  position: absolute;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;\n  z-index: 999;\n}\n.select-component-wrapper .options-wrapper .select-options .option {\n  padding: 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.select-component-wrapper .options-wrapper .select-options .option svg {\n  height: 25px;\n  width: 25px;\n}\n.select-component-wrapper .options-wrapper .select-options .option:hover {\n  background-color: #eaeaea;\n  cursor: pointer;\n}\n.select-component-wrapper .options-wrapper .select-options .option.empty-message {\n  display: flex;\n  justify-content: center;\n}\n.select-component-wrapper .options-wrapper .select-options .option.empty-message:hover {\n  background-color: transparent;\n}";
styleInject(css_248z$1);

const Multiselect = (props) => {
    const [content, setContent] = React.useState([]);
    const [contentDisplay, setContentDisplay] = React.useState([]);
    const [isOpened, setIsOpened] = React.useState(false);
    const handleOpenClose = (status) => {
        const selectedValues = content.map((c) => c.value);
        if (!status && props.onChange) {
            props.onChange([...selectedValues]);
        }
        setIsOpened(status);
    };
    React.useEffect(() => {
        const displayLabels = content.map((c) => c.label);
        setContentDisplay(displayLabels);
    }, [content]);
    React.useEffect(() => {
        if (props.shouldClear) {
            setContent([]);
            if (props.onChange)
                props.onChange([]);
        }
    }, [props.shouldClear]);
    React.useEffect(() => {
        if (props.value) {
            const parsedValue = props.options
                .filter((o) => props.value.includes(o.value))
                .map((i) => ({ label: i.label, value: i.value }));
            setContent(parsedValue);
        }
    }, []);
    const optionsWrapperRef = React.createRef();
    const optionsRef = React.createRef();
    const componentRef = React.createRef();
    React.useEffect(() => {
        const wrapperWidth = optionsWrapperRef.current
            .offsetWidth;
        const options = optionsRef.current;
        if (options) {
            options.style.width = `${wrapperWidth}px`;
        }
    }, [optionsWrapperRef, optionsRef]);
    const handleClick = (event) => {
        var _a;
        if (optionsRef) {
            const isRelated = (_a = optionsRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target);
            if (!isRelated)
                handleOpenClose(!isOpened);
        }
    };
    const handleBlur = handleDisplayBlur(componentRef, handleOpenClose);
    const handleChange = (option) => {
        const isSelected = content.find((c) => c.value === option.value);
        if (isSelected) {
            const selected = content.filter((c) => c.value !== option.value);
            setContent(selected);
        }
        else {
            setContent([...content, option]);
        }
    };
    const options = props.options || [];
    return (jsxRuntime.jsxs("div", Object.assign({ className: "select-component-wrapper", onClick: handleClick, onBlur: handleBlur, tabIndex: 0, ref: componentRef }, { children: [jsxRuntime.jsx(SelectInput, { isOpened: isOpened, contentDisplay: contentDisplay }), jsxRuntime.jsx(OptionsWrapper, { content: content, isOpened: isOpened, optionsWrapperRef: optionsWrapperRef, optionsRef: optionsRef, options: options, handleChange: handleChange })] })));
};

const inputsOptionsDefault = {
    input: Input,
    select: Select,
    multiselect: Multiselect,
    datePicker: DatePicker,
};

const InputWrapper = React.forwardRef((props, ref) => {
    const Component = props.component;
    const onChange = (v) => {
        props.setFormData(props.itemData.name, v);
        if (props.onChange) {
            props.onChange(props.payload.current);
        }
    };
    return (jsxRuntime.jsxs("div", Object.assign({ className: "form-input-wrapper" }, { children: [jsxRuntime.jsx(Component, Object.assign({}, props, { name: props.itemData.name, value: props.formData && props.formData[props.itemData.name], onChange: onChange, shouldClear: props.shouldClear })), jsxRuntime.jsx("div", Object.assign({ className: "error-message" }, { children: jsxRuntime.jsx("span", { children: props.errors[props.itemData.name] || "" }) }))] })));
});

const inferType = (typeValue, collection) => collection[typeValue];
const configInputs = ({ config, inputsOptions, payload, formContent, shouldClear, errors, setFormContent, onChange, }) => {
    const options = inputsOptions
        ? Object.assign(Object.assign({}, inputsOptionsDefault), inputsOptions) : inputsOptionsDefault;
    return config.map((item) => {
        var _a, _b;
        const Component = inferType(item.config.inputType, options);
        const colStyle = ((_a = item.config.style) === null || _a === void 0 ? void 0 : _a.cols)
            ? `col-${(_b = item.config.style) === null || _b === void 0 ? void 0 : _b.cols}`
            : "col-12";
        const ref = React.createRef();
        const component = (jsxRuntime.jsxs("div", Object.assign({ className: `form_builder__item ${colStyle}` }, { children: [jsxRuntime.jsx("div", Object.assign({ className: "form_builder__item-label" }, { children: jsxRuntime.jsx("span", { children: item.label }) })), jsxRuntime.jsx(InputWrapper, Object.assign({ component: Component, itemData: item, formData: Object.assign(Object.assign({}, formContent), payload.current), setFormData: setFormContent, ref: ref, payload: payload, onChange: onChange, shouldClear: shouldClear, errors: errors }, item.config.props))] }), uuid.v4()));
        return { component, ref, name: item.name };
    });
};

exports.ValidationType = void 0;
(function (ValidationType) {
    ValidationType["EMAIL"] = "email";
    ValidationType["PASSWORD"] = "password";
})(exports.ValidationType || (exports.ValidationType = {}));

const errorMessages = {
    required: "Field required",
    email: "Must be a valid email",
    password: "Password must have between 8 and 12 characters, an uppercase letter, a lowercase letter, a special character and a number ",
};

const getDefaultResult = () => ({ error: false, message: "" });
const required = (item) => {
    var _a;
    if ((_a = item.config) === null || _a === void 0 ? void 0 : _a.required) {
        const state = item.payload[item.name];
        const hasError = Array.isArray(state)
            ? state.length === 0
            : state === undefined || state === null || state === "";
        return {
            item,
            result: {
                error: hasError,
                message: hasError ? errorMessages.required : "",
            },
        };
    }
    return { item, result: getDefaultResult() };
};
const callback = ({ item, result, }) => {
    var _a;
    if (result.error)
        return { item, result };
    if ((_a = item.config) === null || _a === void 0 ? void 0 : _a.callback) {
        const state = item.payload[item.name];
        return {
            item,
            result: item.config.callback(state, item.payload),
        };
    }
    return {
        item,
        result,
    };
};
const email = ({ item, result, }) => {
    var _a;
    if (result.error)
        return { item, result };
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const state = item.payload[item.name];
    const isValid = regex.test(state);
    if (((_a = item.config) === null || _a === void 0 ? void 0 : _a.type) === exports.ValidationType.EMAIL) {
        return {
            item,
            result: {
                error: !isValid,
                message: isValid ? "" : errorMessages.email,
            },
        };
    }
    return {
        item,
        result,
    };
};
const password = ({ item, result, }) => {
    var _a;
    if (result.error)
        return { item, result };
    const regex = /((?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])){8,12}/;
    const state = item.payload[item.name];
    const isValid = regex.test(state);
    if (((_a = item.config) === null || _a === void 0 ? void 0 : _a.type) === exports.ValidationType.PASSWORD) {
        return {
            item,
            result: {
                error: !isValid,
                message: isValid ? "" : errorMessages.password,
            },
        };
    }
    return {
        item,
        result,
    };
};

const validate = (item) => {
    return pipe(item, required, email, password, callback);
};
const validator = ({ payload, config, }) => {
    const errorsData = config
        .map((i) => validate({
        payload: payload.current,
        name: i.name,
        config: i.config.validation,
    }))
        .map((v) => [v.item.name, v.result.message]);
    return Object.fromEntries(errorsData);
};

var css_248z = "span {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.form-builder {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  width: 100%;\n}\n.form-builder__title-wrapper {\n  padding: 20px 0;\n}\n.form-builder__title-wrapper .form-builder__title {\n  display: flex;\n  justify-content: center;\n  font-size: 30px;\n}\n.form-builder__items {\n  column-gap: 10px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  background-color: white;\n  box-sizing: border-box;\n}\n.form-builder__items .form_builder__item {\n  display: flex;\n  flex-direction: column;\n}\n.form-builder__items .form_builder__item + .form_builder__item {\n  margin-top: 20px;\n}\n.form-builder__items .form_builder__item + .form_builder__item[class*=\" col-\"] {\n  margin-top: 0;\n}\n.form-builder__items .form_builder__item-label {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: flex-start;\n}\n.form-builder__items .form_builder__item.col-1 {\n  grid-column: span 1;\n}\n.form-builder__items .form_builder__item.col-2 {\n  grid-column: span 2;\n}\n.form-builder__items .form_builder__item.col-3 {\n  grid-column: span 3;\n}\n.form-builder__items .form_builder__item.col-4 {\n  grid-column: span 4;\n}\n.form-builder__items .form_builder__item.col-5 {\n  grid-column: span 5;\n}\n.form-builder__items .form_builder__item.col-6 {\n  grid-column: span 6;\n}\n.form-builder__items .form_builder__item.col-7 {\n  grid-column: span 7;\n}\n.form-builder__items .form_builder__item.col-8 {\n  grid-column: span 8;\n}\n.form-builder__items .form_builder__item.col-9 {\n  grid-column: span 9;\n}\n.form-builder__items .form_builder__item.col-10 {\n  grid-column: span 10;\n}\n.form-builder__items .form_builder__item.col-11 {\n  grid-column: span 11;\n}\n.form-builder__items .form_builder__item.col-12 {\n  grid-column: span 12;\n}\n.form-builder .form-builder__buttons {\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n}\n.form-builder .form-builder__buttons .form-builder__button {\n  width: 80px;\n  height: 40px;\n  background-color: white;\n  border-radius: 3px;\n  border: 1px solid black;\n}\n.form-builder .form-builder__buttons .form-builder__button + .form-builder__button {\n  margin-left: 40px;\n}\n.form-builder .form-builder__buttons .form-builder__button:active {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.form-builder .form-builder__buttons .form-builder__button:hover {\n  cursor: pointer;\n}\n\n.form-input-wrapper .error-message {\n  color: #b33030;\n  font-size: 12px;\n  min-height: 25px;\n  display: flex;\n  align-items: center;\n}";
styleInject(css_248z);

const FormBuilder = (props) => {
    const payload = React.useRef({});
    const setPayload = (name, value) => (payload.current = Object.assign(Object.assign({}, payload.current), { [name]: value }));
    const [shouldClear, setShouldClear] = React.useState(false);
    const [errors, setErrors] = React.useState({});
    React.useEffect(() => {
        if (shouldClear)
            setShouldClear(false);
    }, [shouldClear]);
    React.useEffect(() => {
        if (props.formContent)
            payload.current = props.formContent;
    }, []);
    const InputsData = configInputs(Object.assign(Object.assign({}, props), { payload,
        shouldClear,
        errors, setFormContent: setPayload }));
    const Inputs = InputsData.map((i) => i.component);
    const onClickSubmit = () => {
        const errorsResult = validator({ payload, config: props.config });
        const isFormValid = Object.values(errorsResult).every((i) => !i);
        if (isFormValid) {
            if (props.onValid) {
                props.onValid(payload.current);
            }
            setErrors({});
        }
        else {
            if (props.onInvalid)
                props.onInvalid(payload.current);
            setErrors(Object.assign({}, errorsResult));
        }
    };
    const clear = () => {
        setShouldClear(true);
        payload.current = {};
    };
    return (jsxRuntime.jsxs("div", Object.assign({ className: "form-builder" }, { children: [jsxRuntime.jsx("div", Object.assign({ className: "form-builder__title-wrapper" }, { children: jsxRuntime.jsx("span", Object.assign({ className: "form-builder__title" }, { children: props.title })) })), jsxRuntime.jsx("div", Object.assign({ className: "form-builder__items" }, { children: Inputs })), (props.submitButton && props.submitButton(onClickSubmit)) || (jsxRuntime.jsx(Buttons, { onSubmit: onClickSubmit, clear: clear }))] })));
};

const configForm = (inputsOptions) => (formConfig) => {
    return FormBuilder(Object.assign(Object.assign({}, inputsOptions), formConfig));
};

exports.FormBuilder = configForm;
exports["default"] = configForm;
