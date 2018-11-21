import React, {Fragnent} from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';
import Segment from './Segment';

const App = () => {
  return (
    <Fragnent>
      <Segment>
        
      </Segment>
      <Message header="회원 약관 변경" body="약관이 변경되었습니다. 동의하십니까?" />

        <div className="ui container comments">

          <ApprovalCard>
              <h4>오늘 새벽까지 복습한다.</h4>
              <p>deal?</p>
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
              author={faker.name.firstName()}
              time={faker.date.recent().toLocaleString()}
              body={faker.lorem.sentence()}
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
        </div>
    </Fragnent>
    
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));