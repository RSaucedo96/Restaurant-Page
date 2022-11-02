/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENPTlRFTlRCT1ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbmNvbnN0IEhPTUUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdmVyaG9tZVwiKTtcclxuY29uc3QgQ09OVEFDVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY292ZXJjb250YWN0XCIpO1xyXG5jb25zdCBNRU5VID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Zlcm1lbnVcIik7XHJcblxyXG5IT01FLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpPT57XHJcbiAgICBpZiAoQ09OVEFDVC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKXtcclxuICAgICAgICBDT05UQUNULmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoTUVOVS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKXtcclxuICAgICAgICBNRU5VLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfSAgICBcclxuICAgIEhvbWUuc2VsZWN0ZWQoKTtcclxufVxyXG4pO1xyXG5cclxuTUVOVS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KT0+e1xyXG4gICAgaWYgKENPTlRBQ1QuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSl7XHJcbiAgICAgICAgQ09OVEFDVC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKEhPTUUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSl7XHJcbiAgICAgICAgSE9NRS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH0gICAgXHJcbiAgICBIb21lLnNlbGVjdGVkKCk7XHJcbn1cclxuKTtcclxuXHJcbkNPTlRBQ1QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCk9PntcclxuICAgIGlmIChIT01FLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpe1xyXG4gICAgICAgIEhPTUUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChNRU5VLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpe1xyXG4gICAgICAgIE1FTlUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB9ICAgIFxyXG4gICAgSG9tZS5zZWxlY3RlZCgpO1xyXG59XHJcbik7XHJcblxyXG5jb25zdCBIb21lID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkID0gKCkgPT57XHJcbiAgICAgICAgSE9NRS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIENPTlRFTlRCT1guaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBfdGl0bGUoKTtcclxuICAgICAgICBfcmV2aWV3KCk7XHJcbiAgICAgICAgX3NjaGVkdWxlKCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfdGl0bGUgPSAoKSA9PntcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgICAgIHRpdGxlVGV4dC5pbm5lckhUTUwgPSBcIldpdGNoJ3MgQnJld2VyeVwiO1xyXG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XHJcbiAgICAgICAgQ09OVEVOVEJPWC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9yZXZpZXcgPSAoKSA9PntcclxuICAgICAgICBsZXQgcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IHJldmlld1RhZ0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgcmV2aWV3VGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxldCByZXZpZXdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgICAgICByZXZpZXcuc2V0QXR0cmlidXRlKCdpZCcsJ3JldmlldycpO1xyXG5cclxuICAgICAgICByZXZpZXdUYWdMaW5lLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb250aXRsZScpO1xyXG5cclxuICAgICAgICByZXZpZXdUYWdMaW5lLmlubmVySFRNTCA9IFwiUXVpcmt5IGFuZCBxdWl0ZSBmYWJ1bG91cyFcIjtcclxuICAgICAgICBcclxuICAgICAgICByZXZpZXdUZXh0LmlubmVySFRNTCA9IFwiV2hhdCBhIGZhbnRhc3RpYyBwbGFjZSB0aGlzIGlzISBGb3IgbG92ZXJzIG9mIHJlYWwgYWxlcyB0aGlzIGlzIGEgbXVzdCB2aXNpdC4gXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPd25lciBNYXJ5IGlzIGEgZGVsaWdodC4gWW91IGZlZWwgbGlrZSB5b3UgYXJlIGEgZ3Vlc3QgaW4gaGVyIG93biBob21lIGJ1dCBhIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyeSB3ZWxjb21lIG9uZS4gWW91IGFsd2F5cyBnZXQgYSBjaG9pY2Ugb2YgZml2ZSByZWFsIGFsZXMgd2l0aCBtb3N0IG9mIHRoZW0gXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIEluZGVwZW5kZW50IG1pY3JvIGJyZXdlcmllcyBhY3Jvc3MgdGhlIHNvdXRoLiBTaGUgb2Z0ZW4gZ29lcyBhbmQgZmV0Y2hlcyBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBiYXJyZWxzIGhlcnNlbGYuIE5vIG11c2ljIG9yIG9uZSBhcm1lZCBiYW5kaXRzIC0ganVzdCBncmVhdCBiZWVyLCBncmVhdFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uIGFuZCBhIGdyZWF0IHZpYmUuXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV2aWV3VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXdUZXh0KTtcclxuICAgICAgICByZXZpZXcuYXBwZW5kQ2hpbGQocmV2aWV3VGFnTGluZSk7XHJcbiAgICAgICAgcmV2aWV3LmFwcGVuZENoaWxkKHJldmlld1RleHRDb250YWluZXIpO1xyXG4gICAgICAgIENPTlRFTlRCT1guYXBwZW5kQ2hpbGQocmV2aWV3KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX3NjaGVkdWxlID0gKCkgPT57XHJcbiAgICAgICAgbGV0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGhvdXJzVGl0bGUgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbGV0IGhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICAgICAgaG91cnMuc2V0QXR0cmlidXRlKCdpZCcsJ2hvdXJzJyk7XHJcbiAgICAgICAgaG91cnNUaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9udGl0bGUnKTtcclxuXHJcbiAgICAgICAgaG91cnNUaXRsZS5pbm5lckhUTUwgPSBcIkhvdXJzXCJcclxuXHJcbiAgICAgICAgaG91cnNUZXh0LmlubmVySFRNTCA9IFwiU3VuZGF5OiA4YW0gLSA4cG08YnI+IE1vbmRheTogNmFtIC0gNnBtPGJyPiBUdWVzZGF5OiA2YW0gLSA2cG08YnI+IFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWRuZXNkYXk6IDZhbSAtIDZwbTxicj4gVGh1cnNkYXk6IDZhbSAtIDEwcG08YnI+IEZyaWRheTpcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNmFtIC0gMTBwbTxicj4gU2F0dXJkYXk6IDhhbSAtIDEwcG1cIjsgICBcclxuICAgICAgICBcclxuICAgICAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc1RleHQpO1xyXG4gICAgICAgIENPTlRFTlRCT1guYXBwZW5kQ2hpbGQoaG91cnMpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZWxlY3RlZCxcclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxyXG5jb25zdCBNZW51ID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbn0pKCk7XHJcblxyXG5jb25zdCBDb250YWN0ID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9