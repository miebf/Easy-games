const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let scrollX = 0;  // how far the world has scrolled
const speed = 2;  // how fast background moves
let hasKey = false;

// Character (fixed position)
const character = { x: 200, y: 300, w: 40, h: 40 };

// Key (world position, not screen)
const key = { x: 1000, y: 300, w: 20, h: 20, collected: false };

// Rooms (world positions)
const rooms = [
  { type: "stairs", x: 1800, y: 280, w: 80, h: 80 },
  { type: "trapdoor", x: 1900, y: 280, w: 80, h: 80 },
  { type: "corridor", x: 2000, y: 280, w: 80, h: 80 }
];

function update() {
  // Move background (simulate character walking)
  scrollX += speed;

  // Check key collision
  if (!key.collected && scrollX + character.x + character.w > key.x && 
      scrollX + character.x < key.x + key.w) {
    key.collected = true;
    hasKey = true;
    console.log("Picked up the key!");
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background (simple moving ground)
  ctx.fillStyle = "#444";
  ctx.fillRect(-scrollX % 800, 350, 800, 50);
  ctx.fillRect((-scrollX % 800) + 800, 350, 800, 50);

  // Character (always at same spot)
  ctx.fillStyle = "blue";
  ctx.fillRect(character.x, character.y, character.w, character.h);

  // Key
  if (!key.collected) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(key.x - scrollX, key.y, key.w, key.h);
  }

  // Rooms
  rooms.forEach(room => {
    ctx.fillStyle = "green";
    ctx.fillRect(room.x - scrollX, room.y, room.w, room.h);
  });
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}
loop();