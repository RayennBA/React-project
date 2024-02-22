import logo from './spring-images-min.jpg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="card">
    <img src={logo} alt="this image" />
    <h3>Blog post published</h3>
    <p>This blog post has been published. Team members will be able <br /> to edit this post and republish changes</p>
    <form method="POST">
        <input type="submit" value="Cancel" className="btn" id="btn1" />
        <input type="submit" value="Confirm" className="btn" id="btn2" />
    </form>
</div>
  );
}

export default App;
