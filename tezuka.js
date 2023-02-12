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
