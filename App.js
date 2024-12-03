import React, { useState } from "react";
import './style.css';
import logo from './images/sparking-banner.png';
import SearchBar from './components/SearchBar';
import bardockVid from './videos/bardock-turn-around.mp4';
import gogeta4Vid from './videos/gogeta4-turn-around.mp4';
import vegitossVid from './videos/vegitoss-turn-around.mp4';

function App() {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const [visibleVideo, setVisibleVideo] = useState(null); // Track which video is visible

  const handleImageClick = (character) => {
    setVisibleVideo((prev) => (prev === character ? null : character));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="Logo" />
        <SearchBar onSearch={handleSearch} />
      </header>
      <div className="App-main">
        <div className="character-grid">

        {/*SSJ Goku (MID)*/}
        <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728251687addtextcommtc0nzi4mju1nta.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("/")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSJ Goku (END)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727648924addtextcommtgynziwmzczmdu.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSJ2 Goku (END)*/}
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqwmti5ndewnde.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>
        
          {/*SSJ3 Goku (END)*/}
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqwmtazndewmzg.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSJ Goku (DBS)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726369739addtextcommjmwmtmxntg4njq.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSG Goku (DBS)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728180986addtextcommjeznzmzmtk5oda.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSB Goku (DBS)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728183373addtextcommjiwmdawmtc1mzg.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*MUI Goku*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726353232addtextcommtgymzm2njuwntk.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSJ3 Goku (GT)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728334744addtextcommty1odm4nju3nw.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSJ4 Goku (GT)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726153958addtextcommtexmte2ndizode.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Great Ape Vegeta*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727277647addtextcommtexnjm5mje1nta.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Super Vegeta*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728267179addtextcommjixmjmzmjy4nji.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSJ2 Vegeta (END)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727669076addtextcommdawmjqymzkymja.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSJ4 Vegeta (GT)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726153957addtextcommta1njqymze0mjm.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSJ2 Teen Gohan*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728315291addtextcommtezndi0mzm3ng.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSJ2 Gohan*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728313087addtextcommta1nzq1mzawoa.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Great Saiyanman*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727277647addtextcommta0mzq1mjeymzk.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Ultimate Gohan*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726983094addtextcommdeyotm5odgxma.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Future Gohan*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728191270addtextcommdewnzm2mjeyndq.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSJ Future Gohan*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728190969addtextcommda1mze2mjexnty.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Piccolo (END)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727117373addtextcommte1njm1ndcyng.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Yamcha*/}
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqyndu5ndezmda.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Super Trunks*/}
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti0njuyndazmjk.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Vegito*/}
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmwnja3ndm3mjq.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSJ Vegito*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1732026355addtextcommdkyndq4ndmxmg.png"
              alt="Vegito"
              className="character"
              onClick={() => handleImageClick("vegitoss")}
              style={{ cursor: "pointer" }}
            />
            {visibleVideo === "vegitoss" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={vegitossVid}
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )}
          </div>

          {/*SSB Vegito*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728183373addtextcommjiwode2mtc1oti.png"
              alt="Vegito"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSJ Gogeta (Z)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727656432addtextcommjazmze5njgxnzg.png"
              alt="Vegito"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Gogeta (DBS)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727373736addtextcommtm1odawnde3nzi.png"
              alt="Vegito"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSJ Gogeta (DBS)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727296731addtextcommtyznde2mjq1mta.png"
              alt="Vegito"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*SSB Gogeta (DBS)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728183373addtextcommjiwnzi0mtc1odc.png"
              alt="Vegito"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Gogeta SSJ4*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727369681addtextcommti1mjewmzmxnta.png"
              alt="Gogeta4"
              className="character"
              onClick={() => handleImageClick("gogeta4")}
              style={{ cursor: "pointer" }}
            />
            {visibleVideo === "gogeta4" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={gogeta4Vid}
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )}
          </div>

          {/*Videl*/}
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqymte4ndeynju.png"
              alt="Gogeta4"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Master Roshi (FP)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728452377addtextcommji1mzu1nzk5mw.png"
              alt="Gogeta4"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*2nd Form Frieza (Z)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726981661addtextcommda1nte2njcwndq.png"
              alt="Gogeta4"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Final Form Frieza (Z)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727117373addtextcommtm1nzuznzi3oti.png"
              alt="Gogeta4"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Full Power Frieza (Z)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727192635addtextcommte0mdi5mtu3mjm.png"
              alt="Gogeta4"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Final Form Frieza (DBS)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726514840addtextcommtuynzaxndmzmq.png"
              alt="Gogeta4"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Golden Frieza*/}
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmymtq3ndm4nji.png"
              alt="Gogeta4"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Cell 2nd Form*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727022174addtextcommtiymje5nziwmde.png"
              alt="Gogeta4"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Super Perfect Cell*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728253978addtextcommtgzmjm4mju3ody.png"
              alt="Gogeta4"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Majin Buu*/}
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtm0mtuzndqwntm.png"
              alt="Gogeta4"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Super Buu*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727969783addtextcommteznte4mzewody.png"
              alt="Gogeta4"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Buuhan*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727121105addtextcommtuznzq4njy4mg.png"
              alt="Gogeta4"
              className="character"
              onClick={() => handleImageClick("")}
              style={{ cursor: "pointer" }}
            />
            {/*{visibleVideo === "" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} */}
          </div>

          {/*Bardock*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728183373addtextcommji1nti3mja0njc.png"
              alt="Bardock"
              className="character"
              onClick={() => handleImageClick("bardock")}
              style={{ cursor: "pointer" }}
            />
            {visibleVideo === "bardock" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={bardockVid}
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
