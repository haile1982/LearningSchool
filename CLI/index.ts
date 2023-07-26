// 1- construire une arbre TreeNode
import * as fs from "fs";
import { buildTree } from "./module";

const treeNode = buildTree("../Courses");

// parcours dans un arbre
// parcours en largeur (niveau par niveau)
// parcours en profondeur (parcours branche par branche)

const filename = "graph2.mermaid";

class TreeVertex {
  public path: string;
  public children: Array<TreeVertex>;

  constructor(path: string) {
    this.path = path;
    this.children = [];
  }
}

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

while (stack.length) {
  const currentNode = stack.pop();

  if (currentNode) {
    const children = currentNode.children;
    for (let child of children) {
      console.log(child.path);

      const tab_tokens: Array<string> = child.path.split("/");

      if (child.path.match("README.md")) {
        const reader = fs.createReadStream(child.path);
        reader.on("data", function (file: string) {
          console.log(file.toString().trim().split("\n")[0]);
        });
      }

      if (child.children) {
        stack.push(child);
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
