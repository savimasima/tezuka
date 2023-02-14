const slidesBody = [
    {
      imagebody1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e5210104666606f6031023_Body1-min%20(1)-min-min.png",
      imagebody2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63dec6ee1ca2f59588148860_Body1.png",
      imagebody3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e534f2dcfc2af64e002d4f_Body1.png",
      textbody: "Body 1"
    },
    {
      imagebody1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e52c1a13fe5042850bab13_Body2-min.png",
      imagebody2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e532b5837a6fb62cb4bdd5_Body2.png",
      imagebody3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e55b9bcf6fcd2ac45a0d18_Body2-min.png",
      textbody: "Body 2"
    },
    {
      imagebody1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e52c1b5a6f4deff998006e_Body3-min.png",
      imagebody2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e532c16f211bd21ea29700_Body3.png",
      imagebody3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e55ad0b9087faf988973aa_Body3.png",
      textbody: "Body 3"
    },
    {
        imagebody1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e52c193500eb39645ed405_Body4-min.png",
        imagebody2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e532d9e7e53d42f6d8983d_Body4.png",
        imagebody3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e55add9e419130c90d2e7d_Body4.png",
        textbody: "Body 4"
      },
      {
        imagebody1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e52c184fb5a682d05df173_Body5-min.png",
        imagebody2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e532e7a3401854bf230287_Body5.png",
        imagebody3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e55aed7a8b1bbbd7402194_Body5.png",
        textbody: "Body 5"
      },
      {
        imagebody1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e52cd5eafc01144a7c43e0_Celestial-min.png",
        imagebody2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e533c9f7e499474e3976e3_Celestial-min%20(1).png",
        imagebody3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e55b9e8f2d09145db1358a_Celestial-min.png",
        textbody: "Celestial"
      },
      {
        imagebody1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e52ce0eb39e0afb7388873_Infernal-min.png",
        imagebody2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e532f313a6e2cc25ef88c4_Infernal-min%20(1).png",
        imagebody3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e55b9f8f2d09abc1b13597_Infernal-min.png",
        textbody: "Infernal"
      }
];
  
let currentSlideBody = 0;

const previousSlideBody = () => {
    currentSlideBody = currentSlideBody - 1;
    if (currentSlideBody < 0) {
        currentSlideBody = slidesBody.length - 1;
    }
    updateSlideBody();
};

const nextSlideBody = () => {
    currentSlideBody = currentSlideBody + 1;
    if (currentSlideBody >= slidesBody.length) {
        currentSlideBody = 0;
    }
    updateSlideBody();
};

const updateSlideBody = () => {
    document.getElementById("imagebody1").src = slidesBody[currentSlideBody].imagebody1;
    document.getElementById("imagebody2").src = slidesBody[currentSlideBody].imagebody2;
    document.getElementById("imagebody3").src = slidesBody[currentSlideBody].imagebody3;
    document.getElementById("textbody").textContent = slidesBody[currentSlideBody].textbody;
};

document.getElementById("previousbody").addEventListener("click", previousSlideBody);
document.getElementById("nextbody").addEventListener("click", nextSlideBody);

const slidesClothes = [
    {
        imageclothes1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e572406d23ee2f0851f6e2_YukataWarrior-min.png",
        imageclothes2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63decc016cd3056e76817c4e_YukataWarrior-min.png",
        imageclothes3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e5753174ba65f71517a81f_YukataWarrior-min.png",
        textclothes: "Yukata Warrior"
    },
    {
        imageclothes1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e5727af143e3515ab21c64_TezukaJacket-min.png",
        imageclothes2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63decb91dd1066311920cd47_TezukaJacket-min-1.png",
        imageclothes3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e575364465e7b80ce82390_TezukaJacket-min.png",
        textclothes: "Tezuka Jacket"
    },
    {
        imageclothes1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e572634465e70908e7f276_VampireJacketWhite-min.png",
        imageclothes2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e569a44655c1ba61f356a2_VampireJacketWhite-min.png",
        imageclothes3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e5753847aaff283b8af4ae_VampireJacketWhite-min.png",
        textclothes: "Vampire Jacket White"
    },
    {
        imageclothes1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e572ef74ba65735b177ad4_VampireJacketBlack-min.png",
        imageclothes2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e569a4f143e303c6b169b8_VampireJacketBlack-min.png",
        imageclothes3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e575384e03f1dcba8e4797_VampireJacketBlack-min.png",
        textclothes: "Vampire Jacket Black"
    }
];

let currentSlideClothes = 0;

const previousSlideClothes = () => {
    currentSlideClothes = currentSlideClothes - 1;
    if (currentSlideClothes < 0) {
        currentSlideClothes = slidesClothes.length - 1;
    }
    updateSlideClothes();
};

const nextSlideClothes = () => {
    currentSlideClothes = currentSlideClothes + 1;
    if (currentSlideClothes >= slidesClothes.length) {
        currentSlideClothes = 0;
    }
    updateSlideClothes();
};

const updateSlideClothes = () => {
    document.getElementById("imageclothes1").src = slidesClothes[currentSlideClothes].imageclothes1;
    document.getElementById("imageclothes2").src = slidesClothes[currentSlideClothes].imageclothes2;
    document.getElementById("imageclothes3").src = slidesClothes[currentSlideClothes].imageclothes3;
    document.getElementById("textclothes").textContent = slidesClothes[currentSlideClothes].textclothes;
};

document.getElementById("previousclothes").addEventListener("click", previousSlideClothes);
document.getElementById("nextclothes").addEventListener("click", nextSlideClothes);

const slidesEye = [
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e58186c8053ec1a57acf07_BrownEyes%20(1).png",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63deccb2d2a0eb80bae280cf_BrownEyes-min.png",
        texteye: "Brown Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e581794624c82c19f28fc0_BlueEyes.png",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579bd4e03f12d4b8e99d3_BlueEyes-min.png",
        texteye: "Blue Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e581767f6570212051ddd7_GreenEyes.png",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579bfcb847d5c08e7264c_GreenEyes-min.png",
        texteye: "Green Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e58178ef314b50eda011ea_LavanderEyes.png",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579bf5e84cdf9ef8ef841_LavanderEyes-min.png",
        texteye: "Lavander Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e58187b3443668ca248b60_RedEyes.png",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579c2ab482492e78b0346_RedEyes-min.png",
        texteye: "Red Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e5817ac8053ed8837ace3b_PinkEyes.png",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579c30a9c2e837d739b4b_PinkEyes-min.png",
        texteye: "Pink Eyes"
    }
];

let currentSlideEye = 0;

const previousSlideEye = () => {
    currentSlideEye = currentSlideEye - 1;
    if (currentSlideEye < 0) {
        currentSlideEye = slidesEye.length - 1;
    }
    updateSlideEye();
};

const nextSlideEye = () => {
    currentSlideEye = currentSlideEye + 1;
    if (currentSlideEye >= slidesEye.length) {
        currentSlideEye = 0;
    }
    updateSlideEye();
};

const updateSlideEye = () => {
    document.getElementById("imageeye1").src = slidesEye[currentSlideEye].imageeye1;
    document.getElementById("imageeye2").src = slidesEye[currentSlideEye].imageeye2;
    document.getElementById("texteye").textContent = slidesEye[currentSlideEye].texteye;
};

document.getElementById("previouseye").addEventListener("click", previousSlideEye);
document.getElementById("nexteye").addEventListener("click", nextSlideEye);

const slidesHair = [
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e804fb68e326120dd8fbe7_UndercutRed.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e804ba707380309419c990_RedUndercut.png",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e812a644663b8ef5f295c6_RedUndercut.png",
        texthair: "Red Undercut"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e60616741fbacc493cd787_UndercutPink.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63dece88371ddda272106819_PinkUndercut-min.png",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e812a4be8e5cca31cc5d98_PinkUndercut.png",
        texthair: "Pink Undercut"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e60701fe7d2f9579f97567_UndercutYellow.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e60734b5e1d23b94aa65eb_YellowUndercut-min.png",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e812aaf1730543b2f9d6ae_YellowUndercut.png",
        texthair: "Yellow Undercut"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e6071647c1e76cc5bfae0f_UndercutBlue.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8042fbe8e5c1c18cafbd0_BlueUndercut.png",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e812a754ac2e13597250e7_BlueUndercut.png",
        texthair: "Blue Undercut"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e804f82d655306666a4206_UndercutGreen.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e804c2f173058692f8a619_GreenUndercut.png",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e812a84b769129682467f4_GreenUndercut.png",
        texthair: "Green Undercut"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e807bdcd36780c3c598e09_TezukaHairBlue.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e80947037f3b9374c41e06_TezukaHairBlue.png",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e813471eb4ad9742dc9a06_TezukaHairBlue.png",
        texthair: "Tezuka Hair Blue"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e807c0eaf8531acd4e04e7_TezukaHairBlack.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8094663db55eac410727f_TezukaHairBlack.png",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81345bc6a9a7d35a9893f_TezukaHairBlack.png",
        texthair: "Tezuka Hair Black"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e807c43f7127f8e1385e12_TezukaHairRed.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e80948cd36781db659c1ae_TezukaHairRed.png",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81345c21faa9183b7ba90_TezukaHairRed.png",
        texthair: "Tezuka Hair Red"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e807bebc6a9a3ae7a8a4e4_TezukaHairBlonde.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e80949e00682bc81f9927d_TezukaHairBlonde.png",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e813461a7c204fcee1686a_TezukaHairBlonde.png",
        texthair: "Tezuka Hair Blonde"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e807c35cc9364417c15349_TezukaHairOrange.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8094c4bd9073e4dc73203_TezukaHairOrange.png",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8134944663bb67bf2a1b5_TezukaHairOrange.png",
        texthair: "Tezuka Hair Orange"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e807c61eb4ad3fa8db8dcc_TezukaLongRed.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e80b261eb4ad6176dbebac_TezukaLongRed.png",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8140d63db559f45116512_TezukaLongRed.png",
        texthair: "Tezuka Long Red"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e807c81eb4ad13eedb8dda_TezukaLongBlack.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e80b255b939f4a8891b2af_TezukaLongBlack.png",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8140b70738009091af6bd_TezukaLong.png",
        texthair: "Tezuka Long Black"
    }
];

let currentSlideHair = 0;

const previousSlideHair = () => {
    currentSlideHair = currentSlideHair - 1;
    if (currentSlideHair < 0) {
        currentSlideHair = currentSlideHair.length - 1;
    }
    updateSlideHair();
};

const nextSlideHair = () => {
    currentSlideHair = currentSlideHair + 1;
    if (currentSlideHair >= currentSlideHair.length) {
        currentSlideHair = 0;
    }
    updateSlideHair();
};

const updateSlideHair = () => {
    document.getElementById("imagehair1").src = slidesHair[currentSlideHair].imagehair1;
    document.getElementById("imagehair2").src = slidesHair[currentSlideHair].imagehair2;
    document.getElementById("imagehair3").src = slidesHair[currentSlideHair].imagehair3;
    document.getElementById("texthair").textContent = slidesHair[currentSlideHair].texthair;
};

document.getElementById("previoushair").addEventListener("click", previousSlideHair);
document.getElementById("nexthair").addEventListener("click", nextSlideHair);

const slidesWeapon = [
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e820224bd907ef94c95c19_RedKatana.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8e707380addb1bba84_RedKatana.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237a8c09973b2fb644db_RedKatana.png",
        textweapon: "Red Katana"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82021037f3b042cc5b5b3_BlackKatana.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8954ac2e2a0d7316e3_BlackKatana.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82378037f3bf876c5ef9c_BlackKatana.png",
        textweapon: "Black Katana"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8201be00682206bfb1fff_LongSwordDark.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8baed3c676073abe73_LongSwordDark.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82379f173055a0dfaf0d4_LongSwordDark.png",
        textweapon: "Long Sword Dark"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8202b1a7c200525e2594d_Zambatou.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d9a54ac2e1dd8731733_Zambatou.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237deaf85334a6500985_Zambatou.png",
        textweapon: "Zambatou"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8202544663b1776f38f17_TezukaBatRed.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8faed3c6e1163abedc_TezukaBat.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237b68e32668a3db75ba_TezukaBat.png",
        textweapon: "Tezuka Bat"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8202360afc2d6419b40ce_TezukaBatBlue.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d90037f3b144ec57c15_TezukaBatBlue.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237d54ac2e6c677377e5_TezukaBatBlue.png",
        textweapon: "Tezuka Bat Blue"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8201d707380c3fc1bdce4_BarbarianSword.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d88bc6a9a75a0aa4089_BarbarianSword.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82376eaf85351e5500793_BarbarianSword.png",
        textweapon: "Barbarian Sword"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82020bc6a9a85a6aa69f1_BarbarianSwordGold.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8a5cc9360adcc2fe58_BarbarianSwordGold.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82374c21faaf557b8b7e2_BarbarianSwordGold.png",
        textweapon: "Barbarian Sword Gold"
    }
];

let currentSlideWeapon = 0;

const previousSlideWeapon = () => {
    currentSlideWeapon = currentSlideWeapon - 1;
    if (currentSlideWeapon < 0) {
        currentSlideWeapon = slidesWeapon.length - 1;
    }
    updateSlideWeapon();
};

const nextSlideWeapon = () => {
    currentSlideWeapon = currentSlideWeapon + 1;
    if (currentSlideWeapon >= slidesWeapon.length) {
        currentSlideWeapon = 0;
    }
    updateSlideWeapon();
};

const updateSlideWeapon = () => {
    document.getElementById("imageweapon1").src = slidesWeapon[currentSlideWeapon].imageweapon1;
    document.getElementById("imageweapon2").src = slidesWeapon[currentSlideWeapon].imageweapon2;
    document.getElementById("imageweapon3").src = slidesWeapon[currentSlideWeapon].imageweapon3;
    document.getElementById("textweapon").textContent = slidesWeapon[currentSlideWeapon].textweapon;
};

document.getElementById("previousweapon").addEventListener("click", previousSlideWeapon);
document.getElementById("nextweapon").addEventListener("click", nextSlideWeapon);

const slidesMask = [
    {
        imagemask1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e90bab4bd9073411d8d00e_empty-slot.png",
        imagemask2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e90bab4bd9073411d8d00e_empty-slot.png",
        textmask: "No Mask"
    },
    {
        imagemask1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8d7cf44663b27fdfe73e4_TezukaMask.png",
        imagemask2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8d8cf44663be3e9fe857f_TezukaMask(Undercut)-min.png",
        textmask: "Tezuka Mask"
    }
];

let currentSlideMask = 0;

const previousSlideMask = () => {
    currentSlideMask = currentSlideMask - 1;
    if (currentSlideMask < 0) {
        currentSlideMask = slidesMask.length - 1;
    }
    updateSlideMask();
};

const nextSlideMask = () => {
    currentSlideMask = currentSlideMask + 1;
    if (currentSlideMask >= slidesMask.length) {
        currentSlideMask = 0;
    }
    updateSlideMask();
};

const updateSlideMask = () => {
    document.getElementById("imagemask1").src = slidesMask[currentSlideMask].imagemask1;
    document.getElementById("imagemask2").src = slidesMask[currentSlideMask].imagemask2;
    document.getElementById("textmask").textContent = slidesMask[currentSlideMask].textmask;
};

document.getElementById("previousmask").addEventListener("click", previousSlideMask);
document.getElementById("nextmask").addEventListener("click", nextSlideMask);

const slidesHat = [
    {
        imagehat1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e90bab4bd9073411d8d00e_empty-slot.png",
        imagehat2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e90bab4bd9073411d8d00e_empty-slot.png",
        imagehat3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e90bab4bd9073411d8d00e_empty-slot.png",
        texthat: "No Hat"
    },
    {
        imagehat1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8fea41eb4ad32a2eb669c_FarmersHat.png",
        imagehat2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8feb968e326029be8db6b_FarmersHat(Undercut)-min.png",
        imagehat3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8ff40707380b0352a6aa3_FarmersHat(Undercut)-min.png",
        texthat: "Farmers Hat"
    }
];

let currentSlideHat = 0;

const previousSlideHat = () => {
    currentSlideHat = currentSlideHat - 1;
    if (currentSlideHat < 0) {
        currentSlideHat = slidesHat.length - 1;
    }
    updateSlideHat();
};

const nextSlideHat = () => {
    currentSlideHat = currentSlideHat + 1;
    if (currentSlideHat >= slidesHat.length) {
        currentSlideHat = 0;
    }
    updateSlideHat();
};

const updateSlideHat = () => {
    document.getElementById("imagehat1").src = slidesHat[currentSlideHat].imagehat1;
    document.getElementById("imagehat2").src = slidesHat[currentSlideHat].imagehat2;
    document.getElementById("imagehat3").src = slidesHat[currentSlideHat].imagehat3;
    document.getElementById("texthat").textContent = slidesHat[currentSlideHat].texthat;
};

document.getElementById("previoushat").addEventListener("click", previousSlideHat);
document.getElementById("nexthat").addEventListener("click", nextSlideHat);

const slidesBodyWoman = [
    {
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e5210104666606f6031023_Body1-min%20(1)-min-min.png",
        imagebodywoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97c55037f3b08dcde6ccc_Body1.png",
        imagebodywoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97e8a3f7127308952bea0_Body1.png",
        textbodywoman: "Body 1"
    },
    {
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e52c1a13fe5042850bab13_Body2-min.png",
        imagebodywoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97c54be8e5c8300e7105d_Body2.png",
        imagebodywoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97e8908987e7079002f6e_Body2.png",
        textbodywoman: "Body 2"
    },
    {
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e52c1b5a6f4deff998006e_Body3-min.png",
        imagebodywoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97c504bd9078f00e33081_Body3.png",
        imagebodywoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97e8708987e4287002f43_Body3.png",
        textbodywoman: "Body 3"
    },
    {
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e52c193500eb39645ed405_Body4-min.png",
        imagebodywoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97c517f75e4830746b8e4_Body4.png",
        imagebodywoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97e861eb4ad2f2cf74c5a_Body4.png",
        textbodywoman: "Body 4"
    },
    {
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e52c184fb5a682d05df173_Body5-min.png",
        imagebodywoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97c4a5cc936feb3dbbee6_Body5.png",
        imagebodywoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97e88037f3b55bdde96d4_Body5.png",
        textbodywoman: "Body 5"
    },
    {
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e52cd5eafc01144a7c43e0_Celestial-min.png",
        imagebodywoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97c4f5b939fa4e1ab2433_Celestial.png",
        imagebodywoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97e8b3f7127e2e452bec9_Celestial.png",
        textbodywoman: "Celestial"
    },
    {
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e52ce0eb39e0afb7388873_Infernal-min.png",
        imagebodywoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97c4f63db55d8f22b13b9_Infernal.png",
        imagebodywoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97e8c5cc93646fcdbe7fb_Infernal.png",
        textbodywoman: "Infernal"
    }
];
  
let currentSlideBodyWoman = 0;

const previousSlideBodyWoman = () => {
    currentSlideBodyWoman = currentSlideBodyWoman - 1;
    if (currentSlideBodyWoman < 0) {
        currentSlideBodyWoman = slidesBodyWoman.length - 1;
    }
    updateSlideBodyWoman();
};

const nextSlideBodyWoman = () => {
    currentSlideBodyWoman = currentSlideBodyWoman + 1;
    if (currentSlideBodyWoman >= slidesBodyWoman.length) {
        currentSlideBodyWoman = 0;
    }
    updateSlideBodyWoman();
};

const updateSlideBodyWoman = () => {
    document.getElementById("imagebodywoman1").src = slidesBodyWoman[currentSlideBodyWoman].imagebodywoman1;
    document.getElementById("imagebodywoman2").src = slidesBodyWoman[currentSlideBodyWoman].imagebodywoman2;
    document.getElementById("imagebodywoman3").src = slidesBodyWoman[currentSlideBodyWoman].imagebodywoman3;
    document.getElementById("textbodywoman").textContent = slidesBodyWoman[currentSlideBodyWoman].textbodywoman;
};

document.getElementById("previousbodywoman").addEventListener("click", previousSlideBodyWoman);
document.getElementById("nextbodywoman").addEventListener("click", nextSlideBodyWoman);

const slidesClothesWoman = [
    {
        imageclotheswoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9888cd94eb71fb5e0c900_BlackKimono-min.png",
        imageclotheswoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9875663db55bac82bd266_BlackKimono.png",
        imageclotheswoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98998037f3b64c9df867b_KimonoBlack.png",
        textclotheswoman: "Black Kimono"
    },
    {
        imageclotheswoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9888fbc6a9a392ac412b5_PinkKimono-min.png",
        imageclotheswoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9875a8c0997e7e7d09694_PinkKimono.png",
        imageclotheswoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9899abc6a9a59c8c41c6b_KimonoPink.png",
        textclotheswoman: "Pink Kimono"
    },
    {
        imageclotheswoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e988835b939f2a75ac0262_BlueStrapJacket-min.png",
        imageclotheswoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9875a8b497e2f8456a7f0_BlueStrapJacket.png",
        imageclotheswoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9899b9b72422c66ea8ed5_BlueStrapJacket.png",
        textclotheswoman: "Blue Strap Jacket"
    },
    {
        imageclotheswoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98886037f3b8333df65ce_RedStrapJacket-min.png",
        imageclotheswoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9875b9b7242fefbea6807_StrapJacket.png",
        imageclotheswoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9899c60afc258c4b49cb5_RedStrapJacket.png",
        textclotheswoman: "Red Strap Jacket"
    },
    {
        imageclotheswoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9888fe006825b22149011_RedTechJacket-min.png",
        imageclotheswoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9875e7c3cf7bcea65a443_RedTechJacket.png",
        imageclotheswoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9899fbe8e5c550ce80db5_RedTechJacket.png",
        textclotheswoman: "Red Tech Jacket"
    },
    {
        imageclotheswoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98894af503c36170fd264_YellowTechJacket-min.png",
        imageclotheswoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9875e08987e392400aeda_YellowTechJacket.png",
        imageclotheswoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9899f1eb4ad8736f7fe57_YellowTechJacket.png",
        textclotheswoman: "Yellow Tech Jacket"
    },
    {
        imageclotheswoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e988948b497e74f956c3d7_BlueTechJacket-min.png",
        imageclotheswoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9875baf503c3bbd0fb5f2_BlueTechJacket.png",
        imageclotheswoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9899c5b939f4e3fac0a8d_BlueTechJacket.png",
        textclotheswoman: "Blue Tech Jacket"
    }
];

let currentSlideClothesWoman = 0;

const previousSlideClothesWoman = () => {
    currentSlideClothesWoman = currentSlideClothesWoman - 1;
    if (currentSlideClothesWoman < 0) {
        currentSlideClothesWoman = slidesClothesWoman.length - 1;
    }
    updateSlideClothesWoman();
};

const nextSlideClothesWoman = () => {
    currentSlideClothesWoman = currentSlideClothesWoman + 1;
    if (currentSlideClothesWoman >= slidesClothesWoman.length) {
        currentSlideClothesWoman = 0;
    }
    updateSlideClothesWoman();
};

const updateSlideClothesWoman = () => {
    document.getElementById("imageclotheswoman1").src = slidesClothesWoman[currentSlideClothesWoman].imageclotheswoman1;
    document.getElementById("imageclotheswoman2").src = slidesClothesWoman[currentSlideClothesWoman].imageclotheswoman2;
    document.getElementById("imageclotheswoman3").src = slidesClothesWoman[currentSlideClothesWoman].imageclotheswoman3;
    document.getElementById("textclotheswoman").textContent = slidesClothesWoman[currentSlideClothesWoman].textclotheswoman;
};

document.getElementById("previousclotheswoman").addEventListener("click", previousSlideClothesWoman);
document.getElementById("nextclotheswoman").addEventListener("click", nextSlideClothesWoman);

const slidesHairWoman = [
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9909a8b497e0afb57a118_LongPonytailPink.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e6645927457ab8fb233_PinkLongPonytail.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992c4e00682e26a1586af_PinkLongPonytail.png",
        texthairwoman: "Pink Long Ponytail"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9909c4bd907f12fe48f3b_LongPonytailBlonde.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e60c21faa6e29d27337_BlondeLongPonytail.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992c09b72429c1ceb5618_BlondeLongPonytail.png",
        texthairwoman: "Blonde Long Ponytail"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9909a68e326092ff546cd_LongPonytailBlack.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e5e1eb4ad3308f85cf5_BlackLongPonytail.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992c08b497e738b57db62_BlackLongPonytail.png",
        texthairwoman: "Black Long Ponytail"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e990979b7242fbefeb28ab_LongPonytailRed.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e6a8c099781e8d11dfc_RedLongPonytail.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992c77c3cf7b25266526a_RedLongPonytail.png",
        texthairwoman: "Red Long Ponytail"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9909a5cc93652fddd53f5_LongPonytailBlue.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e6363db5572772c510e_BlueLongPonytail.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992c14592746f28901afc_BlueLongPonytail.png",
        texthairwoman: "Blue Long Ponytail"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e990864bd90744ace48e91_YellowBraids.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e747c3cf706306615a2_YellowBraids.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63ea2d0c3b0b2e5a54a46656_YellowBraids.png",
        texthairwoman: "Yellow Braids"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9908608987e008d0157c8_RedBraids.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e715c38f4c7781b63f0_RedBraids.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63ea2d0760030849b8ba33d2_RedBraids.png",
        texthairwoman: "Red Braids"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e99083be8e5c3df1e8940d_PinkBraids.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e697f75e47274484231_PinkBraids.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992c45b939f0228acc07d_PinkBraids.png",
        texthairwoman: "Pink Braids"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e99084be8e5c58b1e89412_OrangeBraids.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e64c21faaa0c7d2734d_OrangeBraids.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63ea2d043b0b2e302fa464ea_OrangeBraids.png",
        texthairwoman: "Orange Braids"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9909a1eb4ad9e48f88bfc_BlondeBraids.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e61c21faa5fb9d2733c_BlondeBraids.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63ea2d0619957469e544fa9e_BlondeBraids.png",
        texthairwoman: "Blonde Braids"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9908868e326e01bf544d0_VioletMohawk.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e744bd90747a6e47177_VioletMohawk.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992d1459274b282901be6_VioletMohawk.png",
        texthairwoman: "Violet Mohawk"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9908b4bd9071752e48ea6_RedMohawk.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e74037f3b7a07dfef1a_RedMohawk.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992d18c09979945d162b2_RedMohawk.png",
        texthairwoman: "Red Mohawk"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9908b3f71270e48545240_PinkMohawk.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e717f75e41b3e48433e_PinkMohawk.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992c5bc6a9aee20c4b291_PinkMohawk.png",
        texthairwoman: "Pink Mohawk"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e990881eb4adaf54f88a2d_OrangeMohawk.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e658b497e183e574d91_OrangeMohawk.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992c3be8e5c43a6e8c599_OrangeMohawk.png",
        texthairwoman: "Orange Mohawk"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9909ceaf8538bc268d8f3_BlondeMohawk.png",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e611b2d9e32a1ce0e64_BlondeMohawk.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992bfc21faa07aad2de6b_BlondeMohawk.png",
        texthairwoman: "Blonde Mohawk"
    }
];

let currentSlideHairWoman = 0;

const previousSlideHairWoman = () => {
    currentSlideHairWoman = currentSlideHairWoman - 1;
    if (currentSlideHairWoman < 0) {
        currentSlideHairWoman = currentSlideHairWoman.length - 1;
    }
    updateSlideHairWoman();
};

const nextSlideHairWoman = () => {
    currentSlideHairWoman = currentSlideHairWoman + 1;
    if (currentSlideHairWoman >= currentSlideHairWoman.length) {
        currentSlideHairWoman = 0;
    }
    updateSlideHairWoman();
};

const updateSlideHairWoman = () => {
    document.getElementById("imagehairwoman1").src = slidesHairWoman[currentSlideHairWoman].imagehairwoman1;
    document.getElementById("imagehairwoman2").src = slidesHairWoman[currentSlideHairWoman].imagehairwoman2;
    document.getElementById("imagehairwoman3").src = slidesHairWoman[currentSlideHairWoman].imagehairwoman3;
    document.getElementById("texthairwoman").textContent = slidesHairWoman[currentSlideHairWoman].texthairwoman;
};

document.getElementById("previoushairwoman").addEventListener("click", previousSlideHairWoman);
document.getElementById("nexthairwoman").addEventListener("click", nextSlideHairWoman);

const slidesMaskWoman = [
    {
        imagemaskwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e90bab4bd9073411d8d00e_empty-slot.png",
        imagemaskwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e90bab4bd9073411d8d00e_empty-slot.png",
        textmaskwoman: "No Mask"
    },
    {
        imagemaskwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8d7d2f17305457d05d149_BlueMask.png",
        imagemaskwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e996ff8b497e419b5822b7_BlueMask.png",
        textmaskwoman: "Blue Mask"
    },
    {
        imagemaskwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8d7d23f71277db7454322_MarronMask.png",
        imagemaskwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e996fe08987eff7d01d5c3_MarronMask.png",
        textmaskwoman: "Marron Mask"
    },
    {
        imagemaskwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8d7d160afc2c028a64220_PinkMask.png",
        imagemaskwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e997009b7242419eeb91d8_PinkMask.png",
        textmaskwoman: "Pink Mask"
    }
];

let currentSlideMaskWoman = 0;

const previousSlideMaskWoman = () => {
    currentSlideMaskWoman = currentSlideMaskWoman - 1;
    if (currentSlideMaskWoman < 0) {
        currentSlideMaskWoman = slidesMaskWoman.length - 1;
    }
    updateSlideMaskWoman();
};

const nextSlideMaskWoman = () => {
    currentSlideMaskWoman = currentSlideMaskWoman + 1;
    if (currentSlideMaskWoman >= slidesMaskWoman.length) {
        currentSlideMaskWoman = 0;
    }
    updateSlideMaskWoman();
};

const updateSlideMaskWoman = () => {
    document.getElementById("imagemaskwoman1").src = slidesMaskWoman[currentSlideMaskWoman].imagemaskwoman1;
    document.getElementById("imagemaskwoman2").src = slidesMaskWoman[currentSlideMaskWoman].imagemaskwoman2;
    document.getElementById("textmaskwoman").textContent = slidesMaskWoman[currentSlideMaskWoman].textmaskwoman;
};

document.getElementById("previousmaskwoman").addEventListener("click", previousSlideMaskWoman);
document.getElementById("nextmaskwoman").addEventListener("click", nextSlideMaskWoman);

const slidesHatWoman = [
    {
        imagehatwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e90bab4bd9073411d8d00e_empty-slot.png",
        imagehatwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e90bab4bd9073411d8d00e_empty-slot.png",
        imagehatwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e90bab4bd9073411d8d00e_empty-slot.png",
        texthatwoman: "No Hat"
    },
    {
        imagehatwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9997e5b939f6915ad38fb_Bandana.png",
        imagehatwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9985d1b2d9e4f5dceaa39_Bandana(LongPonytail).png",
        imagehatwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e99a43eaf85398256998d7_Bandana(LongPonytail)%20(1).png",
        texthatwoman: "Bandana"
    },
    {
        imagehatwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e999828b497e7e725850fa_BucketHatWhite.png",
        imagehatwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9985f9b7242796eebab35_BucketHatWhite(Braids).png",
        imagehatwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63ea2ceba6a1d2cc46e973e4_BucketHatWhite(Braids).png",
        texthatwoman: "Bucket Hat White"
    },
    {
        imagehatwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e999832d6553483585f611_BucketHatMarron.png",
        imagehatwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9985e63db5561fd2d31a6_BucketHat(Braids).png",
        imagehatwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63ea2ce7fd8efb3ed42d61cb_BucketHat(Braids).png",
        texthatwoman: "Bucket Hat"
    }
];

let currentSlideHatWoman = 0;

const previousSlideHatWoman = () => {
    currentSlideHatWoman = currentSlideHatWoman - 1;
    if (currentSlideHatWoman < 0) {
        currentSlideHatWoman = slidesHatWoman.length - 1;
    }
    updateSlideHatWoman();
};

const nextSlideHatWoman = () => {
    currentSlideHatWoman = currentSlideHatWoman + 1;
    if (currentSlideHatWoman >= slidesHatWoman.length) {
        currentSlideHatWoman = 0;
    }
    updateSlideHatWoman();
};

const updateSlideHatWoman = () => {
    document.getElementById("imagehatwoman1").src = slidesHatWoman[currentSlideHatWoman].imagehatwoman1;
    document.getElementById("imagehatwoman2").src = slidesHatWoman[currentSlideHatWoman].imagehatwoman2;
    document.getElementById("imagehatwoman3").src = slidesHatWoman[currentSlideHatWoman].imagehatwoman3;
    document.getElementById("texthatwoman").textContent = slidesHatWoman[currentSlideHatWoman].texthatwoman;
};

document.getElementById("previoushatwoman").addEventListener("click", previousSlideHatWoman);
document.getElementById("nexthatwoman").addEventListener("click", nextSlideHatWoman);

const slidesEyeWoman = [
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e58186c8053ec1a57acf07_BrownEyes%20(1).png",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63deccb2d2a0eb80bae280cf_BrownEyes-min.png",
        texteye: "Brown Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e581794624c82c19f28fc0_BlueEyes.png",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579bd4e03f12d4b8e99d3_BlueEyes-min.png",
        texteye: "Blue Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e581767f6570212051ddd7_GreenEyes.png",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579bfcb847d5c08e7264c_GreenEyes-min.png",
        texteye: "Green Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e58178ef314b50eda011ea_LavanderEyes.png",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579bf5e84cdf9ef8ef841_LavanderEyes-min.png",
        texteye: "Lavander Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e58187b3443668ca248b60_RedEyes.png",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579c2ab482492e78b0346_RedEyes-min.png",
        texteye: "Red Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e5817ac8053ed8837ace3b_PinkEyes.png",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579c30a9c2e837d739b4b_PinkEyes-min.png",
        texteye: "Pink Eyes"
    }
];

let currentSlideEyeWoman = 0;

const previousSlideEyeWoman = () => {
    currentSlideEyeWoman = currentSlideEyeWoman - 1;
    if (currentSlideEyeWoman < 0) {
        currentSlideEyeWoman = slidesEyeWoman.length - 1;
    }
    updateSlideEyeWoman();
};

const nextSlideEyeWoman = () => {
    currentSlideEyeWoman = currentSlideEyeWoman + 1;
    if (currentSlideEyeWoman >= slidesEyeWoman.length) {
        currentSlideEyeWoman = 0;
    }
    updateSlideEyeWoman();
};

const updateSlideEyeWoman = () => {
    document.getElementById("imageeyewoman1").src = slidesEyeWoman[currentSlideEyeWoman].imageeye1;
    document.getElementById("imageeyewoman2").src = slidesEyeWoman[currentSlideEyeWoman].imageeye2;
    document.getElementById("texteyewoman").textContent = slidesEyeWoman[currentSlideEyeWoman].texteye;
};

document.getElementById("previouseyewoman").addEventListener("click", previousSlideEyeWoman);
document.getElementById("nexteyewoman").addEventListener("click", nextSlideEyeWoman);

const slidesWeaponWoman = [
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e820224bd907ef94c95c19_RedKatana.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8e707380addb1bba84_RedKatana.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237a8c09973b2fb644db_RedKatana.png",
        textweapon: "Red Katana"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82021037f3b042cc5b5b3_BlackKatana.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8954ac2e2a0d7316e3_BlackKatana.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82378037f3bf876c5ef9c_BlackKatana.png",
        textweapon: "Black Katana"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8201be00682206bfb1fff_LongSwordDark.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8baed3c676073abe73_LongSwordDark.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82379f173055a0dfaf0d4_LongSwordDark.png",
        textweapon: "Long Sword Dark"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8202b1a7c200525e2594d_Zambatou.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d9a54ac2e1dd8731733_Zambatou.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237deaf85334a6500985_Zambatou.png",
        textweapon: "Zambatou"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8202544663b1776f38f17_TezukaBatRed.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8faed3c6e1163abedc_TezukaBat.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237b68e32668a3db75ba_TezukaBat.png",
        textweapon: "Tezuka Bat"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8202360afc2d6419b40ce_TezukaBatBlue.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d90037f3b144ec57c15_TezukaBatBlue.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237d54ac2e6c677377e5_TezukaBatBlue.png",
        textweapon: "Tezuka Bat Blue"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8201d707380c3fc1bdce4_BarbarianSword.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d88bc6a9a75a0aa4089_BarbarianSword.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82376eaf85351e5500793_BarbarianSword.png",
        textweapon: "Barbarian Sword"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82020bc6a9a85a6aa69f1_BarbarianSwordGold.png",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8a5cc9360adcc2fe58_BarbarianSwordGold.png",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82374c21faaf557b8b7e2_BarbarianSwordGold.png",
        textweapon: "Barbarian Sword Gold"
    }
];

let currentSlideWeaponWoman = 0;

const previousSlideWeaponWoman = () => {
    currentSlideWeaponWoman = currentSlideWeaponWoman - 1;
    if (currentSlideWeaponWoman < 0) {
        currentSlideWeaponWoman = slidesWeaponWoman.length - 1;
    }
    updateSlideWeaponWoman();
};

const nextSlideWeaponWoman = () => {
    currentSlideWeaponWoman = currentSlideWeaponWoman + 1;
    if (currentSlideWeaponWoman >= slidesWeaponWoman.length) {
        currentSlideWeaponWoman = 0;
    }
    updateSlideWeaponWoman();
};

const updateSlideWeaponWoman = () => {
    document.getElementById("imageweaponwoman1").src = slidesWeaponWoman[currentSlideWeaponWoman].imageweapon1;
    document.getElementById("imageweaponwoman2").src = slidesWeaponWoman[currentSlideWeaponWoman].imageweapon2;
    document.getElementById("imageweaponwoman3").src = slidesWeaponWoman[currentSlideWeaponWoman].imageweapon3;
    document.getElementById("textweaponwoman").textContent = slidesWeaponWoman[currentSlideWeaponWoman].textweapon;
};

document.getElementById("previousweaponwoman").addEventListener("click", previousSlideWeaponWoman);
document.getElementById("nextweaponwoman").addEventListener("click", nextSlideWeaponWoman);
