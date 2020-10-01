// ! TYPICAL ARRAY PROBLEMS

exports.min = function min(array) {
    if (array == "" || array == undefined) {
        return 0;
    } else {
        return Math.min(...array);
    }
};

exports.max = function max(array) {
    if (array == "" || array == undefined) {
        return 0;
    } else {
        return Math.max(...array);
    }
};

exports.avg = function avg(array) {
    return 0;
};
