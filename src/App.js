import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import logo from './images/sparking-banner.png';
import SuperCounters from './pages/Supercounter';
import ssjgokumidVid from './videos/ssjgokumid-turn-around.mp4';
import ssjgokuendVid from './videos/ssjgokuend-turn-around.mp4';
import ssj2gokuendVid from './videos/ssj2gokuend-turn-around.mp4';
import ssj3gokuendVid from  './videos/ssj3gokuend-turn-around.mp4';
import ssjgokudbsVid from './videos/ssjgokudbs-turn-around.mp4';
import ssggokuVid from './videos/ssggoku-turn-around.mp4';
import ssbgokuVid from './videos/ssbgoku-turn-around.mp4';
import muigokuVid from './videos/muigoku-turn-around.mp4';
import ssj3gtgokuVid from './videos/ssj3gtgoku-turn-around.mp4';
import ssj4gokuVid from './videos/ssj4goku-turn-around.mp4';
import greatapevegetaVid from './videos/greatapevegeta-turn-around.mp4';
import supervegetaVid from './videos/supervegeta-turn-around.mp4';
import ssj2vegetaVid from './videos/ssj2vegeta-turn-around.mp4';
import ssj4vegetaVid from './videos/ssj4vegeta-turn-around.mp4';
import ssj2gohanVid from './videos/ssj2gohan-turn-around.mp4';
import greatsaiyanmanVid from './videos/greatsaiyanman-turn-around.mp4';
import ultimategohanVid from './videos/ultimategohan-turn-around.mp4';
import ssjfuturegohanVid from './videos/ssjfuturegohan-turn-around.mp4';
import supertrunksVid from './videos/supertrunks-turn-around.mp4';
import vegitoVid from './videos/vegito-turn-around.mp4';
import vegitossVid from './videos/vegitoss-turn-around.mp4';
import vegitoblueVid from './videos/vegitoblue-turn-around.mp4';
import gogetadbsVid from './videos/gogetadbs-turn-around.mp4';
import ssjgogetadbsVid from './videos/ssjgogetadbs-turn-around.mp4';
import bluegogetaVid from './videos/bluegogeta-turn-around.mp4';
import gogeta4Vid from './videos/gogeta4-turn-around.mp4';
import videlVid from './videos/videl-turn-around.mp4'; 
import roshiVid from './videos/roshi-turn-around.mp4';
import secondformfriezaVid from './videos/secondformfrieza-turn-around.mp4';
import fpfriezaVid from './videos/fpfrieza-turn-around.mp4';
import goldenfriezaVid from './videos/goldenfrieza-turn-around.mp4';
import majinbuuVid from './videos/majinbuu-turn-around.mp4';
import bardockVid from './videos/bardock-turn-around.mp4';
import nappaVid from './videos/nappa-turn-around.mp4';
import dodoriaVid from './videos/dodoria-turn-around.mp4';
import kingcoldVid from './videos/kingcold-turn-around.mp4';
import guldoVid from './videos/guldo-turn-around.mp4';
import android16Vid from './videos/android16-turn-around.mp4';
import android19Vid from './videos/android19-turn-around.mp4';
import daburaVid from './videos/dabura-turn-around.mp4';
import ssjbrolyVid from './videos/ssjbroly-turn-around.mp4';
import lssjbrolyVid from './videos/lssjbroly-turn-around.mp4';
import brolydbsVid from './videos/brolydbs-turn-around.mp4';
import ssjbrolydbsVid from './videos/ssjbrolydbs-turn-around.mp4';
import lssjbrolydbsVid from './videos/lssjbrolydbs-turn-around.mp4';
import garlicVid from './videos/garlic-turn-around.mp4';
import drwheeloVid from './videos/drwheelo-turn-around.mp4';
import ffcoolerVid from './videos/ffcooler-turn-around.mp4';
import bojackVid from './videos/bojack-turn-around.mp4';
import android13Vid from './videos/android13-turn-around.mp4';
import superbaby2Vid from './videos/superbaby2-turn-around.mp4';
import greatapebabyVid from './videos/greatapebaby-turn-around.mp4';
import spopovichVid from './videos/spopovich-turn-around.mp4';
import ssrgokublackVid from './videos/ssrgokublack-turn-around.mp4';
import cozamasuVid from './videos/cozamasu-turn-around.mp4';
import shenronVid from './videos/shenron-turn-around.mp4';
import beerusVid from './videos/beerus-turn-around.mp4';
import hitVid from './videos/hit-turn-around.mp4';
import cauliflaVid from './videos/caulifla-turn-around.mp4';
import ssj2cauliflaVid from './videos/ssj2caulifla-turn-around.mp4';
import bskaleVid from './videos/bskale-turn-around.mp4';
import ssjkaleVid from './videos/ssjkale-turn-around.mp4';
import ssj2keflaVid from './videos/ssj2kefla-turn-around.mp4';
import toppoVid from './videos/toppo-turn-around.mp4';
import godtoppoVid from './videos/godtoppo-turn-around.mp4';
import kakunsaVid from './videos/kakunsa-turn-around.mp4';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const sidebarRef = useRef(null); // Ref for the sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen]);

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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); // Update search query in real-time
  };

  const handleSidebarClick = (page) => {
    setCurrentPage(page); // Update the current page to show
    setIsSidebarOpen(false); // Close the sidebar after page change
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
        {currentPage !== "super-counters" && (
          <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for a character"
          className="search-bar"
          />
        )}

        {/* Hamburger button */}
        {!isSidebarOpen && (
        <button className="hamburger" onClick={toggleSidebar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        )}
      </header>

      <div 
        ref={sidebarRef} // Attach ref to the sidebar
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
      >
        <nav>
          <ul>
            <li onClick={() => handleSidebarClick("rolling-hammer")}>Rolling Hammers</li>
            <li onClick={() => handleSidebarClick("super-counters")}>Super Counters</li>
            <button className="theme-toggle" onClick={toggleTheme}> {/* Theme toggle */}
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </ul>
        </nav>
      </div>

      {currentPage === "home" && (
        <div className="App-home">
          {/* Place character display here */}
        </div>
      )}

      {currentPage === "super-counters" && (
        <div className="App-super-counters">
          <SuperCounters />
        </div>
      )}
      
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
      {currentPage !== "super-counters" && (
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
              alt="SSJ Goku (END)"
              className="character"
              onClick={() => openCustomFullscreen(ssj3gokuendVid)}
              style={{ cursor: "pointer" }}
            />
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
              alt="MUI Goku"
              className="character"
              onClick={() => openCustomFullscreen(muigokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSJ3 Goku (GT) */}
          {isCharacterMatch("ssj3 goku gt") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728334744addtextcommty1odm4nju3nw.png"
              alt="SSJ3 Goku (GT)"
              className="character"
              onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
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
              alt="Great Ape Vegeta"
              className="character"
              onClick={() => openCustomFullscreen(greatapevegetaVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Super Vegeta */}
          {isCharacterMatch("super vegeta") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728267179addtextcommjixmjmzmjy4nji.png"
              alt="Super Vegeta"
              className="character"
              onClick={() => openCustomFullscreen(supervegetaVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSJ2 Vegeta (END) */}
          {isCharacterMatch("ssj2 vegeta end") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727669076addtextcommdawmjqymzkymja.png"
              alt="SSJ Vegeta (END)"
              className="character"
              onClick={() => openCustomFullscreen(ssj2vegetaVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSJ4 Vegeta (GT) */}
          {isCharacterMatch("ssj4 vegeta") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726153957addtextcommta1njqymze0mjm.png"
              alt="SSJ4 Vegeta"
              className="character"
              onClick={() => openCustomFullscreen(ssj4vegetaVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSJ2 Teen Gohan */}
          {isCharacterMatch("ssj2 teen gohan") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728315291addtextcommtezndi0mzm3ng.png"
              alt="Bardock"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSJ2 Gohan */}
          {isCharacterMatch("ssj2 adult gohan") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728313087addtextcommta1nzq1mzawoa.png"
              alt="SSJ2 Gohan"
              className="character"
              onClick={() => openCustomFullscreen(ssj2gohanVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Great Saiyanman */}
          {isCharacterMatch("great saiyanman gohan") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727277647addtextcommta0mzq1mjeymzk.png"
              alt="Great Saiyanman"
              className="character"
              onClick={() => openCustomFullscreen(greatsaiyanmanVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Ultimate Gohan */}
          {isCharacterMatch("ultimate gohan") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726983094addtextcommdeyotm5odgxma.png"
              alt="Ultimate Gohan"
              className="character"
              onClick={() => openCustomFullscreen(ultimategohanVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Future Gohan */}
          {isCharacterMatch("future gohan") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728191270addtextcommdewnzm2mjeyndq.png"
              alt="Future Gohan"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSJ Future Gohan */}
          {isCharacterMatch("ssj future gohan") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728190969addtextcommda1mze2mjexnty.png"
              alt="SSJ Future Gohan"
              className="character"
              onClick={() => openCustomFullscreen(ssjfuturegohanVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Piccolo (END) */}
          {isCharacterMatch("piccolo") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727117373addtextcommte1njm1ndcyng.png"
              alt="Piccolo (END)"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Yamcha */}
          {isCharacterMatch("yamcha") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqyndu5ndezmda.png"
              alt="Yamcha"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Super Trunks */}
          {isCharacterMatch("super trunks") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti0njuyndazmjk.png"
              alt="Super Trunks"
              className="character"
              onClick={() => openCustomFullscreen(supertrunksVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Vegito */}
          {isCharacterMatch("vegito") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmwnja3ndm3mjq.png"
              alt="Vegito"
              className="character"
              onClick={() => openCustomFullscreen(vegitoVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSJ Vegito */}
          {isCharacterMatch("super vegito") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1732026355addtextcommdkyndq4ndmxmg.png"
              alt="SSJ Vegito"
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
              alt="SSB Vegito"
              className="character"
              onClick={() => openCustomFullscreen(vegitoblueVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Super Gogeta (Z) */}
          {isCharacterMatch("super gogeta z ssj") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727656432addtextcommjazmze5njgxnzg.png"
              alt="Super Gogeta (Z)"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Gogeta (DBS) */}
          {isCharacterMatch("gogeta") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727373736addtextcommtm1odawnde3nzi.png"
              alt="Gogeta (DBS)"
              className="character"
              onClick={() => openCustomFullscreen(gogetadbsVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSJ Gogeta (DBS) */}
          {isCharacterMatch("ssj gogeta super") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727296731addtextcommtyznde2mjq1mta.png"
              alt="SSJ Gogeta (DBS)"
              className="character"
              onClick={() => openCustomFullscreen(ssjgogetadbsVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSB Gogeta (DBS) */}
          {isCharacterMatch("blue gogeta") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728183373addtextcommjiwnzi0mtc1odc.png"
              alt="SSB Gogeta (DBS)"
              className="character"
              onClick={() => openCustomFullscreen(bluegogetaVid)}
              style={{ cursor: "pointer" }}
            />
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
              alt="Videl"
              className="character"
              onClick={() => openCustomFullscreen(videlVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Master Roshi (FP) */}
          {isCharacterMatch("master roshi full power") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728452377addtextcommji1mzu1nzk5mw.png"
              alt="Master Roshi (FP)"
              className="character"
              onClick={() => openCustomFullscreen(roshiVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* 2nd Form Frieza (Z) */}
          {isCharacterMatch("frieza 2nd form") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726981661addtextcommda1nte2njcwndq.png"
              alt="2nd Form Frieza (Z)"
              className="character"
              onClick={() => openCustomFullscreen(secondformfriezaVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Final Form Frieza (Z) */}
          {isCharacterMatch("frieza 4th form") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727117373addtextcommtm1nzuznzi3oti.png"
              alt="Final Form Frieza (Z)"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Full Power Frieza (Z) */}
          {isCharacterMatch("frieza full power") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727192635addtextcommte0mdi5mtu3mjm.png"
              alt="Full Power Frieza (Z)"
              className="character"
              onClick={() => openCustomFullscreen(fpfriezaVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Final Form Frieza (DBS) */}
          {isCharacterMatch("frieza super") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726514840addtextcommtuynzaxndmzmq.png"
              alt="Final Form Frieza (DBS)"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Golden Frieza */}
          {isCharacterMatch("golden frieza") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmymtq3ndm4nji.png"
              alt="Golden Frieza"
              className="character"
              onClick={() => openCustomFullscreen(goldenfriezaVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Cell 2nd Form */}
          {isCharacterMatch("cell 2nd form") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727022174addtextcommtiymje5nziwmde.png"
              alt="Cell 2nd Form"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Super Perfect Cell */}
          {isCharacterMatch("super perfect cell") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728253978addtextcommtgzmjm4mju3ody.png"
              alt="Super Perfect Cell"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Majin Buu */}
          {isCharacterMatch("majin buu") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtm0mtuzndqwntm.png"
              alt="Majin Buu"
              className="character"
              onClick={() => openCustomFullscreen(majinbuuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Super Buu */}
          {isCharacterMatch("super buu") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727969783addtextcommteznte4mzewody.png"
              alt="Super Buu"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Buuhan */}
          {isCharacterMatch("buuhan") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727121105addtextcommtuznzq4njy4mg.png"
              alt="Buuhan"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Yajirobe */}
          {isCharacterMatch("yajirobe") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmxnzu5ndm4mzq.png"
              alt="Yajirobe"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
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
              alt="Raditz"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Nappa */}
          {isCharacterMatch("nappa") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti0mdm1ndaynja.png"
              alt="Nappa"
              className="character"
              onClick={() => openCustomFullscreen(nappaVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Super Zarbon */}
          {isCharacterMatch("super zarbon") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728459768addtextcommdm0mda5mtczmzi.png"
              alt="Zarbon"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Dodoria */}
          {isCharacterMatch("dodoria") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727121105addtextcommtu0nte2njc1mw.png"
              alt="Dodoria"
              className="character"
              onClick={() => openCustomFullscreen(dodoriaVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Captain Ginyu */}
          {isCharacterMatch("ginyu") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti1mze3ndaznzq.png"
              alt="Captain Ginyu"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Recoome */}
          {isCharacterMatch("recoome") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti1mjq0ndaznjc.png"
              alt="Recoome"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Burter */}
          {isCharacterMatch("burter") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti0ndizndayote.png"
              alt="Burter"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Jeice */}
          {isCharacterMatch("jeice") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti0mtaxndaynjc.png"
              alt="Jeice"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Guldo */}
          {isCharacterMatch("guldo") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqynda2ndeyotm.png"
              alt="Guldo"
              className="character"
              onClick={() => openCustomFullscreen(guldoVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* King Cold */}
          {isCharacterMatch("king cold") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqxmtazndexnti.png"
              alt="King Cold"
              className="character"
              onClick={() => openCustomFullscreen(kingcoldVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Android 16 */}
          {isCharacterMatch("android 16") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqxntexndexotc.png"
              alt="Android 16"
              className="character"
              onClick={() => openCustomFullscreen(android16Vid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Android 17 (Z) */}
          {isCharacterMatch("android 17 z") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728249232addtextcommtcxmje2mjuznzy.png"
              alt="Android 17 (Z)"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Android 17 (DBS) */}
          {isCharacterMatch("android 17 super") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726369739addtextcommji1nta4ntg4mjm.png"
              alt="Android 17 (DBS)"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Android 18 */}
          {isCharacterMatch("android 18") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtizotu5ndayntu.png"
              alt="Android 18"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Android 19 */}
          {isCharacterMatch("android 19") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtqxndi2ndexody.png"
              alt="Android 19"
              className="character"
              onClick={() => openCustomFullscreen(android19Vid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Dabura */}
          {isCharacterMatch("dabura") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmzntq4ndm5ote.png"
              alt="Dabura"
              className="character"
              onClick={() => openCustomFullscreen(daburaVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSJ Broly (Z) */}
          {isCharacterMatch("ssj broly z") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728250725addtextcommtczodeymju1mdy.png"
              alt="SSJ Broly (Z)"
              className="character"
              onClick={() => openCustomFullscreen(ssjbrolyVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* LSSJ Broly (Z) */}
          {isCharacterMatch("lssj broly z") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728250201addtextcommtcynji5mju0ndi.png"
              alt="LSSJ Broly (Z)"
              className="character"
              onClick={() => openCustomFullscreen(lssjbrolyVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Broly (DBS) */}
          {isCharacterMatch("base broly super") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti0otq5ndaznti.png"
              alt="Broly (DBS)"
              className="character"
              onClick={() => openCustomFullscreen(brolydbsVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSJ Broly (DBS) */}
          {isCharacterMatch("ssj broly super") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726354716addtextcommtg1nda1ntcwntq.png"
              alt="SSJ Broly (DBS)"
              className="character"
              onClick={() => openCustomFullscreen(ssjbrolydbsVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* LSSJ Broly (DBS) */}
          {isCharacterMatch("ssj broly full power super") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727976137addtextcommtmymdq1mze0mta.png"
              alt="LSSJ Broly (DBS)"
              className="character"
              onClick={() => openCustomFullscreen(lssjbrolydbsVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Super Garlic Jr. */}
          {isCharacterMatch("super garlic jr.") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728252631addtextcommtgxmda0mju2nzy.png"
              alt="Super Garlic Jr."
              className="character"
              onClick={() => openCustomFullscreen(garlicVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Dr. Wheelo */}
          {isCharacterMatch("dr. wheelo") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759066addtextcommta1odi2mzc5ntq.png"
              alt="Dr. Wheelo"
              className="character"
              onClick={() => openCustomFullscreen(drwheeloVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Lord Slug */}
          {isCharacterMatch("lord slug") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726764103addtextcommtiwotu4nde2mde.png"
              alt="Lord Slug"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Lord Slug (Giant) */}
          {isCharacterMatch("giant lord slug") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728457411addtextcommdmwmdq2mtixndg.png"
              alt="Lord Slug (Giant)"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Final Form Cooler */}
          {isCharacterMatch("final form cooler") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759067addtextcommtewndm3mzgwmtq.png"
              alt="Final Form Cooler"
              className="character"
              onClick={() => openCustomFullscreen(ffcoolerVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Metal Cooler */}
          {isCharacterMatch("metal cooler") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759067addtextcommtewmtuymzc5odc.png"
              alt="Metal Cooler"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Android 13 (Fused) */}
          {isCharacterMatch("fusion android 13") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727654168addtextcommtk1ntqxnjc5odi.png"
              alt="Android 13 (Fused)"
              className="character"
              onClick={() => openCustomFullscreen(android13Vid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Bojack */}
          {isCharacterMatch("bojack") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759066addtextcommta1mza0mzc4otq.png"
              alt="Bojack"
              className="character"
              onClick={() => openCustomFullscreen(bojackVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Bojack (Full Power) */}
          {isCharacterMatch("full power bojack") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727192635addtextcommtezmzu5mtu2ndk.png"
              alt="Bojack (Full Power)"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Janemba */}
          {isCharacterMatch("janemba") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726807458addtextcommda0mzq2ndc1mzm.png"
              alt="Janemba"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Super Janemba */}
          {isCharacterMatch("super janemba") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759066addtextcommta0otm3mzc4ntc.png"
              alt="Super Janemba"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Tapion */}
          {isCharacterMatch("tapion") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759066addtextcommta1mduymzc4nza.png"
              alt="Tapion"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Hirudegarn */}
          {isCharacterMatch("hirudegarn") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759066addtextcommta1mtm2mzc4oda.png"
              alt="Hirudegarn"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Super Baby 2 */}
          {isCharacterMatch("super baby 2") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727123172addtextcommtyyntu0ntmyoq.png"
              alt="Super Baby 2"
              className="character"
              onClick={() => openCustomFullscreen(superbaby2Vid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Great Ape Baby */}
          {isCharacterMatch("great ape baby") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727277647addtextcommtewodiwmje0otq.png"
              alt="Great Ape Baby"
              className="character"
              onClick={() => openCustomFullscreen(greatapebabyVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Omega Shenron */}
          {isCharacterMatch("omega shenron") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727667805addtextcommjmzmdu1njkynzq.png"
              alt="Omega Shenron"
              className="character"
              onClick={() => openCustomFullscreen(shenronVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Spopovich */}
          {isCharacterMatch("spopovich") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmznte4ndm5nzk.png"
              alt="Spopovich"
              className="character"
              onClick={() => openCustomFullscreen(spopovichVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Beerus */}
          {isCharacterMatch("beerus") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmzode1ndqwmtk.png"
              alt="Beerus"
              className="character"
              onClick={() => openCustomFullscreen(beerusVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSR Goku Black */}
          {isCharacterMatch("ssj rose goku black") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728272124addtextcommjmzndu3mjk5nzq.png"
              alt="SSR Goku Black"
              className="character"
              onClick={() => openCustomFullscreen(ssrgokublackVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Zamasu */}
          {isCharacterMatch("zamasu") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmxotqwndm4ndk.png"
              alt="Zamasu"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Fused Zamasu */}
          {isCharacterMatch("fused zamasu") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmynje5ndm5mty.png"
              alt="Fused Zamasu"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Fused Zamasu (Corrupted) */}
          {isCharacterMatch("corrupted fused zamasu") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728449886addtextcommda1nzexmtezodm.png"
              alt="Fused Zamasu (Corrupted)"
              className="character"
              onClick={() => openCustomFullscreen(cozamasuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Hit */}
          {isCharacterMatch("hit") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727123729addtextcommtyzmzq3ntm3mq.png"
              alt="Hit"
              className="character"
              onClick={() => openCustomFullscreen(hitVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Frost */}
          {isCharacterMatch("frost") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759067addtextcommtexmza1mzgxntq.png"
              alt="Frost"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Caulifla */}
          {isCharacterMatch("caulifla") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727471699addtextcommtcxndmzmtuzotk.png"
              alt="Caulifla"
              className="character"
              onClick={() => openCustomFullscreen(cauliflaVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSJ2 Caulifla */}
          {isCharacterMatch("ssj2 caulifla") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728701617addtextcommji1mze5ntaymzi.png"
              alt="SSJ2 Caulifla"
              className="character"
              onClick={() => openCustomFullscreen(ssj2cauliflaVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Berserker Kale */}
          {isCharacterMatch("ssj kale berserker") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727117953addtextcommtq1odq4ndy4oq.png"
              alt="Berseker Kale"
              className="character"
              onClick={() => openCustomFullscreen(bskaleVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSJ Kale */}
          {isCharacterMatch("ssj kale") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmxmdi2ndm3nty.png"
              alt="SSJ Kale"
              className="character"
              onClick={() => openCustomFullscreen(ssjkaleVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSJ Kefla */}
          {isCharacterMatch("ssj kefla") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728452377addtextcommtmwnze2ndm3mzm.png"
              alt="SSJ Kefla"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* SSJ2 Kefla */}
          {isCharacterMatch("ssj2 kefla") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728263486addtextcommjexmdeymjg5ndk.png"
              alt="SSJ2 Kefla"
              className="character"
              onClick={() => openCustomFullscreen(ssj2keflaVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Jiren */}
          {isCharacterMatch("jiren") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727377501addtextcommtq1nzqxmzqwndy.png"
              alt="Jiren"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Jiren (Full Power) */}
          {isCharacterMatch("jiren full power") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1727366525addtextcommte0nta5nda0njq.png"
              alt="Jiren (Full Power)"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Toppo */}
          {isCharacterMatch("toppo") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti0mte5ndaynjk.png"
              alt="Toppo"
              className="character"
              onClick={() => openCustomFullscreen(toppoVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Toppo (God of Destruction) */}
          {isCharacterMatch("god toppo") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1726759067addtextcommtexmte2mzgxndi.png"
              alt="Toppo (God of Destruction)"
              className="character"
              onClick={() => openCustomFullscreen(godtoppoVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Bergamo */}
          {isCharacterMatch("bergamo") && (
          <div>
            <img
              src="https://tiermaker.com/images//media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/zzzzz-1728183373addtextcommjixmja5mtc2mdq.png"
              alt="Bergamo"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Ribrianne */}
          {isCharacterMatch("ribrianne") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommtmzmzi0ndm5ntu.png"
              alt="Ribrianne"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Kakunsa */}
          {isCharacterMatch("kakunsa") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti0njaxndazmjm.png"
              alt="Kakunsa"
              className="character"
              onClick={() => openCustomFullscreen(kakunsaVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}

          {/* Anilaza */}
          {isCharacterMatch("anilaza") && (
          <div>
            <img
              src="https://tiermaker.com/images/media/template_images/2024/28683/dragon-ball-sparking-zero-all-characters-w-names-28683-2/addtextcommti1mtmxndaznjm.png"
              alt="Anilaza"
              className="character"
              //onClick={() => openCustomFullscreen(ssj3gtgokuVid)}
              style={{ cursor: "pointer" }}
            />
          </div>
          )}
        </div>
        )}
      </div>
    </div>
  );
}

export default App;