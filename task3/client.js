const axios = require('axios');

const HTML_FILE_TYPE = 'HTML';
const PDF_FILE_TYPE = 'PDF';

const time = 100;
const requests = [
    { type: PDF_FILE_TYPE, name: 'pdf #1'},
    { type: PDF_FILE_TYPE, name: 'pdf #2'},
    { type: HTML_FILE_TYPE, name: 'html #3'},
    { type: HTML_FILE_TYPE, name: 'html #4'},
    { type: HTML_FILE_TYPE, name: 'html #5'},
    { type: HTML_FILE_TYPE, name: 'html #6'},
    { type: HTML_FILE_TYPE, name: 'html #7'},
    { type: HTML_FILE_TYPE, name: 'html #8'},
    { type: PDF_FILE_TYPE, name: 'pdf #9'},
    { type: HTML_FILE_TYPE, name: 'html #10'},
];

requests.forEach((data, i) => sendRequest(data, time * i));

function sendRequest(data, time) {
    setTimeout(() => {
        axios.post('http://localhost:1338/process_file', data)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }, time);
}