module.exports.buildDate = (arr) => {
    const date = arr.map(i => parseInt(i)).reverse();
    date[1]--;

    return new Date(...date);
};
