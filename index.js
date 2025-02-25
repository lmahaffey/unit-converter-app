// Constants for conversion factors
const METERS_TO_FEET = 3.2808;
const FEET_TO_METERS = 1 / METERS_TO_FEET;
const LITERS_TO_GALLONS = 0.264172;
const GALLONS_TO_LITERS = 1 / LITERS_TO_GALLONS;
const KILOS_TO_POUNDS = 2.20462;
const POUNDS_TO_KILOS = 1 / KILOS_TO_POUNDS;

// Get DOM elements
const convertBtn = document.querySelector("#convert-btn");
const inputValue = document.querySelector("#convertValue");
const length = document.querySelector("#length");
const volume = document.querySelector("#volume");
const mass = document.querySelector("#mass");

// Function to perform conversions and update UI
function convert() {
    const value = parseFloat(inputValue.value.trim());

    // Input validation
    if (isNaN(value)) {
        alert("Please enter a valid number!");
        return;
    }

    // Length conversion (meters to feet and vice versa)
    length.textContent = `${value} meters = ${(value * METERS_TO_FEET).toFixed(3)} feet | ${value} feet = ${(value * FEET_TO_METERS).toFixed(3)} meters`;

    // Volume conversion (liters to gallons and vice versa)
    volume.textContent = `${value} liters = ${(value * LITERS_TO_GALLONS).toFixed(3)} gallons | ${value} gallons = ${(value * GALLONS_TO_LITERS).toFixed(3)} liters`;

    // Mass conversion (kilograms to pounds and vice versa)
    mass.textContent = `${value} kilos = ${(value * KILOS_TO_POUNDS).toFixed(3)} pounds | ${value} pounds = ${(value * POUNDS_TO_KILOS).toFixed(3)} kilos`;
}

convert();

convertBtn.addEventListener("click", convert);
