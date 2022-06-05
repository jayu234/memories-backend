const Memory = require('../models/MemoryModel');


exports.addMemory = async (req, res, next) => {

    const newMemory = await Memory.create(req.body);

    if (!newMemory) {
        return res.status(500).json({
            success: false,
            message: "Some error occured!!"
        })
    }

    res.status(201).json({
        success: true,
        newMemory
    })
};

exports.editMemory = async (req, res, next) => {
    let updatedMemory = await Memory.findById(req.params.id);

    if (!updatedMemory) {
        return res.status(500).json({
            success: false,
            message: "Memory not found!!"
        })
    }

    updatedMemory = await Memory.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        updatedMemory
    })
};

exports.deleteMemory = async (req, res, next) => {

    const memoryToDelete = await Memory.findById(req.params.id);

    if (!memoryToDelete) {
        return res.status(500).json({
            success: false,
            message: "Memory not found!!"
        });
    }

    await memoryToDelete.remove();

    res.status(200).json({
        success: true,
        message: "Memory deleted successfully!!"
    })

};

exports.getAllMemories = async (req, res, next) => {
    const allMemories = await Memory.find();

    if (!allMemories) {
        return res.status(500).json({
            success: false,
            message: "Memories not found!!"
        })
    }

    res.status(200).json({
        success: true,
        allMemories
    })
}