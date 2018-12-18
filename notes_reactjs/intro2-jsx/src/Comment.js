import React from "react";

function isDirtyWords(input) {
  return input.match(/banana/);
}

const Comment = props => {
  if (!isDirtyWords(props.text)) {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.name}
          </a>
          <p className="date">{props.date}</p>
          <p className="text">{props.text}</p>
        </div>
      </div>
    );
  }

  // return null;
  return <div>Banned Comment</div>;
};

export default Comment;
