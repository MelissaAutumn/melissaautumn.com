import './tdov';

document.getElementById('menu-btn').addEventListener('click', (evt) => {
  const target = evt.target;
  const split = document.getElementById('split');
  const isExpanded = target.ariaExpanded;

  // Text booleans get me everytime!
  if (isExpanded === 'false') {
    split.classList.replace('closed', 'expanded');
    target.ariaExpanded = 'true';
  } else {
    split.classList.replace('expanded', 'closed');
    target.ariaExpanded = 'false';
  }
});