import consonantCluster from './consonant_cluster';
import { VOWELS } from './utils/constants';

function isVowel(letter) {
    return VOWELS.indexOf(letter) > -1;
}

function doPigLatin(value) {
    // split sentence into an array
    const wordArray = value.split(' ');
    const newWordArray = wordArray.map(word => {
        // split each word into a letter array
        const letterArray = word.split('');
        // loop through array. find where first vowel is in array and break. return index of first vowel
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
        const vowelIndex = letterArray.findIndex(isVowel);
        let translation;
        if (vowelIndex === 0) {
            translation = `${word}way`;
        } else if (vowelIndex > -1) {
            translation = consonantCluster(word, vowelIndex);
        } else {
            // doesnt contain any vowels
            translation = word;
        }
        return translation;
    });
    return newWordArray.join(' ');
}

export default doPigLatin;
