document.onkeydown = KeyCheck;
function KeyCheck() {
    var nextTarget  = document.querySelector('a[accesskey="n"]');
    var previousTarget = document.querySelector('a[accesskey="p"]');

    var KeyID = event.keyCode;
     switch(KeyID) {
         case 39:
            if( nextTarget.href != null ) {
                window.location.href = nextTarget.href;
            }
         break;
         case 37:
            if( previousTarget.href != null ) {
                window.location.href = previousTarget.href;
            }
         break;
     }
}

    eventTarget.addEventListener("keydown", (event) => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
        if(event.keyCode === 39) {
            window.location.href = eventTarget.href;
        }
      // do something
    });




const fs = require(["fs"]);
fs.readdirSync(".levels/").forEach(file => {
    //Print file name
    console.log(file)

    /*
    Run this to print the file contents
    console.log(readFileSync(".levels/" + file, {encoding: "utf8"}))
    */
})

//but if your goal is just to print the file name you can do this
fs.readFileSync(".levels/").forEach(console.log)

