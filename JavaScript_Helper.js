function isBoolean(a) {
    return typeof a === 'boolean';
}

function isNumber(a) {
    return typeof a === 'number';
}

function isString(a) {
    return typeof a === 'string';
}

function isFunction(a) {
    return typeof a === 'function';
}

function isObject(a) {
    return a !== null && typeof a === 'object';
}

function isArray(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
}

function isUndefined(a) {
    return typeof a === 'undefined';
}

function isNull(a) {
    return typeof a === 'null';
}

function isPrimitive(a) {
    return a === null || typeof a !== 'object' && typeof a !== 'function';
}

function printLog(a) {
    console.log(a);
}

function printLogError(a) {
    console.error(a);
}

function printLogJsonPretty(a) {
    console.log(JSON.stringify(a, null, "\t"));
}