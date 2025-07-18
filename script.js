let display = document.getElementById("display");

function append(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function power() {
  let base = prompt("Enter base:");
  let exponent = prompt("Enter exponent:");
  if (!isNaN(base) && !isNaN(exponent)) {
    display.value = Math.pow(Number(base), Number(exponent));
  } else {
    display.value = 'Error';
  }
}

function sqrt() {
  let value = Number(display.value);
  if (!isNaN(value)) {
    display.value = Math.sqrt(value);
  } else {
    display.value = 'Error';
  }
}

function log() {
  let value = Number(display.value);
  if (value > 0) {
    display.value = Math.log10(value);
  } else {
    display.value = 'Error';
  }
}