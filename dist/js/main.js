import Columns from './columns'

document.addEventListener('DOMContentLoaded', () => {
    alert('hurray');
    let breakpoints = {
        480: 3,
        840: 4,
    };
    let wrapper = document.querySelector('.columns-wrapper');
    alert
    let grid = new Columns(wrapper, {
        columns: 3, 
        breakpoints: breakpoints,
    });
});