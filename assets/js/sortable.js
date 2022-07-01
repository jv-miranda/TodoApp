const dragArea = document.querySelector(`#dragArea`)
new Sortable(dragArea, {
  filter: '.checkbox',
  animation: 350
})