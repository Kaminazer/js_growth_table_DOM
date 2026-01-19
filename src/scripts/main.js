'use strict';

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const tBody = document.querySelector('.field tbody');

let currentRows = tBody.querySelectorAll('tr').length;
let currentColumns = tBody.querySelector('tr').cells.length;

const addRowBtn = document.querySelector('.append-row');
const addColumnBtn = document.querySelector('.append-column');
const removeRowBtn = document.querySelector('.remove-row');
const removeColumnBtn = document.querySelector('.remove-column');

updateBtnStates();

addRowBtn.addEventListener('click', () => {
  const newRow = tBody.querySelector('tr').cloneNode(true);

  tBody.appendChild(newRow);
  currentRows++;
  updateBtnStates();
});

removeRowBtn.addEventListener('click', () => {
  const lastRow = tBody.querySelector('tr:last-child');

  lastRow.remove();
  currentRows--;
  updateBtnStates();
});

addColumnBtn.addEventListener('click', () => {
  const rows = tBody.querySelectorAll('tr');

  rows.forEach((row) => {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  });
  currentColumns++;
  updateBtnStates();
});

removeColumnBtn.addEventListener('click', () => {
  const rows = tBody.querySelectorAll('tr');

  rows.forEach((row) => {
    const lastCelll = row.querySelector('td:last-child');

    lastCelll.remove();
  });
  currentColumns--;
  updateBtnStates();
});

function updateBtnStates() {
  if (currentRows <= MIN_COUNT) {
    removeRowBtn.disabled = true;
  } else {
    removeRowBtn.disabled = false;
  }

  if (currentRows >= MAX_COUNT) {
    addRowBtn.disabled = true;
  } else {
    addRowBtn.disabled = false;
  }

  if (currentColumns <= MIN_COUNT) {
    removeColumnBtn.disabled = true;
  } else {
    removeColumnBtn.disabled = false;
  }

  if (currentColumns >= MAX_COUNT) {
    addColumnBtn.disabled = true;
  } else {
    addColumnBtn.disabled = false;
  }
}
