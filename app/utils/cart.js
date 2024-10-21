/**
 * Represents the structure of the shopping cart.
 * @typedef {Object} Cart
 * @property {Array} items - An array of items in the shopping cart.
 * @property {number} sub_total - The total price of items in the cart.
 * @property {number} discounts - Any discounts applied to the cart total.
 */

/**
 * item = {
 * name : String,
 * quantity : Number,
 * price : Number,
 * category : String,
 * description : String,
 * image : StringURL
 * }
 */
/**
 * Gets the shopping cart from local storage.
 * If the cart does not exist, it returns a default cart object.
 * @returns {Cart} The shopping cart object containing items, sub_total, and discounts.
 */
export const getCart = () => {
  return JSON.parse(
    localStorage.getItem("shoppingCart") ||
      '{"items":[], "sub_total": 0, "discounts": 0}'
  );
};

/**
 * Saves the shopping cart object to local storage.
 * @param {Cart} cart - The shopping cart object to save.
 */
export const saveCart = (cart) => {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
};

/**
 * Adds a product to the shopping cart object in local storage.
 * Updates the sub_total based on the item's price and quantity.
 * @param {Object} item - The item to add to the cart.
 * @param {number} item.id - The price of the item.
 * @param {String} item.name - The name of the item.
 * @param {number} item.price - The price of the item.
 * @param {number} item.quantity - The quantity of the item to add.
 * @param {String} item.category - The category of the item to add.
 * @param {String} item.description - The description of the item to add.
 * @param {String} item.image - The image url of the item to add.
 */
export const addItemToCart = (item) => {
  if (
    !item ||
    !item.id ||
    typeof item.price !== "number" ||
    typeof item.quantity !== "number" ||
    item.quantity <= 0
  ) {
    throw new Error(
      "Invalid item: Item must have a valid id, price, and quantity greater than zero."
    );
  }
  const cart = getCart();
  const existingItemIndex = cart.items.findIndex(
    (cartItem) => cartItem.id === item.id
  );
  // item does not exist in shoppingcart
  if (existingItemIndex === -1) {
    cart.items.push({ ...item });
    // item exist in the cart so add the item's quanity to the item's quanitity in the cart
  } else {
    cart.items[existingItemIndex].quantity += item.quantity;
  }

  //calculate discounts
  cart.discounts = 0;

  //calculate subtotal of entire cart
  const sub_total = cart.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  saveCart(cart);
};

export const removeFromCart = (itemId) => {
  const cart = getCart();
  cart.items = cart.items.filter((item) => item.id !== itemId);
  // Update totals here as needed
  saveCart(cart);
};

export const clearCart = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("shoppingCart");
  }
};
