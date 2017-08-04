function createEl(type, props, text = '') {
    const el = document.createElement(type);
    // cycles through each key
    Object.keys(props).forEach(key => {
        // applies to element object
        el[key] = props[key];
    });
    if (text !== '') {
        const textNode = document.createTextNode(text);
        el.appendChild(textNode);
    }
    return el;
}


export default createEl;
