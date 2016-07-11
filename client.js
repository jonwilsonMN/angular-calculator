

angular.module('calculatorApp', []);

angular.module('calculatorApp').controller('MainController', function($scope){

  // $scope.itemToDo = "Add an Item To Do";
  // $scope.toDoList = [];
  // $scope.handleClick = function(){
  //  $scope.toDoList.push($scope.itemToDo);
  // }
  $scope.clear = 'C';
    $scope.handleClear = function(){
      $scope.numAnswer = '0';
  }
  $scope.numAnswer = '0';
  $scope.one = '1';
    $scope.handleOne = function(){
      if($scope.numAnswer !== '0') {
      $scope.numAnswer = $scope.numAnswer + $scope.one;
      } else {
      $scope.numAnswer = '1';
      }
    }

  $scope.two = '2';
  $scope.handleTwo = function(){
    if($scope.numAnswer !== '0') {
    $scope.numAnswer = $scope.numAnswer + $scope.two;
    } else {
    $scope.numAnswer = '2';
    }
  }
  $scope.three = '3';
  $scope.handleThree = function(){
    if($scope.numAnswer !== '0') {
    $scope.numAnswer = $scope.numAnswer + $scope.three;
    } else {
    $scope.numAnswer = '3';
    }
  }
  $scope.four = '4';
  $scope.handleFour = function(){
    if($scope.numAnswer !== '0') {
    $scope.numAnswer = $scope.numAnswer + $scope.four;
    } else {
    $scope.numAnswer = '4';
    }
  }
  $scope.five = '5';
  $scope.handleFive = function(){
    if($scope.numAnswer !== '0') {
    $scope.numAnswer = $scope.numAnswer + $scope.five;
    } else {
    $scope.numAnswer = '5';
    }
  }
  $scope.six = '6';
  $scope.handleSix = function(){
    if($scope.numAnswer !== '0') {
    $scope.numAnswer = $scope.numAnswer + $scope.six;
    } else {
    $scope.numAnswer = '6';
    }
  }
  $scope.seven = '7';
  $scope.handleSeven = function(){
    if($scope.numAnswer !== '0') {
    $scope.numAnswer = $scope.numAnswer + $scope.seven;
    } else {
    $scope.numAnswer = '7';
    }
  }
  $scope.eight = '8';
  $scope.handleEight = function(){
    if($scope.numAnswer !== '0') {
    $scope.numAnswer = $scope.numAnswer + $scope.eight;
    } else {
    $scope.numAnswer = '8';
    }
  }
  $scope.nine = '9';
  $scope.handleNine = function(){
    if($scope.numAnswer !== '0') {
    $scope.numAnswer = $scope.numAnswer + $scope.nine;
    } else {
    $scope.numAnswer = '9';
    }
  }
  $scope.zero = '0';
  $scope.handleZero = function(){
    if($scope.numAnswer !== '0') {
    $scope.numAnswer = $scope.numAnswer + $scope.zero;
    } else {
    $scope.numAnswer = '0';
    }
  }
  $scope.dot = '.';
  $scope.handleDot = function(){
    if($scope.numAnswer !== '0') {
    $scope.numAnswer = $scope.numAnswer + $scope.dot;
    } else {
    $scope.numAnswer = '.';
    }
  }
  $scope.plus = ' + ';
  $scope.handlePlus = function(){
    if($scope.numAnswer !== '0') {
    $scope.numAnswer = $scope.numAnswer + $scope.plus;
    } else {
    $scope.numAnswer = "err: Click C";
    }
  }
  $scope.minus = ' - ';
  $scope.handleMinus = function(){
    if($scope.numAnswer !== '0') {
    $scope.numAnswer = $scope.numAnswer + $scope.minus;
    } else {
    $scope.numAnswer = "err: Click C";
    }
  }
  $scope.multiply = ' * ';
  $scope.handleMultiply = function(){
    if($scope.numAnswer !== '0') {
    $scope.numAnswer = $scope.numAnswer + $scope.multiply;
    } else {
    $scope.numAnswer = "err: Click C";
    }
  }
  $scope.divide = ' / ';
  $scope.handleDivide = function(){
    if($scope.numAnswer !== '0') {
    $scope.numAnswer = $scope.numAnswer + $scope.divide;
    } else {
    $scope.numAnswer = "err: Click C";
    }
  }
  $scope.equals = "=";
  $scope.handleEquals = function(){
        var finalAnswer = $scope.$eval($scope.numAnswer);
        $scope.numAnswer = finalAnswer;
  }

















})
