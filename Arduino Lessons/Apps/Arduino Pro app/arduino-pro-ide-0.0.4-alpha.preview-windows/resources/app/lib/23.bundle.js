(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/@theia/markers/lib/browser/marker-tree-model.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/markers/lib/browser/marker-tree-model.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var marker_tree_1 = __webpack_require__(/*! ./marker-tree */ "./node_modules/@theia/markers/lib/browser/marker-tree.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var MarkerTreeModel = /** @class */ (function (_super) {
    __extends(MarkerTreeModel, _super);
    function MarkerTreeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkerTreeModel.prototype.doOpenNode = function (node) {
        if (marker_tree_1.MarkerNode.is(node)) {
            browser_1.open(this.openerService, node.uri, this.getOpenerOptionsByMarker(node));
        }
        else {
            _super.prototype.doOpenNode.call(this, node);
        }
    };
    MarkerTreeModel.prototype.getOpenerOptionsByMarker = function (node) {
        return undefined;
    };
    /**
     * Reveal the corresponding node at the marker.
     * @param node {TreeNode} the tree node.
     */
    MarkerTreeModel.prototype.revealNode = function (node) {
        if (marker_tree_1.MarkerNode.is(node)) {
            browser_1.open(this.openerService, node.uri, __assign({}, this.getOpenerOptionsByMarker(node), { mode: 'reveal' }));
        }
    };
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], MarkerTreeModel.prototype, "openerService", void 0);
    MarkerTreeModel = __decorate([
        inversify_1.injectable()
    ], MarkerTreeModel);
    return MarkerTreeModel;
}(browser_1.TreeModelImpl));
exports.MarkerTreeModel = MarkerTreeModel;


/***/ }),

/***/ "./node_modules/@theia/markers/lib/browser/marker-tree.js":
/*!****************************************************************!*\
  !*** ./node_modules/@theia/markers/lib/browser/marker-tree.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var marker_manager_1 = __webpack_require__(/*! ./marker-manager */ "./node_modules/@theia/markers/lib/browser/marker-manager.js");
var selection_1 = __webpack_require__(/*! @theia/core/lib/common/selection */ "./node_modules/@theia/core/lib/common/selection.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var problem_selection_1 = __webpack_require__(/*! ./problem/problem-selection */ "./node_modules/@theia/markers/lib/browser/problem/problem-selection.js");
exports.MarkerOptions = Symbol('MarkerOptions');
var MarkerTree = /** @class */ (function (_super) {
    __extends(MarkerTree, _super);
    function MarkerTree(markerManager, markerOptions, labelProvider) {
        var _this = _super.call(this) || this;
        _this.markerManager = markerManager;
        _this.markerOptions = markerOptions;
        _this.labelProvider = labelProvider;
        _this.toDispose.push(markerManager.onDidChangeMarkers(function (uri) { return _this.refreshMarkerInfo(uri); }));
        _this.toDispose.push(labelProvider.onDidChange(function (event) { return __awaiter(_this, void 0, void 0, function () {
            var isAnyAffectedNodes, _a, _b, nodeId, node, markerInfoNode, uri, _c, e_1_1;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        isAnyAffectedNodes = false;
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 6, 7, 8]);
                        _a = __values(Object.keys(this.nodes)), _b = _a.next();
                        _e.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        nodeId = _b.value;
                        node = this.nodes[nodeId];
                        markerInfoNode = node;
                        if (!(node && MarkerInfoNode.is(markerInfoNode))) return [3 /*break*/, 4];
                        uri = markerInfoNode.uri;
                        if (!event.affects(uri)) return [3 /*break*/, 4];
                        node.name = this.labelProvider.getName(uri);
                        _c = node;
                        return [4 /*yield*/, this.labelProvider.getIcon(uri)];
                    case 3:
                        _c.icon = _e.sent();
                        isAnyAffectedNodes = true;
                        _e.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        if (isAnyAffectedNodes) {
                            this.fireChanged();
                        }
                        return [2 /*return*/];
                }
            });
        }); }));
        _this.root = {
            visible: false,
            id: 'theia-' + markerOptions.kind + '-marker-widget',
            name: 'MarkerTree',
            kind: markerOptions.kind,
            children: [],
            parent: undefined
        };
        return _this;
    }
    MarkerTree.prototype.refreshMarkerInfo = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var id, existing, markers, node, _a, children;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = uri.toString();
                        existing = this.getNode(id);
                        markers = this.markerManager.findMarkers({ uri: uri });
                        if (markers.length <= 0) {
                            if (MarkerInfoNode.is(existing)) {
                                browser_1.CompositeTreeNode.removeChild(existing.parent, existing);
                                this.removeNode(existing);
                                this.fireChanged();
                            }
                            return [2 /*return*/];
                        }
                        if (!MarkerInfoNode.is(existing)) return [3 /*break*/, 1];
                        _a = existing;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.createMarkerInfo(id, uri)];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        node = _a;
                        browser_1.CompositeTreeNode.addChild(node.parent, node);
                        children = this.getMarkerNodes(node, markers);
                        node.numberOfMarkers = markers.length;
                        this.setChildren(node, children);
                        return [2 /*return*/];
                }
            });
        });
    };
    MarkerTree.prototype.resolveChildren = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            var nodes, _a, _b, id, uri, existing, markers, node, _c, e_2_1;
            var e_2, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!MarkerRootNode.is(parent)) return [3 /*break*/, 11];
                        nodes = [];
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 8, 9, 10]);
                        _a = __values(this.markerManager.getUris()), _b = _a.next();
                        _e.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 7];
                        id = _b.value;
                        uri = new uri_1.default(id);
                        existing = this.getNode(id);
                        markers = this.markerManager.findMarkers({ uri: uri });
                        if (!MarkerInfoNode.is(existing)) return [3 /*break*/, 3];
                        _c = existing;
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.createMarkerInfo(id, uri)];
                    case 4:
                        _c = _e.sent();
                        _e.label = 5;
                    case 5:
                        node = _c;
                        node.children = this.getMarkerNodes(node, markers);
                        node.numberOfMarkers = node.children.length;
                        nodes.push(node);
                        _e.label = 6;
                    case 6:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, nodes];
                    case 11: return [2 /*return*/, _super.prototype.resolveChildren.call(this, parent)];
                }
            });
        });
    };
    MarkerTree.prototype.createMarkerInfo = function (id, uri) {
        return __awaiter(this, void 0, void 0, function () {
            var label, icon, description;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.labelProvider.getName(uri)];
                    case 1:
                        label = _a.sent();
                        return [4 /*yield*/, this.labelProvider.getIcon(uri)];
                    case 2:
                        icon = _a.sent();
                        return [4 /*yield*/, this.labelProvider.getLongName(uri.parent)];
                    case 3:
                        description = _a.sent();
                        return [2 /*return*/, {
                                children: [],
                                expanded: true,
                                uri: uri,
                                id: id,
                                name: label,
                                icon: icon,
                                description: description,
                                parent: this.root,
                                selected: false,
                                numberOfMarkers: 0
                            }];
                }
            });
        });
    };
    MarkerTree.prototype.getMarkerNodes = function (parent, markers) {
        var _this = this;
        return markers.map(function (marker, index) {
            return _this.createMarkerNode(marker, index, parent);
        });
    };
    MarkerTree.prototype.createMarkerNode = function (marker, index, parent) {
        var id = parent.id + '_' + index;
        var existing = this.getNode(id);
        if (MarkerNode.is(existing)) {
            existing.marker = marker;
            return existing;
        }
        return {
            id: id,
            name: 'marker',
            parent: parent,
            selected: false,
            uri: parent.uri,
            marker: marker
        };
    };
    MarkerTree = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [marker_manager_1.MarkerManager, Object, label_provider_1.LabelProvider])
    ], MarkerTree);
    return MarkerTree;
}(browser_1.TreeImpl));
exports.MarkerTree = MarkerTree;
var MarkerNode;
(function (MarkerNode) {
    function is(node) {
        return selection_1.UriSelection.is(node) && browser_1.SelectableTreeNode.is(node) && problem_selection_1.ProblemSelection.is(node);
    }
    MarkerNode.is = is;
})(MarkerNode = exports.MarkerNode || (exports.MarkerNode = {}));
var MarkerInfoNode;
(function (MarkerInfoNode) {
    function is(node) {
        return browser_1.ExpandableTreeNode.is(node) && selection_1.UriSelection.is(node);
    }
    MarkerInfoNode.is = is;
})(MarkerInfoNode = exports.MarkerInfoNode || (exports.MarkerInfoNode = {}));
var MarkerRootNode;
(function (MarkerRootNode) {
    function is(node) {
        return browser_1.CompositeTreeNode.is(node) && 'kind' in node;
    }
    MarkerRootNode.is = is;
})(MarkerRootNode = exports.MarkerRootNode || (exports.MarkerRootNode = {}));


/***/ }),

/***/ "./node_modules/@theia/markers/lib/browser/problem/problem-selection.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/markers/lib/browser/problem/problem-selection.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var selection_command_handler_1 = __webpack_require__(/*! @theia/core/lib/common/selection-command-handler */ "./node_modules/@theia/core/lib/common/selection-command-handler.js");
var problem_marker_1 = __webpack_require__(/*! ../../common/problem-marker */ "./node_modules/@theia/markers/lib/common/problem-marker.js");
var ProblemSelection;
(function (ProblemSelection) {
    function is(arg) {
        return typeof arg === 'object' && ('marker' in arg) && problem_marker_1.ProblemMarker.is(arg['marker']);
    }
    ProblemSelection.is = is;
    var CommandHandler = /** @class */ (function (_super) {
        __extends(CommandHandler, _super);
        function CommandHandler(selectionService, options) {
            var _this = _super.call(this, selectionService, function (arg) { return ProblemSelection.is(arg) ? arg : undefined; }, options) || this;
            _this.selectionService = selectionService;
            _this.options = options;
            return _this;
        }
        return CommandHandler;
    }(selection_command_handler_1.SelectionCommandHandler));
    ProblemSelection.CommandHandler = CommandHandler;
})(ProblemSelection = exports.ProblemSelection || (exports.ProblemSelection = {}));


/***/ }),

/***/ "./node_modules/@theia/markers/lib/browser/problem/problem-tree-model.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/markers/lib/browser/problem/problem-tree-model.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var problem_marker_1 = __webpack_require__(/*! ../../common/problem-marker */ "./node_modules/@theia/markers/lib/common/problem-marker.js");
var problem_manager_1 = __webpack_require__(/*! ./problem-manager */ "./node_modules/@theia/markers/lib/browser/problem/problem-manager.js");
var marker_tree_1 = __webpack_require__(/*! ../marker-tree */ "./node_modules/@theia/markers/lib/browser/marker-tree.js");
var marker_tree_model_1 = __webpack_require__(/*! ../marker-tree-model */ "./node_modules/@theia/markers/lib/browser/marker-tree-model.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var ProblemTree = /** @class */ (function (_super) {
    __extends(ProblemTree, _super);
    function ProblemTree(problemManager, markerOptions, labelProvider) {
        var _this = _super.call(this, problemManager, markerOptions, labelProvider) || this;
        _this.problemManager = problemManager;
        _this.markerOptions = markerOptions;
        _this.labelProvider = labelProvider;
        return _this;
    }
    ProblemTree = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(problem_manager_1.ProblemManager)),
        __param(1, inversify_1.inject(marker_tree_1.MarkerOptions)),
        __param(2, inversify_1.inject(label_provider_1.LabelProvider)),
        __metadata("design:paramtypes", [problem_manager_1.ProblemManager, Object, label_provider_1.LabelProvider])
    ], ProblemTree);
    return ProblemTree;
}(marker_tree_1.MarkerTree));
exports.ProblemTree = ProblemTree;
var ProblemTreeModel = /** @class */ (function (_super) {
    __extends(ProblemTreeModel, _super);
    function ProblemTreeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProblemTreeModel.prototype.getOpenerOptionsByMarker = function (node) {
        if (problem_marker_1.ProblemMarker.is(node.marker)) {
            return {
                selection: node.marker.data.range
            };
        }
        return undefined;
    };
    ProblemTreeModel.prototype.removeNode = function (node) {
        if (marker_tree_1.MarkerInfoNode.is(node)) {
            this.problemManager.cleanAllMarkers(node.uri);
        }
        if (marker_tree_1.MarkerNode.is(node)) {
            var uri = node.uri;
            var owner = node.marker.owner;
            var diagnostics = this.problemManager.findMarkers({ uri: uri, owner: owner, dataFilter: function (data) { return node.marker.data !== data; } }).map(function (_a) {
                var data = _a.data;
                return data;
            });
            this.problemManager.setMarkers(uri, owner, diagnostics);
        }
    };
    __decorate([
        inversify_1.inject(problem_manager_1.ProblemManager),
        __metadata("design:type", problem_manager_1.ProblemManager)
    ], ProblemTreeModel.prototype, "problemManager", void 0);
    ProblemTreeModel = __decorate([
        inversify_1.injectable()
    ], ProblemTreeModel);
    return ProblemTreeModel;
}(marker_tree_model_1.MarkerTreeModel));
exports.ProblemTreeModel = ProblemTreeModel;


/***/ }),

/***/ "./node_modules/@theia/markers/lib/browser/problem/problem-widget.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/markers/lib/browser/problem/problem-widget.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var problem_manager_1 = __webpack_require__(/*! ./problem-manager */ "./node_modules/@theia/markers/lib/browser/problem/problem-manager.js");
var problem_marker_1 = __webpack_require__(/*! ../../common/problem-marker */ "./node_modules/@theia/markers/lib/common/problem-marker.js");
var problem_tree_model_1 = __webpack_require__(/*! ./problem-tree-model */ "./node_modules/@theia/markers/lib/browser/problem/problem-tree-model.js");
var marker_tree_1 = __webpack_require__(/*! ../marker-tree */ "./node_modules/@theia/markers/lib/browser/marker-tree.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
exports.PROBLEMS_WIDGET_ID = 'problems';
var ProblemWidget = /** @class */ (function (_super) {
    __extends(ProblemWidget, _super);
    function ProblemWidget(problemManager, treeProps, model, contextMenuRenderer) {
        var _this = _super.call(this, treeProps, model, contextMenuRenderer) || this;
        _this.problemManager = problemManager;
        _this.treeProps = treeProps;
        _this.model = model;
        _this.contextMenuRenderer = contextMenuRenderer;
        _this.id = exports.PROBLEMS_WIDGET_ID;
        _this.title.label = 'Problems';
        _this.title.caption = 'Problems';
        _this.title.iconClass = 'fa problem-tab-icon';
        _this.title.closable = true;
        _this.addClass('theia-marker-container');
        _this.addClipboardListener(_this.node, 'copy', function (e) { return _this.handleCopy(e); });
        return _this;
    }
    ProblemWidget.prototype.storeState = function () {
        // no-op
        return {};
    };
    ProblemWidget.prototype.superStoreState = function () {
        return _super.prototype.storeState.call(this);
    };
    ProblemWidget.prototype.restoreState = function (state) {
        // no-op
    };
    ProblemWidget.prototype.superRestoreState = function (state) {
        _super.prototype.restoreState.call(this, state);
        return;
    };
    ProblemWidget.prototype.handleClickEvent = function (node, event) {
        _super.prototype.handleClickEvent.call(this, node, event);
        if (marker_tree_1.MarkerNode.is(node)) {
            this.model.revealNode(node);
        }
    };
    ProblemWidget.prototype.handleCopy = function (event) {
        var uris = this.model.selectedNodes.filter(marker_tree_1.MarkerNode.is).map(function (node) { return node.uri.toString(); });
        if (uris.length > 0 && event.clipboardData) {
            event.clipboardData.setData('text/plain', uris.join('\n'));
            event.preventDefault();
        }
    };
    ProblemWidget.prototype.handleDown = function (event) {
        var node = this.model.getNextSelectableNode();
        _super.prototype.handleDown.call(this, event);
        if (marker_tree_1.MarkerNode.is(node)) {
            this.model.revealNode(node);
        }
    };
    ProblemWidget.prototype.handleUp = function (event) {
        var node = this.model.getPrevSelectableNode();
        _super.prototype.handleUp.call(this, event);
        if (marker_tree_1.MarkerNode.is(node)) {
            this.model.revealNode(node);
        }
    };
    ProblemWidget.prototype.renderTree = function (model) {
        if (marker_tree_1.MarkerRootNode.is(model.root) && model.root.children.length > 0) {
            return _super.prototype.renderTree.call(this, model);
        }
        return React.createElement("div", { className: 'theia-widget-noInfo noMarkers' }, "No problems have been detected in the workspace so far.");
    };
    ProblemWidget.prototype.renderCaption = function (node, props) {
        if (marker_tree_1.MarkerInfoNode.is(node)) {
            return this.decorateMarkerFileNode(node);
        }
        else if (marker_tree_1.MarkerNode.is(node)) {
            return this.decorateMarkerNode(node);
        }
        return 'caption';
    };
    ProblemWidget.prototype.renderTailDecorations = function (node, props) {
        return React.createElement("div", { className: 'row-button-container' }, this.renderRemoveButton(node));
    };
    ProblemWidget.prototype.renderRemoveButton = function (node) {
        return React.createElement(ProblemMarkerRemoveButton, { model: this.model, node: node });
    };
    ProblemWidget.prototype.decorateMarkerNode = function (node) {
        if (problem_marker_1.ProblemMarker.is(node.marker)) {
            var severityClass = '';
            var problemMarker = node.marker;
            if (problemMarker.data.severity) {
                severityClass = this.getSeverityClass(problemMarker.data.severity);
            }
            return React.createElement("div", { className: 'markerNode', title: problemMarker.data.message + " (" + (problemMarker.data.range.start.line + 1) + ", " + (problemMarker.data.range.start.character + 1) + ")" },
                React.createElement("div", null,
                    React.createElement("i", { className: severityClass })),
                React.createElement("div", { className: 'owner' }, '[' + (problemMarker.data.source || problemMarker.owner) + ']'),
                React.createElement("div", { className: 'message' },
                    problemMarker.data.message,
                    (problemMarker.data.code) ? React.createElement("span", { className: 'code' }, '[' + problemMarker.data.code + ']') : '',
                    React.createElement("span", { className: 'position' }, '(' + (problemMarker.data.range.start.line + 1) + ', ' + (problemMarker.data.range.start.character + 1) + ')')));
        }
        return '';
    };
    ProblemWidget.prototype.getSeverityClass = function (severity) {
        switch (severity) {
            case 1: return 'fa fa-times-circle error';
            case 2: return 'fa fa-exclamation-circle warning';
            case 3: return 'fa fa-info-circle information';
            default: return 'fa fa-hand-o-up hint';
        }
    };
    ProblemWidget.prototype.decorateMarkerFileNode = function (node) {
        return React.createElement("div", { className: 'markerFileNode' },
            React.createElement("div", { className: (node.icon || '') + ' file-icon' }),
            React.createElement("div", { title: node.name, className: 'name' }, node.name),
            React.createElement("div", { title: node.description || '', className: 'path' }, node.description || ''),
            React.createElement("div", { className: 'notification-count-container' },
                React.createElement("span", { className: 'notification-count' }, node.numberOfMarkers.toString())));
    };
    ProblemWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(problem_manager_1.ProblemManager)),
        __param(1, inversify_1.inject(browser_1.TreeProps)),
        __param(2, inversify_1.inject(problem_tree_model_1.ProblemTreeModel)),
        __param(3, inversify_1.inject(browser_1.ContextMenuRenderer)),
        __metadata("design:paramtypes", [problem_manager_1.ProblemManager, Object, problem_tree_model_1.ProblemTreeModel, Object])
    ], ProblemWidget);
    return ProblemWidget;
}(browser_1.TreeWidget));
exports.ProblemWidget = ProblemWidget;
var ProblemMarkerRemoveButton = /** @class */ (function (_super) {
    __extends(ProblemMarkerRemoveButton, _super);
    function ProblemMarkerRemoveButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.remove = function (e) { return _this.doRemove(e); };
        return _this;
    }
    ProblemMarkerRemoveButton.prototype.render = function () {
        return React.createElement("span", { className: 'remove-node', onClick: this.remove });
    };
    ProblemMarkerRemoveButton.prototype.doRemove = function (e) {
        this.props.model.removeNode(this.props.node);
        e.stopPropagation();
    };
    return ProblemMarkerRemoveButton;
}(React.Component));
exports.ProblemMarkerRemoveButton = ProblemMarkerRemoveButton;


/***/ })

}]);
//# sourceMappingURL=23.bundle.js.map