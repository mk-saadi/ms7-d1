function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Format the time values to two digits if less than 10
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  
    // Update the clock element's inner HTML with the formatted time
    clockElement.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  
  // Call updateClock function every second to update the clock
  setInterval(updateClock, 1000);
  