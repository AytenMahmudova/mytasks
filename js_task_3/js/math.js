function fizzBuzz(number) {
    if (number % 3 === 0 && number % 7 === 0) {
      console.log('fizzbuzz');
    } else if (number % 3 === 0) {
      console.log('fizz');
    }
    else ( number % 7 === 0) {
        console.log('Buzz')
    }
  }