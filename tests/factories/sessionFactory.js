const Buffer = require('safe-buffer').Buffer;
const Keygrip = require('keygrip');
const keys = require('../../config/keys');
const keyGrip = new Keygrip([keys.cookieKey]);

module.exports = (user) => {
    const fakeSesssion = {
        passport: {
            user: user._id.toString()
        }
    };
    const session = Buffer.from(JSON.stringify(fakeSesssion)).toString('base64');
    const sig = keyGrip.sign('session='+ session);
    return {session, sig};
}