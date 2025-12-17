$(document).ready(function () {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    timezone: config.timezone,
  }

  function updateClock() {
    const now = new Date();

    $('#clock').html((new Intl.DateTimeFormat('en-US', options)).format(now));
  }

  updateClock();
  setInterval(updateClock, 1000);
});
