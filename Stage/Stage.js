/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Screenshot 2024-03-10 at 10",
        "./Stage/costumes/Screenshot 2024-03-10 at 10.png",
        { x: 480, y: 242 }
      ),
      new Costume(
        "Screenshot 2024-03-10 at 3",
        "./Stage/costumes/Screenshot 2024-03-10 at 3.png",
        { x: 480, y: 242 }
      ),
      new Costume(
        "Screenshot 2024-03-10 at 4",
        "./Stage/costumes/Screenshot 2024-03-10 at 4.png",
        { x: 480, y: 224 }
      ),
      new Costume(
        "Screenshot 2024-03-10 at 5",
        "./Stage/costumes/Screenshot 2024-03-10 at 5.png",
        { x: 480, y: 224 }
      ),
      new Costume("langs", "./Stage/costumes/langs.png", { x: 358, y: 360 }),
      new Costume("158075025", "./Stage/costumes/158075025.png", {
        x: 200,
        y: 200,
      }),
      new Costume("lightly2", "./Stage/costumes/lightly2.png", {
        x: 329,
        y: 322,
      }),
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 187.0098956573485,
        y: 35.05755906249999,
      }),
      new Costume(
        "bulb-dynamic-gradient",
        "./Stage/costumes/bulb-dynamic-gradient.png",
        { x: 200, y: 200 }
      ),
      new Costume("Circlely", "./Stage/costumes/Circlely.png", {
        x: 125,
        y: 132,
      }),
      new Costume("Clock", "./Stage/costumes/Clock.png", { x: 112, y: 112 }),
      new Costume("dvdlogo-04", "./Stage/costumes/dvdlogo-04.svg", {
        x: 93.54499816894531,
        y: 41.34000015258789,
      }),
      new Costume("copyright", "./Stage/costumes/copyright.png", {
        x: 160,
        y: 160,
      }),
      new Costume("Dot-img", "./Stage/costumes/Dot-img.png", {
        x: 199.5,
        y: 312.5,
      }),
      new Costume("HTML_logo", "./Stage/costumes/HTML_logo.png", {
        x: 270,
        y: 298,
      }),
      new Costume("lightly", "./Stage/costumes/lightly.png", {
        x: 329,
        y: 322,
      }),
      new Costume("Lollipop", "./Stage/costumes/Lollipop.png", {
        x: 112,
        y: 112,
      }),
      new Costume("0484Palkia", "./Stage/costumes/0484Palkia.png", {
        x: 241,
        y: 241,
      }),
      new Costume("500px-0175Togepi", "./Stage/costumes/500px-0175Togepi.png", {
        x: 250,
        y: 250,
      }),
      new Costume("500px-0480Uxie", "./Stage/costumes/500px-0480Uxie.png", {
        x: 250,
        y: 250,
      }),
      new Costume(
        "500px-0481Mesprit",
        "./Stage/costumes/500px-0481Mesprit.png",
        { x: 250, y: 250 }
      ),
      new Costume("500px-0482Azelf", "./Stage/costumes/500px-0482Azelf.png", {
        x: 250,
        y: 250,
      }),
      new Costume("500px-0483Dialga", "./Stage/costumes/500px-0483Dialga.png", {
        x: 250,
        y: 250,
      }),
      new Costume(
        "500px-0485Heatran",
        "./Stage/costumes/500px-0485Heatran.png",
        { x: 250, y: 250 }
      ),
      new Costume(
        "680px-Scarlet_Violet_Iono",
        "./Stage/costumes/680px-Scarlet_Violet_Iono.png",
        { x: 340, y: 359.5 }
      ),
      new Costume(
        "- kinger pfp ! 🌈",
        "./Stage/costumes/- kinger pfp ! 🌈.jpg",
        { x: 343, y: 360 }
      ),
      new Costume("2Q", "./Stage/costumes/2Q.png", { x: 262, y: 192 }),
      new Costume(
        "2023_08_28_11_03_58",
        "./Stage/costumes/2023_08_28_11_03_58.png",
        { x: 58, y: 55 }
      ),
      new Costume("106404501", "./Stage/costumes/106404501.jpg", {
        x: 230,
        y: 230,
      }),
      new Costume("Bubble", "./Stage/costumes/Bubble.png", {
        x: 349.5,
        y: 350,
      }),
      new Costume("C-emoji", "./Stage/costumes/C-emoji.png", {
        x: 112,
        y: 112,
      }),
      new Costume("CatNap", "./Stage/costumes/CatNap.png", {
        x: 175,
        y: 207.5,
      }),
      new Costume(
        "cube-dynamic-color",
        "./Stage/costumes/cube-dynamic-color.png",
        { x: 200, y: 200 }
      ),
      new Costume("icon_4-078d1185", "./Stage/costumes/icon_4-078d1185.svg", {
        x: 50.175506591796875,
        y: 50.02111053466797,
      }),
      new Costume("developer", "./Stage/costumes/developer.png", {
        x: 256,
        y: 256,
      }),
      new Costume(
        "icon_33-aa0b2afc-2",
        "./Stage/costumes/icon_33-aa0b2afc-2.svg",
        { x: 49.50080108642578, y: 49.7424201965332 }
      ),
      new Costume("flabébé", "./Stage/costumes/flabébé.png", {
        x: 250,
        y: 250,
      }),
      new Costume("kirby-star2", "./Stage/costumes/kirby-star2.png", {
        x: 227,
        y: 234.5,
      }),
      new Costume("Koraidon", "./Stage/costumes/Koraidon.png", {
        x: 237.5,
        y: 237.5,
      }),
      new Costume(
        "Out_of_date_clock_icon",
        "./Stage/costumes/Out_of_date_clock_icon.png",
        { x: 360, y: 360 }
      ),
      new Costume("pngkey", "./Stage/costumes/pngkey.png", {
        x: 305.5,
        y: 129.5,
      }),
      new Costume(
        "Pokémon_Pikachu_art",
        "./Stage/costumes/Pokémon_Pikachu_art.png",
        { x: 274, y: 256 }
      ),
      new Costume("python", "./Stage/costumes/python.png", { x: 186, y: 186 }),
      new Costume("radioactive_sign", "./Stage/costumes/radioactive_sign.png", {
        x: 160,
        y: 160,
      }),
      new Costume(
        "reCAPTCHA-logo@2x",
        "./Stage/costumes/reCAPTCHA-logo@2x.png",
        { x: 204, y: 232 }
      ),
      new Costume("Runmo", "./Stage/costumes/Runmo.png", { x: 327, y: 290 }),
      new Costume("Saturn", "./Stage/costumes/Saturn.png", { x: 112, y: 112 }),
      new Costume(
        "Screenshot 2023-12-23 at 1",
        "./Stage/costumes/Screenshot 2023-12-23 at 1.png",
        { x: 152, y: 166 }
      ),
      new Costume(
        "Screenshot 2023-12-23 at 4",
        "./Stage/costumes/Screenshot 2023-12-23 at 4.png",
        { x: 108, y: 176 }
      ),
      new Costume("Snapgrapher-logo", "./Stage/costumes/Snapgrapher-logo.png", {
        x: 78,
        y: 84,
      }),
      new Costume(
        "spell_fire_fireball_random",
        "./Stage/costumes/spell_fire_fireball_random.png",
        { x: 80, y: 80 }
      ),
      new Costume("terapagos", "./Stage/costumes/terapagos.png", {
        x: 360,
        y: 340,
      }),
      new Costume("Timer", "./Stage/costumes/Timer.png", { x: 112, y: 112 }),
      new Costume("Traffic Light", "./Stage/costumes/Traffic Light.png", {
        x: 112,
        y: 112,
      }),
      new Costume("usa", "./Stage/costumes/usa.png", { x: 179, y: 168 }),
      new Costume("Zooble-icon", "./Stage/costumes/Zooble-icon.png", {
        x: 175,
        y: 148,
      }),
      new Costume(
        "zoom-dynamic-premium",
        "./Stage/costumes/zoom-dynamic-premium.png",
        { x: 200, y: 200 }
      ),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 206.43173686904487,
        y: 56.13380128743137,
      }),
      new Costume(
        "Screenshot 2024-03-10 at 2",
        "./Stage/costumes/Screenshot 2024-03-10 at 2.png",
        { x: 480, y: 224 }
      ),
      new Costume(
        "Screenshot 2024-03-10 at 11",
        "./Stage/costumes/Screenshot 2024-03-10 at 11.png",
        { x: 480, y: 224 }
      ),
      new Costume(
        "Screenshot 2024-03-10 at 6",
        "./Stage/costumes/Screenshot 2024-03-10 at 6.png",
        { x: 480, y: 224 }
      ),
      new Costume("turbomake1", "./Stage/costumes/turbomake1.png", {
        x: 480,
        y: 224,
      }),
      new Costume(
        "Screenshot 2024-03-10 at 7",
        "./Stage/costumes/Screenshot 2024-03-10 at 7.png",
        { x: 480, y: 224 }
      ),
      new Costume(
        "Screenshot 2024-03-10 at 8",
        "./Stage/costumes/Screenshot 2024-03-10 at 8.png",
        { x: 480, y: 224 }
      ),
      new Costume(
        "Screenshot 2024-03-10 at 9",
        "./Stage/costumes/Screenshot 2024-03-10 at 9.png",
        { x: 480, y: 224 }
      ),
      new Costume(
        "Screenshot 2024-03-10 at 12",
        "./Stage/costumes/Screenshot 2024-03-10 at 12.png",
        { x: 480, y: 224 }
      ),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "Screenshot 2024-03-10 at 10";
  }
}
