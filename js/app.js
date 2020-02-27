document.querySelector('#generate-list').addEventListener('submit', loadNames);


function loadNames(e){
    e.preventDefault()
   const origin = document.getElementById('country').value;
   const gender = document.getElementById('gender').value;
   const number = document.getElementById('quantity').value;
   let url = 'https://uinames.com/api/?';
    if(origin !== ''){
        url += `region=${origin}&`;
    }
    if(gender !== ''){
        url += `gender=${gender}&`;
    }
    if(number !== ''){
        url += `amount=${number}&`;
    }
    fetch(url)
    .then(function(response){
        return response.json();
        console.log(response);
    })
    .then(function(names){
       let html = '<h2>Names Generated....</h2>';
       html += '<ul class="list">'; 
       
          names.forEach(function(name){
           console.log(name);
          });
       
       html += `<li>${name.name}</li>`;
       html+='</ul>';
       
    })
    document.getElementById('result').innerHTML = html;
}