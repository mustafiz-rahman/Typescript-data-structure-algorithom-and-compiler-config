"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharatersCollection = void 0;
var CharatersCollection = /** @class */ (function () {
    function CharatersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharatersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharatersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() >
            this.data[rightIndex].toLowerCase());
    };
    CharatersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var character = this.data.split('');
        var temp = character[leftIndex];
        character[leftIndex] = character[rightIndex];
        character[rightIndex] = temp;
        this.data = character.join('');
    };
    return CharatersCollection;
}());
exports.CharatersCollection = CharatersCollection;
