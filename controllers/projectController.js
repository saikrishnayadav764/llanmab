const ProjectEntry = require("../models/ProjectEntry");

async function createEntry(req, res) {
  try {
    const { title } = req.body;

    const newEntry = new ProjectEntry({
      title,
    });

    await newEntry.save();

    res.json(newEntry);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

async function getEntries(req, res) {
  try {
    const entries = await ProjectEntry.find({});
    res.json(entries);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

async function getEntryById(req, res) {
  try {
    const entryId = req.params.id;
    const entry = await ProjectEntry.findById(entryId);
    if (!entry) {
      return res.status(404).json({ message: "Diary entry not found" });
    }

    // Checking if the entry belongs to the specific user
    if (entry.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Diary entry not found" });
    }

    res.json(entry);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  createEntry,
  getEntries,
  getEntryById,
};
