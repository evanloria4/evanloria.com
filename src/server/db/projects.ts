import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  github: String,
  link: String
});

const Project = mongoose.model('project', projectSchema);

export default Project;
