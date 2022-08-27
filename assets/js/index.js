let toggle = document.querySelector('.toggle')
let menu = document.querySelector('.menu')

toggle.onclick = function(){
  menu.classList.toggle('active')
};

/*
function buttonShowContent(){
  let content = document.getElementById("content");
  content.onclick = function(){
    if(content.style.display === "none"){
      content.style.display = "block";
    }else{
      content.style.display = "none";
    }

  }
};
*/

let btn = document.querySelectorAll('button')
let tabs = document.querySelectorAll('.tabs > div')

btn.forEach(function(click){
  click.addEventListener('click', function(){
    tabs.forEach(function(tab){
      tab.classList.add('content-tabs')
    })

    let tabId = click.getAttribute('data-id')
    let tab = document.querySelector("#" + tabId)
    tab.classList.remove('content-tabs')

  })
})