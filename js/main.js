import Columns from './columns'

document.addEventListener('DOMContentLoaded', () => {
    alert('hurray');
    let breakpoints = {
        480: 3,
        840: 4,
    };
    let wrapper = document.getElementById('columns-wrapper');
    let grid = new Columns(wrapper, {
        columns: 3
    });
});