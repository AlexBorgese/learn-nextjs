'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Alex\\workspace\\hello-next\\pages\\post.js?entry';


var Content = function Content(props) {
		return _react2.default.createElement('div', {
				__source: {
						fileName: _jsxFileName,
						lineNumber: 4
				}
		}, _react2.default.createElement('h1', {
				__source: {
						fileName: _jsxFileName,
						lineNumber: 5
				}
		}, props.url.query.title), _react2.default.createElement('p', {
				__source: {
						fileName: _jsxFileName,
						lineNumber: 6
				}
		}, 'This is the blog post content.'));
};

exports.default = function (props) {
		return _react2.default.createElement(_MyLayout2.default, {
				__source: {
						fileName: _jsxFileName,
						lineNumber: 11
				}
		}, _react2.default.createElement(Content, { url: props.url, __source: {
						fileName: _jsxFileName,
						lineNumber: 12
				}
		}));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkNvbnRlbnQiLCJwcm9wcyIsInVybCIsInF1ZXJ5IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7Ozs7OztBQUVuQixJQUFNLFVBQVUsU0FBVixBQUFVLFFBQUEsQUFBQyxPQUFEO3lCQUNiLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0Q7QUFEQztBQUFBLEdBQUEsa0JBQ0QsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSztBQUFMO0FBQUEsV0FBSyxBQUFNLElBQU4sQUFBVSxNQURkLEFBQ0QsQUFBcUIsQUFDckIsd0JBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSGMsQUFDYixBQUVEO0FBSEYsQUFPQTs7a0JBQWUsVUFBQSxBQUFDLE9BQUQ7eUJBQ2QsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxnQ0FDRyxBQUFDLFdBQVEsS0FBSyxNQUFkLEFBQW9CO2dCQUFwQjtrQkFGVyxBQUNkLEFBQ0c7QUFBQTs7QUFGSiIsImZpbGUiOiJwb3N0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FsZXgvd29ya3NwYWNlL2hlbGxvLW5leHQifQ==