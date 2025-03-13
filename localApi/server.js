const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const galleryItems = [
  { category:'normal', imageUrl: 'https://set.jainuniversity.ac.in/academics/computer-science-engineering/images/top-university-of-india3.jpg', title: 'Annual Symposium 2024', description: 'Our department\'s flagship event showcasing student research' },
  { category:'normal', imageUrl: 'https://www.cst.cam.ac.uk/sites/default/files/openday1500crop.jpg', title: 'Innovation Hackathon', description: '72-hour challenge resulting in revolutionary solutions' },
  { category:'normal', imageUrl: 'https://ssl.du.ac.bd/fontView/images/activity/1737866176CSEDUKUET.jpg', title: 'Excellence Awards Ceremony', description: 'Celebrating outstanding achievements in academics and research' },
  { category:'normal', imageUrl: 'https://www.ritrjpm.ac.in/images/computer-science/2022-2023/workshop-rpa_1.jpg', title: 'Distinguished Speaker Series', description: 'World-class experts sharing insights with our students' },
  { category:'normal', imageUrl: 'https://www.cse.ruet.ac.bd/public/storage/events/ruet-shines-at-46th-icpc-heartfelt-congratulations-to-ruet-aftermath-1.jpg', title: 'National Competition Winners', description: 'Our team bringing home the gold' },
  { category:'normal', imageUrl: 'https://bauet.ac.bd/ce/wp-content/uploads/sites/7/2022/03/DSC03895-1024x768.jpg', title: 'Industry Field Trip', description: 'Students gaining real-world exposure' },
];

// Define API route
app.get("/api/gallery", (req, res) => {
  res.json({ success: true, data: galleryItems });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
