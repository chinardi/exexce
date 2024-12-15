// Suppose we have an object `markDef`
const markDef = {
  cursor: 'pointer',  // This could be any valid cursor style
  // other properties...
};

// A function that returns the cursor property of markDef
function getCursorStyle() {
  return markDef.cursor;
}

// Usage
console.log(getCursorStyle()); // Output: 'pointer'
