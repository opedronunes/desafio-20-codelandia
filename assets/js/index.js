let toggle = document.querySelector('.toggle')
let menu = document.querySelector('.menu')

toggle.onclick = function(){
  menu.classList.toggle('active')
};

let btn = document.querySelectorAll('button')
let tabs = document.querySelectorAll('.tabs > div')

btn.forEach(function(click){
  click.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.add('content-tabs')
    })

    let tabId = click.getAttribute('data-id')
    let tab = document.querySelector("#" + tabId)
    tab.classList.remove('content-tabs')

  })
});

const listHeader = document.querySelectorAll('.list-header');
function activeLinkHeader(){
    listHeader.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
listHeader.forEach((item) =>
item.addEventListener('click', activeLinkHeader));

const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink));
