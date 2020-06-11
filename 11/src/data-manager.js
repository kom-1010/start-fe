function saveData(data) {
  console.log('todos: ', data);
  localStorage.setItem('data', JSON.stringify(data));
}

function loadData() {
  const dataString = localStorage.getItem('data') || '[]';
  console.log(dataString);
  return JSON.parse(dataString);
}

export { saveData, loadData };
