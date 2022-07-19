const $button = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});
const $buttonb = document.querySelector('#sidebar-toggle-inner');

$buttonb.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});



// bar graph

const imgPath = "E:/testings/saha/sahaa-dashboard/assets/images";
const data = {
  labels: ['Calls', 'Email', 'Messenger', 'Whatsapp', 'Website'],
  datasets: [
    {
    barThickness: 35,
    label: 'Week of May 13, 2022 Clicks',
    data: [100, 500, 50, 300 , 400],
    backgroundColor: ['#d07503', '#FA254C', '#8C2BFC', '#25C966' ,'#2479FF'],
    borderWidth: 1
  }
]
};

// config 
const config = {
  type: 'bar',
  data,
  options: {
    plugins: {
      labels: {
        render: 'image',
        images: [
          {
          src: imgPath + "/Call - Color.svg",
          width: 25,
          height: 25
        },
        {
          src: imgPath + "/Email - Color.svg",
          width: 25,
          height: 25
        },
        {
          src: imgPath + "/Messenger - Color.svg",
          width: 25,
          height: 25
        },
        {
          src: imgPath + "/Whatsapp - Color.svg",
          width: 25,
          height: 25
        },
        {
          src: imgPath + "/Website - Color.svg",
          width: 25,
          height: 25
        }
      ]
      }
    },

  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);