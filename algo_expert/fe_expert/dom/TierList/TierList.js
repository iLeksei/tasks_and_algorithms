// Write your code here.
const dropZones = document.getElementsByClassName("drop-zone");
const unrankedDropZone = document.getElementById("unranked-drop-zone");
const items = document.querySelectorAll(".item");

for(let [index, zone] of Object.entries(dropZones)) {
    zone.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", JSON.stringify({
            id: e.target.id,
            zoneIdx: index,
        }));
    })

    // because zone is not a valid drop target by default.
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    zone.addEventListener('drop', (e) => {
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        if (data.zoneIdx === index) return;
        const draggable = document.getElementById(data.id);
        if (e.currentTarget.className === "drop-zone") {
            e.currentTarget.appendChild(draggable);
        }
    });

}

items.forEach( item => {
    item.addEventListener("dblclick", (e) => {
        let zone = e.target.parentNode;
        if (zone.id !== "unranked-drop-zone") {
            zone.removeChild(item);
            unrankedDropZone.appendChild(item)
        }
    })
})