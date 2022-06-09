let switchers = document.querySelectorAll(".section-3__switcer");
for (let index = 0; index < switchers.length; index++) {
    const element = switchers[index];
    element.addEventListener("click", changeSwitcher);
}
function changeSwitcher(){
    for(const switcher of switchers)
    {
        switcher.classList.remove('switcer-active');
    }
    this.classList.add("switcer-active");
    changeContent(this.dataset.switcher);
}
function changeContent(atributValue){
    let contents = document.querySelectorAll(".section-3-content");
    for(const content of contents)
    {
       let contentAtributeValue = content.dataset.switcher;
       if(contentAtributeValue == atributValue){
           content.classList.add("section-3-content-active");
       }
       else{
        content.classList.remove("section-3-content-active");
       };
    }
}


// ACORDION

let acordionSectionsDOM = document.querySelectorAll(".acordion-section");

let acordionSections = [];

for (y=0; y<acordionSectionsDOM.length;y++)
{
    let titleElement = acordionSectionsDOM[y].querySelector(".acordion__title");
    let stateElement = acordionSectionsDOM[y].querySelector(".acordion__icon");
    let iconElement = acordionSectionsDOM[y].querySelector(".acordion__icon-horizontal");
    let contentElement = acordionSectionsDOM[y].querySelector(".acordion__main-block");

    acordionSections[y] = 
    {
        title: titleElement,
        state: stateElement,
        icon: iconElement,
        content: contentElement
    };
}
console.log(acordionSections)

for (let i = 0; i<acordionSections.length; i++)
{
    acordionSections[i].state.dataset.active = "no";
    acordionSections[i].title.addEventListener("click", openOrClouseSection);

    ClouseSection(acordionSections[i].title);
};


function openOrClouseSection()
{
    console.log(this);

    let sectionState = this.querySelector(".acordion__icon").dataset.active;

    console.log(sectionState);

    if(sectionState == "no"){
        OpenSection(this);
        this.querySelector(".acordion__icon").dataset.active = "yes";
    }
    else 
    {
        ClouseSection(this);
        this.querySelector(".acordion__icon").dataset.active = "no";
    }
    
}

function ClouseSection(acordionTitle){
    console.log(acordionTitle.parentElement);
    let icon = acordionTitle.parentElement.querySelector(".acordion__icon-horizontal");
    console.log(icon);
    let content = acordionTitle.parentElement.querySelector(".acordion__main-block");
    console.log(content);

    icon.classList.add("icon-horizontal_headen");
    content.classList.add("main-block_headen");

}

function  OpenSection(acordionTitle)
{
    let icon = acordionTitle.parentElement.querySelector(".acordion__icon-horizontal");
    console.log(icon);
    let content = acordionTitle.parentElement.querySelector(".acordion__main-block");
    console.log(content);
    icon.classList.remove("icon-horizontal_headen");
    content.classList.remove("main-block_headen");

}


// FORM CLEAN

let formInputs = document.querySelectorAll("#form-input");
let buttonCleanForm = document.querySelector(".button-send");
buttonCleanForm.addEventListener("click", cleanInput);
function cleanInput ()
{
    for (const input of formInputs)
    {
        input.value = "";
    }
}

