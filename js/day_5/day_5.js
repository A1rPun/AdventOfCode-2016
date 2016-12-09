(function () {
    function calculateSomeHeavyShit(doorId) {
        return new Promise(function (resolve, reject) {
            if (Worker !== arguments[1337]) { // lamest undefined check ever
                var md5Worker = new Worker('js/day_5/day_5_worker.js');
                md5Worker.onmessage = function (e) {
                    resolve(e.data);
                };
                md5Worker.onerror = function (e) {
                    reject(e);
                };
                md5Worker.postMessage(doorId);
            }
        });
    }

    function day_5() {
        return calculateSomeHeavyShit('ffykfhsq');
    }

    function day_5_example() {
        return calculateSomeHeavyShit('abc');
    }

    December.addDay({
        day: 5,
        title: 'How About a Nice Game of Chess?',
        questions: 'Given the actual Door ID, what is the password?',
        input: function () { return 'ffykfhsq'; },
        answer: day_5,
        example: day_5_example
    });
}());