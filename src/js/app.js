import * as flsFunctions from "./modules/functions.js"

flsFunctions.iswebp();
flsFunctions.dropdownOther();
flsFunctions.moveLiHeader();
$(window).on("resize", flsFunctions.moveLiHeader);
