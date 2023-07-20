"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1- construire une arbre TreeNode
var fs = require("fs");
var module_1 = require("./module");
var treeNode = (0, module_1.buildTree)("../Courses");
// parcours dans un arbre
// parcours en largeur (niveau par niveau)
// parcours en profondeur (parcours branche par branche)
var filename = "graph2.mermaid";
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
if (treeNode != null) {
    while (stack.length) {
        var currentNode = stack.pop();
        if (currentNode) {
            var children = currentNode.children;
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var child = children_1[_i];
                if (child.path.match("README.md")) {
                    console.log(child.path);
                    // lire première ligne du Readme.md
                    // string tokenizer
                    var tab_tokens = child.path.split("/");
                    var reader = fs.createReadStream(child.path);
                    reader.on("data", function (file) {
                        console.log(file.toString().trim().split("\n")[0]);
                    });
                    if (true) {
                        stack.push(child);
                    }
                }
            }
        }
    }
}
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
