const path = require('path');
// Настройка алиасов для импортов
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
};