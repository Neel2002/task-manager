const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     const options = {
//         root: path.join(__dirname)
//     };

//     const fileName = "index.html"; 
//     res.sendFile(fileName, options, (err) =>{
//         if (err) {
//             console.error('Error sending file:', err);
//         } else {
//             console.log('Sent:', fileName);
//         }
//     })
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, (error) =>{
    if (!error) {
        console.log(`Listening on http://localhost:${PORT}`);
    }
    else{
        console.log(error);
    }
});