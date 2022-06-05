const express = require("express");
const { getAllMemories, addMemory, deleteMemory, editMemory } = require("../controllers/memoriesController");

const router = express.Router();

router.route('/memories').get( getAllMemories );
router.route('/memories/add').post( addMemory );
router.route('/memories/:id').delete( deleteMemory ).put( editMemory );

module.exports = router;