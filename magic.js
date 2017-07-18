const spell = (newt, childrenBones) => {
  if (newt.eyes() + childrenBones.marrow() > 3) {
    console.log("Dingle Dangle!");
  } else {
    console.log("Bonk.");
  }
};

const cool = thing => {
  console.log(thing);
};

const eat = (thing, otherThing) => {
  if (thing) {
    if (otherThing) {
      switch ("bye") {
        case "hi":
          console.log("no");

          break;
        default:
          console.log(thing + otherThing);
      }
    }
  }
};

module.exports = {
  spell
};
