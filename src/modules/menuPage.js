function createMenuList(itemName, itemDesc) {
  const menuItem = document.createElement('dt');
  menuItem.textContent = itemName;

  const menuDesc = document.createElement('dd');
  menuDesc.textContent = itemDesc;

  return [menuItem, menuDesc];
}

const menuPage = () => {

  const innerDiv = document.createElement('div');
  innerDiv.classList.add('content');

  const menuTitle = document.createElement('h3');
  menuTitle.textContent = "Food That Puts Your Mama's Cooking to Shame";
  menuTitle.classList.add('centerText');

  const para = document.createElement('p');
  para.classList.add('centerText');
  para.innerHTML = `Please don't procrastinate and come enjoy our reasonably
  priced delectable delights now!`;

  const para2 = document.createElement('p');
  para2.classList.add('centerText');

  const menuList = document.createElement('dl');

  const coffee = createMenuList("COFFEE", "Tradition drip coffee from 100% Arabica");
  const greenTea = createMenuList("GREEN TEA", "Tradition matcha sourced from Kyoto green tea leaves");
  const milk = createMenuList("MILK", "Milk keeps your bones strong");
  const burger = createMenuList("BURGER", "Burger made from cows we kill daily");
  const rice = createMenuList("RICE", "No rice no life");
  const noodles = createMenuList("NOODLES", "Like rice but not really");

  menuList.appendChild(coffee[0]);
  menuList.appendChild(coffee[1]);
  menuList.appendChild(greenTea[0]);
  menuList.appendChild(greenTea[1]);
  menuList.appendChild(milk[0]);
  menuList.appendChild(milk[1]);
  menuList.appendChild(burger[0]);
  menuList.appendChild(burger[1]);
  menuList.appendChild(rice[0]);
  menuList.appendChild(rice[1]);
  menuList.appendChild(noodles[0]);
  menuList.appendChild(noodles[1]);

  para2.appendChild(menuList);
  
  innerDiv.appendChild(menuTitle);
  innerDiv.appendChild(para);
  innerDiv.appendChild(para2);

  return innerDiv;
}

export {
  menuPage
}