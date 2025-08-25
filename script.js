function calculateFootprint() {
  const distance = document.getElementById("distance").value;
  const transport = document.getElementById("transport").value;
  const resultDiv = document.getElementById("result");

  if (!distance || distance <= 0) {
    resultDiv.innerHTML = "⚠️ Please enter a valid distance.";
    return;
  }

  // emission factors (kg CO2 per km)
  const factors = {
    car: 0.12,
    bike: 0.08,
    bus: 0.05,
    train: 0.04,
    flight: 0.25,
    walk: 0
  };

  const emission = (distance * factors[transport]).toFixed(2);

  let message = `Your trip emitted <b>${emission} kg CO₂</b> 🌍<br>`;
  
  if (emission <= 2) {
    message += "🟢 Low impact. Great job! 🌱";
    resultDiv.style.color = "green";
  } else if (emission <= 5) {
    message += "🟡 Medium impact. Try carpooling 🚗🤝";
    resultDiv.style.color = "orange";
  } else {
    message += "🔴 High impact! Use public transport / cycle 🚴";
    resultDiv.style.color = "red";
  }

  resultDiv.innerHTML = message;
}
