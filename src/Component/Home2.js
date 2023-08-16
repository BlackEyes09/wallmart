import React, { useState } from 'react';
import Home3 from './Home3';
// ----------------------------------------------------------------------------------------------------

const productStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    margin: '10px',
    width: '200px',
};

const imageStyles = {
    width: '150px',
    height: '150px',
    marginBottom: '10px',
};
// ----------------------------------------------------------------------------------------------------

const products = [
    { id: 1, name: 'Blankets', price: '₹1799', image: 'https://www.pexels.com/photo/four-gray-textiles-821649/', description: 'Quality Line of Bedsheets' },
    { id: 2, name: 'Books', price: '₹499', image: 'https://www.pexels.com/photo/book-with-yellowing-pages-and-a-coffee-in-bed-5858089/', description: 'All-Time Classic' },
    // Add more products here

    { id: 1, name: 'Laptop', price: '₹70,000', image: 'https://www.pexels.com/photo/a-laptop-and-a-polaroid-on-a-wooden-table-beside-a-pot-of-flowers-4787588/', description: 'Premium Range' },
    { id: 2, name: 'T-Shirt', price: '₹499', image: 'https://www.pexels.com/photo/home-interior-with-garments-on-racks-6347888/', description: 'Expand Your Wardrobe' },
    2

    { id: 1, name: 'Sneakers', price: '₹2999', image: 'https://www.pexels.com/photo/pair-of-black-and-white-adidas-sneakers-on-grey-floor-1407354/', description: 'Heels Before Wheels' },
    { id: 2, name: 'Lipsticks', price: '₹475', image: 'https://www.pexels.com/photo/pink-and-red-lipsticks-3373746/', description: 'Premium Glossy' },
    
    { id: 1, name: 'Perfume', price: '₹899', image: 'https://www.pexels.com/photo/photo-of-perfume-3059609/', description: 'Smell Elegant' },
    { id: 2, name: 'Sofa Set', price: '₹29,999', image: 'https://www.pexels.com/photo/white-couch-on-wooden-floor-4352247/', description: 'Heavenly Comfort' },
    
    { id: 1, name: 'Keyboard', price: '₹1799', image: 'https://www.pexels.com/photo/black-lighted-gaming-keyboard-841228/', description: 'Ready, Set, Code!' },
    { id: 2, name: 'Gamepad Controller', price: '₹1999', image: 'https://www.pexels.com/photo/photo-of-xbox-controller-1365795/', description: 'Get, Set, Game!' },
    
    { id: 1, name: 'Coffee Beans', price: '₹399', image: 'https://www.pexels.com/photo/coffee-beans-1695052/', description: 'Grind Your Way Up' },
    { id: 2, name: 'Film Camera', price: '₹59,999', image: 'https://www.pexels.com/photo/black-and-grey-camera-1203803/', description: 'Capture Every Moment' },
    

];

const Home2 = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseDetails = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <br/>
        <br/>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {products.map(product => (
                    <div key={product.id} style={productStyles}>
                        <img src={product.image} alt={product.name} style={imageStyles} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button
                            style={{ padding: '5px 10px', backgroundColor: '#f0c14b', border: 'none', cursor: 'pointer' }}
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <Home3 selectedProduct={selectedProduct} onCloseDetails={handleCloseDetails} />
        </div>
    );
};

export default Home2;
