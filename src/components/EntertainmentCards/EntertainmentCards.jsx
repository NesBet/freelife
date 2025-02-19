import React, { useState } from 'react';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons from react-icons
import styles from './EntertainmentCards.module.css';

function EntertainmentCards() {
  const [activeCard, setActiveCard] = useState(null);

  const categories = [
    {
      title: "Movies",
      description: "Explore the latest blockbusters and timeless classics. Dive into a world of cinematic wonders with our curated collection of films.",
      icon: "🎬",
      color: "#FF6B6B",
      website: "https://hdtoday.cc/",
      apkPath: process.env.PUBLIC_URL + "/apks/onstream.apk"
    },
    {
      title: "Sports",
      description: "Catch live matches and sports highlights. Stay updated with the latest scores, news, and analysis from the world of sports.",
      icon: "⚽️",
      color: "#4ECDC4",
      website: "https://www.totalsportek.to/",
      apkPath: process.env.PUBLIC_URL + "/apks/CRICFy_v4.9.apk"
    },
    {
      title: "Music",
      description: "Discover trending tracks and artist performances. Explore a vast library of songs, playlists, and live performances.",
      icon: "🎵",
      color: "#45B7D1",
      website: "https://soundcloud.com/",
      apkPath: process.env.PUBLIC_URL + "/apks/free-music.apk"
    }
  ];

  const handleDownloadApk = (apkPath) => {
    const link = document.createElement('a');
    link.href = apkPath;
    link.download = apkPath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenWebsite = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.entertainmentWebsite}>
      <div className={styles.cardContainer}>
        {categories.map((category, index) => (
          <div 
            key={index} 
            className={`${styles.entertainmentCard} ${activeCard === index ? styles.active : ''}`}
            style={{ backgroundColor: category.color }}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>{category.icon}</div>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
              <div className={styles.cardButtons}>
                <button 
                  className={`${styles.cardButton} ${styles.downloadButton}`}
                  onClick={() => handleDownloadApk(category.apkPath)}
                >
                  <FaDownload className={styles.buttonIcon} /> Download App
                </button>
                <button 
                  className={`${styles.cardButton} ${styles.websiteButton}`}
                  onClick={() => handleOpenWebsite(category.website)}
                >
                  <FaExternalLinkAlt className={styles.buttonIcon} /> Open Website
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EntertainmentCards;
