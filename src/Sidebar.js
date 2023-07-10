import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Sidebar.css";

function Sidebar() {

const recentItem = (topic) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
);


  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://travel2next.com/wp-content/uploads/venice-carnival-at-night.jpg" alt="" />
            <Avatar className='sidebar__avatar' />
            <h2>Kidus Efrem</h2>
            <h4>kidus@protonmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">4,547</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">4,123</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  );
}

export default Sidebar

// Cloned by: Kidus Efrem
// Email: kidus@protonmail.com
// Phone: +251917001417
// GitHub: https://www.github.com/k1dus
// LinkedIn: https://www.linkedin.com/in/kidusefrem/