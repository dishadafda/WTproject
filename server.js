
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://dishadafda99:XKcCnHDT1mZpyexX@cluster0.gt1pc.mongodb.net/'; 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


const patientSchema = new mongoose.Schema({
    name: String,
    phone:Number,
    gender:String,
    age:Number
});

module.exports = mongoose.model('Patient', patientSchema);


app.get('/patients', async (req, res) => {
    const patients = await Patient.find();
    res.json(patients);
});

app.get('/patients/:id', async (req, res) => {
    const patient = await Patient.findById(req.params.id);
    res.json(patient);
});

app.put('/patients/:id', async (req, res) => {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPatient);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
