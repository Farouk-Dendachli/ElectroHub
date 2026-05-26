# Assets Folder

Product images are stored in **`public/assets/`** so they load with paths like `/assets/MacBook Air.jpg`.

To add a new product:

1. Put the image file in `public/assets/`
2. Add the product to `src/data/products.js` (use `title` as the unique name — no `id` needed)

Example in `products.js`:

```js
{
  title: "My New Laptop",
  category: "Laptops",
  image: "/assets/my-new-laptop.jpg",
  price: 999,
  specs: [
    { label: "RAM", value: "16GB" },
  ],
}
```
