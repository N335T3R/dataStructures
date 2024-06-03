// returns array from traversal BST in the order:
// data, left, right
function preorder (node) {
    if (!node.left && !node.right) {
        return node.data;
    }

    var output = [];
    output.push(node.data);

    if (node.left) {
        const left = preorder(node.left);

        // at first return, value will be number
        // after, will be array
        if (typeof left === "number") {
            output.push(left);
        } else if ( typeof left === "object") {
            left.forEach(Number => {
                output.push(Number);
            });
        }
    }
    if (node.right) {
        const right = preorder(node.right);

        // at first return, value will be number
        // after, will be array
        if (typeof right === "number") {
            output.push(right);
        } else if ( typeof right === "object") {
            right.forEach(Number => {
                output.push(Number);
            });
        }
    }


    return output;
}


// returns array from traversal BST in the order:
// left, right, data
function postorder (node) {
    if (!node.left && !node.right) {
        return node.data;
    }

    var output = [];

    if (node.left) {
        const left = postorder(node.left);

        // at first return, value will be number
        // after, will be array
        if (typeof left === "number") {
            output.push(left);
        } else if ( typeof left === "object") {
            left.forEach(Number => {
                output.push(Number);
            });
        }
    }
    if (node.right) {
        const right = postorder(node.right);

        // at first return, value will be number
        // after, will be array
        if (typeof right === "number") {
            output.push(right);
        } else if ( typeof right === "object") {
            right.forEach(Number => {
                output.push(Number);
            });
        }
    }

    output.push(node.data);
    return output;
}


// returns sorted array from BST traversal in the order:
// left, data, right
function inorder (node) {
    if (!node.left && !node.right) {
        return node.data;
    }

    var output = [];

    if (node.left) {
        const left = inorder(node.left);

        // at first return, value will be number
        // after, will be array
        if (typeof left === "number") {
            output.push(left);
        } else if ( typeof left === "object") {
            left.forEach(Number => {
                output.push(Number);
            });
        }
    }


    output.push(node.data);

    
    if (node.right) {
        const right = inorder(node.right);

        // at first return, value will be number
        // after, will be array
        if (typeof right === "number") {
            output.push(right);
        } else if ( typeof right === "object") {
            right.forEach(Number => {
                output.push(Number);
            });
        }
    }


    return output;
}



// returns TRUE if tree contains value; 
// or returns FALSE
function hasValue(Node, value) {
    let current = Node;

    while (value !== current.data) {
        if (!current.left && !current.right) {
            return false;
        } else if (value < current.data) {
            current = current.left;
        } else if (value > current.data) {
            current = current.right;
        }
    }

    return true;
}


// returns "tree-tier" where value is located, meaning
// returns how many navigations, left or right, + 1 to
// locate value in tree; or returns "not found"
function depth (node, value) {
    let tier = 0;
    let current = node;

    while (value !== current.data) {
        if (!current.left && !current.right) {
            const result = 'value not found';
            return result;
        } else if (value < current.data) {
            current = current.left;
            tier++;
        } else if (value > current.data) {
            current = current.right;
            tier++;
        }
    }

    if (value === current.data) {
        return tier;
    }
}


// returns a Node containing value;
// or returns UNDEFINED
function find(Node, value) {
    let current = Node;

    while (value !== current.data) {
        if (!current.left && !current.right) {
            const result = 'value not found';
            return result;
        } else if (value < current.data) {
            current = current.left;
        } else if (value > current.data) {
            current = current.right;
        }
    }

    return current;
}


// if value is not already found in BST,
// adds value to tree as a new Node leaf
function insert (node, value) {
    if (node.left && node.right) {
        if (value < node.data) {
            insert (node.left, value);
        } else if (value > node.data) {
            insert (node.right, value);
        }
    }
    
    if (value === node.data) {
        return;
    } else if (value > node.data) {
        if (node.right) insert (node.right, value)
        else node.right = new Node(value);
    } else if (value < node.data) {
        if (node.left) insert (node.left, value);
        else node.left = new Node(value);
    }
}


// deletes value from BST, preserving all
// children
function deleteItem (node, value) {
    let current = node;
    let previous;

    while (value !== current.data) {
        if (value < current.data) {
            previous = current;
            current = current.left;
        } else if (value > current.data) {
            previous = current;
            current = current.right;
        }
    }

    if (current.left && current.right) {
        let next = current.right;

        while (next.left) {
            previous = next;
            next = next.left;
        }
        // console.log(next, current, previous);

        current.data = next.data;

        if (next.right) next.right = previous.left;
        else previous.left = null;
    } 
    
    
    if (current.data < previous.data) {
        if (current.left) {
            let next = current.left;
            previous.left = next;
        } else if (current.right) {
            let next = current.right;
            previous.left = current.right;
        } else {
            previous.left = null;
        }
    }
    
    if (current.data > previous.data) {
        if (current.left) {
            let next = current.left;
            previous.right = next;
        } else if (current.right) {
            let next = current.right;
            previous.right = current.right;
        } else {
            previous.right = null;
        }
    }
}