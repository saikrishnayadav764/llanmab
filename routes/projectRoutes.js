const express = require("express");
const router = express.Router();
const {
  createEntry,
  getEntries,
  getEntryById,
} = require("../controllers/projectController");

// POST /api/diary
router.post("/", createEntry);

// GET /api/diary
router.get("/", getEntries);

// GET /api/diary/:id
router.get("/:id", getEntryById);

module.exports = router;
