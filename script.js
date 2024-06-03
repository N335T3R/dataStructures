// class binarySearchTree {
//     constructor(array) {
//         this.array = array;
//         this.root = null;
//     }

//     buildTree() {
//         const array = this.array;
//         const start = 0;
//         const mid = Math.floor(array.length / 2);
//         const end = array.length;
    
//         // console.log(array);
    
//         if (end === 0) {
//             return null;
//         } 
    
//         var root = new Node(array[mid]); 
//         array.splice(mid, 1);
//         // console.log(array[mid]);
//         // console.log(root);
        
//         var leftArray = array.slice(start, mid);
//         // console.log(leftArray);
//         var rightArray = array.slice(mid, end);
//         // console.log(rightArray);
    
//         root.left = this.buildTree(leftArray);
//         root.right = this.buildTree(rightArray);
//         return root;
//     }
// }

// const tree = new binarySearchTree(smallArray);
// tree.root = tree.buildTree();

// console.log(tree);

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function binarySearchTree (array) {
    if (array.length === 0) {
        return null;
    }

    const mid = Math.floor(array.length / 2);
    const end = array.length;

    var root = new Node(array[mid]);
    array.splice(mid, 1);

    var leftArray = array.slice(0, mid);
    var rightArray = array.slice(mid, end);

    root.left = binarySearchTree(leftArray);
    root.right = binarySearchTree(rightArray);

    return root;
}

var tree = binarySearchTree(myArray);
console.log(tree);

