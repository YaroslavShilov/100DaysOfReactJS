function add(a, b) {
    return a + b;
}
function toUpperCase(string) {
    return string.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b)
        return { x: undefined, y: undefined };
    if (a && !b)
        return { x: a, y: undefined, "default": a.toString() };
    return { x: a, y: b, "default": 'string' };
}
console.log('Empty', position());
console.log('only a', position(32));
console.log('full', position(32, 83));
