// exercise 1

function add(inputX: number, inputY: number): number {
  return inputX + inputY;
}

console.log(add(10, 29));

// exercise 2

function signal(num: number): string {
  if (num > 0) {
    return "Positivo";
  } else if (num < 0) {
    return "Negativo";
  } else {
    return "Zero";
  }
}

console.log(signal(0));

// exercise 3

const car: { color: string; model: string; year: number } = {
  color: "Yellow",
  model: "Camaro",
  year: 2001,
};
console.log(car);

// exercise 4

type userType = {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
  employment: {
    title: string;
    key_skill: string;
  };
};

async function myFunction(): Promise<userType> {
  const resp = await fetch("https://random-data-api.com/api/v2/users?size=2");
  const data = await resp.json();
  console.log(data);
  return data;
}

myFunction();

// exercise 5

const isDone: boolean = true;
// isDone = "Joana";

// exercise 6

interface Person {
  firstName: string;
  lastName: string;
}

function greet(person: Person): string {
  return "Hello, I'm " + person.firstName + " " + person.lastName;
}

const user = { firstName: "Joana", lastName: "Cardoso" };

console.log(greet(user));

// exercise 7

interface Rectangle {
  width: number;
  height: number;
}

function calculateArea(Rectangle: Rectangle): Number {
  return Rectangle.width * Rectangle.height;
}

const result : Rectangle = {width: 20, height: 50};

console.log(calculateArea(result))