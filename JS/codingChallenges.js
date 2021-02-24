/////////////////////////////////////
// Coding Challeng #1

/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula
(you can even implement both versions)
3. Create a boolean variable 'markHigherBMI'
containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks wights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.

TEST DATA 2: Marks wights 95KG and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall.
 */

const TEST = {
  data_1: {
    Mark: {
      mass: 78,
      height: 1.69,
    },
    John: {
      mass: 92,
      height: 1.95,
    },
  },
  data_2: {
    Mark: {
      mass: 95,
      height: 1.88,
    },
    John: {
      mass: 85,
      height: 1.76,
    },
  },
};

const getBMI = (person) => {
  return person.mass / person.height ** 2;
};

const markHigherBMI_1 = getBMI(TEST.data_1.Mark) > getBMI(TEST.data_1.John);
const markHigherBMI_2 = getBMI(TEST.data_2.Mark) > getBMI(TEST.data_2.John);

console.log("test 1: ", markHigherBMI_1);
console.log("test 2: ", markHigherBMI_2);
