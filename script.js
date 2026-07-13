const hour = new Date().getHours();
const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
document.querySelector("#welcome-message").textContent = `${greeting}! Welcome to Whisk & Wonder — something warm is waiting for you.`;

const form = document.querySelector("#flavour-form");
const input = document.querySelector("#flavour");
const result = document.querySelector("#bake-result");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const flavour = input.value.trim();
  const choice = flavour.toLowerCase();
  let bake = "a golden butter croissant";
  if (choice.includes("chocolate")) bake = "a double-chocolate sea-salt cookie";
  else if (choice.includes("lemon") || choice.includes("citrus")) bake = "a lemon-glaze morning cake";
  else if (choice.includes("cinnamon") || choice.includes("spice")) bake = "a cinnamon-swirl brioche";
  else if (choice.includes("berry") || choice.includes("strawberry")) bake = "a berry-cream tart";
  else if (choice.includes("vanilla")) bake = "a vanilla-bean shortbread sandwich";
  result.textContent = `For ${flavour}, we recommend ${bake}.`;
});
