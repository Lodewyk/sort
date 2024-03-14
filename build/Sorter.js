"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this; // deconstructing - assign var "length" the value of the collection's "length" property
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) { // basic bubble sort
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
                /*
                 * Old code, no good
                // only number arrays
                if (this.collection instanceof Array) { // type guard - lifts the union restriction from "collection" set by "public collection: number[] | string"
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }

                if (typeof this.collection === 'string') {
                    
                }
                */
            }
        }
    }
}
exports.Sorter = Sorter;
