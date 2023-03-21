let db = require("../db/databaseConnection")

exports.createStore = async (req, res) => {
    try {
      const { arabic_name,english_name, fb_store_url,insta_store_url, contact_person_name,contact_person_number, category_id } = req.body;
  
      // Validate the request data
      if (!arabic_name || !english_name || !fb_store_url || !insta_store_url || !contact_person_name || !contact_person_number || !category_id) {
        return res.status(400).json({ error: 'Invalid request data' });
      }
  
      // Add the store to the database
      const [store_id] = await db('stores').insert({ arabic_name ,english_name ,fb_store_url,insta_store_url ,contact_person_name ,contact_person_number ,category_id });
  
      return res.status(201).json({ store_id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
}

exports.getStoreByCat = async (req, res) => {
    try {
      const { category_id } = req.params;
  
      // Get all stores in the category from the database in random order
      const stores = await db('stores').where({ category_id }).orderByRaw('RAND()');
  
      return res.status(200).json({ stores });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
}