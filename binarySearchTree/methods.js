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

