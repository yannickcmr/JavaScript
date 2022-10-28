let    werte1 = [1,2,3,4,5,6,7,9,8],
        werte2 = [3,2,4,1,6,7,5,9,8],
        werte3 = [-9, 0, 30, 1, 27, 96, 69, 420];

function Swap(A, pos_x, pos_y){
        let  array_cache = Array.from(A);

        array_cache[pos_x] = A[pos_y];
        array_cache[pos_y] = A[pos_x];

    return array_cache
}

function QuickSort(A,  lo,  hi){
    // just checking, whether lo, hi are correct.
    array_sort  = Array.from(A)
    if (lo < 0){return array_sort};
    if (hi <= lo){return array_sort};

    [pivot, array_sort] = Array_Partition(array_sort, lo, hi);

    array_sort = QuickSort(array_sort, lo, pivot - 1);
    array_sort = QuickSort(array_sort, pivot + 1, hi);

    return array_sort
}

function Array_Partition(A, lo, hi){
    var pivot_loop = A[hi],
            i = lo - 1;

    for (let j = lo; j < hi;  j++){

        if (A[j] <= pivot_loop){
            i = i + 1;
            A = Swap(A, i, j);
            }
        }
    i = i + 1;
    A = Swap(A, i, hi);
    return [i, A]
    }

test1 = QuickSort(werte1, 0, werte1.length - 1);
test2 = QuickSort(werte2, 0, werte2.length - 1);
test3 = QuickSort(werte3, 0, werte3.length - 1);
console.log(test1, test2, test3 )