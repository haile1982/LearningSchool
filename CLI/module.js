"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTree = void 0;
var fs = require("fs");
//  Recursivité,  utilisée  pour fabriquer une Liste Chainée
//  1-->2-->3-->4
//  1-->2-->5-->6
var TreeNode = /** @class */ (function () {
    function TreeNode(path) {
        this.path = path;
        this.children = [];
    }
    return TreeNode;
}());
function buildTree(rootPath) {
    var root = new TreeNode(rootPath);
    var stack = [root];
    while (stack.length) {
        var currentNode = stack.pop();
        if (currentNode) {
            var children = fs.readdirSync(currentNode.path);
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var child = children_1[_i];
                var childPath = "".concat(currentNode.path, "/").concat(child);
                var childNode = new TreeNode(childPath);
                currentNode.children.push(childNode);
                if (fs.statSync(childNode.path).isDirectory()) {
                    stack.push(childNode);
                }
            }
        }
    }
    return root;
}
exports.buildTree = buildTree;
