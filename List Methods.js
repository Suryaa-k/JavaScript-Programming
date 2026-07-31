class MyList {
    constructor() {
        this.capacity = 2;
        this.size = 0;
        this.data = new Array(this.capacity);
    }

    _resize() {
        this.capacity *= 2;
        const newData = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) newData[i] = this.data[i];
        this.data = newData;
    }

    append(value) {
        if (this.size === this.capacity) this._resize();
        this.data[this.size++] = value;
    }

    insert(index, value) {
        if (index < 0 || index > this.size) return;
        if (this.size === this.capacity) this._resize();
        for (let i = this.size; i > index; i--) this.data[i] = this.data[i - 1];
        this.data[index] = value;
        this.size++;
    }

    indexOf(value) {
        for (let i = 0; i < this.size; i++) if (this.data[i] === value) return i;
        return -1;
    }

    removeValue(value) {
        const idx = this.indexOf(value);
        if (idx === -1) return;
        for (let i = idx; i < this.size - 1; i++) this.data[i] = this.data[i + 1];
        this.size--;
    }

    pop(index) {
        if (index < 0 || index >= this.size) return -1;
        const val = this.data[index];
        for (let i = index; i < this.size - 1; i++) this.data[i] = this.data[i + 1];
        this.size--;
        return val;
    }

    reverse() {
        let left = 0, right = this.size - 1;
        while (left < right) {
            [this.data[left], this.data[right]] = [this.data[right], this.data[left]];
            left++; right--;
        }
    }

    isEmpty() { return this.size === 0; }

    print() {
        let result = "";
        for (let i = 0; i < this.size; i++) result += this.data[i] + " ";
        console.log(result);
    }
}

const l = new MyList();
l.append(10); l.append(20); l.append(30);
l.print();

l.insert(1, 15);
l.print();

l.removeValue(20);
l.print();

const popped = l.pop(0);
console.log("Popped:", popped);
l.print();

l.reverse();
l.print();

console.log("Size:", l.size, "Empty:", l.isEmpty());