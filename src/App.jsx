import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login";
import AuthContext from "./contexts/AuthContext";
import Profile from "./views/Profile/Profile/Profile";
import PlantsList from "./views/Plants/PlantsList/PlantsList";
import SignUp from "./views/SignUp/SignUp";
import PlantDetail from "./views/Plants/PlantDetail/PlantDetail";
import PostsList from "./views/Posts/PostsList/PostsList";
import PostDetail from "./views/Posts/PostDetail/PostDetail";
import CreatePost from "./views/Posts/CreatePost/CreatePost";
import ProfileEdit from "./views/Profile/ProfileEdit/ProfileEdit";
import EditPost from "./views/Posts/EditPost/EditPost";
import './App.css'
import Following from "./views/Following/Following";
import Followers from "./views/Followers/Followers";

function App() {
  const { isAuthLoaded, currentUser } = useContext(AuthContext);

  return (
    <div className="App">
      {!isAuthLoaded ? (
        <p>Loading...</p>
      ) : (
        <Routes>
        
          <Route path="login" element={<Login />} />
            {currentUser && (
              <Route path="/" element={<Profile />} />
          )}
            {!currentUser && (
              <Route path="/" element={<Login />} />
          )}
          <Route path="/profile" element={<Profile />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="/edit-profile" element={<ProfileEdit />} />

          <Route path="plants" element={<PlantsList all={true}/>} />
          <Route path="plants/:id" element={<PlantDetail />} />

          <Route path="/posts" element={<PostsList all={true}/>} />
          <Route path="/posts/:postId" element={<PostDetail />} />

          <Route path="/new" element={<CreatePost />}/>
         <Route path="/posts/:postId/edit" element={<EditPost />}/>
         <Route path='/profile/:userId' element={<Profile />} />

         <Route path="/profile/:userId/following" element={<Following />}/>
         <Route path="/profile/:userId/followers" element={<Followers />}/>
        </Routes>
      )}
    </div>
  );
}

export default App;
