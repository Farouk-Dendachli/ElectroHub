const img = (file) => `${import.meta.env.BASE_URL}assets/${file}`;

export const products = [
  {
    title: "EliteBook Pro",
    category: "Laptops",
    image: img("EliteBook Pro.avif"),
    price: 1450,
    specs: [
      { label: "CPU", value: "Core i7" },
      { label: "RAM", value: "16GB" },
      { label: "Storage", value: "512GB SSD" },
    ],
  },
  {
    title: "ZenBook Lite",
    category: "Laptops",
    image: img("ZenBook Lite (New).png"),
    price: 899,
    specs: [
      { label: "CPU", value: "Core i5" },
      { label: "RAM", value: "8GB" },
      { label: "Display", value: '14" FHD' },
    ],
  },
  {
    title: "MacBook Air",
    category: "Laptops",
    image: img("MacBook Air.jpg"),
    price: 1099,
    specs: [
      { label: "CPU", value: "Apple M2" },
      { label: "RAM", value: "16GB" },
      { label: "Battery", value: "Up to 18 hrs" },
    ],
  },
  {
    title: "StudioBook Pro",
    category: "Laptops",
    image: img("StudioBook Pro.jpg"),
    price: 1799,
    specs: [
      { label: "GPU", value: "RTX 4070" },
      { label: "RAM", value: "32GB" },
      { label: "Storage", value: "1TB SSD" },
    ],
  },
  {
    title: "CampusMate 15",
    category: "Laptops",
    image: img("CampusMate 15.jpg"),
    price: 699,
    specs: [
      { label: "CPU", value: "Ryzen 5" },
      { label: "RAM", value: "8GB" },
      { label: "Storage", value: "256GB SSD" },
    ],
  },
  {
    title: "MSI Cyborg",
    category: "Laptops",
    image: img("MSI Cyborg.jpg"),
    price: 1999,
    specs: [
      { label: "GPU", value: "RTX 4080" },
      { label: "Display", value: '17" 165Hz' },
      { label: "Cooling", value: "Dual-fan" },
    ],
  },
  {
    title: "Galaxy S26 Ultra",
    category: "Phones",
    image: img("Galaxy S26 Ultra.webp"),
    price: 1199,
    specs: [
      { label: "Display", value: '6.8" AMOLED' },
      { label: "Storage", value: "256GB" },
      { label: "Camera", value: "200MP" },
    ],
  },
  {
    title: "iNova 16 Pro",
    category: "Phones",
    image: img("iNova 16 Pro.webp"),
    price: 999,
    specs: [
      { label: "Chip", value: "A18" },
      { label: "Display", value: '6.1" OLED' },
      { label: "Build", value: "Titanium" },
    ],
  },
  {
    title: "Pixel Wave 9",
    category: "Phones",
    image: img("Pixel Wave 9.webp"),
    price: 799,
    specs: [
      { label: "Chip", value: "Tensor G4" },
      { label: "Camera", value: "AI Enhanced" },
      { label: "Updates", value: "7 Years" },
    ],
  },
  {
    title: "OnePlus 12",
    category: "Phones",
    image: img("one plus 12.webp"),
    price: 699,
    specs: [
      { label: "Charge", value: "100W Fast" },
      { label: "RAM", value: "12GB" },
      { label: "Display", value: "120Hz" },
    ],
  },
  {
    title: "Oppo A5 Pro",
    category: "Phones",
    image: img("oppo a5 pro.jpg"),
    price: 599,
    specs: [
      { label: "Display", value: "AMOLED" },
      { label: "Battery", value: "5000mAh" },
      { label: "Camera", value: "50MP" },
    ],
  },
  {
    title: "Samsung Z Fold 3",
    category: "Phones",
    image: img("Samsung Z Fold 3.avif"),
    price: 1299,
    specs: [
      { label: "Display", value: "Foldable" },
      { label: "RAM", value: "12GB" },
      { label: "Storage", value: "256GB" },
    ],
  },
  {
    title: "Zen Hybrid Gen 2",
    category: "Accessories",
    image: img("Zen Hybrid (Gen 2).jpg"),
    price: 299,
    specs: [
      { label: "Type", value: "Over-ear" },
      { label: "Battery", value: "30 hours" },
      { label: "Feature", value: "ANC" },
    ],
  },
  {
    title: "Mini Speaker JBL",
    category: "Accessories",
    image: img("Mini Speaker JBL.webp"),
    price: 149,
    specs: [
      { label: "Type", value: "Portable" },
      { label: "Water", value: "IPX7" },
      { label: "Battery", value: "12 hours" },
    ],
  },
  {
    title: "Logitech G Keyboard",
    category: "Accessories",
    image: img("Logitech G Keyboard.png"),
    price: 129,
    specs: [
      { label: "Switches", value: "Mechanical" },
      { label: "Layout", value: "Full-size" },
      { label: "Light", value: "RGB" },
    ],
  },
  {
    title: "Precision Mouse",
    category: "Accessories",
    image: img("Precision Mouse.jpeg"),
    price: 59,
    specs: [
      { label: "Sensor", value: "12,000 DPI" },
      { label: "Connection", value: "Wireless" },
      { label: "Buttons", value: "6" },
    ],
  },
  {
    title: "Pulse Watch 3",
    category: "Accessories",
    image: img("Pulse Watch 3.webp"),
    price: 199,
    specs: [
      { label: "Tracking", value: "Heart + Sleep" },
      { label: "Water", value: "5 ATM" },
      { label: "Battery", value: "7 days" },
    ],
  },
  {
    title: "FastCharge 65W",
    category: "Accessories",
    image: img("FastCharge 65W.jpg"),
    price: 39,
    specs: [
      { label: "Power", value: "65W" },
      { label: "Ports", value: "USB-C + USB-A" },
      { label: "Tech", value: "PD 3.0" },
    ],
  },
];
