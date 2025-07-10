import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Product from '../models/Product.js';
import connectDB from '../config/database.js';

dotenv.config();

const users = [
  {
    name: 'Admin User',
    email: 'admin@freshmart.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'customer123',
    role: 'customer',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'customer123',
    role: 'customer',
  },
];

const products = [
  {
    name: 'Fresh Bananas',
    description: 'Sweet and ripe bananas, perfect for snacking or smoothies',
    price: 2.99,
    category: 'Fruits',
    stock: 50,
    image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=500',
    nutritionInfo: {
      calories: 105,
      protein: '1.3g',
      carbs: '27g',
      fat: '0.4g'
    }
  },
  {
    name: 'Organic Apples',
    description: 'Crisp and juicy organic apples, great for healthy snacking',
    price: 4.99,
    category: 'Fruits',
    stock: 30,
    image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=500',
    nutritionInfo: {
      calories: 95,
      protein: '0.5g',
      carbs: '25g',
      fat: '0.3g'
    }
  },
  {
    name: 'Fresh Carrots',
    description: 'Crunchy orange carrots, perfect for cooking or raw snacking',
    price: 1.99,
    category: 'Vegetables',
    stock: 40,
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=500',
    nutritionInfo: {
      calories: 41,
      protein: '0.9g',
      carbs: '10g',
      fat: '0.2g'
    }
  },
  {
    name: 'Whole Milk',
    description: 'Fresh whole milk, 1 gallon - rich in calcium and protein',
    price: 3.49,
    category: 'Dairy',
    stock: 25,
    image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=500',
    nutritionInfo: {
      calories: 150,
      protein: '8g',
      carbs: '12g',
      fat: '8g'
    }
  },
  {
    name: 'Whole Wheat Bread',
    description: 'Nutritious whole wheat bread loaf, perfect for sandwiches',
    price: 2.49,
    category: 'Bakery',
    stock: 20,
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=500',
    nutritionInfo: {
      calories: 80,
      protein: '4g',
      carbs: '15g',
      fat: '1g'
    }
  },
  {
    name: 'Greek Yogurt',
    description: 'Creamy Greek yogurt, 32oz container - high in protein',
    price: 4.99,
    category: 'Dairy',
    stock: 15,
    image: 'https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=500',
    nutritionInfo: {
      calories: 100,
      protein: '17g',
      carbs: '6g',
      fat: '0g'
    }
  },
  {
    name: 'Fresh Spinach',
    description: 'Organic baby spinach leaves, perfect for salads and cooking',
    price: 3.99,
    category: 'Vegetables',
    stock: 35,
    image: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=500',
    nutritionInfo: {
      calories: 23,
      protein: '2.9g',
      carbs: '3.6g',
      fat: '0.4g'
    }
  },
  {
    name: 'Orange Juice',
    description: 'Fresh squeezed orange juice, 64oz bottle - vitamin C rich',
    price: 5.99,
    category: 'Beverages',
    stock: 20,
    image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=500',
    nutritionInfo: {
      calories: 110,
      protein: '2g',
      carbs: '26g',
      fat: '0g'
    }
  }
];

const importData = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(users);
    const createdProducts = await Product.insertMany(products);

    console.log('Data Imported!');
    console.log(`Created ${createdUsers.length} users`);
    console.log(`Created ${createdProducts.length} products`);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    await Product.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}