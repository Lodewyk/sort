import { Sortable, Sorter } from "./Sorter";

export class CharactersCollection extends Sorter{
    constructor(public data: string) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        const chars = this.data.split('');
        const tempLeftHand = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = tempLeftHand;

        this.data = chars.join('');
    }
}