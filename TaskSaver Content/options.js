// Save this script as `options.js`

// Saves options to localStorage.
function save_options() {
  var select = document.getElementById("region");
  var region = select.children[select.selectedIndex].value;
  localStorage["Region"] = region;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved. You can close this tab now!";
  setTimeout(function() {
    status.innerHTML = "";
  }, 2000);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var region = localStorage["Region"];
  if (!region) {
    return;
  }
  var select = document.getElementById("region");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == region) {
      child.selected = "true";
      break;
    }
  }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);