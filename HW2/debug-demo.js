function calculateTotal() {
  // Put a breakpoint on the next line, then Step Over each line.
  const price = 25;
  const quantity = 3;
  const total = price * quantity;
  document.getElementById("result").textContent = "Total: $" + total;
}