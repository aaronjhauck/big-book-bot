const twit    = require("twit")
    , keys    = require("./lib/keys")
    , Twitter = new twit(keys)
    , utils   = require("node-blutils")
    , q       = require("./lib/quotes.json");

function tweet(msg) {
    Twitter.post('statuses/update', { status: msg }, function(err, data, resp) {
        console.log(data);
    });
}

let quote = utils.shuffle(q.quotes);

tweet(quote);