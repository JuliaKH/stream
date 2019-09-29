let Cipher = {};

Cipher.shift = function(text, shift) {
    // Surrogate pair limit
    let bound = 0x10000;

    // Force the shift an integer and within bounds, just to be safe
    shift = parseInt(shift) % bound;

    // Might as well return the text if there's no change
    if(shift === 0) return text;

    // Create string from character codes
    return String.fromCharCode.apply(null,
        // Turn string to character codes
        text.split('').map((character) => {
            // Return current character code + shift
            return (character.charCodeAt() + shift + bound) % bound;
        })
    );
};

module.exports.Cipher = Cipher;
