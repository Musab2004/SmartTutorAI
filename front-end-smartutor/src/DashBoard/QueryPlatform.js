// import { useState } from 'react';

// const Post = ({ post }) => {
//   const [upvotedUsers, setUpvotedUsers] = useState([]);
//   const [downvotedUsers, setDownvotedUsers] = useState([]);

//   const dummyUser = { id: 1, username: 'ExampleUser', avatar: 'example.jpg' };

//   const handleUpvote = () => {
//     // Simulate upvoting logic by adding the dummy user to upvotedUsers state
//     setUpvotedUsers([...upvotedUsers, dummyUser]);
//   };

//   const handleDownvote = () => {
//     // Simulate downvoting logic by adding the dummy user to downvotedUsers state
//     setDownvotedUsers([...downvotedUsers, dummyUser]);
//   };

//   return (
//     <div className="card my-3">
//       <div className="card-body">
//         <h5 className="card-title">{post.title}</h5>
//         <p className="card-text">{post.content}</p>
//         <p>Author: {post.author.username}</p>
//         <img src={post.author.avatar} alt="Author Avatar" />
//         <p>Created At: {post.created_at}</p>
//         <button
//           onClick={handleUpvote}
//           className="btn btn-success mr-2"
//         >
//           Upvote ({upvotedUsers.length})
//         </button>
//         <button
//           onClick={handleDownvote}
//           className="btn btn-danger"
//         >
//           Downvote ({downvotedUsers.length})
//         </button>
//         {/* Render associated Answers Posts */}
//         {/* Add necessary event handling */}
//       </div>
//     </div>
//   );
// };

// const Answer = ({ answer }) => {
//   // Similar logic for handling upvote/downvote in Answer component

//   return (
//     <div className="card my-3">
//       <div className="card-body">
//         <p className="card-text">{answer.text}</p>
//         <p>Author: {answer.author.username}</p>
//         <img src={answer.author.avatar} alt="Author Avatar" />
//         <p>Created At: {answer.created_at}</p>
//         <button
//           onClick={handleUpvote}
//           className="btn btn-success mr-2"
//         >
//           Upvote ({upvotedUsers.length})
//         </button>
//         <button
//           onClick={handleDownvote}
//           className="btn btn-danger"
//         >
//           Downvote ({downvotedUsers.length})
//         </button>
//         {/* Add necessary event handling */}
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   // Your other components and logic for fetching data
  
//   const dummyPost = {
//     id: 1,
//     title: 'Sample Title',
//     content: 'Sample Content',
//     author: { id: 1, username: 'User1', avatar: 'user1.jpg' },
//     created_at: '2023-11-16T12:00:00Z',
//     // More post details...
//   };

//   const dummyAnswer = {
//     id: 1,
//     text: 'Sample Answer',
//     author: { id: 2, username: 'User2', avatar: 'user2.jpg' },
//     created_at: '2023-11-16T12:30:00Z',
//     // More answer details...
//   };

//   return (
//     <div>
//       <h1>Query Post</h1>
//       <Post post={dummyPost} />
//       <h2>Answers Post</h2>
//       <Answer answer={dummyAnswer} />
//     </div>
//   );
// };

// export default App;
