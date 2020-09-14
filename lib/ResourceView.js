"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _templateObject = _taggedTemplateLiteral(["\n  height: 72px;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 25px;\n  border-bottom: 2px solid;\n  &:last-child {\n    border: none;\n  }\n  .option-drop-down {\n    visibility: hidden;\n  }\n"], ["\n  height: 72px;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 25px;\n  border-bottom: 2px solid;\n  &:last-child {\n    border: none;\n  }\n  .option-drop-down {\n    visibility: hidden;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  flex: auto;\n  margin-left: 6px;\n"], ["\n  flex: auto;\n  margin-left: 6px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  color: #2a2d37;\n  line-height: 16px;\n"], ["\n  color: #2a2d37;\n  line-height: 16px;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  color: #989cac;\n  font-size: 12px;\n  line-height: 13px;\n"], ["\n  color: #989cac;\n  font-size: 12px;\n  line-height: 13px;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Image = require("./Components/Image");

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ResourceListWrap = _styledComponents2.default.div(_templateObject);

var ResourceListInfo = _styledComponents2.default.div(_templateObject2);

var TextPrimary = _styledComponents2.default.div(_templateObject3);

var TextTertiary = _styledComponents2.default.div(_templateObject4);

var ResourceCardList = function ResourceCardList(props) {
  return _react2.default.createElement(
    ResourceListWrap,
    null,
    props.viewTypes === 0 && _react2.default.createElement(_Image2.default, {
      src: props.item.img_file_url,
      width: "32px",
      height: "32px",
      style: {
        borderRadius: "50%"
      }
    }),
    _react2.default.createElement(
      ResourceListInfo,
      null,
      _react2.default.createElement(
        TextPrimary,
        null,
        props.item.slotName
      ),
      _react2.default.createElement(
        TextTertiary,
        null,
        props.item.slotSubName[0]
      )
    )
  );
};

var ResourceView = (_temp = _class = function (_Component) {
  _inherits(ResourceView, _Component);

  function ResourceView(props) {
    _classCallCheck(this, ResourceView);

    return _possibleConstructorReturn(this, (ResourceView.__proto__ || Object.getPrototypeOf(ResourceView)).call(this, props));
  }

  _createClass(ResourceView, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          schedulerData = _props.schedulerData,
          contentScrollbarHeight = _props.contentScrollbarHeight,
          slotClickedFunc = _props.slotClickedFunc,
          slotItemTemplateResolver = _props.slotItemTemplateResolver,
          customViewType = _props.customViewType;
      var renderData = schedulerData.renderData;

      var width = schedulerData.getResourceTableWidth() - 2;
      var paddingBottom = contentScrollbarHeight;
      var resourceList = renderData.map(function (item) {
        var a = slotClickedFunc != undefined ? _react2.default.createElement(
          "a",
          {
            onClick: function onClick() {
              slotClickedFunc(schedulerData, item);
            }
          },
          _react2.default.createElement(ResourceCardList, { item: item, viewTypes: customViewType })
        ) : _react2.default.createElement(ResourceCardList, { item: item, viewTypes: customViewType });
        var slotItem = _react2.default.createElement(
          "div",
          {
            className: "overflow-text header2-text",
            style: { textAlign: "left" }
          },
          a
        );
        if (!!slotItemTemplateResolver) {
          var temp = slotItemTemplateResolver(schedulerData, item, slotClickedFunc, width, "overflow-text header2-text");
          if (!!temp) slotItem = temp;
        }

        return _react2.default.createElement(
          "div",
          { key: item.slotId },
          _react2.default.createElement(
            "div",
            { "data-resource-id": item.slotId },
            slotItem
          )
        );
      });

      return _react2.default.createElement(
        "div",
        { style: { paddingBottom: paddingBottom } },
        _react2.default.createElement(
          "div",
          { className: "resource-table" },
          _react2.default.createElement(
            "div",
            null,
            resourceList
          )
        )
      );
    }
  }]);

  return ResourceView;
}(_react.Component), _class.propTypes = {
  schedulerData: _propTypes.PropTypes.object.isRequired,
  contentScrollbarHeight: _propTypes.PropTypes.number.isRequired,
  slotClickedFunc: _propTypes.PropTypes.func,
  slotItemTemplateResolver: _propTypes.PropTypes.func
}, _temp);
exports.default = ResourceView;