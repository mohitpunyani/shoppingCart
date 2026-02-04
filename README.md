<div align="center">

# 🛒 Shopping Cart

### A modern, responsive shopping cart built with React, Redux Toolkit, and Tailwind CSS

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.11.2-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## ✨ Features

- 🎨 **Modern UI Design** - Clean, Google-inspired interface with smooth animations
- 🛍️ **Product Catalog** - Browse and add products to your cart
- ➕ **Quantity Management** - Increase/decrease item quantities with intuitive controls
- 🗑️ **Remove Items** - Easy item removal from cart
- 💰 **Real-time Total** - Automatic price calculation
- ✅ **Checkout Modal** - Beautiful confirmation dialog with order summary
- 📱 **Fully Responsive** - Works seamlessly on all device sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🔄 **State Management** - Redux Toolkit for predictable state updates

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd CartRedux
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

---

## 📦 Project Structure

```
CartRedux/
├── src/
│   ├── components/
│   │   ├── Cart.jsx           # Shopping cart component
│   │   └── ProductList.jsx    # Product catalog component
│   ├── store/
│   │   ├── CartSlice.js       # Redux slice for cart state
│   │   └── store.js           # Redux store configuration
│   ├── App.jsx                # Main application component
│   ├── App.css                # Global styles (Tailwind import)
│   └── main.jsx               # Application entry point
├── index.html                 # HTML template
├── package.json               # Project dependencies
└── vite.config.js             # Vite configuration
```

---

## 🔄 Redux Data Flow

```
UI (Buttons / Components)
        ↓ dispatch(action)
Redux Slice (CartSlice)
        ↓ reducer updates state 
Redux Store<div align="center">

# 🛒 Shopping Cart

### A modern, responsive shopping cart built with React, Redux Toolkit, and Tailwind CSS

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.11.2-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## ✨ Features

- 🎨 **Modern UI Design** - Clean, Google-inspired interface with smooth animations
- 🛍️ **Product Catalog** - Browse and add products to your cart
- ➕ **Quantity Management** - Increase/decrease item quantities with intuitive controls
- 🗑️ **Remove Items** - Easy item removal from cart
- 💰 **Real-time Total** - Automatic price calculation
- ✅ **Checkout Modal** - Beautiful confirmation dialog with order summary
- 📱 **Fully Responsive** - Works seamlessly on all device sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🔄 **State Management** - Redux Toolkit for predictable state updates

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd CartRedux
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

---

## 📦 Project Structure

```
CartRedux/
├── src/
│   ├── components/
│   │   ├── Cart.jsx           # Shopping cart component
│   │   └── ProductList.jsx    # Product catalog component
│   ├── store/
│   │   ├── CartSlice.js       # Redux slice for cart state
│   │   └── store.js           # Redux store configuration
│   ├── App.jsx                # Main application component
│   ├── App.css                # Global styles (Tailwind import)
│   └── main.jsx               # Application entry point
├── index.html                 # HTML template
├── package.json               # Project dependencies
└── vite.config.js             # Vite configuration
```

---

## 🔄 Redux Data Flow

```
UI (Buttons / Components)
        ↓ dispatch(action)
Redux Slice (CartSlice)
        ↓ reducer updates state 
Redux Store
        ↓ useSelector()
UI re-renders with new data
```

### Available Actions

- `addItem(product)` - Add product to cart or increase quantity
- `decreaseItem(itemId)` - Decrease item quantity
- `removeItem(itemId)` - Remove item from cart completely

---

## 🎨 Design System

### Color Palette

- **Primary**: Blue 600 (`#2563EB`)
- **Background**: Custom gray (`#F0F4F8`)
- **Text**: Slate 800/900
- **Accents**: Slate 50/100/500

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components

- **Rounded corners**: `rounded-xl`, `rounded-2xl`, `rounded-full`
- **Shadows**: Soft, subtle shadows for depth
- **Transitions**: Smooth hover and active states
- **Spacing**: Consistent padding and gaps

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| **React 19** | UI library for building components |
| **Redux Toolkit** | State management |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **Vite** | Build tool and dev server |
| **Heroicons** | SVG icons (inline) |

---

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 🌟 Key Highlights

### State Management
Uses Redux Toolkit for efficient state management with:
- Immutable state updates
- Automatic action creators
- Built-in DevTools support

### Styling Approach
Pure Tailwind CSS utilities - no custom CSS files:
- Responsive design with breakpoints
- Hover and active states
- Smooth transitions and animations

### User Experience
- Sticky cart sidebar for easy access
- Modal confirmation before checkout
- Visual feedback on all interactions
- Empty state handling

---

## 📸 Screenshots

### Product Catalog
Browse available products with clean card layouts and hover effects.

### Shopping Cart
Real-time cart updates with quantity controls and item management.

### Checkout Modal
Beautiful confirmation dialog showing order summary before placing order.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Design inspired by Google's Material Design principles
- Icons from [Heroicons](https://heroicons.com/)
- Font from [Google Fonts](https://fonts.google.com/)

---

<div align="center">

**Made with ❤️ using React and Redux**

⭐ Star this repo if you found it helpful!

</div>
