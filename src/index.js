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
    
}
);

CONTACT.addEventListener("click", (event)=>{
    
}
);

const Home = (function() {

    const selected = () =>{
        HOME.classList.add("hidden");
        CONTENTBOX.innerHTML = "";
        _title();
        _review();

    };

    const _title = () =>{
        let title = document.createElement('div');
        let titleText = document.createElement('h1');
        title.classList.add('title');
        titleText.innerHTML = "Witch's Brewery";
        title.appendChild('titleText');
        CONTENTBOX.appendChild('title');
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
                                the barrels herself. No music or one armed bandits - just great beer, great con\
                                versation and a great vibe.";
        
        reviewTextContainer.appendChild('reviewText');
        review.appendChild('reviewTagLine','reviewTextContainer');
        CONTENTBOX.appendChild('review');
    };

    const _schedule = () =>{

    };

    const _location = () =>{

    };

    return {
        firstLoad,
        selected,
    }

})();

const Menu = (function() {
    
})();

const Contact = (function() {
    
})();