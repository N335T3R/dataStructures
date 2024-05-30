// takes 2 sorted arrays and merges them in 
// sorted order
function merge (array1, array2) {
    let total = array1.length + array2.length;
    let newArray = [];
    let j = 0;
    let k = 0;

    while (j < array1.length || k < array2.length) {
        if (array1[j] < array2[k]) {
            newArray.push(array1[j]);
            j++;
        } else {
            newArray.push(array2[k]);
            k++;
        }
    }

    if (j < array2.length) {
        while (j < array1.length) {
            newArray.push(array1[j]);
            j++;
        }
    } else if (k < array1.length) {
        while (k < array2.length) {
            newArray.push(array2[k]);
            k++;
        }
    }

    return newArray;
}