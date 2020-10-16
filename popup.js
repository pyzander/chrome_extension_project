let page = document.getElementById('buttonDiv');
let kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

function constructOptions(kButtonColors) {
  for (let color_hex of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = color_hex;
    button.addEventListener('click', function() {
      chrome.storage.sync.get({color: color_hex}, function() {
        console.log('color is ' + color_hex);
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColor = "' + color_hex + '";'}
          );
        });
      })
    });
    page.appendChild(button);
  }
}
constructOptions(kButtonColors);

// let changeColor = document.getElementById('changeColor');
//
// chrome.storage.sync.get('color', function(data) {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value', data.color);
// });
//
// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   console.log(color);
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };
