/* CAROUSEL */
const slider = document.querySelector('.prod-list');
const leftArrow = document.querySelector('.lft');
const rightArrow = document.querySelector('.rgt');
const indicatorParents = document.querySelector('.selected-ctn');
let sectionIndex = 0;

/////////////////////////////

function setIndex() {
    document.querySelector('.selected-ctn .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -14.28 + '%)';
}

document.querySelectorAll('.selected-ctn li').forEach(function(indicator, i) {
    indicator.addEventListener('click', function() {
        sectionIndex = i;
        setIndex();
        indicator.classList.add('selected');
    });
});

leftArrow.addEventListener('click', ()=> {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    indicatorParents.children[sectionIndex].classList.add('selected');
    setIndex();
});

rightArrow.addEventListener('click', ()=> {
    sectionIndex = (sectionIndex < 6) ? sectionIndex + 1 : 6;
    indicatorParents.children[sectionIndex].classList.add('selected');
    setIndex();
});

/////////////////////////////
