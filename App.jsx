import React, { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";
import "./App.css";
import Signup from './Signup';

const initialUserData = {
  username: "naturelover",
  profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Euhwt3IuUMw-Dq3btDbPz8YrOqO59OE5IQ&s", // Replace with a real nature profile image link
  followers: 123,
  following: 56,
  posts: [
    {
      id: 1,
      imageUrl: "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg", // Replace with a real nature image link
      likes: 10,
      comments: [],
    },
    {
      id: 2,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6HWRrkicvnDZ-RupPdWnyW3bMilY1JfDz8Q&s", // Replace with a real nature image link
      likes: 5,
      comments: [],
    },
  ],
};

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    if (username) {
      setUser(initialUserData); // Login success, set user data
    }
  };

  return (
    <div className="App">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Profile user={user} setUser={setUser} />
      )}
    </div>
  );
}

// const App = () => {
//     return (
//         <div className="App">
//             <h1>Welcome to Signup Page</h1>
//             <Signup />
//         </div>
//     );
// };
export default App;
