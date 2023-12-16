import { FC } from "react";

interface UserInterface {
  name: string;
  lastName: string;
  age: number;
  isAdult?: boolean;
}

interface NameAndLastNameProps {
  name: string;
  lastName: string;
  user?: UserInterface;
}

const NameAndLastName: FC<NameAndLastNameProps> = ({
  name,
  lastName,
  user,
}) => {
  if (user) {
    return (
      <article>
        <h2>{user.name}</h2>
      </article>
    );
  }

  return (
    <div>
      <p>Name: {name}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <NameAndLastName
        name={"123"}
        lastName="test123"
        user={{ age: 12, lastName: "Doe", name: "John" }}
      />
    </div>
  );
}

export default App;
