$( document ).ready( function(){

  var numAnswer = 0;

function compute() {
  var ret = $("#calculate").text().split(" ");
  var num1 = parseInt(ret[0]);
  var sign = ret[1];
  var num2 = parseInt(ret[2]);
  //console.log(ret);
  if(sign === "+") {
    numAnswer = num1 + num2;
  } else if(sign === "-"){
    numAnswer = num1 - num2;
  } else if(sign === "*"){
    numAnswer = num1 * num2;
  } else {
    numAnswer = num1 / num2;
  };

  //numAnswer = $("#calculate").text();
  //numAnswer = $("#calculate");
  $("#calculate").append(numAnswer);

}
  compute();

});
