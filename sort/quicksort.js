class Quicksort{
    constructor(arr) {
        this._arr = arr;
    }

    sort(arr=this._arr, start=0, end) {
        end = end || arr.length -1;

        if(arr.length > 1) {
            let pivot = this.partition(arr, start, end);

            if(start < pivot -1) {
                this.sort(arr, start,  pivot-1);
            }

            if(end > pivot) {
                this.sort(arr, pivot, end);
            }
        }

        return arr;
    }

    partition(arr, start, end) {
        let l = start;
        let r = end;
        let pivot = arr[Math.floor(Math.random()*(end - start) + start)];
        // let pivot = arr[Math.floor((start+end)/2)];

        while(l <= r) {
            while(arr[l] < pivot) {
                l ++;
            }
            
            while(arr[r] > pivot) {
                r --;
            }

            if(l <= r) {
                this.swap(arr, l, r);

                l ++;
                r --;
            }
        }

        return l;
    }

    swap(arr, x, y) {
        let temp = arr[x];

        arr[x] = arr[y];
        arr[y] = temp;
    }
}

let qsort = new Quicksort();

console.log(qsort.sort([3, 4, 6, 10, 2, 19]));
console.log(qsort.sort([0, 0, 0, 10, 2, 19]));