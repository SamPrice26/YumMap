
var selectedType = '';
var selectedLocation = '';

document.getElementById('selectCafe').addEventListener('click', function() {
  selectedType = 'cafe';
});

document.getElementById('selectLondon').addEventListener('click', function() {
  selectedLocation = 'london';
});

document.querySelector('.search').addEventListener('click', function() {
  if (selectedType === 'cafe' && selectedLocation === 'london') {
    // Redirect to the cafe in London page
    window.location.href = 'bakeries.html';
  } else {
    
    alert('Please select both a type and a location.');
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var subscribeForm = document.getElementById('subscribeform');

  subscribeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    
    var email = document.getElementById('emailinput').value;
    var name = document.getElementById('nameinput').value;

    
    console.log('Email:', email);
    console.log('Name:', name);

    
    document.getElementById('emailinput').value = '';
    document.getElementById('nameinput').value = '';
  });
});