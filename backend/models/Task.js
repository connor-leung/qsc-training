<<<<<<< Updated upstream
=======
// Create database schema
>>>>>>> Stashed changes
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
<<<<<<< Updated upstream
  },
});

module.exports = mongoose.model('Task', TaskSchema);
=======
  }
})

module.exports = mongoose.model('Task', TaskSchema)
>>>>>>> Stashed changes
