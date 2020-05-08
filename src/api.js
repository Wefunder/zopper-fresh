// Do not touch this - this is a fake API provided for you.

// Types:

// User: { id: number, name: string, credits: number }
// GroceryItems: { id: 1, name: string, price: number, description: string }[]
// Cart: { item_id: number, units: number }[]

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Arie", credits: 10 })
    }, 1000)
  });
}

const getAllGroceryItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "cucumber", price: 1, description: "A juicy delight!" },
        { id: 2, name: "pasta", price: 3, description: "Tastes better when cooked" },
        { id: 3, name: "rice", price: 2, description: "When you want to eat 1000 of something" }
      ])
    }, 2000)
  });
}

const getCartForUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(userId === 1) {
        resolve([ { item_id: 1, units: 2 } ])
        return
      }

      reject({ message: "User not found"})
    }, 2000)
  });
}

export const API = {
  getCurrentUser,
  getCartForUser,
  getAllGroceryItems,
}
