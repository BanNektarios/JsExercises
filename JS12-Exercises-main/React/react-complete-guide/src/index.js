import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

const App = () => {



    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <p>Are you sure?</p>
                
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail
                    author='Jane'
                    timeAgo='Monday 7:15PM'
                    content="Yo mah man"
                    image={faker.image.image()} />
            </ApprovalCard>

            <ApprovalCard >
                <CommentDetail
                    author='Alex'
                    timeAgo='Yesterday 4:45PM'
                    content="Wussup boyy!"
                    image={faker.image.image()} />
            </ApprovalCard>

            <ApprovalCard >
                <CommentDetail
                    author='Sam'
                    timeAgo='Today 1:42PM'
                    content="Daddy chill..."
                    image={faker.image.image()} />
            </ApprovalCard>

        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));