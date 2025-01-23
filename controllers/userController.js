// controllers/userController.js

// Sample users data
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  
  // Controller function to get all users
  const getUsers = (req, res) => {
    res.json(users);
  };
  
  // Controller function to get a user by ID
  const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  };
  
  // Controller function to create a new user
  const createUser = (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  };
  
  // Controller function to update a user
  const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
    users[index] = updatedUser;
    res.json({
      message: `User ${userId} updated successfully`,
      updatedUser: updatedUser,
    });
  };
  
  // Controller function to delete a user
  const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
    users.splice(index, 1);
    res.json({
      message: `User ${userId} deleted successfully`,
    });
  };
  
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
  

// controllers/userController.js
// const db = require('../db'); // Import PostgreSQL client

// // Controller function to get all users
// const getUsers = async (req, res) => {
//   try {
//     const result = await db.query('SELECT * FROM users');
//     res.json(result.rows); // Return all users from PostgreSQL database
//   } catch (err) {
//     console.error('Error fetching users:', err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// // Controller function to get a user by ID
// const getUserById = async (req, res) => {
//   const userId = parseInt(req.params.id);
//   try {
//     const result = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
//     const user = result.rows[0];
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (err) {
//     console.error('Error fetching user:', err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// // Controller function to create a new user
// const createUser = async (req, res) => {
//   const { name, email } = req.body;
//   try {
//     const result = await db.query(
//       'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *',
//       [name, email]
//     );
//     res.status(201).json({
//       message: 'User created successfully',
//       user: result.rows[0], // Return the newly created user
//     });
//   } catch (err) {
//     console.error('Error creating user:', err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// // Controller function to update a user
// const updateUser = async (req, res) => {
//   const userId = parseInt(req.params.id);
//   const { name, email } = req.body;
//   try {
//     const result = await db.query(
//       'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
//       [name, email, userId]
//     );
//     const updatedUser = result.rows[0];
//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({
//       message: `User ${userId} updated successfully`,
//       updatedUser,
//     });
//   } catch (err) {
//     console.error('Error updating user:', err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// // Controller function to delete a user
// const deleteUser = async (req, res) => {
//   const userId = parseInt(req.params.id);
//   try {
//     const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
//     const deletedUser = result.rows[0];
//     if (!deletedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({
//       message: `User ${userId} deleted successfully`,
//     });
//   } catch (err) {
//     console.error('Error deleting user:', err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// module.exports = {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// };
