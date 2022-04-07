export const isNotBlank = inputNode => inputNode.value.length;

export const isValidDate = nodeList => {
    const date = new Date(Array.from(nodeList).map(node => node.value).reverse());

    return date != 'Invalid Date';
};

export const isPastDate = nodeList => {
    const date = new Date(Array.from(nodeList).map(node => node.value).reverse());
    const today = new Date();

    return today - date > 0;
};

export const isValidPostCode = inputNode => {
    const postCodeRegex = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;

    return postCodeRegex.test(inputNode.value);
};

export const isValidPhoneNumber = inputNode => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    return phoneRegex.test(inputNode.value);
};
