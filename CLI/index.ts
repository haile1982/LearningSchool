// 1- construire une arbre TreeNode
import * as fs from "fs";
import { buildTree } from "./module";

const treeNode = buildTree("../Courses");

// parcours dans un arbre
// parcours en largeur (niveau par niveau)
// parcours en profondeur (parcours branche par branche)

const filename = "graph2.mermaid";

let data_mermaid =
  "mindmap" +
  "\n \t root((Courses))" +
  " \n \t \t     TypeScript " +
  "\n \t \t         \t Module" +
  "\n \t \t      Rust \n" +
  "\n \t \t      JavaScript \n" +
  "\n \t \t        \t  Variables" +
  "\n \t \t         \t Scopes";

fs.writeFileSync(filename, data_mermaid);

const stack = [treeNode];

if (treeNode != null) {
  while (stack.length) {
    const currentNode = stack.pop();

    if (currentNode) {
      const children = currentNode.children;
      for (let child of children) {
        if (child.path.match("README.md")) {
          console.log(child.path);
          // lire première ligne du Readme.md
          // string tokenizer
          const tab_tokens: Array<string> = child.path.split("/");

          const reader = fs.createReadStream(child.path);
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
