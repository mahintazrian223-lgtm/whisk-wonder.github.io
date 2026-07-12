// Top-page-only welcoming message
const hour = new Date().getHours();
const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
document.querySelector("#welcome-message").textContent =
  `${greeting}! Welcome to Whisk & Wonder — something warm is waiting for you.`;

// Interactive user-input feature
const form = document.querySelector("#flavour-form");
const input = document.querySelector("#flavour");
const result = document.querySelector("#bake-result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const flavour = input.value.trim();
  const lowerFlavour = flavour.toLowerCase();

  let bake = "a golden butter croissant";
  if (lowerFlavour.includes("chocolate")) bake = "a double-chocolate sea-salt cookie";
  else if (lowerFlavour.includes("lemon") || lowerFlavour.includes("citrus")) bake = "a lemon-glaze morning cake";
  else if (lowerFlavour.includes("cinnamon") || lowerFlavour.includes("spice")) bake = "a cinnamon-swirl brioche";
  else if (lowerFlavour.includes("berry") || lowerFlavour.includes("strawberry")) bake = "a berry-cream tart";
  else if (lowerFlavour.includes("vanilla")) bake = "a vanilla-bean shortbread sandwich";

  result.textContent = `For ${flavour}, we recommend ${bake}.`;
});