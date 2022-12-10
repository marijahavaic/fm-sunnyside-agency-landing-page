const openDropdownBtn = document.getElementById("openbtn");
const dropdown = document.getElementById("dropdownContent");

/* Toggle dropdown display (block / none) */
function openDropdown() {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
