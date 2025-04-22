const groupList = document.getElementById("groupList");
const groupInput = document.getElementById("groupInput");

groupInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && groupInput.value.trim()) {
    addGroup(groupInput.value.trim());
    groupInput.value = "";
  }
});

function addGroup(name) {
  const li = document.createElement("li");
  li.className = "group-item";

  const span = document.createElement("span");
  span.textContent = name;

  const btn = document.createElement("button");
  btn.innerHTML = "🗑";
  btn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(btn);
  groupList.appendChild(li);
}
