app.get("/books", (req, res) => {
  res.json([
    // AI
    { id: 1, title: "Artificial Intelligence", category: "AI" },
    { id: 2, title: "Expert Systems", category: "AI" },

    // ML
    { id: 3, title: "Machine Learning", category: "ML" },
    { id: 4, title: "Pattern Recognition", category: "ML" },

    // DL
    { id: 5, title: "Deep Learning", category: "DL" },
    { id: 6, title: "Neural Networks", category: "DL" },

    // Data
    { id: 7, title: "Data Science", category: "Data" },
    { id: 8, title: "Big Data Analytics", category: "Data" },

    // Cloud
    { id: 9, title: "Cloud Computing", category: "Cloud" },
    { id: 10, title: "AWS Fundamentals", category: "Cloud" },

    // CS Core
    { id: 11, title: "Operating Systems", category: "CS" },
    { id: 12, title: "Database Management Systems", category: "CS" },

    // Security
    { id: 13, title: "Cyber Security", category: "Security" },
    { id: 14, title: "Ethical Hacking", category: "Security" }
  ]);
});
