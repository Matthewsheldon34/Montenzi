import { useState } from "react";
import montenzic from "../assets/montenzic.png";
import { NavLink } from "react-router";
import collection from '../Collection/data';
import IconClose from '../assets/IconClose copy.svg';
import IconHamburger from '../assets/IconHamburger.svg';

function Collection() {
  const [selectedcollection, setSelectedCollection] = useState(collection[0]);
  const [isopen, setIsOpen] = useState(false);
  
  // 🛒 Cart stored as an array of items (Fixed)
  const [cart, setCart] = useState([]);
  
  // 🔢 Quantity (before adding)
  const [quantity, setQuantity] = useState(0);

  // Pricing configuration
  const originalPrice = 300;
  const discount = 0.5;
  const discountedPrice = originalPrice * (1 - discount);

  // ➕➖ Quantity controls
  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  // 🛒 Add to cart (Pushes the selected item with its image and details into the cart array)
  const addToCart = () => {
    if (quantity === 0) return;

    const newItem = {
      id: selectedcollection.title,
      title: selectedcollection.title,
      image: selectedcollection.images.png,
      discountedPrice: discountedPrice,
      quantity: quantity,
    };

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === newItem.id);
      if (existingIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, newItem];
      }
    });

    setQuantity(0); // Reset selector count after adding
  };

  const toggleMenu = () => {
    setIsOpen(!isopen);
  };

  // Derived totals from the cart array
  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const total = cart.reduce((acc, item) => acc + (item.discountedPrice * item.quantity), 0);

  const handleCollectionChange = (collectionTitle) => {
    const foundCollection = collection.find((c) => c.title === collectionTitle);
    if (foundCollection) {
      setSelectedCollection(foundCollection);
    }
  };

  return (
    <>
      <header>
        <nav className="space-x-0.5 p-4 w-auto flex justify-between bg-amber-900 rounded">
          <div className="logo flex space-x-0.5 p-0 items-center justify-center w-auto">
            <a className="flex space-x-0.5 p-0 items-center justify-center gap-5">
              <img src={montenzic} alt="montenzi" className="h-20 w-20 rounded-full" />
              <span className="text-2xl font-sans font-bold text-white">Montenzi</span>
            </a>
          </div>

          <ul className="w-auto lg:flex  md:flex items-center gap-5 p-4 grid ">
            <li className="underline-none">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `font-normal ${isActive ? 'text-gray-200 font-bold text-xl' : 'text-gray-200 text-xl' }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/collection" 
                className={({ isActive }) => 
                  `font-normal ${isActive ? 'text-gray-200 font-bold' : 'text-gray-200 text-xl'}`
                }
              >
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink 
                
                className={({ isActive }) => 
                  `font-normal ${isActive ? 'text-gray-200 font-bold' : 'text-gray-200 text-xl'}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
              
                className={({ isActive }) => 
                  `font-normal ${isActive ? 'text-gray-200 font-bold' : 'text-gray-200 text-xl'}`
                }
              >
                Message
              </NavLink>
            </li>
          </ul>

          <div className="relative cursor-pointer text-green-600 hover:text-green-700 transition-colors flex mt-7 gap-4 w-auto">
            <div className="menu-icon lg:hidden relative mt-5 justify-center">
              <button onClick={toggleMenu} className="cursor-pointer" aria-label="Toggle Menu">
                {!isopen ? (
                  <img src={IconHamburger} alt="hamburg" className="h-7 w-7 -translate-y-10 translate-x-3 mt-5" />
                ) : (
                  <img src={IconClose} alt="icon close" className="h-7 w-7 -translate-y-10 translate-x-10" />
                )}
              </button>
            </div>
            
            <div className="relative cursor-pointer" onClick={toggleMenu}>
              {/* Shopping Cart SVG Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
              
              <div>
                {totalCartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalCartItems}
                  </span>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* 🛒 Cart Drawer Popup displaying items with their images */}
      {isopen && (
        <div className="max-w-md mx-auto my-4 bg-gray-900 border border-gray-700 p-4 rounded-lg shadow-2xl shadow-orange-500 text-white">
          <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Your Cart Items</h3>
          {cart.length === 0 ? (
            <p className="text-gray-400 text-sm">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 mb-3 border-b border-gray-800 pb-3">
                  <img src={item.image} alt={item.title} className="w-14 h-14 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                    <p className="text-xs text-amber-200">${item.discountedPrice * item.quantity}</p>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center text-xl mt-4 pt-2 font-bold ">
                <span>Total:</span>
                <span className="text-amber-200 text-2xl inline">${total}</span>
              </div>
            </div>
          )}
        </div>
      )}

      <section className="space-x-5 px-1.5 py-5 w-auto justify-center mx-auto items-center bg-linear-to-r from-gray-800 to-purple-800">
        <article className="space-x-5 p-5 w-auto">
          <div className="space-x-5 px-1.5 py-5 w-auto mx-auto">
            <h1 className="text-2xl font-mono font-bold uppercase text-center text-shadow-white text-amber-100">
              Some of the T-shirts we have in the stock
            </h1>
          </div>

          <article>
            <div>
              <div className="lg:text-left justify-center text-center">
                <p className="font-medium font-serif p-4 uppercase text-3xl text-center mt-2 text-shadow-white text-amber-100">
                  {selectedcollection.title}
                </p>
              </div>
              <div className="lg:text-left justify-center text-center">
                <p className="font-medium font-mono p-4 uppercase text-center text-2xl text-shadow-white text-amber-100">
                  {selectedcollection.description}
                </p>
              </div>
            </div>

            <div className="image-import relative flex justify-center bg-linear-to-r from-pink-700 to-purple-700 p-6 rounded shadow-xl w-12/12 lg:w-7/12 md:w-7/12 mx-auto">
              <div>
                <img
                  src={selectedcollection.images.png}
                  alt={selectedcollection.description}
                  className="max-w-md h-70 w-60 object-cover cursor-pointer mx-auto "
                  onClick={() => setIsOpen(true)} 
                />
                
                <div className="relative flex justify-center mt-5 gap-1">
                  {collection.map((item, index) => (
                    <div key={item.title} className="relative w-auto flex">
                      <button
                        type="button"
                        role="tab"
                        aria-label={`show ${item.title}`}
                        title={item.title}
                        aria-selected={selectedcollection.title === item.title}
                        className={`w-12 h-12 rounded-full transition-colors flex items-center justify-center mt-10 lg:mt-2 p-5 ${
                          selectedcollection.title === item.title
                            ? 'bg-linear-to-r from-pink-400 to-purple-400 text-black font-bold'
                            : 'bg-gray-500 hover:bg-linear-to-r from-pink-600 to-purple-600 cursor-pointer border border-black'
                        }`}
                        onClick={() => handleCollectionChange(item.title)}
                      >
                        {index + 1}   
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="w-auto justify-center mx-auto grid items-center text-center">
            {/* 💰 Price Section */}
            <div className="w-auto">
              <h2 className="font-medium font-serif p-4 text-xl text-center mt-5 text-shadow-white text-amber-100">
                Discounted Price: ${discountedPrice}
              </h2>
              <div className="flex justify-center space-x-0">
                <p style={{textDecoration:"line-through"}} className="font-medium font-serif p-4 uppercase text-xl text-center mt-2 text-shadow-white text-amber-100">
                  ${originalPrice}
                </p>
                <p className="font-medium font-serif p-4 uppercase text-xl text-center mt-2 text-shadow-white text-amber-100">
                  50% OFF
                </p>
              </div>
            </div>

            {/* 🔢 Quantity */}
            <div className="quantity">
              <div>
                <button 
                  onClick={decrease} 
                  disabled={quantity === 0} 
                  className="font-medium font-mono cursor-pointer uppercase text-center text-xl text-shadow-white text-amber-100 bg-linear-to-r from-orange-500 to-gray-500 rounded w-40 h-12 disabled:opacity-50"
                >
                  -
                </button>

                <span className="font-medium font-serif p-4 uppercase text-2xl text-center mt-2 text-shadow-white text-amber-100">
                  {quantity}
                </span>

                <button 
                  onClick={increase} 
                  className="font-medium font-mono cursor-pointer uppercase text-center text-xl text-shadow-white text-amber-100 bg-linear-to-r from-orange-500 to-gray-500 rounded w-40 h-12"
                >
                  +
                </button>
              </div>

              {/* 🛒 Add to Cart & Summary */}
              <div className="flex mx-auto w-auto justify-center space-x-1.5 items-center">
                <h3 className="font-medium font-serif p-4 uppercase text-xl text-center mt-2 text-shadow-white text-amber-100">
                  Items in Cart:<span className="text-2xl">{totalCartItems} </span>
                </h3>
                <h3 className="font-medium font-serif p-4 uppercase text-2xl text-center mt-2 text-shadow-white text-amber-100">
                  Total: ${total}
                </h3>
                <button 
                  onClick={addToCart} 
                  className="font-medium font-mono cursor-pointer mt-3 uppercase text-center text-xl text-shadow-white text-amber-100 bg-linear-to-r from-orange-800 to-gray-700 rounded w-40 h-12"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        </article>
      </section>
    </>
  );
}

export default Collection;