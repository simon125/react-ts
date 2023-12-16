const addTwoNumbers = (a: number, b: number): number => {
  return a + b;
};

// const concatanateTwoStrings = (string1: string, string2?: string): string => {
//   if (string2) {
//     return string1 + "-" + string2;
//   }

//   return string1;
// };

const concatanateTwoStrings = (
  string1: string,
  string2: string = ""
): string => {
  return string1 + "-" + string2;
};

type UserType = {
  name: string;
  lastName: string;
  age: number;
  isAdult: boolean;
};

interface UserInterface {
  name: string;
  lastName: string;
  age: number;
  isAdult?: boolean;
}

function App() {
  const suma: number = addTwoNumbers(6, 4);

  const user1: UserType = {
    name: "John",
    lastName: "Doe",
    age: 22,
    isAdult: true,
  };

  const user2: UserInterface = {
    name: "John",
    lastName: "Doe",
    age: 22,
    isAdult: true,
  };

  const updateUser = (user: Partial<UserInterface>) => {
    console.log(user);
  };

  const updateAge = (objectWithOnlyAge: Pick<UserInterface, "age">) => {
    console.log(objectWithOnlyAge.age);
  };

  const updateRestOfTheKeys = (restFields: Omit<UserInterface, "age">) => {
    console.log(restFields.lastName);
  };

  updateUser({ lastName: "Trelemorele" });

  return <div>Wynik dodawania dwóch liczb: {suma}</div>;
}

export default App;
