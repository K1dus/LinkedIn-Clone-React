import React from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("KIDUS to clone more websites", "Headline - 13k readers")}
        {newsArticle("CHATGPT4 NEWS", "Open AI - 6754 readers")}
        {newsArticle("REACT Developer Needed", "Microsoft - 9705 readers")}
        {newsArticle("Nvida hit $1tn valuation", "Breaking News - 4521 readers")}
        {newsArticle("Spider-Man: Across the Spider-Verse released", "Marvel Studios - 10k readers")}
        {newsArticle("Techo unveils Techno V Fold", "Techno Mobiles")}
        {newsArticle("Adobe announces AI powered Generative Fill for Photoshop", "CNN")}
        
    </div>
  );
}

export default Widgets

// Cloned by: Kidus Efrem
// Email: kidus@protonmail.com
// Phone: +251917001417
// GitHub: https://www.github.com/k1dus
// LinkedIn: https://www.linkedin.com/in/kidusefrem/