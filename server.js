const express = require('express');
const path = require('path');
const app = express();

// Cấu hình để phục vụ các file tĩnh (HTML, CSS, JS, hình ảnh)
app.use(express.static(path.join(__dirname)));

// Phục vụ file index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
