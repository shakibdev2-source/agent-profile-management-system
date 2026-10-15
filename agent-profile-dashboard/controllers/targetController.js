const db = require('../config/database');

exports.getTarget = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM targets LIMIT 1');
    res.json(rows[0] || {});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTarget = async (req, res) => {
  const { full_name } = req.body;
  try {
    await db.query(
      'UPDATE targets SET full_name = ? WHERE id = 1',
      [full_name]
    );
    res.json({ message: 'Target updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};