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

          {/*Gogeta SSJ4*/}
          <div>
            <img
              src={"https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727369681addtextcommti1mjewmzmxnta.png"}
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

          {/*SSJ Vegito*/}
          <div>
            <img
              src={"https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1732026355addtextcommdkyndq4ndmxmg.png"}
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
        </div>
      </div>
    </div>
  );
}

export default App;
