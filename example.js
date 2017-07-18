const magic = require("./magic");

class Newt {
  eyes() {
    return 6;
  }
}

class Bones {
  marrow() {
    return Math.ceil(2.3456);
  }
}

magic.spell(new Newt(), new Bones());
