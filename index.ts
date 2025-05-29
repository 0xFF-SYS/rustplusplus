const Fs = require('fs');
const Path = require('path');
const RustPlus = require('./src/structures/RustPlus');

CreateMissingDirectories();

const RustPlusClient = new RustPlus({
});

RustPlusClient.Build();

function CreateMissingDirectories() {
    if (!Fs.existsSync(Path.join(__dirname, 'logs'))) {
        Fs.mkdirSync(Path.join(__dirname, 'logs'));
    }
    if (!Fs.existsSync(Path.join(__dirname, 'instances'))) {
        Fs.mkdirSync(Path.join(__dirname, 'instances'));
    }
    if (!Fs.existsSync(Path.join(__dirname, 'credentials'))) {
        Fs.mkdirSync(Path.join(__dirname, 'credentials'));
    }
    if (!Fs.existsSync(Path.join(__dirname, 'maps'))) {
        Fs.mkdirSync(Path.join(__dirname, 'maps'));
    }
}

process.on('unhandledRejection', Error => {
    console.log(Error);
});

exports.RustPlusClient = RustPlusClient;