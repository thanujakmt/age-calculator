
var currentYear = new Date().getFullYear();
// console.log(currentYear)
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function getData() {
      var dateInput = document.getElementById("dateInput");
      var monthInput = document.getElementById("monthInput");
      var yearInput = document.getElementById("yearInput");

      var dateValue = parseInt(dateInput.value, 10);
      var monthValue = parseInt(monthInput.value, 10);
      var yearValue = parseInt(yearInput.value,10);
      
      var total_years = currentYear - yearValue;
      var total_months = total_years * 12;
      var total_days = total_months * daysInMonth[monthValue - 1];

      var years_count = document.getElementById("years").innerHTML = total_years;
      var months_count = document.getElementById("months").innerHTML = total_months;
      var days_count = document.getElementById("days").innerHTML = total_days;
      if (
        dateValue > 0 && dateValue <= daysInMonth[monthValue - 1] &&
        monthValue > 0 && monthValue <= 12 &&
        yearValue > 0 && yearValue < currentYear
      ) {
        console.log("Date:", dateValue);
        console.log("Month:", monthValue);
        console.log("Year:", yearValue);
      } else {
        alert("Please enter a valid date, month, and year.");
      }
      
    }

