const users = [
  {
    name: "Ansu",
    age: 19,
    phone: 123,
    addres: "Banjul",
    isADeveloper: true,
  },
  {
    name: "Ebrima",
    age: 17,
    phone: 2345,
    addres: "Srrrekunda",
    isADeveloper: false,
  },
];

const Test = () => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <h1>{user.name}</h1>
            <h3>{user.age}</h3>
            <h4>{user.addres}</h4>
            <p>{user.isADeveloper}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Test;
