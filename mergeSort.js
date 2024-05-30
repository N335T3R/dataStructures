// takes in an unsorted array and returns a sorted array
function mergeSort (array) {
    // Sort
    if (array.length === 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const leftArray = array.slice(0, mid);
    const rightArray = array.slice(mid, array.length);

    const left = mergeSort(leftArray);
    const right = mergeSort(rightArray);


    // Merge
    let newArray = [];
    let j = 0;
    let k = 0;

    while (j < left.length && k < right.length) {
        if (left[j] < right[k]) {
            newArray.push(left[j]);
            j++;
        } else {
            newArray.push(right[k]);
            k++;
        }
    }

    if (j < left.length) {
        while (j < left.length) {
            newArray.push(left[j]);
            j++;
        }
    } else if (k < right.length) {
        while (k < right.length) {
            newArray.push(right[k]);
            k++;
        }
    }


    return newArray;
}