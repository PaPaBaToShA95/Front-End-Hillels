function curryAdd(x) {
    return function (y) {
        return x * y;
    }
}