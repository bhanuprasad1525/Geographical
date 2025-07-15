// Geolocation API
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    document.getElementById('location').innerText = 
      `Your Location: Lat ${latitude.toFixed(2)}, Lon ${longitude.toFixed(2)}`;
  }, () => {
    document.getElementById('location').innerText = "Unable to retrieve location.";
  });
} else {
  document.getElementById('location').innerText = "Geolocation not supported.";
}

// Network Information API
const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (conn) {
  document.getElementById('network').innerText = `Connection: ${conn.effectiveType}`;
  conn.addEventListener("change", () => {
    alert("Your connection changed to: " + conn.effectiveType);
  });
} else {
  document.getElementById('network').innerText = "Network info not available.";
}

// Intersection Observer API
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll(".landmark").forEach(section => {
  observer.observe(section);
});
