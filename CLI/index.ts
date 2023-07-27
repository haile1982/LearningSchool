// 1- construire une arbre TreeNode
import * as fs from "fs";
import { buildTree } from "./module";

// npm i --save-dev @types/fs-extra

const treeNode = buildTree("../Courses");

// parcours dans un arbre
// parcours en largeur (niveau par niveau)
// parcours en profondeur (parcours branche par branche)

const filename = "graph2.mermaid";

class TreeOntology {
  public concept: string;
  public children: Array<TreeOntology>;

  constructor(concept: string) {
    this.concept = concept;
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

let count: number = 0;

let rootConcept: TreeOntology;

function createTreeOntology() {
  while (stack.length) {
    const currentNode = stack.pop();

    if (currentNode) {
      const children = currentNode.children;
      for (let child of children) {
        console.log(child.path);

        const tab_tokens: Array<string> = child.path.split("/");

        if (tab_tokens[0] && count === 0) {
          rootConcept = new TreeOntology(tab_tokens[0]);
          count = count + 1;
        }

        if (child.path.match("README.md")) {
          const reader = fs.createReadStream(child.path);
          reader.on("data", function (file: string) {
            let concept = file.toString().trim().split("\n")[0];
            console.log(concept);
            const childConcept = new TreeOntology(concept);
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

function readTreeOntology(rootConcept: TreeOntology) {
  const stack = [rootConcept];

  let level = 0;

  console.log("---------*********-------------");

  while (stack.length) {
    const currentNode = stack.pop();

    let nl = level === 0 ? "" : "\n";
    let decalage: string = "\t".repeat(level);
    console.log(`${nl} ${decalage} ${currentNode?.concept}`);
    if (currentNode) {
      const children = currentNode.children;
      for (let child of children) {
        console.log(`${nl} ${decalage} ${child.concept}`);
        if (child.children) {
          stack.push(child);
        }
      }
    }
    level = level + 1;
  }
}
const toto = createTreeOntology();

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
(async () => {
  // Do something before delay
  console.log("before delay");

  await delay(1000);

  // Do something after
  console.log("after delay");
  readTreeOntology(toto);
})();

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
