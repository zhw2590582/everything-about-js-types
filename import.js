// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import
// 备注：无

// import语句用于导入由另一个模块导出的绑定

import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";