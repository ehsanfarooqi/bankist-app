// Chaling Number 1
/*
const jul = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const chekDog = function (dogsjulia, dogskate) {
  const dogsjuliaCorect = dogsjulia.slice();
  dogsjuliaCorect.splice(0, 1);
  dogsjuliaCorect.splice(-2);
  const dogs = dogsjuliaCorect.concat(dogskate);
  console.log(dogs);

  dogs.forEach((value, i) => {
    if (value >= 3) {
      console.log(
        `Dog number ${i + 1} is an adualt, and is ${value} year old `
      );
    } else {
      console.log(
        `Dog number ${i + 1} is still popy, and is ${value} year old `
      );
    }
  });
};

chekDog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

*/

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(ages => (ages <= 2 ? 2 * ages : 16 + ages * 4));
//   const adualt = humanAge.filter(ages => ages >= 18);
//   const average = adualt.reduce((acc, ages) => ages + acc, 0) / adualt.length;
//   return average;
// };

// const avg1 = calcAverageHumanAge([12, 8, 2, 12, 9]);
// const avg2 = calcAverageHumanAge([4, 3, 15, 8, 7]);
// console.log(avg1, avg2);

/////////////////////////////////////////////////////////////////////////////////
////// same chaling with Arrow Function

// const calcAverageHumanAge = ages =>
//   ages
//     .map(ages => (ages <= 2 ? 2 * ages : 16 + ages * 4))
//     .filter(ages => ages >= 18)
//     .reduce((acc, ages, i, arr) => acc + ages / arr.length, 0);

// const avg1 = calcAverageHumanAge([12, 8, 2, 12, 9]);
// const avg2 = calcAverageHumanAge([4, 3, 15, 8, 7]);
// console.log(avg1, avg2);
