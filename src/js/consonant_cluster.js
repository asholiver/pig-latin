
function consonantCluster(word, vowelIndex) {
    // splits word into two sections, prior to vowel and after including the vowel
    const firstValue = word.substr(0, vowelIndex);
    const secondValue = word.substr(vowelIndex, word.length - 1);
    return `${secondValue}${firstValue}ay`;
}

export default consonantCluster;
