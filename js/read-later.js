const add = document.querySelector(".add");
const newNote = document.querySelector(".new-note");

const mangaList = document.querySelector(".added");

let list = [];
let nevManga = [];

function remake() {
  for (i = 0; i < list.length; i++) {
    nevManga.push(`<li class="list-item">
                <p>${list[i]}</p>
                <button class="delete" id="${i}"   >remove</button>
            </li>`);
  }
}

add.addEventListener("click", function () {
  nevManga = [];
  let mangaName = newNote.value;
  list.push(mangaName);
  newNote.value = "";

  remake();
  render();
  ravi();
});

function render() {
  mangaList.innerHTML = "";
  for (i = 0; i < nevManga.length; i++) {
    mangaList.innerHTML += nevManga[i];
  }
}

function ravi() {
  const delBtn = document.querySelectorAll(".delete");

  delBtn.forEach(function (b) {
    b.addEventListener("click", function () {
      console.log(b.id);
      list.splice(b.id, 1);
      nevManga.splice(b.id, 1);
      render();
      ravi();
    });
  });
}
