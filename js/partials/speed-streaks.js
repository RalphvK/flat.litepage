/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setRandom(element, spread_y, spread_t) {
    
    var classes = ['blue', 'pink'];
    
    // generate random values
    var values = {
        y: getRandomInt(0,spread_y),
        delay: getRandom(0,spread_t),
        class: classes[getRandomInt(0,classes.length-1)]
    };

    // set random values
    element.css("top", values.y);
    element.css("animation-delay", values.delay);
    element.attr("class","el "+values.class);

    // return value object
    return values;
}

function initStreaks(selector, quantity) {

    // generate streaks
    var streaks = '<div class="el"></div>'.repeat(quantity);
    $(selector).append(streaks);
    
    $(selector+' .el').each(function() {
        
        var element = $(this);
        
        // config
        var spread_y = $(selector).height();
        var spread_t = 2000;
        var sceneWidth = $(selector).width();
        
        // set random pos
        var values = setRandom(element, spread_y, spread_t);
        
        // run animation
        var cssSelector = anime({
            targets: $(this)[0],
            translateX: sceneWidth * -1 - 2000,
            delay: values.delay,
            easing: 'linear',
            duration: 800,
            complete: function(anim) {
                // set random pos again
                values = setRandom(element, spread_y, spread_t);
                // restart animation
                cssSelector.restart();
            }
        });
    });

}