let pageId = document.querySelector("[data-id-page]").getAttribute("data-id-page");
let navItem = document.querySelector(`[data-id-nav=${pageId}]`);
console.log(navItem, pageId);
if(pageId == navItem.getAttribute("data-id-nav")) {
navItem.classList.add("active-desktop-link");
navItem.classList.remove('no-active');

}