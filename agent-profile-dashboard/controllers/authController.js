const db = require('../config/database');

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.query(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid Credentials' });
    }

    const user = rows[0];
    res.json({
      message: 'Login successful',
      role: user.role,
      username: user.username
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};