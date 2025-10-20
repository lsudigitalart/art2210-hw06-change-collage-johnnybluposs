//periwinkle:204, 204, 255
//azure:240, 255, 255
//sky blue:135, 206, 235
//seafoam green: 159, 226, 191
let mySong,fft;

function preload() {
  mySong = loadSound('assets/romp.mp3');
}

function setup() {
  createCanvas(400, 400);
  fft = new p5.FFT();
  fft.setInput(mySong);  // Connect FFT to the song
}

function draw() {
  background(93, 63, 211);
  console.log(mouseX,mouseY)
  fft.analyze();

  // Get average energy for 3 frequency bands
  let bass = fft.getEnergy("bass");     // 20–140 Hz
  let mid = fft.getEnergy("mid");       // 140–4000 Hz
  let treble = fft.getEnergy("treble"); // 4000–20000 Hz

  // Map energy to sizes or brightness
  noStroke();

    fill(204, 204, 255);
  circle(width/2, height/2, map(bass, 0, 255, 10, 150));

  fill(240, 255, 255);
  circle(width/2, height/2, map(mid, 0, 255, 10, 150));

  fill(135, 206, 235);
  circle(width/2, height/2, map(treble, 0, 255, 10, 150));
}


function mousePressed() {
  if (mySong.isLoaded()) {
    if (mySong.isPlaying()) {
      mySong.pause();
    } else {
      mySong.play();
    }
  }
}
