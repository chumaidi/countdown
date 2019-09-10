const timeNow = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  document.getElementById(
    "today"
  ).innerHTML = `${hour} : ${minute} : ${second}`;
};
setInterval(timeNow, 1000);

const theInternational = new Date("November 1, 2019 01:00:00").getTime();
console.log(theInternational);

let mainEvent = setInterval(function() {
  let timeToday = new Date().getTime();
  let distance = theInternational - timeToday;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = `0${days}`.slice(-2);
  document.getElementById("hours").innerHTML = `0${hours}`.slice(-2);
  document.getElementById("minutes").innerHTML = `0${minutes}`.slice(-2);
  document.getElementById("seconds").innerHTML = `0${seconds}`.slice(-2);

  if (distance <= 0) {
    clearInterval(maintEvent);
    document.body.innerHTML = `<h1>Kirsty Branch</h1>
      <p>“Go Burn our money on Steam”</p>
  <p>Gabe Newell</p>
      <footer>
          <span id="today"></span>
          <p>@copy: 2019. Indonesia.</p>
      </footer>
      
  <style>
  h1 {
    padding-top: 120px;
    color: gold;
    font-size: 100px;
    font-family: 'Spectral', serif;
  } 
  footer {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    font-size: 9px;
    bottom: 0;
    background-color: black;
  }
  footer p {
    margin: 0 auto;
  }
  footer a:hover {
    color: aqua;
  }
  footer a {
    color: #fff;
    text-decoration-line: none;
  }
  </style>`;
  }
}, 1000);
