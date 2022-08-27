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
})