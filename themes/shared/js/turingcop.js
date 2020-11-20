(function () {
    'use strict';
    let meltDown = [`<p class="melt">
    "The story goes like this: Earth is captured by a technocapital singularity as renaissance rationalitization 
    and oceanic navigation lock into commoditization take-off. Logistically accelerating 
    techno-economic interactivity crumbles social order in auto-sophisticating machine runaway. 
    As markets learn to manufacture intelligence, politics modernizes, upgrades paranoia, 
    and tries to get a grip.
    </p>`, 
    `<p class="melt">
    The body count climbs through a series of globewars. 
    Emergent Planetary Commercium trashes the Holy Roman Empire, 
    the Napoleonic Continental System, the Second and Third Reich, and 
    the Soviet International, cranking-up world disorder through compressing phases. 
    Deregulation and the state arms-race each other into cyberspace. 
    </p>`,
    `<p class="melt">
    By the time soft-engineering slithers out of its box into yours, 
    human security is lurching into crisis. Cloning, lateral genodata transfer, 
    transversal replication, 
    and cyberotics, flood in amongst a relapse onto bacterial sex. 
    </p>`,
    `<p class="melt", class="align-center">
    Neo-China arrives from the future. 
    </p>`,
    `<p class="melt" class="align-center">Hypersynthetic drugs click into digital voodoo.</p>`,
    `<p class="melt">Retro-disease.</p>`,
    `<p class="melt">Nanospasm." 
    </p><a class="melt" href="http://www.ccru.net/swarm1/1_melt.htm" target="_blank"><i class="fas fa-book"></i></a>`];

    let allContent = document.getElementById('main-cont');
    let iContent = document.getElementById('underscore');
    let rotations = 0;
    let rotateval = 360;
    if (fileName == "About") {
        let knight = document.getElementById('fas fa-chess-knight');
        knight.addEventListener('click', function(){
            if (rotations <= 6) {    
                bringTheMelt(knight, rotations, rotateval);
                rotateval *= 2; 
                rotations++;
            } else {
                let melt = document.getElementsByClassName('melt');
                while (melt.length > 0) melt[0].remove();
                rotations = 0;
                rotateval = 360;
                knight.style.transform = `rotate(0deg)`;
                knight.style.transition = "0s";
                allContent.style.transform = "rotate(0deg)";
            }
            });

    } else if (fileName == "Home") {
        let spider = document.getElementById('fas fa-spider');
        let flipper = 0;
        spider.addEventListener('click', function(){
            flipper++;
            switch (document.body.style.backgroundImage) {
                case (""):
                    switchBackgroundImage(spider, "reweb", flipper);
                    break;
                case ("url(\"image/horror.jpg\")"):
                    switchBackgroundImage(spider, "reweb", flipper);
                    break;
                case ("url(\"image/reweb.jpg\")"):
                    switchBackgroundImage(spider, "horror", flipper);
                    break;
            }
            });
    }

    function switchBackgroundImage(spider, image, flipper) {
        document.body.style.backgroundImage = `url('image/${image}.jpg')`;
        document.body.style.backgroundSize = "unset";
        if (flipper % 2 == 0) {
            spider.style.transform = "scaleX(1)";
        } else {
            spider.style.transform = "scaleX(-1)";
        }
        spider.style.transition = "0.3s";
    }

    function bringTheMelt(knight, rotations, rotateval) {
        knight.style.transform = `rotate(${rotateval}deg)`;
        allContent.style.transform = "rotate(180deg)";
        knight.style.transition = "1.7s";
        iContent.insertAdjacentHTML('beforeend', meltDown[rotations]);
        }
})();
