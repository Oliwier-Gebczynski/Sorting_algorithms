function swap(array, leftIndex, rightIndex){
    let pointer = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = pointer;
}

function search(array, left, right){
    const middle = array[Math.floor((right+left)/2)];
    let i = left;
    let j = right;

    while (i<=j){
        while(array[i][0] < middle){
            i++;
        }
        while(array[j][0] > middle){
            j--;
        }
        if (i <= j){
            swap(array, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(array, left, right){
    let index;
    if(array.length > 1){
        index = search(array, left, right);

        if ( left < index - 1 ){
            quickSort(array, left, index-1);
        }

        if( index < right ){
            quickSort(array, index, right);
        }
    }
    return array;
}