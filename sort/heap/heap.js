class Heap{
    constructor(arr, isMax=true) {
        this.isMax = isMax;
        this._arr = this.buildHeap(arr);
    }

    sort() {
        let arr = this._arr.slice(0);
        let lastElement = arr.length - 1;

        while(lastElement > 0) {
            this.swap(arr, 0, lastElement);

            this.heapify(arr, 0, lastElement);

            lastElement --;
        }

        return arr;
    }

    buildHeap(arr, isMax=this.isMax) {
        let _arr = arr.slice(0);
        let i = Math.floor(_arr.length/2 - 1);

        while(i>=0) {
            this.heapify(_arr, i, _arr.length, isMax);

            i --;
        }

        return _arr;
    }

    heapify(arr, start, end, isMax) {
        isMax = isMax || this.isMax;
        let index, leftChild, rightChild;

        while(start < end) {
            index = start;

            leftChild = 2 * start + 1;
            rightChild = leftChild + 1;

            if(leftChild < end && 
                (
                isMax ? arr[leftChild] > arr[index] : arr[leftChild] < arr[index]
                )
            ) {
                index = leftChild;
            }

            if(rightChild < end && 
                (
                    isMax ? arr[rightChild] > arr[index] : arr[rightChild] < arr[index]
                )
            ) {
                index = rightChild;
            }

            if(index === start) return;

            this.swap(arr, start, index);

            start = index;
        }
    }

    swap(arr, x, y) {
        let temp = arr[x];

        arr[x] = arr[y];

        arr[y] = temp;
    }

    findMax() {
        this.isMax ? this._arr[0] : this.buildHeap(this._arr, true)[0];
    }

    findMin() {
        this.isMax ? this.buildHeap(this._arr, false)[0] : this._arr[0];
    }

    push(key) {
        this._arr.push(key);
        this._arr = this.buildHeap(this._arr);
    }

    extract() {
        let firstNode = this._arr.pop();

        this._arr = this.buildHeap(this._arr);
        return firstNode;
    }

    delete() {
        this._arr.pop();

        this._arr = this.buildHeap(this._arr);
    }

    replace(key) {
        this._arr.splice(0, 1, key);

        this._arr = this.buildHeap(this._arr);
    }

    merge(other) {
        let newArr = this._arr.concat(other);

        return new Heap(newArr, this.isMax)
    }

    size() {
        return this._arr.length;
    }

    isEmpty() {
        return this._arr.length === 0;
    }
}

let heap_max = new Heap([9, 123, 0, 4, 15])
let heap_min = new Heap([9, 123, 0, 4, 15], false)

console.log(heap_max.sort())
console.log(heap_min.sort())