var gToL = function (gallons){
	liters = gallons * 3.78541;
  return liters;
}

alert(gToL(parseInt(prompt("How many gallons would you like to convert to liters?"))));
