const dragArea = document.querySelector(`#dragArea`)
new Sortable(dragArea, {
  filter: '.filteredOnSortable',
  animation: 350
})
