const findResourceByAuthorName = (array, author) => {
    const results = [];

    for (let index = 0; index < array.length; index ++) {
        if (array[index].author === author) {
            results.push(array[index]);
        }
    }

    return results;
}

const getIndexById = (array, id) => {
    return array.findIndex((element) => {
        return element.id === Number(id);
    })
}

const getElementById = (array, id) => {
    return array.find((element) => {
        return element.id === Number(id);
    })
}

module.exports = {
    findResourceByAuthorName,
    getIndexById,
    getElementById
}