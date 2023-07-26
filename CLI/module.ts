import * as fs from "fs";

//  Recursivité,  utilisée  pour fabriquer une Liste Chainée
//  1-->2-->3-->4
//  1-->2-->5-->6

class TreeNode {
  public path: string;
  public children: Array<TreeNode>;

  constructor(path: string) {
    this.path = path;
    this.children = [];
  }
}

export function buildTree(rootPath: string) {
  const root = new TreeNode(rootPath);

  const stack = [root];

  console.log(stack.length);

  while (stack.length) {
    const currentNode = stack.pop();

    if (currentNode) {
      const children = fs.readdirSync(currentNode.path);

      for (let child of children) {
        const childPath = `${currentNode.path}/${child}`;
        const childNode = new TreeNode(childPath);

        currentNode.children.push(childNode);

        if (fs.statSync(childNode.path).isDirectory()) {
          stack.push(childNode);
        }
      }
    }
  }

  return root;
}
