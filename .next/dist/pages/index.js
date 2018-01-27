'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Alex\\workspace\\hello-next\\pages\\index.js?entry';


var PostLink = function PostLink(props) {
	return _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement(_link2.default, { as: '/p/' + props.id, href: '/post?title=' + props.title, __source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement('a', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, props.title)));
};

exports.default = function () {
	return _react2.default.createElement(_MyLayout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement('h1', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, 'My Blog'), _react2.default.createElement('ul', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement(PostLink, { id: 'hello-nextjs', title: 'Hello Next.js', __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}), _react2.default.createElement(PostLink, { id: 'learn-nextjs', title: 'Learn Next.js is awesome', __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}), _react2.default.createElement(PostLink, { id: 'deploy-nextjs', title: 'Deploy apps with Zeit', __source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	})));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJMaW5rIiwiUG9zdExpbmsiLCJwcm9wcyIsImlkIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxXQUFXLFNBQVgsQUFBVyxTQUFBLEFBQUMsT0FBRDt3QkFDZixjQUFBOzthQUFBO2VBQUEsQUFDRDtBQURDO0FBQUEsRUFBQSxrQkFDRCxBQUFDLGdDQUFLLFlBQVUsTUFBaEIsQUFBc0IsSUFBTSx1QkFBcUIsTUFBakQsQUFBdUQ7YUFBdkQ7ZUFBQSxBQUNFO0FBREY7b0JBQ0UsY0FBQTs7YUFBQTtlQUFBLEFBQUk7QUFBSjtBQUFBLFVBSGMsQUFDZixBQUNELEFBQ0UsQUFBVTtBQUhiLEFBUUE7O2tCQUFlLFlBQUE7d0JBQ2IsQUFBQzs7YUFBRDtlQUFBLEFBQ0E7QUFEQTtBQUFBLEVBQUEsa0JBQ0EsY0FBQTs7YUFBQTtlQUFBO0FBQUE7QUFBQSxJQURBLEFBQ0EsQUFDQSw0QkFBQSxjQUFBOzthQUFBO2VBQUEsQUFDQztBQUREO0FBQUEsa0NBQ0MsQUFBQyxZQUFTLElBQVYsQUFBYSxnQkFBZSxPQUE1QixBQUFrQzthQUFsQztlQURELEFBQ0MsQUFDQTtBQURBO21DQUNBLEFBQUMsWUFBUyxJQUFWLEFBQWEsZ0JBQWUsT0FBNUIsQUFBa0M7YUFBbEM7ZUFGRCxBQUVDLEFBQ0E7QUFEQTttQ0FDQSxBQUFDLFlBQVMsSUFBVixBQUFhLGlCQUFnQixPQUE3QixBQUFtQzthQUFuQztlQU5ZLEFBQ2IsQUFFQSxBQUdDO0FBQUE7O0FBTkgiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWxleC93b3Jrc3BhY2UvaGVsbG8tbmV4dCJ9