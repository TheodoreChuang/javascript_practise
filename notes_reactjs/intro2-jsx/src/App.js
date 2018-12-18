import React from "react";
import faker from "faker";
import Comment from "./Comment";
import Card from "./Card";

const commentsData = [
  {
    name: "Jude Henry",
    avatar: faker.image.avatar(),
    date: "Dec 17, 2018",
    text: "banana is banned"
  },
  {
    name: "Bobby Miller",
    avatar: faker.image.avatar(),
    date: "Dec 17, 2018",
    text: "Really fun guy"
  }
];

const App = () => {
  return (
    <div className="comments">
      {true && (
        <Card title="Mary's Comment">
          <Comment
            name="Mary Smith"
            avatar={faker.image.avatar()}
            date="Dec 17, 2018"
            text="Really fun guy"
          />
        </Card>
      )}

      {commentsData.map(comment => (
        <Card title="Other Comments">
          <Comment {...comment} />
        </Card>
      ))}
    </div>
  );
};

export default App;
