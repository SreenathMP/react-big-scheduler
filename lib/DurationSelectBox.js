"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 10;\n  width: 180px;\n  background: ", ";\n  border: 1px solid ", ";\n  margin-top: ", ";\n  margin-left: ", ";\n"], ["\n  position: absolute;\n  z-index: 10;\n  width: 180px;\n  background: ", ";\n  border: 1px solid ", ";\n  margin-top: ", ";\n  margin-left: ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  margin: 15px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n"], ["\n  margin: 15px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  line-height: 20px;\n  height: auto;\n  padding: 5px 5px 5px 20px;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: ", ";\n  &:hover {\n    color: ", ";\n    font-weight: 500;\n  }\n  color: ", ";\n  font-weight: ", ";\n  cursor: pointer;\n  &:before {\n    content: \" \\2713\";\n    display: ", ";\n    color: ", ";\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    left: 0;\n  }\n"], ["\n  position: relative;\n  line-height: 20px;\n  height: auto;\n  padding: 5px 5px 5px 20px;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: ", ";\n  &:hover {\n    color: ", ";\n    font-weight: 500;\n  }\n  color: ", ";\n  font-weight: ", ";\n  cursor: pointer;\n  &:before {\n    content: \" \\\\2713\";\n    display: ", ";\n    color: ", ";\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    left: 0;\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  color: #6e717c;\n  font-size: ", ";\n  line-height: ", ";\n  padding-left: 30px;\n  border: ", ";\n"], ["\n  color: #6e717c;\n  font-size: ", ";\n  line-height: ", ";\n  padding-left: 30px;\n  border: ", ";\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  text-align: end;\n  right: 0;\n  top: 14px;\n  margin-right: 18px;\n"], ["\n  position: absolute;\n  text-align: end;\n  right: 0;\n  top: 14px;\n  margin-right: 18px;\n"]);

exports.default = DurationSelectBox;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icon = require("antd/lib/icon");

var _icon2 = _interopRequireDefault(_icon);

var _styles = require("./config/styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FilterWrap = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.grey1;
}, function (props) {
  return props.marginTop;
}, function (props) {
  return props.marginLeft;
});

var FilterDefinedWrap = _styledComponents2.default.div(_templateObject2);

var FilterDefinedOption = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.fontSize.p;
}, function (props) {
  return props.theme.colors.accent;
}, function (props) {
  return !props.isSelected ? props.theme.colors.textSecondary : props.theme.colors.textPrimary;
}, function (props) {
  return !props.isSelected ? props.theme.weight.normal : props.theme.weight.medium;
}, function (props) {
  return props.isSelected ? "block" : "none";
}, function (props) {
  return props.theme.colors.accent;
});

var ChartFilter = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.theme.fontSize.p;
}, function (props) {
  return props.height ? props.height : "26px";
}, function (props) {
  return props.border ? "1px solid #c2c4cf" : "0px solid";
});

var IconWrap = (0, _styledComponents2.default)(_icon2.default)(_templateObject5);

function DurationSelectBox(props) {
  var onChangeOption = props.onChangeOption,
      parseId = props.parseId,
      currentValue = props.currentValue,
      optionList = props.optionList,
      optionKey = props.optionKey,
      optionValue = props.optionValue,
      width = props.width,
      backgroundColor = props.backgroundColor,
      height = props.height,
      border = props.border,
      marginLeft = props.marginLeft,
      marginTop = props.marginTop;


  var filterRef = (0, _react.useRef)(null);
  var filterInnerRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showFilter = _useState2[0],
      setShowFilter = _useState2[1];

  var getCurrentOption = function getCurrentOption(optionVal) {
    var copyVal = {};
    optionList.map(function (option) {
      Object.entries(option).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (optionVal === value) {
          copyVal = option;
        }
        return key;
      });
      return null;
    });
    return copyVal;
  };

  var filterDurationOptions = function filterDurationOptions(optionVal, optionKeyParam) {
    var copyVal = optionVal;
    var currentOption = getCurrentOption(optionVal);
    Object.entries(currentOption).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      if (key === optionKey && optionKeyParam) {
        copyVal = value;
      }
      if (key === optionValue && !optionKeyParam) {
        copyVal = value;
      }
      return null;
    });
    return copyVal.toString().substring(0, 18);
  };

  var getRenderOption = function getRenderOption(option, optionKeyParam) {
    var copyVal = "";
    Object.entries(option).map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          key = _ref6[0],
          value = _ref6[1];

      if (key === optionKey && optionKeyParam) {
        copyVal = value;
      }
      if (key === optionValue && !optionKeyParam) {
        copyVal = value;
      }
      return null;
    });
    return copyVal.toString().substring(0, 18);
  };

  var handleClickOutside = function handleClickOutside(event) {
    if (filterInnerRef && filterInnerRef !== null && filterRef && filterRef !== null) {
      if (filterInnerRef.current && filterInnerRef.current.contains(event.target)) {
        return null;
      }
      if (filterRef.current && filterRef.current.contains(event.target)) {
        setShowFilter(!showFilter);
        return null;
      }
      setShowFilter(false);
    }
    return null;
  };

  (0, _react.useEffect)(function () {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  var setFilter = function setFilter(filter) {
    setShowFilter(false);
    onChangeOption(filter, parseId);
  };

  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _styles2.default },
    _react2.default.createElement(
      "div",
      {
        ref: filterRef,
        style: {
          position: "relative",
          cursor: "pointer",
          width: width !== undefined ? width : "130px",
          backgroundColor: backgroundColor !== undefined ? backgroundColor : "#fff"
        }
      },
      _react2.default.createElement(
        ChartFilter,
        {
          height: height !== undefined ? height : "26px",
          border: border !== undefined
        },
        filterDurationOptions(currentValue, true),
        _react2.default.createElement(IconWrap, {
          type: "down",
          style: {
            fontSize: "12px"
          }
        })
      )
    ),
    showFilter && _react2.default.createElement(
      FilterWrap,
      {
        ref: filterInnerRef,
        marginLeft: marginLeft !== undefined ? marginLeft : "0px",
        marginTop: marginTop !== undefined ? marginTop : "3px"
      },
      _react2.default.createElement("div", {
        style: {
          textAlign: "right",
          padding: "0 5px",
          fontSize: "18px"
        }
      }),
      _react2.default.createElement(
        FilterDefinedWrap,
        null,
        optionList.map(function (filter) {
          return _react2.default.createElement(
            FilterDefinedOption,
            {
              key: getRenderOption(filter, false),
              isSelected: filterDurationOptions(currentValue, false) === getRenderOption(filter, false),
              onClick: function onClick() {
                return setFilter(filter);
              }
            },
            getRenderOption(filter, true)
          );
        })
      )
    )
  );
}