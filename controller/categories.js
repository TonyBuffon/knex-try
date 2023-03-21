let db = require("../db/databaseConnection")


exports.createCategory = async (req, res) => {
    try {
      const { arabic_name, english_name, image_url, view_count } = req.body;
  
      // Validate the request data
      if (!arabic_name || !english_name || !image_url) {
        return res.status(400).json({ error: 'Invalid request data' });
      }
  
      // Add the category to the database
      const [category_id] = await db('categories').insert({ arabic_name, english_name, image_url, view_count: view_count || 0  });
  
      return res.status(201).json({ category_id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
}

exports.getAll = async (req, res) => {
    try {
      const categories = await db('categories').where({deleted_at:null}).orderByRaw('RAND()');
      res.status(200).json(categories);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
      const { category_id } = req.params;
      const category = await db('categories').where({ id: category_id }).first();
      if (!category) {
        res.status(404).json({ error: 'Category not found' });
        return;
      }
      await db('categories').where({ id: category_id }).update({deleted_at:new Date()});
      res.status(204).end();
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error'})
    }
}