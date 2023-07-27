"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
// 1- construire une arbre TreeNode
var fs = require("fs");
var module_1 = require("./module");
// npm i --save-dev @types/fs-extra
var treeNode = (0, module_1.buildTree)("../Courses");
// parcours dans un arbre
// parcours en largeur (niveau par niveau)
// parcours en profondeur (parcours branche par branche)
var filename = "graph2.mermaid";
var TreeOntology = /** @class */ (function () {
    function TreeOntology(concept) {
        this.concept = concept;
        this.children = [];
    }
    return TreeOntology;
}());
var data_mermaid = "mindmap" +
    "\n \t root((Courses))" +
    " \n \t \t     TypeScript " +
    "\n \t \t         \t Module" +
    "\n \t \t      Rust \n" +
    "\n \t \t      JavaScript \n" +
    "\n \t \t        \t  Variables" +
    "\n \t \t         \t Scopes";
fs.writeFileSync(filename, data_mermaid);
var stack = [treeNode];
var count = 0;
var rootConcept;
function createTreeOntology() {
    while (stack.length) {
        var currentNode = stack.pop();
        if (currentNode) {
            var children = currentNode.children;
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var child = children_1[_i];
                console.log(child.path);
                var tab_tokens = child.path.split("/");
                if (tab_tokens[0] && count === 0) {
                    rootConcept = new TreeOntology(tab_tokens[0]);
                    count = count + 1;
                }
                if (child.path.match("README.md")) {
                    var reader = fs.createReadStream(child.path);
                    reader.on("data", function (file) {
                        var concept = file.toString().trim().split("\n")[0];
                        console.log(concept);
                        var childConcept = new TreeOntology(concept);
                        rootConcept.children.push(childConcept);
                    });
                }
                if (child.children) {
                    stack.push(child);
                }
            }
        }
    }
    return rootConcept;
}
function readTreeOntology(rootConcept) {
    var stack = [rootConcept];
    var level = 0;
    console.log("---------*********-------------");
    while (stack.length) {
        var currentNode = stack.pop();
        var nl = level === 0 ? "" : "\n";
        var decalage = "\t".repeat(level);
        console.log("".concat(nl, " ").concat(decalage, " ").concat(currentNode === null || currentNode === void 0 ? void 0 : currentNode.concept));
        if (currentNode) {
            var children = currentNode.children;
            for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
                var child = children_2[_i];
                console.log("".concat(nl, " ").concat(decalage, " ").concat(child.concept));
                if (child.children) {
                    stack.push(child);
                }
            }
        }
        level = level + 1;
    }
}
var toto = createTreeOntology();
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // Do something before delay
                console.log("before delay");
                return [4 /*yield*/, delay(1000)];
            case 1:
                _a.sent();
                // Do something after
                console.log("after delay");
                readTreeOntology(toto);
                return [2 /*return*/];
        }
    });
}); })();
// 2- à partir de TreeNode generer un graph au format Mermaid MindMapping (generation de code)
// 3- il faut modifier l'arbre DOM dans mon app ReactJS JSX
// 4- comment rendre interactif le graph
// 5- l'intégration avec l'intelligence artificielle (api )
// MindMapping
// cours
//    - Readme.md
//    - exemples
//    - exos
// javaDoc
// Learning Path / RoadMap
//      cours
//      FlowChart
// 3- il faut modifier l'arbre DOM dans mon app ReactJS JSX
// 4- comment rendre interactif le graph
// 5- l'intégration avec l'intelligence artificielle (api )
// MindMapping
// cours
//    - Readme.md
//    - exemples
//    -exos
// javaDoc
// Learning Path / RoadMap
//      cours
//      FlowChart
