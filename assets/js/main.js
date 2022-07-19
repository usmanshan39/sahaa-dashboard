const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});
const $buttonb  = document.querySelector('#sidebar-toggle-inner');

$buttonb.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});



// bar graph
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
      label: 'apples',
      data: [5000, 100, 500],
      backgroundColor: "rgba(153,255,51,1)"
    }, {
      label: 'oranges',
      data: [4000, 3500, 400],
      backgroundColor: "rgba(255,153,0,1)"
    }]
  }
});



