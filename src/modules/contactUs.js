const createContactPage = () => {

  const innerDiv = document.createElement('div');
  innerDiv.classList.add('content');

  const para = document.createElement('p');
  innerDiv.classList.add('centerText');
  para.textContent = "Please key in your contact information and we will be in touch shortly."

  const contactForm = document.createElement('form');
  contactForm.id = "contactUsForm"

  const nameInput = document.createElement('input');
  nameInput.type = "text";
  nameInput.name = "custName";
  nameInput.value = "Please enter your name";

  const emailInput = document.createElement('input');
  emailInput.type = "text";
  emailInput.name = "custEmail";
  emailInput.value = "Your email please";

  const submitBtn = document.createElement('input');
  submitBtn.type = "submit";
  submitBtn.value = "Send Away";

  contactForm.appendChild(nameInput);
  contactForm.appendChild(emailInput);
  contactForm.appendChild(submitBtn);

  para.appendChild(contactForm);

  innerDiv.appendChild(para);

  return innerDiv;
}

export default createContactPage;