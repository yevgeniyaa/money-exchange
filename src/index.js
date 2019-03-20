module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    const coins = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };

    let result = {};

    Object.keys(coins).forEach(coin => {
        const value = coins[coin];
        const amount = Math.floor(currency / value);
        if (amount > 0) {
            result[coin] = amount;
            currency -= value * amount;
        }
    });

    return result;
};
