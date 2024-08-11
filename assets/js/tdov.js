const today = new Date();
if (today.getDate() === 31 && today.getMonth() === 2) {
  const tdov = document.getElementById('tdov');
  tdov.style.opacity = '1';
}