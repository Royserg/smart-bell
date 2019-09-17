$("#slider").roundSlider({
  sliderType: "min-range",
  editableTooltip: false,
  radius: 105,
  width: 16,
  value: 10,
  handleSize: 0,
  handleShape: "square",
  circleShape: "pie",
  startAngle: 315,
  tooltipFormat: "changeTooltip"
});

function changeTooltip (e) {
  var val = e.value, weight, background;
  if (val === 0) {
    weight = "Weak";
    background = 'red';
  }
  else if (val < 20) {
    weight = "Easy";
    background = 'rgb(168, 154, 88)';
  }
  else if (val < 40) {
    weight = "Normal";
    background = 'rgb(81, 145, 156)';
  }
  else if (val < 70) {
    weight = "Medium";
    background = 'rgb(81, 95, 156)'
  }
  else {
    weight = "Heavy";
    background = 'green';
  }

  return `${val} kg <div style='background: ${background}'> ${weight}<div>`;
}

