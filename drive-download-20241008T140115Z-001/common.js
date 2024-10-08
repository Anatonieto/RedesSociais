getCSS = (variavel) => {
    return bodyStyles.getPropertyValue(variavel)
}

export {getCSS}
const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}
export {getCSS, tickConfig}