var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

// Load your images here
function preload() {
  this.load.image("sky", "/assets/images/sky.png");
}

// This runs at startup to initialize the scene
function create() {
  this.add.image(400, 300, "sky");
}

// This function is run every frame
// Put your player controls here
function update() {}

var game = new Phaser.Game(config);
