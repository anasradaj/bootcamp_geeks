const inputElementKeydown = document.getElementById("letterOnly");

inputElementKeydown.addEventListener("keydown", function(event) {
  const key = event.key;
  if (!/^[a-zA-Z]$/.test(key) && key !== 'Backspace' && key !== 'Delete' && !key.startsWith('Arrow')) {
    event.preventDefault();
  }
});