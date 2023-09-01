function getAllKeys(obj) {
    const keys = [];

    for (let key in obj) {
        keys.push(key);
    }

    return keys;
}