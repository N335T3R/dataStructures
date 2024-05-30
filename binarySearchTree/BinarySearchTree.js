class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}



function binarySearchTree (array) {
    const start = 0;
    const mid = Math.floor(array.length / 2);
    const end = array.length;

    // console.log(array);

    if (end === 0) {
        return null;
    } 

    var root = new Node(array[mid]); 
    array.splice(mid, 1);
    // console.log(array[mid]);
    // console.log(root);
    
    var leftArray = array.slice(start, mid);
    // console.log(leftArray);
    var rightArray = array.slice(mid, end);
    // console.log(rightArray);

    root.left = binarySearchTree(leftArray);
    root.right = binarySearchTree(rightArray);
    return root;
}
