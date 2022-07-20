// sidebar
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


// for leads button display when click on dots
$(".dots-btn").on("click", function(e){
  e.preventDefault();
  let children =  $(this).siblings(".action-col").toggleClass("d-none");
});


// for closing image upload

function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      var htmlPreview =
        '<img width="200" src="' + e.target.result + '" />' +
        '<p>' + input.files[0].name + '</p>';
      var wrapperZone = $(input).parent();

      wrapperZone.removeClass('dragover');
      previewZone.removeClass('hidden');
      boxZone.empty();
      boxZone.append(htmlPreview);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function reset(e) {
  e.wrap('<form>').closest('form').get(0).reset();
  e.unwrap();
}

$(".dropzone").change(function() {
  readFile(this);
});

$('.dropzone-wrapper').on('dragover', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).addClass('dragover');
});

$('.dropzone-wrapper').on('dragleave', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).removeClass('dragover');
});





// bar graph

// const imgPath = "E:/testings/saha/sahaa-dashboard/assets/images";
const imgPath = "D:/fiverr/sahaa-dashboard/assets/images";
const data = {
  labels: ['Calls', 'Email', 'Messenger', 'Whatsapp', 'Website'],
  datasets: [
    {
    barThickness: 35,
    label: 'Week of May 13, 2022 Clicks',
    data: [100, 350, 50, 300 , 400],
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


/*=========================================
Analytic activity Chart
===========================================*/
var activity = document.getElementById('activity');

var chart = new Chart(activity, {
    // The type of chart we want to create
    type: 'line',
    
    // The data for our dataset
    data: {
        labels: ["May 12, 2022", "May 15, 2022", 'Aug 20, 2022'],
        datasets: [
        {
          label: "",
          backgroundColor: 'transparent',
          borderColor: '#2479FF',
          data: [0, 65, 52, 115, 98, 165, 125],
          lineTension: 0,
          pointRadius: 4,
          pointBackgroundColor: 'rgba(255,255,255,1)',
          pointHoverBackgroundColor: 'rgba(255,255,255,0.6)',
          pointHoverRadius: 8,
          pointHitRadius: 30,
          pointBorderWidth: 2,
          pointStyle: 'rectRounded'
        },
          {
          label: "",
          backgroundColor: 'transparent',
          borderColor: '#FA254C',
          data: [45, 38, 100, 87, 152, 187, 85],
          lineTension: 0,
          pointRadius: 4,
          pointBackgroundColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: 'rgba(255,255,255,0.6)',
          pointHoverRadius: 8,
          pointHitRadius: 30,
          pointBorderWidth: .3,
          pointStyle: 'rectRounded'
        }
      ]
    },
    
    // Configuration options go here
    options: {
      legend: {
         display: false
       },
      scales: {
        xAxes: [{
          gridLines: {
            display:false
          }
        }],
        yAxes: [{
          gridLines: {
             display:true
          },
       ticks: {
           
          },
       }]
     },
     tooltips: {
    }
  }
});