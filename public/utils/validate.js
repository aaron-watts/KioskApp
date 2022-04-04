export const isAaron = (name) => {
    return name.value === 'Aaron';
}

export const isValidDate = (nodeList) => {
    const date = new Date(Array.from(nodeList).map(i => i.value).reverse());

    return date != 'Invalid Date';
};

export const isPast = (date) => {
    return true;
};
