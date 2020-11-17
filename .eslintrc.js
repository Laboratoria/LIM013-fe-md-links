module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "no-console": "warn"
    },
    "plugins": ["jest"]
};
