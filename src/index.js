import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          avatar={Faker.image.avatar()}
          content="Nice blog post!"
          timeAgo="Today at 6:00PM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          avatar={Faker.image.avatar()}
          content="Thanks for the info!"
          timeAgo="Today at 5:13PM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          avatar={Faker.image.avatar()}
          content="You're the best!"
          timeAgo="Yesterday at 6:47PM"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
