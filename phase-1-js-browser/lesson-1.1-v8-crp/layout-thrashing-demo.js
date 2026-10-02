
// Layout Thrashing Demo Script
console.log("Lesson 1.1: Browser Mechanics Initialized");

// Function demonstrating Forced Synchronous Layout (Bad)
function triggerLayoutThrashing(elements) {
  console.time("Layout Thrashing");
  elements.forEach(el => {
    const width = el.offsetWidth; // Read
    el.style.width = (width + 1) + 'px'; // Write
  });
  console.timeEnd("Layout Thrashing");
}

// Function demonstrating Batched Execution (Good)
function triggerBatchedUpdates(elements) {
  console.time("Batched Execution");
  const widths = elements.map(el => el.offsetWidth); // Reads
  elements.forEach((el, i) => {
    el.style.width = (widths[i] + 1) + 'px'; // Writes
  });
  console.timeEnd("Batched Execution");
}