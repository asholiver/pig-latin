import { div, p, li } from './utils/elements';
import { WORD_HISTORY } from './utils/constants';

function populateTrans(pigLatin, engText, olId) {
    const ol = document.getElementById(olId);
    const englishDiv = div({ className: 'c-translated__text' }, engText);
    const latinDiv = div({ className: 'c-translated__text' }, pigLatin);
    const englishP = p({ className: 'c-translated__lang-text' }, 'English');
    const pigLatinP = p({ className: 'c-translated__lang-text' }, 'Pig Latin');
    const liEl = li({ className: 'c-translated__item' });
    liEl.appendChild(englishP);
    liEl.appendChild(englishDiv);
    liEl.appendChild(pigLatinP);
    liEl.appendChild(latinDiv);
    ol.insertBefore(liEl, ol.firstChild);
    const historyCount = ol.childElementCount;
    if (historyCount > WORD_HISTORY) {
        ol.removeChild(ol.lastChild);
    }
}

export default populateTrans;
