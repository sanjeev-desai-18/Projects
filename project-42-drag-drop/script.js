const items = Array.from(document.querySelector(".container").children);

const container1 = document.querySelector("#container-1");
const container2 = document.querySelector("#container-2");

console.log(items);

items.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    let selectedItem = e.target;

    container1.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    container1.addEventListener("drop", (e) => {
      container1.appendChild(selectedItem);
      selectedItem = null;
    });

    container2.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    container2.addEventListener("drop", (e) => {
      container2.appendChild(selectedItem);
      selectedItem = null;
    });
  });
});
