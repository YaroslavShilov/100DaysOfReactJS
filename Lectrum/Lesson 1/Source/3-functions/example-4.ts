function buildName(firstName: string, lastName?: string) {
  if (lastName)
    return firstName + " " + lastName;
  else
    return firstName;
}

let result1 = buildName('Oliver');
let result2 = buildName('Oliver', 'Black');

console.log(result1);
console.log(result2);