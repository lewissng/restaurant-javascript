//console.log("simple statement");

import createWelcomePage from './modules/homepage';
import { menuPage } from './modules/menuPage';
import createContactPage from './modules/contactUs';


function createTabContent(id, tabsyDiv, tabName, checked, pageModule) {
    const input = document.createElement('input');
    input.type = "radio";
    input.id = id;
    input.name = "tab";
    input.checked = checked;
    tabsyDiv.appendChild(input);

    const label = document.createElement('label');
    label.classList.add('tabButton');
    label.htmlFor = id;
    label.textContent = tabName;
    tabsyDiv.appendChild(label);

    const div = document.createElement('div');
    div.classList.add('tab');
    tabsyDiv.appendChild(div);

    //const innerDiv = document.createElement('div');
    //innerDiv.classList.add('content');
    div.appendChild(pageModule);

    //innerDiv.appendChild(pageModule);

    return tabsyDiv;
}


const main = document.getElementById("content");
const tabsyDiv = document.createElement("div");
tabsyDiv.classList.add('tabsy');

main.appendChild(tabsyDiv);

const tab1 = createTabContent("tab1", tabsyDiv, "Welcome", true, createWelcomePage());
const tab2 = createTabContent("tab2", tab1, "Menu", false, menuPage());
createTabContent("tab3", tab2, "Contact", false, createContactPage());

