const toggleButton = document.getElementById('modeToggle');
toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  
  if(document.body.classList.contains('dark')) {
    toggleButton.textContent = '☀️ Light Mode';
  } else {
    toggleButton.textContent = '🌙 Dark Mode';
  }
});

// DRAGGABLE WINDOW FUNCTIONALITY
dragElement(document.getElementById("aboutWindow"));
dragElement(document.getElementById("projectsWindow"));
dragElement(document.getElementById("blogWindow"));

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const header = elmnt.querySelector(".window-header");

  header.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// CLOSE BUTTON (Optional)
function closeWindow(id) {
  document.getElementById(id).style.display = 'none';
}


function openWindow(id) {
  const win = document.getElementById(id);
  if (win) {
    win.style.display = 'block';
  }
}
