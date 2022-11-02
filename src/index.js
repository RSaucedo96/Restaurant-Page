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
    Home.selected();
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
        
        hours.appendChild(hoursText);
        CONTENTBOX.appendChild(hours);
    };
    
    return {
        selected,
    }

})();

const Menu = (function() {
    
})();

const Contact = (function() {
    
})();