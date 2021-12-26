
//- SPA Ex:
console.log('bottom-script.js')

SPArouter.init(onNavigate)

function onNavigate (evt) {
    console.log('onNavigate: evt = ', evt)
    if (evt.detail.type == SPArouter.NavSTART) { //start

    }
    else if (evt.detail.type == SPArouter.NavDONE) {
    document.querySelector(SPArouter.zone).innerHTML=evt.detail.newContent.innerHTML

    window.scrollTo(0, 0)
    }
}//

