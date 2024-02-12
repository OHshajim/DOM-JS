// delegate practice
// add item and remove item 


/*  const li = document.getElementsByClassName('item')
        for (const item of li) {
            item.addEventListener('click', function(event){
                event.target.parentNode.removeChild(event.target);    
            }) }    */
// parental remove list-element
document.getElementById('li-container').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
})
// add list-Element
const liBtn = document.getElementById('li-btn')
liBtn.addEventListener('click', function () {
    const listItem = document.createElement('li');
    const list = document.getElementById('li-container');
    listItem.classList.add('item')
    listItem.innerText = 'you';
    list.appendChild(listItem)
})