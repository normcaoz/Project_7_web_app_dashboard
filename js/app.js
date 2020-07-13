document.addEventListener('DOMContentLoaded', () => {

  var loginName = 'Victoria Chambers';
  var login = document.getElementById('login'); //active user
  login.innerHTML = loginName;

  const alertBanner = document.getElementById("alert");
  var dropGroup = document.getElementById('drop-group');
  var bell = document.getElementsByClassName('bell')[0];
  let myDropdown = document.getElementById('myDropdown');
  let dropContent = document.getElementsByClassName('dropdown-content');

  //create the html for the banner
  alertBanner.innerHTML =
    `
    <div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">X</p>
    </div>
    `

  alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
      alertBanner.style.display = "none";
    }

  })

  //Notifications

  function openMenu(){
      myDropdown.classList.add('show');
        console.log("open " + event.target);
        console.log(myDropdown.classList);
      }

    // Close the dropdown menu if the user clicks outside of it

    function closeMenu(){
    myDropdown.classList.remove('show');
      console.log("close " + event.target);
      console.log(myDropdown.classList);
    }

  dropGroup.addEventListener("click", () => {
    if (myDropdown.classList.contains('show')){
      closeMenu();
    } else {
    openMenu();
    }
  })

  // to include clicks outside of

  window.addEventListener("click", () => {
    if (!event.target.matches('.bell')) {
      closeMenu();
    }
  })


  //search box filter autocomplete


  $( function() {
    var availableTags = [
      "Victoria Chambers",
      "Dale Byrd",
      "Dawn Wood",
      "Dan Oliver"
    ];
    $( "#searchInput" ).autocomplete({
      source: availableTags
    });
  } );

//line graph

// var trafficLink = document.getElementsByClassName('traffic-nav-link');
const trafficCanvas = document.getElementById('traffic-chart');
var trafficNav = document.getElementById("traffic-nav");
var itemList = document.getElementsByClassName("traffic-nav-link");
var item;

  trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
          data: [250, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
          2500],
          backgroundColor: 'rgba(116, 119, 191, .3)',
          borderWidth: 1,
          lineTension: 0,
          pointRadius: 5
        }]
      }

  let trafficOptions = {
    maintainAspectRatio: true,
    aspectRatio: 2.5,
    animation: {
      duration: 200
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend : {
      display: false
    },
    layout: {
              padding: {
                  left: 50,
                  right: 50,
                  top: 50,
                  bottom: 50
              }
        }
  };

  let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  });

    for(var i=0; i < itemList.length; i++) {
      itemList[i].addEventListener('click', e=>{

        for(var i=0; i < itemList.length; i++){
          itemList[i].classList.remove("active");
        }

        item = e.target.textContent;

        if(e.target.classList.contains("active")){
        } else {
          e.target.classList.add("active");
        }

      checking();

      })
    }



  function checking(){
        if(item == 'Hourly'){

          trafficData = {
                labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00",
                "07:00", "08:00", "09:00", "10:00", "11:00"],
                datasets: [{
                  data: [175, 250, 110, 200, 60, 125, 85, 225, 165, 155,
                  180, 230],
                  backgroundColor: 'rgba(116, 119, 191, .3)',
                  borderWidth: 1,
                  lineTension: 0,
                  pointRadius: 5
                }]
              }
        } else if (item == 'Daily') {

          trafficData = {
                labels: ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"],
                datasets: [{
                  data: [250, 150, 150, 200, 50, 150, 250],
                  backgroundColor: 'rgba(116, 119, 191, .3)',
                  borderWidth: 1,
                  lineTension: 0,
                  pointRadius: 5
                }]
              }
          } else if (item == 'Weekly') {

          trafficData = {
                labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
                "4-10", "11-17", "18-24", "25-31"],
                datasets: [{
                  data: [250, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                  2500],
                  backgroundColor: 'rgba(116, 119, 191, .3)',
                  borderWidth: 1,
                  lineTension: 0,
                  pointRadius: 5
                }]
              }
          } else if (item == 'Monthly') {

          trafficData = {
                labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL",
                "AUG", "SEP", "OCT", "NOV", "DEC"],
                datasets: [{
                  data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                  2500, 2000],
                  backgroundColor: 'rgba(116, 119, 191, .3)',
                  borderWidth: 1,
                  lineTension: 0,
                  pointRadius: 5
                }]
              }
          } else {
          trafficData = {
                labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
                "4-10", "11-17", "18-24", "25-31"],
                datasets: [{
                  data: [250, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                  2500],
                  backgroundColor: 'rgba(116, 119, 191, .3)',
                  borderWidth: 1,
                  lineTension: 0,
                  pointRadius: 5
                }]
              }
            }

              let trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficData,
                options: trafficOptions
              });
        }




//bar chart

  const dailyCanvas = document.getElementById("daily-chart");

  const dailyData = {
    labels: ["S", "M", "T", "W", "R", "F", "S"],
    datasets: [{
      label: '# of Hits',
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: '#7477BF',
      borderWidth: 1
    }]
  };

  const dailyOptions = {
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    animation: {
      duration: 200
    },
    legend : {
      display: false
    },
    layout: {
              padding: {
                  left: 30,
                  right: 30,
                  top: 30,
                  bottom: 30
              }
        }
  };

  let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
  });

  //doughnut chart

  const mobileCanvas = document.getElementById("mobile-chart");

  const mobileData = {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
          '#7477BF',
          '#78CF82',
          '#51B6C8'
        ]
      }]
    };

  const mobileOptions = {
    cutoutPercentage: 60,
    maintainAspectRatio: true,
    animation: {
      duration: 200
    },
    legend: {
      position: 'right',
      labels: {
        padding: 20,
        boxWidth: 20,
        fontStyle: 'bold',
        fontSize: 16
      }
    },
    layout: {
              padding: {
                  left: 70,
                  right: 200,
                  top: 20,
                  bottom: 20
              }
        }
  }

  let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
  });

  // messaging section

  const user = document.getElementById("user-field");
  const message = document.getElementById("message-field");
  const send = document.getElementById("send");

    send.addEventListener('click', () => {

      if(user.value ==="" && message.value ==="") {
        alert("Please fill out user and message fields before sending");
      } else if (user.value === "") {
        alert("Please fill out user fields before sending");
      } else if (message.value === "") {
        alert("Please fill out message fields before sending");
      } else {
        alert(`Message successfully sent to: ${user.value}`);
      }
    });

//local storage

function supportsLocalStorage() {
    try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e) {
    return false;
  }
}

  if(supportsLocalStorage()) {

    console.log('local storage ok!');
    let emailNotif = document.getElementById('emailNotif');
    let setPublic = document.getElementById('setPublic');
    var timezone = document.getElementById("timezone");
    // var selectOption = timezone.options[timezone.selectedIndex];
    var lastSelected = localStorage.getItem('timezone', this.value);

    save = document.getElementById('save');
    cancel = document.getElementById('cancel');
    // console.log(selectOption);

    function loading(){

        if (localStorage.getItem("emailNotif") == "true") {
            document.getElementById("emailNotif").checked = true;
        }else{
            document.getElementById("emailNotif").checked = false;
        }
        if (localStorage.getItem("setPublic") == "true") {
            document.getElementById("setPublic").checked = true;
        }else{
            document.getElementById("setPublic").checked = false;
        }
        if(lastSelected) {
            timezone.value = lastSelected;
        }
      }

    function saving(){
      console.log('saving');

        if(emailNotif.checked) {
          localStorage.setItem('emailNotif', true);
        }
        if(setPublic.checked) {
          localStorage.setItem('setPublic', true);
        }
        lastSelected = timezone.options[timezone.selectedIndex].value;
        console.log(lastSelected);
        localStorage.setItem('timezone', lastSelected);
      }

    function reseting(){
      console.log('resetting');

      emailNotif = localStorage.removeItem('emailNotif');
      setPublic = localStorage.removeItem('setPublic');
      timezone = localStorage.removeItem('timezone');
    }

    loading();

    save.addEventListener('click', e => {
      saving();
    });
    cancel.addEventListener('click', e => {
      console.log('clicked cancel');
      reseting();
    });
  }else{
    console.log('browser local storage error.');
  }

});
