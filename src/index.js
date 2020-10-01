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
    if (array == "" || array == undefined) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
};
