import { HOOKS } from './utils/constants';
import populateTrans from './populate_trans';
import doPigLatin from './do_pig_latin';


function translate(e) {
    e.preventDefault();
    const input = e.target.querySelector(HOOKS.input);
    const olId = e.target.getAttribute('data-history-id');
    const value = input.value;
    if (value !== '') {
        const pigLatin = doPigLatin(value);
        populateTrans(pigLatin, value, olId);
    }
    input.value = null;
}

function bindTranslate() {
    const resultsArray = document.querySelectorAll(HOOKS.form);

    for (let i = 0; i < resultsArray.length; i++) {
        resultsArray[i].addEventListener('submit', translate);
    }
}

export default bindTranslate;
