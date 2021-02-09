const createWelcomePage = () => {
  const innerDiv = document.createElement('div');
  innerDiv.classList.add('content');

  const welHeader = document.createElement('h3');
  welHeader.classList.add('centerText');
  welHeader.textContent = 'Established Since 1984. Voted Number 2 Restaurant in the Galaxy.';

  const welImg = document.createElement('img');
  welImg.classList.add('center');
  welImg.src = "img/food.jpg"
  welImg.height = 250;
  welImg.width = 250;

  const para = document.createElement('p');
  para.classList.add('centerText');

  para.textContent =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  innerDiv.appendChild(welHeader);
  innerDiv.appendChild(welImg);
  innerDiv.appendChild(para);

  return innerDiv;
}

export default createWelcomePage;