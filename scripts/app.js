// Appending data to DOM
let appendBodyData = data => {
    console.log('base json: ', data)
    
    document.querySelector('title')
      .append(data.meta.title)

    document.querySelector('#descHead')
      .append(data.main.information.description.head)

    document.querySelector('#descSubhead')
      .append(data.main.information.description.subhead)

    document.querySelector('#descBody')
      .append(data.main.information.description.body)
};

// Download base json file
 
 fetch('./data/base.json')
  .then(response => response.json())
  .then(data => appendBodyData(data))
  .catch(error => console.log(error));

