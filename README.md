BlueLetterBible Στα Ελληνικά (Συμφραστικός Πίνακας Λέξεων Εβραϊκών - Ελληνικών)
Εργαλείο αναλύσεις της Αγίας Γραφής

Τα εδάφια είναι από την έκδοση της Αγίας Γραφής Φίλος Σπύρος Πέργαμος
Η κάθε λέξη και οι ορισμοί του Strong μεταφράζονται χρησιμοποιώντας Google Translate

Για να το φτιάξετε μόνοι σας μετονομάστε το manifest-firefox.json ή το manifest-chrome.json σε manifest.json

<style>
    
    * {
  box-sizing: border-box;
}

.slider {
  width: 300px;
  text-align: center;
  overflow: hidden;
}

.slides {
  display: flex;
  
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  
  
  
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  /*
  scroll-snap-points-x: repeat(300px);
  scroll-snap-type: mandatory;
  */
}
.slides::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.slides::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
.slides::-webkit-scrollbar-track {
  background: transparent;
}
.slides > div {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  margin-right: 50px;
  border-radius: 10px;
  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}
.slides > div:target {
/*   transform: scale(0.8); */
}
.author-info {
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 0.75rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
}
.author-info a {
  color: white;
}
img {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slider > a {
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
  background: white;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 0 0.5rem 0;
  position: relative;
}
.slider > a:active {
  top: 1px;
}
.slider > a:focus {
  background: #000;
}

/* Don't need button navigation */
@supports (scroll-snap-type) {
  .slider > a {
    display: none;
  }
}

html, body {
  height: 100%;
  overflow: hidden;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #74ABE2, #5563DE);
  font-family: 'Ropa Sans', sans-serif;
}
    
</style>

<div class="slider">
  
  <a href="#slide-1">1</a>
  <a href="#slide-2">2</a>
  <a href="#slide-3">3</a>
  <a href="#slide-4">4</a>
  <a href="#slide-5">5</a>

  <div class="slides">
    <div id="slide-1">
      <img src="https://www.w3schools.com/images/lamp.jpg" alt="Lamp" width="32" height="32">
    </div>
    <div id="slide-2">
      <img src="https://www.w3schools.com/images/lamp.jpg" alt="Lamp" width="32" height="32">
    </div>
    <div id="slide-3">
      <img src="https://www.w3schools.com/images/lamp.jpg" alt="Lamp" width="32" height="32">
    </div>
    <div id="slide-4">
      <img src="https://www.w3schools.com/images/lamp.jpg" alt="Lamp" width="32" height="32">
    </div>
    <div id="slide-5">
      <img src="https://www.w3schools.com/images/lamp.jpg" alt="Lamp" width="32" height="32">
    </div>
  </div>
</div>
