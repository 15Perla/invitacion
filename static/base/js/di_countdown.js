function updateCountdown() {
  //powered by chatGPT
    const countdownElements = document.querySelectorAll('.di_countdown');

    countdownElements.forEach(countdownElement => {
      const targetDate = new Date(
        parseInt(countdownElement.getAttribute('data-year')),
        parseInt(countdownElement.getAttribute('data-month')) - 1, // Months are 0-indexed
        parseInt(countdownElement.getAttribute('data-day')),
        parseInt(countdownElement.getAttribute('data-hour')),
        parseInt(countdownElement.getAttribute('data-minute'))
      );

      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        countdownElement.innerHTML = 'Countdown expired!';
      } else {
        const countdownItems = countdownElement.querySelectorAll('.countdown-item');
        if (countdownItems.length === 0) {
          // Append countdown items if not already present
          countdownElement.appendChild(createCountdownItem('Días', 'dias'));
          countdownElement.appendChild(createCountdownItem('Horas', 'horas'));
          countdownElement.appendChild(createCountdownItem('Minutos', 'minutos'));
          countdownElement.appendChild(createCountdownItem('Segundos', 'segundos'));
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.querySelector('#dias').textContent = days;
        countdownElement.querySelector('#horas').textContent = hours;
        countdownElement.querySelector('#minutos').textContent = minutes;
        countdownElement.querySelector('#segundos').textContent = seconds;
      }
    });
}

function createCountdownItem(label, id) {
    const countdownItem = document.createElement('div');
    countdownItem.className = 'countdown-item';

    const numberElement = document.createElement('span');
    numberElement.className = 'countdown-number';
    numberElement.id = id;

    const labelElement = document.createElement('span');
    labelElement.className = 'countdown-label';
    labelElement.textContent = label;

    const lineBreak = document.createElement('br')

    countdownItem.appendChild(numberElement);
    countdownItem.appendChild(lineBreak);
    countdownItem.appendChild(labelElement);

    return countdownItem;

}