class NestedList {
    constructor() {
        this.rowCapacity = 2;
        this.rowCount = 0;
        this.rows = new Array(this.rowCapacity);
    }

    _resize() {
        this.rowCapacity *= 2;
        const newRows = new Array(this.rowCapacity);
        for (let i = 0; i < this.rowCount; i++) newRows[i] = this.rows[i];
        this.rows = newRows;
    }

    addRow(arr) {
        if (this.rowCount === this.rowCapacity) this._resize();
        const newRow = new Array(arr.length);
        for (let i = 0; i < arr.length; i++) newRow[i] = arr[i];
        this.rows[this.rowCount++] = newRow;
    }

    get(row, col) { return this.rows[row][col]; }
    set(row, col, value) { this.rows[row][col] = value; }

    traverse() {
        for (let i = 0; i < this.rowCount; i++) {
            let line = "";
            for (let j = 0; j < this.rows[i].length; j++) line += this.rows[i][j] + " ";
            console.log(line);
        }
    }

    flatten() {
        let total = 0;
        for (let i = 0; i < this.rowCount; i++) total += this.rows[i].length;
        const flat = new Array(total);
        let idx = 0;
        for (let i = 0; i < this.rowCount; i++)
            for (let j = 0; j < this.rows[i].length; j++)
                flat[idx++] = this.rows[i][j];
        return flat;
    }
}

const nl = new NestedList();
nl.addRow([1, 2, 3]);
nl.addRow([4, 5]);
nl.addRow([6, 7, 8, 9]);

nl.traverse();

console.log("get(2,1) =", nl.get(2, 1));
nl.set(0, 0, 99);
nl.traverse();

const flat = nl.flatten();
console.log("Flattened:", flat.join(" "));