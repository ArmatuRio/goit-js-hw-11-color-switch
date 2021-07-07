const refs = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
  };
  const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  let intervalId = null;
  refs.body.addEventListener('click', onClick);
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const setBodyColor = () => {
    const idx = randomIntegerFromInterval(0, 5);
    refs.body.style.backgroundColor = `${colors[idx]}`;
  };
  
  function start() {
    refs.btnStart.disabled = true;
    intervalId = setInterval(setBodyColor, 1000);
  }
  
  function stop() {
    clearInterval(intervalId);
    refs.btnStart.disabled = false;
  }
  
  function onClick(evt) {
    let action = evt.target.dataset.action;
    if (action === 'start') {
      start();
      return;
    }
    stop();
  }