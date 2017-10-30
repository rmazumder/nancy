var https = require('https')
var Alexa = require('alexa-sdk');

var SKILL_NAME = 'Nancy';
exports.handler = (event, context) => {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
}

var handlers = {
    'LaunchRequest': function() {
        this.emit(':tell', 'Welcome to Nancy music.');

    },
    'RandomRhymes': function() {
        var rhymesIndex = Math.floor(Math.random() * audioData.length);
        var rhymes = audioData[rhymesIndex];
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(rhymes.title, true, rhymes.url, 1), {}
            )
        )

    },
    'TwinkleTwinkle': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[0].title, true, audioData[0].url, 0), {}
            )
        )

    },
    'HicoryDicory': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[1].title, true, audioData[1].url, 1), {}
            )
        )

    },
    'Hunting': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[2].title, true, audioData[2].url, 2), {}
            )
        )

    },
    'allisonscamel': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[3].title, true, audioData[3].url, 3), {}))
    },
    'anowlsatalone': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[4].title, true, audioData[4].url, 4), {}))
    },
    'applesandbananas': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[5].title, true, audioData[5].url, 5), {}))
    },
    'arabellamiller': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[6].title, true, audioData[6].url, 6), {}))
    },
    'arachnid': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[7].title, true, audioData[7].url, 7), {}))
    },
    'baabaablacksheep': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[8].title, true, audioData[8].url, 8), {}))
    },
    'bearhunt': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[9].title, true, audioData[9].url, 9), {}))
    },
    'bigrockcandymountain': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[10].title, true, audioData[10].url, 10), {}))
    },
    'billgrogansgoat': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[11].title, true, audioData[11].url, 11), {}))
    },
    'billybarlow': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[12].title, true, audioData[12].url, 12), {}))
    },
    'bingo': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[13].title, true, audioData[13].url, 13), {}))
    },
    'bluebirdthroughmywindow': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[14].title, true, audioData[14].url, 14), {}))
    },
    'boughtmeacat': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[15].title, true, audioData[15].url, 15), {}))
    },
    'canyousitinacirclever1': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[16].title, true, audioData[16].url, 16), {}))
    },
    'clapclapclapyourhands': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[17].title, true, audioData[17].url, 17), {}))
    },
    'dancingrainbowcolors': function() {
        this.context.succeed(
            generateResponse(
                buildSpeechletResponse(audioData[18].title, true, audioData[18].url, 18), {}))
    },
    'AMAZON.HelpIntent': function() {
        var speechOutput = "You can say ask nancy to sing rhymes twinkle twinkle";
        var reprompt = "which sura you want me to recite?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function() {
        this.context.succeed(
            generateResponse(
                buildStopResponse(), {}
            )
        )
    },
    'AMAZON.StopIntent': function() {
        this.context.succeed(
            generateResponse(
                buildStopResponse(), {}
            )
        )
    }
};


// Helpers
buildSpeechletResponse = (outputText, shouldEndSession, url, token) => {

    return {
        outputSpeech: {
            type: "PlainText",
            text: outputText
        },
        directives: [{
                type: "AudioPlayer.Play",
                playBehavior: "REPLACE_ALL",
                enqueueToken: token,
                audioItem: {
                    stream: {
                        token: token,
                        url: url,
                        offsetInMilliseconds: 0
                    }

                }

            }

        ],
        shouldEndSession: shouldEndSession
    }

}

buildStopResponse = () => {

    return {
        outputSpeech: {
            type: "PlainText",
            text: "Bye"
        },
        directives: [{
                type: "AudioPlayer.Stop",
                playBehavior: "REPLACE_ALL"
            }

        ],
        shouldEndSession: true
    }

}

generateResponse = (speechletResponse, sessionAttributes) => {

    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    }

}

function getToken() {
    // Extracting token received in the request.
    return this.event.request.token;
}
var audioData = [{
        'title': 'Twinkle twinkle little star',
        'url': 'https://ia601508.us.archive.org/35/items/twinkle-twinkle/twinkle-twinkle.mp3'
    },
    {
        'title': 'Hicory dicory dock ',
        'url': 'https://ia601508.us.archive.org/35/items/twinkle-twinkle/hickory-dickory-dock.mp3'
    },
    {
        'title': 'Hunting we will go',
        'url': 'https://ia601508.us.archive.org/35/items/twinkle-twinkle/A%20Hunting%20We%20Will%20Go.mp3'
    },
    {
        'title': 'allisons camel',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/allisons-camel.mp3'
    },
    {
        'title': 'an owl sat alone',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/an-owl-sat-alone.mp3'
    },
    {
        'title': 'apples and bananas',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/apples-and-bananas.mp3'
    },
    {
        'title': 'arabella miller',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/arabella-miller.mp3'
    },
    {
        'title': 'arachnid',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/arachnid.mp3'
    },
    {
        'title': 'baa baa black sheep',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/baa-baa-black-sheep.mp3'
    },
    {
        'title': 'bear hunt',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/bear-hunt.mp3'
    },
    {
        'title': 'big rock candy mountain',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/big-rock-candy-mountain.mp3'
    },
    {
        'title': 'bill grogans goat',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/bill-grogans-goat.mp3'
    },
    {
        'title': 'billy barlow',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/billy-barlow.mp3'
    },
    {
        'title': 'bingo',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/bingo.mp3'
    },
    {
        'title': 'bluebird through my window',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/bluebird-through-my-window.mp3'
    },
    {
        'title': 'bought me a cat',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/bought-me-a-cat.mp3'
    },
    {
        'title': 'can you sit in a circle',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/can-you-sit-in-a-circle-ver-1.mp3'
    },
    {
        'title': 'clap clap clap your hands',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/clap-clap-clap-your-hands.mp3'
    },
    {
        'title': 'dancing rainbow colors',
        'url': 'https://ia601506.us.archive.org/6/items/bought-me-a-cat/dancing-rainbow-colors.mp3'
    }




];
