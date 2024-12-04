import React, { useState } from "react";
import './style.css';
import logo from './images/sparking-banner.png';
import SearchBar from './components/SearchBar';
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

        {/*SSJ Goku (MID)*/}
        <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728251687addtextcommtc0nzi4mju1nta.png"
              alt="SSJ Goku (MID)"
              className="character"
              onClick={() => handleImageClick("ssjgokumid")}
              style={{ cursor: "pointer" }}
            />
            {visibleVideo === "ssjgokumid" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={ssjgokumidVid}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )}
          </div>

          {/*SSJ Goku (END)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727648924addtextcommtgynziwmzczmdu.png"
              alt="SSJ Goku (END)"
              className="character"
              onClick={() => handleImageClick("ssjgokuend")}
              style={{ cursor: "pointer" }}
            />
            {visibleVideo === "ssjgokuend" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={ssjgokuendVid}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )} 
          </div>

          {/*SSJ2 Goku (END)*/}
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqwmti5ndewnde.png"
              alt="SSJ2 Goku (END)"
              className="character"
              onClick={() => handleImageClick("ssj2gokuend")}
              style={{ cursor: "pointer" }}
            />
            {visibleVideo === "ssj2gokuend" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={ssj2gokuendVid}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )}
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
              alt="SSJ Goku (DBS)"
              className="character"
              onClick={() => handleImageClick("ssjgokudbs")}
              style={{ cursor: "pointer" }}
            />
            {visibleVideo === "ssjgokudbs" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={ssjgokudbsVid}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )}
          </div>

          {/*SSG Goku (DBS)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728180986addtextcommjeznzmzmtk5oda.png"
              alt="SSG Goku (DBS)"
              className="character"
              onClick={() => handleImageClick("ssggoku")}
              style={{ cursor: "pointer" }}
            />
            {visibleVideo === "ssggoku" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={ssggokuVid}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )}
          </div>

          {/*SSB Goku (DBS)*/}
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728183373addtextcommjiwmdawmtc1mzg.png"
              alt="SSB Goku (DBS)"
              className="character"
              onClick={() => handleImageClick("ssbgoku")}
              style={{ cursor: "pointer" }}
            />
            {visibleVideo === "ssbgoku" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={ssbgokuVid}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )}
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
              alt="SSJ4 Goku (GT)"
              className="character"
              onClick={() => handleImageClick("ssj4goku")}
              style={{ cursor: "pointer" }}
            />
            {visibleVideo === "ssj4goku" && (
              <div className="video-container" style={{ marginTop: "20px" }}>
                <video
                  src={ssj4gokuVid}    
                  controls
                  width="600"
                  style={{ display: "block", margin: "0 auto" }}
                >
                </video>
              </div>
            )}
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
