class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

// Array to store data for five Video instances
const videoData = [
  { title: "Epic Fail Compilation", uploader: "FailArmy", time: 480 },
  { title: "Delicious Cake Recipe", uploader: "BakingQueen", time: 720 },
  { title: "Travel Vlog: Japan", uploader: "WanderlustAlex", time: 900 },
  { title: "Coding Tutorial: React", uploader: "DevEd", time: 1500 },
  { title: "Funny Dog Videos", uploader: "PawsomeTV", time: 300 },
];

// Array to store the instantiated Video objects
const videoInstances = [];

// Loop through the array to instantiate Video instances
videoData.forEach(videoInfo => {
  const newVideo = new Video(videoInfo.title, videoInfo.uploader, videoInfo.time);
  videoInstances.push(newVideo);
});

// Loop through the instantiated instances and call the watch() method
videoInstances.forEach(video => {
  video.watch();
});