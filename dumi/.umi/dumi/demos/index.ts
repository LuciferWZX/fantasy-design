// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'Button-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/wuzhixin/Desktop/workspace/fantasy-design/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@fantasy-design/components");

  var App = function App() {
    return /*#__PURE__*/_react["default"].createElement(_components.Button, {
      disabled: true
    });
  };

  var _default = App;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React,{FC} from \"react\";\nimport {Button} from \"@fantasy-design/components\";\n\nconst App: FC=() => {\n    return (\n        <Button disabled={true}  />\n    )\n}\nexport default App"}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"Button-demo"},
  },
};
