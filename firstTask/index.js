Array.prototype.customFilter = function (predicate) {
    return this.reduce((filteredArray, currentValue) => {
        if (predicate(currentValue)) {
            filteredArray.push(currentValue);
        }
        return filteredArray;
    }, []);
};