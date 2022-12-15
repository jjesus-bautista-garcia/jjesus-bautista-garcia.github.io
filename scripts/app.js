// Appending data to DOM
let appendBodyData = data => {
    console.log('base json: ', data)
    
    innerDescription(data)

    innerBody(data)
};
// / inner description data to DOM
let innerDescription = data => {
  document.querySelector('title')
      .append(data.meta.title)

  document.querySelector('#descHead')
    .append(data.main.information.description.head)

  document.querySelector('#descSubhead')
    .append(data.main.information.description.subhead)
} 

let innerBody = data => {
  const bodyId = "descBody";
  const bodyDataObject = data.main.information.description.body;
  
  for (const [key, value] of Object.entries(bodyDataObject)) {
    let bodyElement = document.getElementById(bodyId);
    let elementNode = document.createElement('p');
    let textNode = document.createTextNode(`${value}`);

    
    elementNode.setAttribute('id', bodyId+'Child');
    elementNode.appendChild(textNode);
    bodyElement.appendChild(elementNode);

    console.log(`${key} - ${value} `)
  };
}
// Download base json file
 
 fetch('./data/base.json')
  .then(response => response.json())
  .then(data => appendBodyData(data))
  .catch(error => console.log(error));

 // Checked input
let checkbox = document.querySelector(".header-container input[type=checkbox]");
let mainContent = document.querySelector("div.mainContent");
checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    mainContent.style.display = 'none';

  } else {
    console.log("Checkbox is not checked..");
    mainContent.style.display = 'block';
  }
});

