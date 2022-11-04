const CONTENTBOX = document.getElementById("content");
const HOME = document.getElementById("coverhome");
const CONTACT = document.getElementById("covercontact");
const MENU = document.getElementById("covermenu");

HOME.addEventListener("click", (event)=>{
    if (CONTACT.classList.contains('hidden')){
        CONTACT.classList.remove('hidden');
    }
    else if (MENU.classList.contains('hidden')){
        MENU.classList.remove('hidden');
    }    
    Home.selected();
}
);

MENU.addEventListener("click", (event)=>{
    if (CONTACT.classList.contains('hidden')){
        CONTACT.classList.remove('hidden');
    }
    else if (HOME.classList.contains('hidden')){
        HOME.classList.remove('hidden');
    }    
    Menu.selected();
}
);

CONTACT.addEventListener("click", (event)=>{
    if (HOME.classList.contains('hidden')){
        HOME.classList.remove('hidden');
    }
    else if (MENU.classList.contains('hidden')){
        MENU.classList.remove('hidden');
    }    
    Home.selected();
}
);

const Home = (function() {

    const selected = () =>{
        HOME.classList.add("hidden");
        CONTENTBOX.innerHTML = "";
        _title();
        _review();
        _schedule();

    };

    const _title = () =>{
        let title = document.createElement('div');
        let titleText = document.createElement('h1');
        title.classList.add('title');
        titleText.innerHTML = "Witch's Brewery";
        title.appendChild(titleText);
        CONTENTBOX.appendChild(title);
    };

    const _review = () =>{
        let review = document.createElement('div');
        let reviewTagLine = document.createElement('div');
        let reviewTextContainer = document.createElement('div');
        let reviewText = document.createElement('p');

        review.setAttribute('id','review');

        reviewTagLine.classList.add('sectiontitle');

        reviewTagLine.innerHTML = "Quirky and quite fabulous!";
        
        reviewText.innerHTML = "What a fantastic place this is! For lovers of real ales this is a must visit. \
                                Owner Mary is a delight. You feel like you are a guest in her own home but a \
                                very welcome one. You always get a choice of five real ales with most of them \
                                from Independent micro breweries across the south. She often goes and fetches \
                                the barrels herself. No music or one armed bandits - just great beer, great\
                                conversation and a great vibe.";
        
        reviewTextContainer.appendChild(reviewText);
        review.appendChild(reviewTagLine);
        review.appendChild(reviewTextContainer);
        CONTENTBOX.appendChild(review);
    };

    const _schedule = () =>{
        let hours = document.createElement('div');
        let hoursTitle =document.createElement('div')
        let hoursText = document.createElement('p');

        hours.setAttribute('id','hours');
        hoursTitle.classList.add('sectiontitle');

        hoursTitle.innerHTML = "Hours"
        hoursText.innerHTML = "Sunday: 8am - 8pm<br> Monday: 6am - 6pm<br> Tuesday: 6am - 6pm<br> \
                               Wednesday: 6am - 6pm<br> Thursday: 6am - 10pm<br> Friday:\
                               6am - 10pm<br> Saturday: 8am - 10pm";   
        hours.appendChild(hoursTitle);
        hours.appendChild(hoursText);
        CONTENTBOX.appendChild(hours);
    };

    return {
        selected,
    }

})();

const Menu = (function() {

    const _display = () =>{
        const menuItems = [
            {
                code: 'hp',
                name: 'Health Potion',
                description: 'The Healing Potion is a fruity bombshell of a cocktail\
                              that has the iconic bright crimson along with a creamy coconut\
                              fullness that will put a smile on your face even in the face of\
                              imminent death.',
                image: '<img src=   width="200" height="200"><img>'
            },
            {   
                code: 'mp',
                name: 'Mana Potion',
                description: 'Fruity, fresh, and definitely tropical in tone,\
                              with an extra sparkle for when you absolutely,\
                              positively, must make something erupt into flames.',
                image: '<img src=   width="200" height="200"><img>'
            },
            {   
                code: 'mk',
                name: 'Maiden Kiss',
                description: "This stunning, fruity mixed drink combines vodka,\
                              rum, blue curacao, Peach Schnapps, lemonade, and \
                              a splash of pineapple juice, and it's guaranteed\
                              to blow people's minds especially if you serve it\
                              in a big goblet.",
                image: '<img src=   width="200" height="200"><img>'
            },
            {
                code: 'hw',
                name: 'Holy Water',
                description: "This stunning, fruity mixed drink combines vodka, rum, blue curacao,\
                              Peach Schnapps, lemonade, and a splash of pineapple juice, and it's \
                              guaranteed to blow people's minds especially if you serve it in a big goblet.",
                image: '<img src=   width="200" height="200"><img>'
            }
        ]

        menuItems.forEach(element => {
            let itemWrapper = document.createElement('div');
            let itemName = document.createElement('div');
            let itemDescription = document.createElement('p');
            let itemImg = document.createElement('div');

            itemWrapper.setAttribute('id','item');
            itemWrapper.classList.add(`${element.code}`);
            itemName.classList.add('sectiontitle');

            itemName.innerHTML=`${element.name}`;
            itemDescription.innerHTML=`${element.description}`
            itemWrapper.appendChild(itemName);
            itemWrapper.appendChild(itemDescription);
            itemWrapper.appendChild(itemImg);
            CONTENTBOX.appendChild(itemWrapper);
        });

    };
    
    const selected = () =>{
        MENU.classList.add("hidden");
        CONTENTBOX.innerHTML = "";
        _display();
    };

    return {
        selected,
    }
})();

const Contact = (function() {
    const selected = () =>{
        CONTACT.classList.add("hidden");
        CONTENTBOX.innerHTML = "";
    };
    
    return {
        selected,
    }
})();