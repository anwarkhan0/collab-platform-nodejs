

const getDocs = async (req, res) => {
    const documents = [
        { id: 1, name: "Project Proposal", type: "PDF", lastModified: "September 27, 2024" },
        { id: 2, name: "Meeting Minutes", type: "Word Document", lastModified: "September 25, 2024" },
        { id: 3, name: "Budget Spreadsheet", type: "Excel Sheet", lastModified: "September 20, 2024" },
        { id: 4, name: "Design Mockups", type: "Image", lastModified: "September 18, 2024" }
    ];

    res.json(documents);
};

module.exports = { getDocs };
