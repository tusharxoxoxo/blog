/* This will contain cool polygon movement once I figure out how to code it nicely
// Get the canvas element and its 2D context
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas size to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Add the canvas to the document body
document.body.insertBefore(canvas, document.body.firstChild);

// Set the CSS styles for the canvas
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none'; // Allow mouse events to pass through the canvas

// Store the polygons
let polygons = [];

// Generate random polygons
function generatePolygons() {
  polygons = [];

  // Define the number of polygons
  const numPolygons = 50;

  for (let i = 0; i < numPolygons; i++) {
    const polygon = {
      vertices: [],
      color: randomColor(),
      thickness: 1,
      size: Math.random() * 5 + 1, // Random size (between 1 and 6)
      speedX: Math.random() * 2 - 1, // Random horizontal speed
      speedY: Math.random() * 2 - 1, // Random vertical speed
    };

    // Generate random vertices for the polygon
    const numVertices = Math.floor(Math.random() * 3) + 5; // Random number of vertices (between 5 and 7)
    for (let j = 0; j < numVertices; j++) {
      const vertex = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      };

      polygon.vertices.push(vertex);
    }

    polygons.push(polygon);
  }
}

// Render the polygons on the canvas
function render() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Render the polygons
  for (const polygon of polygons) {
    ctx.beginPath();
    const vertices = polygon.vertices;
    const firstVertex = vertices[0];
    ctx.moveTo(firstVertex.x, firstVertex.y);
    for (let i = 1; i < vertices.length; i++) {
      const vertex = vertices[i];
      ctx.lineTo(vertex.x, vertex.y);
    }
    ctx.closePath();

    ctx.lineWidth = polygon.thickness;
    ctx.strokeStyle = polygon.color;
    ctx.stroke();

    // Increase thickness for accentuated vertices
    for (const vertex of vertices) {
      ctx.beginPath();
      ctx.arc(vertex.x, vertex.y, polygon.thickness * 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = polygon.color;
      ctx.fill();
    }
  }
}

// Update the polygons' positions and handle collisions
function update() {
  for (let i = 0; i < polygons.length; i++) {
    const polygon = polygons[i];

    for (const vertex of polygon.vertices) {
      vertex.x += polygon.speedX;
      vertex.y += polygon.speedY;

      // Wrap around the edges of the canvas
      if (vertex.x < 0) vertex.x = canvas.width;
      if (vertex.x > canvas.width) vertex.x = 0;
      if (vertex.y < 0) vertex.y = canvas.height;
      if (vertex.y > canvas.height) vertex.y = 0;
    }

    // Check for collisions with other polygons
    for (let j = i + 1; j < polygons.length; j++) {
      const otherPolygon = polygons[j];

      for (const otherVertex of otherPolygon.vertices) {
        for (const vertex of polygon.vertices) {
          const dx = otherVertex.x - vertex.x;
          const dy = otherVertex.y - vertex.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < polygon.size + otherPolygon.size) {
            // Collisions detected, change the movement direction
            polygon.speedX *= -1;
            polygon.speedY *= -1;
            otherPolygon.speedX *= -1;
            otherPolygon.speedY *= -1;
          }
        }
      }
    }
  }
}

// Handle the mousemove event
function onMouseMove(event) {
  // Get the mouse position relative to the canvas
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Check if the mouse is inside any polygon
  for (const polygon of polygons) {
    const vertices = polygon.vertices;

    ctx.beginPath();
    const firstVertex = vertices[0];
    ctx.moveTo(firstVertex.x, firstVertex.y);
    for (let i = 1; i < vertices.length; i++) {
      const vertex = vertices[i];
      ctx.lineTo(vertex.x, vertex.y);
    }
    ctx.closePath();

    if (ctx.isPointInPath(mouseX, mouseY)) {
      // Remove the polygon if the mouse is inside
      const index = polygons.indexOf(polygon);
      if (index > -1) {
        polygons.splice(index, 1);
        break;
      }
    }
  }
}

// Generate the polygons and start rendering/updating
generatePolygons();
setInterval(() => {
  update();
  render();
}, 30);

// Listen for the mousemove event on the window
window.addEventListener('mousemove', onMouseMove);

// Helper function to generate a random color
function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
*/