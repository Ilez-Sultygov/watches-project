const Watch = require('../db/models/watch');

exports.getAllWatches = async (req, res) => {
  try {
    const watches = await Watch.getAll();
    res.status(200).json(watches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getWatchById = async (req, res) => {
  try {
    const watch = await Watch.findById(req.params.id);
    if (!watch) {
      return res.status(404).json({ message: 'Часы не найдены' });
    }
    res.status(200).json(watch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createWatch = async (req, res) => {
  try {
    const newWatch = new Watch({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
    });

    const savedWatch = await newWatch.save();
    res.status(201).json(savedWatch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateWatch = async (req, res) => {
  try {
    const updatedWatch = await Watch.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      },
      { new: true },
    );

    if (!updatedWatch) {
      return res.status(404).json({ message: 'Часы не найдены' });
    }
    res.status(200).json(updatedWatch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteWatch = async (req, res) => {
  try {
    const deletedWatch = await Watch.findByIdAndDelete(req.params.id);
    if (!deletedWatch) {
      return res.status(404).json({ message: 'Часы не найдены' });
    }
    res.status(200).json({ message: 'Часы успешно удалены' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
