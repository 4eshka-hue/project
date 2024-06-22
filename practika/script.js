const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementsByClassName('close')[0];

openModal.onclick = function() {
  modal.style.display = "block";
}

closeModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}