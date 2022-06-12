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
// console.log(acordionSections)

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

    // console.log(sectionState);

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
    
    let icon = acordionTitle.parentElement.querySelector(".acordion__icon-horizontal");

    let content = acordionTitle.parentElement.querySelector(".acordion__main-block");


    icon.classList.add("icon-horizontal_headen");
    content.classList.add("main-block_headen");

}

function  OpenSection(acordionTitle)
{
    let icon = acordionTitle.parentElement.querySelector(".acordion__icon-horizontal");

    let content = acordionTitle.parentElement.querySelector(".acordion__main-block");

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


// SCROLLING

let menuLinks = document.querySelectorAll(".menu-links");

if (menuLinks.length > 0);
    {   for (const menuLink of menuLinks)
        {
            // menuLink.preventDefault();
            menuLink.addEventListener("click", onMenuLinkClick)
        }
        // menuLinks.forEach(menuLink => {
        //     "click", onMenuLinkClick});
    }
    function onMenuLinkClick(element){
        const menuLink = element.target;
        // перевіряємо чи є дата атребут в обєкта на який клікнули і чи існує обєкт на який має перейти після кліка
        if(menuLink.dataset.transition && document.querySelector(menuLink.dataset.transition))
        {
            const transitionBlock = document.querySelector(menuLink.dataset.transition);
            // getBoundingClientRect().top - получає местопололожения обєкта в пикселях
            // scrollY - це раніше було pageYOffset - воно видає кількість пікселів які вже були прокручені з початку стторінки

            const transitionBlockValue = transitionBlock.getBoundingClientRect().top + scrollY;
            // console.log(`scroly = ${scrollY}; transitionBlockValue = ${transitionBlockValue}`)
            // transitionBlockValue - має значення його знаходження в пікселях від його початку

            //код який заставляє прокрутитись до потрімного момента
            window.scrollTo({
                // треба прокрутитись зверху того ТОП на вказану кількість пікселів яка в переменной transitionBlockValue
                top:transitionBlockValue,
                //  behavior:"smooth" означає шо прокрутка має бути плавной
                behavior:"smooth"
            });
            //отключає роботу силки
            element.preventDefault();
        }
    }


    // Disactive links
    let allLinks = document.querySelectorAll("body a");

    for (const link of allLinks)
    {
        link.addEventListener("click", disableLinks);
    }
    function disableLinks(element)
    {
      
            element.preventDefault();
    }

    