import React, { useState, useEffect } from 'react';
import './style.css';
import logo from './images/sparking-banner.png';
import ssjgokumidVid from './videos/ssjgokumid-turn-around.mp4';
import ssjgokuendVid from './videos/ssjgokuend-turn-around.mp4';
import ssj2gokuendVid from './videos/ssj2gokuend-turn-around.mp4';
import ssjgokudbsVid from './videos/ssjgokudbs-turn-around.mp4';
import ssggokuVid from './videos/ssggoku-turn-around.mp4';
import ssbgokuVid from './videos/ssbgoku-turn-around.mp4';
import ssj4gokuVid from './videos/ssj4goku-turn-around.mp4';
import vegitossVid from './videos/vegitoss-turn-around.mp4';
import gogeta4Vid from './videos/gogeta4-turn-around.mp4';
import bardockVid from './videos/bardock-turn-around.mp4';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = theme; // Optional: Apply theme to the entire body
  }, [theme]);

  const [searchQuery, setSearchQuery] = useState(""); // Track the search query
  const [setVisibleVideo] = useState(""); // Track which video is visible

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); // Update search query in real-time
  };

  const handleImageClick = (character) => {
    setVisibleVideo((prev) => (prev === character ? null : character));
  };

  const isCharacterMatch = (character) => {
    return character.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const openCustomFullscreen = (videoSrc) => {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; 
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "1000";
  
    const videoElement = document.createElement("video");
    videoElement.src = videoSrc;
    videoElement.controls = true;
    videoElement.style.width = "60%"; 
    videoElement.style.height = "auto";
    videoElement.style.objectFit = "cover";
    videoElement.loop = true;
  
    // Close overlay on click outside the video
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        document.body.removeChild(overlay);
      }
    });
  
    overlay.appendChild(videoElement);
    document.body.appendChild(overlay);
  
    videoElement.play();
  };

  return (
      <div className={`App ${theme}`}> {/* Dynamically apply theme class */}
      <header className="App-header">
        <img src={logo} alt="Logo" className="Logo" />
          <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for a character"
          className="search-bar"
          />
      <button className="theme-toggle" onClick={toggleTheme}> {/* Theme toggle */}
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      </header>
      
      <div className="social-icons">
        <a href="https://www.twitch.tv/vixzo" target="_blank" rel="noopener noreferrer">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNTIuOSIgaGVpZ2h0PSIyNTIuOSIgdmlld0JveD0iMS40MDcgMS40MDcgMjUyLjkgMjUyLjkiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjgxIDAgMCAyLjgxIDEuNDA3IDEuNDA3KSI+PHBhdGggZmlsbD0iIzYxM2JhMiIgZD0iTSAzOC42NTcgNjIuMTY0IEwgNDUgNTUuODIxIGggMTEuOTQgbCA3LjQ2MyAtNy40NjMgViAyNC40NzggSCAyOC41ODIgdiAzMS4zNDMgaCAxMC4wNzUgViA2Mi4xNjQgeiBNIDUyLjQ2MyAzMy4wNiBoIDQuNDc4IHYgMTMuMDQ2IGggLTQuNDc4IFYgMzMuMDYgeiBNIDQwLjUyMiAzMy4wNiBIIDQ1IHYgMTMuMDQ2IGggLTQuNDc4IFYgMzMuMDYgeiIvPjxwYXRoIGZpbGw9IiM2MTNiYTIiIGQ9Ik0gNDUgMCBDIDIwLjE0NyAwIDAgMjAuMTQ3IDAgNDUgYyAwIDI0Ljg1MyAyMC4xNDcgNDUgNDUgNDUgcyA0NSAtMjAuMTQ3IDQ1IC00NSBDIDkwIDIwLjE0NyA2OS44NTMgMCA0NSAwIHogTSA2OC44ODEgNTAuNTk3IGwgLTEzLjA2IDEzLjA2IGggLTkuNzAyIEwgMzkuNzc2IDcwIEggMzMuMDYgdiAtNi4zNDMgaCAtMTEuOTQgViAyOC41ODIgTCAyNC40NzggMjAgaCA0NC40MDMgViA1MC41OTcgeiIvPjwvZz48L3N2Zz4="
            alt="twitch"
            className="icon"
          />
        </a>
        <a href="https://www.tiktok.com/@vixzotv?_t=8onA2ayxZmA&_r=1" target="_blank" rel="noopener noreferrer">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNTIuOSIgaGVpZ2h0PSIyNTIuOSIgdmlld0JveD0iMS40MDcgMS40MDcgMjUyLjkgMjUyLjkiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjgxIDAgMCAyLjgxIDEuNDA3IDEuNDA3KSI+PHBhdGggZmlsbD0iIzA4ZTFkYyIgZD0iTSA0NSAwIEMgMjguOTY3IDAgMTQuOTAyIDguMzkyIDYuOTMyIDIxLjAxNSBjIDIuNzI5IDEuOTcgNi4wNjkgMy4xNDUgOS42OTMgMy4xNDUgaCAzMi4zOTkgYyAxNy4wOCAwIDMyLjEyMyA4LjcwNCA0MC45NDggMjEuOTE1IEMgODkuOTgxIDQ1LjcxNiA5MCA0NS4zNiA5MCA0NSBDIDkwIDIwLjE0NyA2OS44NTMgMCA0NSAwIHoiLz48cGF0aCBmaWxsPSIjMDhkNWQwIiBkPSJNIDkwIDQ1IGMgMCAtMS4yMDcgLTAuMDYyIC0yLjM5OSAtMC4xNTUgLTMuNTgzIEMgODEuMDAyIDI3LjczNSA2Ni4wMiAyMC44ODUgNDkuMDI0IDIwLjg4NSBIIDE2LjYyNSBjIC0zLjE1OSAwIC02LjEwMSAtMC40OTQgLTguNjE0IC0xLjUwNCBDIDMuMzg3IDI2LjA0NiAwLjUxIDM0LjAxNCAwLjA2MyA0Mi42MjkgYyA5LjAyMyAxMS4xMjcgMjIuNzk0IDE4LjI0NyAzOC4yMzYgMTguMjQ3IGggMC43NDQgYyA5LjAzOCAwIDEzLjEwMSAzLjk0MiAxMy4zMjkgMTIuOTI1IGMgMC4wMDQgLTAuMTQzIDAuMDIyIC0wLjI4MiAwLjAyMiAtMC40MjYgYyAwIDguNDE3IC0zLjUxNiAxNS4zNTUgLTExLjE3MiAxNi40NTYgQyA0Mi40NjkgODkuOTM0IDQzLjcyNiA5MCA0NSA5MCBDIDY5Ljg1MyA5MCA5MCA2OS44NTMgOTAgNDUgeiIvPjxwYXRoIGZpbGw9IiMwN2M5YzQiIGQ9Ik0gNDEuMjcgODkuODM0IGMgNy45ODggLTEuMDcyIDE0LjE2OSAtNy44MDIgMTQuMzc4IC0xNi4wMzQgYyAtMC4yMjggLTguOTgzIC03LjU2NiAtMTYuMiAtMTYuNjA0IC0xNi4yIGggLTAuNzQ0IGMgLTE1LjI5NiAwIC0yOC45NDcgLTYuOTkyIC0zNy45NzMgLTE3LjkzOCBDIDAuMTE5IDQxLjQxNCAwIDQzLjE5MyAwIDQ1IEMgMCA2OC41OTUgMTguMTY0IDg3LjkzNiA0MS4yNyA4OS44MzQgeiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0gNjYuOTQyIDMyLjUxOSBjIC0yLjg1OCAwIC01LjQ5NSAtMC45NDcgLTcuNjEyIC0yLjU0NCBjIC0yLjQyOCAtMS44MzEgLTQuMTczIC00LjUxNyAtNC43ODkgLTcuNjEyIGMgLTAuMTUzIC0wLjc2NSAtMC4yMzUgLTEuNTU0IC0wLjI0MyAtMi4zNjMgaCAtOC4xNjQgdiAyMi4zMDggbCAtMC4wMSAxMi4yMTkgYyAwIDMuMjY3IC0yLjEyNyA2LjAzNyAtNS4wNzYgNy4wMTEgYyAtMC44NTYgMC4yODMgLTEuNzggMC40MTcgLTIuNzQzIDAuMzY0IGMgLTEuMjI4IC0wLjA2NyAtMi4zNzkgLTAuNDM4IC0zLjM4IC0xLjAzNyBjIC0yLjEyOSAtMS4yNzMgLTMuNTczIC0zLjU4NCAtMy42MTIgLTYuMjI3IGMgLTAuMDYyIC00LjEzMSAzLjI3OCAtNy40OTggNy40MDUgLTcuNDk4IGMgMC44MTUgMCAxLjU5NyAwLjEzMyAyLjMzIDAuMzc0IHYgLTYuMDk3IHYgLTIuMTkyIGMgLTAuNzczIC0wLjExNCAtMS41NTkgLTAuMTc0IC0yLjM1NCAtMC4xNzQgYyAtNC41MTggMCAtOC43NDMgMS44NzggLTExLjc2MyA1LjI2MSBjIC0yLjI4MyAyLjU1NyAtMy42NTIgNS44MTggLTMuODYzIDkuMjM5IGMgLTAuMjc3IDQuNDkzIDEuMzY3IDguNzY0IDQuNTU2IDExLjkxNiBjIDAuNDY4IDAuNDYzIDAuOTYxIDAuODkyIDEuNDc1IDEuMjg4IEMgMzEuODMgNjguODU5IDM1LjE3MyA3MCAzOC42OTMgNzAgYyAwLjc5NSAwIDEuNTgyIC0wLjA1OSAyLjM1NCAtMC4xNzMgYyAzLjI4OCAtMC40ODcgNi4zMjIgLTEuOTkyIDguNzE3IC00LjM1OSBjIDIuOTQyIC0yLjkwOCA0LjU2OCAtNi43NjggNC41ODUgLTEwLjg3NyBsIC0wLjA0MiAtMTguMjQ3IGMgMS40MDMgMS4wODMgMi45MzggMS45NzkgNC41ODUgMi42NzQgYyAyLjU2MiAxLjA4MSA1LjI3OCAxLjYyOCA4LjA3MyAxLjYyOCB2IC01LjkyOCB2IC0yLjE5OSBDIDY2Ljk2NyAzMi41MTkgNjYuOTQzIDMyLjUxOSA2Ni45NDIgMzIuNTE5IEwgNjYuOTQyIDMyLjUxOSB6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTSA0NS4wMTEgNDQuNzg3IGMgMCAwLjE0NCAtMC4wMTggMC4yODMgLTAuMDIxIDAuNDI2IHYgMCBDIDQ0Ljk5MyA0NS4wNyA0NS4wMTEgNDQuOTMxIDQ1LjAxMSA0NC43ODcgeiIvPjwvZz48L3N2Zz4="
            alt="tiktok"
            className="icon"
          />
        </a>
        <a href="https://www.youtube.com/@VixzoMC" target="_blank" rel="noopener noreferrer">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNTIuOSIgaGVpZ2h0PSIyNTIuOSIgdmlld0JveD0iMS40MDcgMS40MDcgMjUyLjkgMjUyLjkiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjgxIDAgMCAyLjgxIDEuNDA3IDEuNDA3KSI+PHBhdGggZmlsbD0iI2QyMiIgZD0iTSA0NSA5MCBDIDIwLjE4NyA5MCAwIDY5LjgxMyAwIDQ1IEMgMCAyMC4xODcgMjAuMTg3IDAgNDUgMCBjIDI0LjgxMyAwIDQ1IDIwLjE4NyA0NSA0NSBDIDkwIDY5LjgxMyA2OS44MTMgOTAgNDUgOTAgeiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0gNjMuODg1IDQ3LjMyNSBjIDEuNzkgLTEuMDMzIDEuNzkgLTMuNjE2IDAgLTQuNjQ5IGwgLTE0LjgxNiAtOC41NTQgbCAtMTQuODE2IC04LjU1NCBjIC0xLjc5IC0xLjAzMyAtNC4wMjcgMC4yNTggLTQuMDI3IDIuMzI1IFYgNDUgdiAxNy4xMDggYyAwIDIuMDY2IDIuMjM3IDMuMzU4IDQuMDI3IDIuMzI1IGwgMTQuODE2IC04LjU1NCBMIDYzLjg4NSA0Ny4zMjUgeiIvPjwvZz48L3N2Zz4="
            alt="youtube"
            className="icon"
          />
        </a>
      </div>
      <div className="App-main">
        <div className="character-grid">

        {/* All characters formatted the same */}
          {/* SSJ Goku (MID) */}
          {isCharacterMatch("ssj goku mid") && (
            <div>
              <img
                src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728251687addtextcommtc0nzi4mju1nta.png"
                alt="SSJ Goku (MID)"
                className="character"
                onClick={() => openCustomFullscreen(ssjgokumidVid)}
                style={{ cursor: "pointer" }}
              />
            </div>
          )}

          {/* SSJ Goku (END) */}
          {isCharacterMatch("ssj goku end") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727648924addtextcommtgynziwmzczmdu.png"
              alt="SSJ Goku (END)"
              className="character"
              onClick={() => openCustomFullscreen(ssjgokuendVid)}
              style={{ cursor: "pointer" }}
            />
            </div>
          )}

          {/* SSJ2 Goku (END) */}
          {isCharacterMatch("ssj2 goku end") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqwmti5ndewnde.png"
              alt="SSJ2 Goku (END)"
              className="character"
              onClick={() => openCustomFullscreen(ssj2gokuendVid)}
              style={{ cursor: "pointer" }}
            />
            </div>
          )}
        
          {/* SSJ3 Goku */}
          {isCharacterMatch("ssj3 goku end") && (
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
          )}

          {/* SSJ Goku (DBS) */}
          {isCharacterMatch("ssj goku super") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726369739addtextcommjmwmtmxntg4njq.png"
              alt="SSJ Goku (DBS)"
              className="character"
              onClick={() => openCustomFullscreen(ssjgokudbsVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSG Goku (DBS) */}
          {isCharacterMatch("god goku") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728180986addtextcommjeznzmzmtk5oda.png"
              alt="SSG Goku (DBS)"
              className="character"
              onClick={() => openCustomFullscreen(ssggokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSB Goku (DBS) */}
          {isCharacterMatch("blue goku") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728183373addtextcommjiwmdawmtc1mzg.png"
              alt="SSB Goku (DBS)"
              className="character"
              onClick={() => openCustomFullscreen(ssbgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* MUI Goku */}
          {isCharacterMatch("mui goku") && (
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
          )}

          {/* SSJ3 Goku (GT) */}
          {isCharacterMatch("ssj3 goku gt") && (
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
          )}

          {/* SSJ4 Goku (GT) */}
          {isCharacterMatch("ssj4 goku") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726153958addtextcommtexmte2ndizode.png"
              alt="SSJ4 Goku (GT)"
              className="character"
              onClick={() => openCustomFullscreen(ssj4gokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Great Ape Vegeta */}
          {isCharacterMatch("great ape vegeta") && (
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
          )}

          {/* Super Vegeta */}
          {isCharacterMatch("super vegeta") && (
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
          )}

          {/* SSJ2 Vegeta (END) */}
          {isCharacterMatch("ssj2 vegeta end") && (
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
          )}

          {/* SSJ4 Vegeta (GT) */}
          {isCharacterMatch("ssj4 vegeta") && (
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
          )}

          {/* SSJ2 Teen Gohan */}
          {isCharacterMatch("ssj2 teen gohan") && (
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
          )}

          {/* SSJ2 Gohan */}
          {isCharacterMatch("ssj2 adult gohan") && (
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
          )}

          {/* Great Saiyanman */}
          {isCharacterMatch("great saiyanman") && (
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
          )}

          {/* Ultimate Gohan */}
          {isCharacterMatch("ultimate gohan") && (
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
          )}

          {/* Future Gohan */}
          {isCharacterMatch("future gohan") && (
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
          )}

          {/* SSJ Future Gohan */}
          {isCharacterMatch("ssj future gohan") && (
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
          )}

          {/* Piccolo (END) */}
          {isCharacterMatch("piccolo") && (
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
          )}

          {/* Yamcha */}
          {isCharacterMatch("yamcha") && (
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
          )}

          {/* Super Trunks */}
          {isCharacterMatch("super trunks") && (
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
          )}

          {/* Vegito */}
          {isCharacterMatch("vegito") && (
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
          )}

          {/* SSJ Vegito */}
          {isCharacterMatch("super vegito") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1732026355addtextcommdkyndq4ndmxmg.png"
              alt="Vegito"
              className="character"
              onClick={() => openCustomFullscreen(vegitossVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSB Vegito */}
          {isCharacterMatch("blue vegito") && (
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
          )}

          {/* SSJ Gogeta (Z) */}
          {isCharacterMatch("super gogeta z") && (
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
          )}

          {/* Gogeta (DBS) */}
          {isCharacterMatch("gogeta") && (
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
          )}

          {/* SSJ Gogeta (DBS) */}
          {isCharacterMatch("ssj gogeta super") && (
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
          )}

          {/* SSB Gogeta (DBS) */}
          {isCharacterMatch("blue gogeta") && (
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
          )}

          {/* Gogeta SSJ4 */}
          {isCharacterMatch("ssj4 gogeta") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727369681addtextcommti1mjewmzmxnta.png"
              alt="Gogeta4"
              className="character"
              onClick={() => openCustomFullscreen(gogeta4Vid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Videl */}
          {isCharacterMatch("videl") && (
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
          )}

          {/* Master Roshi (FP) */}
          {isCharacterMatch("master roshi max power") && (
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
          )}

          {/* 2nd Form Frieza (Z) */}
          {isCharacterMatch("frieza 2nd form") && (
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
          )}

          {/* Final Form Frieza (Z) */}
          {isCharacterMatch("frieza 4th form") && (
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
          )}

          {/* Full Power Frieza (Z) */}
          {isCharacterMatch("frieza full power") && (
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
          )}

          {/* Final Form Frieza (DBS) */}
          {isCharacterMatch("frieza super") && (
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
          )}

          {/* Golden Frieza */}
          {isCharacterMatch("golden frieza") && (
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
          )}

          {/* Cell 2nd Form */}
          {isCharacterMatch("cell 2nd form") && (
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
          )}

          {/* Super Perfect Cell */}
          {isCharacterMatch("super perfect cell") && (
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
          )}

          {/* Majin Buu */}
          {isCharacterMatch("majin buu") && (
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
          )}

          {/* Super Buu */}
          {isCharacterMatch("super buu") && (
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
          )}

          {/* Buuhan */}
          {isCharacterMatch("buuhan") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727121105addtextcommtuznzq4njy4mg.png"
              alt=""
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
          )}

          {/* Yajirobe */}
          {isCharacterMatch("yajirobe") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmxnzu5ndm4mzq.png"
              alt=""
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
          )}

          {/* Bardock */}
          {isCharacterMatch("bardock") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728183373addtextcommji1nti3mja0njc.png"
              alt="Bardock"
              className="character"
              onClick={() => openCustomFullscreen(bardockVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Raditz */}
          {isCharacterMatch("raditz") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmymdm1ndm4ntm.png"
              alt=""
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
          )}

          {/* Nappa */}
          {isCharacterMatch("nappa") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti0mdm1ndaynja.png"
              alt=""
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
          )}

          {/* Super Zarbon */}
          {isCharacterMatch("super zarbon") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728459768addtextcommdm0mda5mtczmzi.png"
              alt=""
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
          )}

          {/* Dodoria */}
          {isCharacterMatch("dodoria") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727121105addtextcommtu0nte2njc1mw.png"
              alt=""
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
          )}

          {/* Captain Ginyu */}
          {isCharacterMatch("ginyu") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti1mze3ndaznzq.png"
              alt=""
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
          )}

          {/* Recoome */}
          {isCharacterMatch("recoome") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti1mjq0ndaznjc.png"
              alt=""
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
          )}

          {/* Burter */}
          {isCharacterMatch("burter") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti0ndizndayote.png"
              alt=""
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
          )}

          {/* Jeice */}
          {isCharacterMatch("jeice") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti0mtaxndaynjc.png"
              alt=""
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
          )}

          {/* Guldo */}
          {isCharacterMatch("guldo") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqynda2ndeyotm.png"
              alt=""
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
          )}

          {/* King Cold */}
          {isCharacterMatch("king cold") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqxmtazndexnti.png"
              alt=""
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
          )}

          {/* Android 16 */}
          {isCharacterMatch("android 16") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqxntexndexotc.png"
              alt=""
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
          )}

          {/* Android 17 (Z) */}
          {isCharacterMatch("android 17 z") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728249232addtextcommtcxmje2mjuznzy.png"
              alt=""
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
          )}

          {/* Android 17 (DBS) */}
          {isCharacterMatch("android 17 super") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726369739addtextcommji1nta4ntg4mjm.png"
              alt=""
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
          )}

          {/* Android 18 */}
          {isCharacterMatch("android 18") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtizotu5ndayntu.png"
              alt=""
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
          )}

          {/* Android 19 */}
          {isCharacterMatch("android 19") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqxndi2ndexody.png"
              alt=""
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
          )}

          {/* Dabura */}
          {isCharacterMatch("dabura") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmzntq4ndm5ote.png"
              alt=""
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
          )}

          {/* SSJ Broly (Z) */}
          {isCharacterMatch("ssj broly z") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728250725addtextcommtczodeymju1mdy.png"
              alt=""
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
          )}

          {/* LSSJ Broly (Z) */}
          {isCharacterMatch("lssj broly z") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728250201addtextcommtcynji5mju0ndi.png"
              alt=""
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
          )}

          {/* Broly (DBS) */}
          {isCharacterMatch("base broly super") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti0otq5ndaznti.png"
              alt=""
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
          )}

          {/* SSJ Broly (DBS) */}
          {isCharacterMatch("ssj broly super") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726354716addtextcommtg1nda1ntcwntq.png"
              alt=""
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
          )}

          {/* LSSJ Broly (DBS) */}
          {isCharacterMatch("ssj broly full power super") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727976137addtextcommtmymdq1mze0mta.png"
              alt=""
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
          )}

          {/* Super Garlic Jr. */}
          {isCharacterMatch("super garlic jr.") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728252631addtextcommtgxmda0mju2nzy.png"
              alt=""
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
          )}

          {/* Dr. Wheelo */}
          {isCharacterMatch("dr. wheelo") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759066addtextcommta1odi2mzc5ntq.png"
              alt=""
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
          )}

          {/* Lord Slug */}
          {isCharacterMatch("lord slug") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726764103addtextcommtiwotu4nde2mde.png"
              alt=""
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
          )}

          {/* Lord Slug (Giant) */}
          {isCharacterMatch("giant lord slug") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728457411addtextcommdmwmdq2mtixndg.png"
              alt=""
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
          )}

          {/* Final Form Cooler */}
          {isCharacterMatch("final form cooler") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759067addtextcommtewndm3mzgwmtq.png"
              alt=""
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
          )}

          {/* Metal Cooler */}
          {isCharacterMatch("metal cooler") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759067addtextcommtewmtuymzc5odc.png"
              alt=""
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
          )}

          {/* Android 13 (Fused) */}
          {isCharacterMatch("fusion android 13") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727654168addtextcommtk1ntqxnjc5odi.png"
              alt=""
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
          )}

          {/* Bojack */}
          {isCharacterMatch("bojack") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759066addtextcommta1mza0mzc4otq.png"
              alt=""
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
          )}

          {/* Bojack (Full Power) */}
          {isCharacterMatch("full power bojack") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727192635addtextcommtezmzu5mtu2ndk.png"
              alt=""
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
          )}

          {/* Janemba */}
          {isCharacterMatch("janemba") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726807458addtextcommda0mzq2ndc1mzm.png"
              alt=""
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
          )}

          {/* Super Janemba */}
          {isCharacterMatch("super janemba") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759066addtextcommta0otm3mzc4ntc.png"
              alt=""
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
          )}

          {/* Tapion */}
          {isCharacterMatch("tapion") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759066addtextcommta1mduymzc4nza.png"
              alt=""
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
          )}

          {/* Hirudegarn */}
          {isCharacterMatch("hirudegarn") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759066addtextcommta1mtm2mzc4oda.png"
              alt=""
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
          )}

          {/* Super Baby 2 */}
          {isCharacterMatch("super baby 2") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727123172addtextcommtyyntu0ntmyoq.png"
              alt=""
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
          )}

          {/* Great Ape Baby */}
          {isCharacterMatch("great ape baby") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727277647addtextcommtewodiwmje0otq.png"
              alt=""
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
          )}

          {/* Omega Shenron */}
          {isCharacterMatch("omega shenron") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727667805addtextcommjmzmdu1njkynzq.png"
              alt=""
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
          )}

          {/* Spopovich */}
          {isCharacterMatch("spopovich") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmznte4ndm5nzk.png"
              alt=""
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
          )}

          {/* Beerus */}
          {isCharacterMatch("beerus") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmzode1ndqwmtk.png"
              alt=""
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
          )}

          {/* SSR Goku Black */}
          {isCharacterMatch("ssj rose goku black") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728272124addtextcommjmzndu3mjk5nzq.png"
              alt=""
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
          )}

          {/* Zamasu */}
          {isCharacterMatch("zamasu") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmxotqwndm4ndk.png"
              alt=""
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
          )}

          {/* Fused Zamasu */}
          {isCharacterMatch("fused zamasu") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmynje5ndm5mty.png"
              alt=""
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
          )}

          {/* Fused Zamasu (Corrupted) */}
          {isCharacterMatch("corrupted fused zamasu") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728449886addtextcommda1nzexmtezodm.png"
              alt=""
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
          )}

          {/* Hit */}
          {isCharacterMatch("hit") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727123729addtextcommtyzmzq3ntm3mq.png"
              alt=""
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
          )}

          {/* Frost */}
          {isCharacterMatch("frost") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759067addtextcommtexmza1mzgxntq.png"
              alt=""
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
          )}

          {/* Caulifla */}
          {isCharacterMatch("caulifla") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727471699addtextcommtcxndmzmtuzotk.png"
              alt=""
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
          )}

          {/* SSJ2 Caulifla */}
          {isCharacterMatch("ssj2 caulifla") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728701617addtextcommji1mze5ntaymzi.png"
              alt=""
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
          )}

          {/* Berserker Kale */}
          {isCharacterMatch("ssj kale berserker") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727117953addtextcommtq1odq4ndy4oq.png"
              alt=""
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
          )}

          {/* SSJ Kale */}
          {isCharacterMatch("ssj kale") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmxmdi2ndm3nty.png"
              alt=""
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
          )}

          {/* SSJ Kefla */}
          {isCharacterMatch("ssj kefla") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728452377addtextcommtmwnze2ndm3mzm.png"
              alt=""
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
          )}

          {/* SSJ2 Kefla */}
          {isCharacterMatch("ssj2 kefla") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728263486addtextcommjexmdeymjg5ndk.png"
              alt=""
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
          )}

          {/* Jiren */}
          {isCharacterMatch("jiren") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727377501addtextcommtq1nzqxmzqwndy.png"
              alt=""
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
          )}

          {/* Jiren (Full Power) */}
          {isCharacterMatch("jiren full power") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727366525addtextcommte0nta5nda0njq.png"
              alt=""
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
          )}

          {/* Toppo */}
          {isCharacterMatch("toppo") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti0mte5ndaynjk.png"
              alt=""
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
          )}

          {/* Toppo (God of Destruction) */}
          {isCharacterMatch("god toppo") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759067addtextcommtexmte2mzgxndi.png"
              alt=""
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
          )}

          {/* Bergamo */}
          {isCharacterMatch("bergamo") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728183373addtextcommjixmja5mtc2mdq.png"
              alt=""
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
          )}

          {/* Ribrianne */}
          {isCharacterMatch("ribrianne") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmzmzi0ndm5ntu.png"
              alt=""
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
          )}

          {/* Kakunsa */}
          {isCharacterMatch("kakunsa") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti0njaxndazmjm.png"
              alt=""
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
          )}

          {/* Anilaza */}
          {isCharacterMatch("anilaza") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti1mtmxndaznjm.png"
              alt=""
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
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
