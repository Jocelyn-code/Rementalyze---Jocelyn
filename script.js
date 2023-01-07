/* .js files add interaction to your website */
/*English Version of Fact Gen*/
var factList = [
/*0*/"Suicide is preventable. Most suicidal individuals desperately want to live; they are just unable to see alternatives to their problems.", 
/*1*/"Lesbian, gay, bisexual, and questioning youth are almost 5 times more likely to attempt suicide", 
/*2*/"Women are 3 times more likely than men to attempt suicide, and men are 3.5 times more likely to have a fatal outcomewhen attempting suicide.", 
/*3*/"79% of global suicides occur in low- and middle-income countries.",
/*4*/"Suicide is preventable. Most suicidal individuals desperately want to live; they are just unable to see alternatives to their problems.",
/*5*/"Most suicidal individuals give definite warnings of their suicidal intentions, but others are either unaware of the significance of these warnings or do not know how to respond to them.",
/*6*/"There is no single cause for mental illness. Rather, it is the result of a complex group of genetic, psychological, and environmental factors.",
/*7*/"Individuals with mental illness are at risk for a variety of challenges, but these risks can be greatly reduced with treatment, particularly when it is timely.",
/*8*/"Some of the most common types of mental illness include anxiety, depressive, behavioral, and substance-abuse disorders."];


var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var index = 0;

factBtn.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[index];
  index+=1;
  if (index == factList.length) { //check if out of bounds
    index = 0;
  }
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myBar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}