const slidesBody = [
    {
      imagebody1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f793f17b71100ae241a1d9_Body1.webp",
      imagebody2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bbebef5a48ca15e84965_Body1.webp",
      imagebody3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cd25f3c70b35576a33a8_Body1.webp",
      textbody: "Body 1"
    },
    {
      imagebody1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f793f20fdef14bebfba28a_Body2.webp",
      imagebody2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bbe58c4daaee69c51d7e_Body2.webp",
      imagebody3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cd269e7f4acd2acabae8_Body2.webp",
      textbody: "Body 2"
    },
    {
      imagebody1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f793f26fbc68a49ea2d093_Body3.webp",
      imagebody2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bbe9d6198a814f0b4bc7_Body3.webp",
      imagebody3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cd2750631f7f7781b2f1_Body3.webp",
      textbody: "Body 3"
    },
    {
        imagebody1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f793efba10576a960981d9_Body4.webp",
        imagebody2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bbe9389168425520674d_Body4.webp",
        imagebody3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cd28b92246066df4969a_Body4.webp",
        textbody: "Body 4"
      },
      {
        imagebody1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f793f39f1bdf28b0607d57_Body5.webp",
        imagebody2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bbeb46aa4ea5d7c3e064_Body5.webp",
        imagebody3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cd29ab5488fc4ace2274_Body5.webp",
        textbody: "Body 5"
      },
      {
        imagebody1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f793f5c5790151253a8fb0_Celestial.webp",
        imagebody2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bbfdf6fe971c8a9668a2_Celestial.webp",
        imagebody3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cd2be48f245b96cde97d_Celestial.webp",
        textbody: "Celestial"
      },
      {
        imagebody1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f793f78aa42e4160814d2e_Infernal.webp",
        imagebody2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bbfe03ba58a0f5358e89_Infernal.webp",
        imagebody3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cd2c4632347db3331b48_Infernal.webp",
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
        imageclothes1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f799e7816b0a45e96ae203_YukataWarrior.webp",
        imageclothes2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bdb2b44d338ca37c203e_YukataWarrior.webp",
        imageclothes3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7ce0a50631f78a881bf5a_YukataWarrior.webp",
        textclothes: "Yukata Warrior"
    },
    {
        imageclothes1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f799d9312c707447e4eff8_TezukaJacket.webp",
        imageclothes2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bd00d32ff52ddde28c8f_YukataWarrior.webp",
        imageclothes3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7ce15bfa2545b5a10f7ed_TezukaJacket.webp",
        textclothes: "Tezuka Jacket"
    },
    {
        imageclothes1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f799dc284df26e82abc33e_VampireJacketWhite.webp",
        imageclothes2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bcfb389168da6f207dc9_VampireJacketWhite.webp",
        imageclothes3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7ce17e48f241188cdf137_VampireJacketWhite.webp",
        textclothes: "Vampire Jacket White"
    },
    {
        imageclothes1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f799da312c7079f0e4effa_VampireJacketBlack.webp",
        imageclothes2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bd019610a052ebfab298_VampireJacketBlack.webp",
        imageclothes3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7ce18166fc9503b2bc099_VampireJacketBlack.webp",
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
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f79cbd1d8b46283c9bb71d_BrownEyes.webp",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bf13d8d8352be3f071c1_BrownEyes.webp",
        texteye: "Brown Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f79cbcf34222683ca064d3_BlueEyes.webp",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bf12ccb620eec27e3c1f_BlueEyes.webp",
        texteye: "Blue Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f79cbe7b7110e1ff422361_GreenEyes.webp",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bf14218e746862cdba42_GreenEyes.webp",
        texteye: "Green Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f79cbfd6198a7762097688_LavanderEyes.webp",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bf151fddbae90846e422_LavanderEyes.webp",
        texteye: "Lavander Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f79ccb54526fc467ce774b_RedEyes.webp",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bf1978705a38ae1fe638_RedEyes.webp",
        texteye: "Red Eyes"
    },
    {
        imageeye1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f79cc49f1bdf477a613360_PinkEyes.webp",
        imageeye2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bf177e930404ec743514_PinkEyes.webp",
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
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0f90fdef1b381fc6fe9_UndercutRed.webp",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bff40009de42c8286f92_RedUndercut.webp",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cf0144cb36819a04dd4d_RedUndercut.webp",
        texthair: "Red Undercut"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0fa91837c7a5e7c48d8_UndercutPink.webp",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bff37e9304a7d9744001_PinkUndercut.webp",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cf01b968d036d8dade5f_PinkUndercut.webp",
        texthair: "Pink Undercut"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a1140861472a2ab9004c_UndercutYellow.webp",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bffee0856a131ac266f4_YellowUndercut.webp",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cf159148f16f4c2e85f2_YellowUndercut.webp",
        texthair: "Yellow Undercut"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0ecc19fdf1d01f7f404_UndercutBlue.webp",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bff1f262196fbe294b35_BlueUndercut.webp",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7ceff4f2de9a866526bdb_BlueUndercut.webp",
        texthair: "Blue Undercut"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0fa8d5e0f34b88d75a4_UndercutGreen.webp",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bfef3e88767888b38d92_GreenUndercut.webp",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cf00a0094252596aefe9_GreenUndercut.webp",
        texthair: "Green Undercut"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0fb6b555856b32008b8_TezukaHairBlue.webp",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bff5ebcdcf7ac79775f7_TezukaHairBlue.webp",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cf059148f14b842e848d_TezukaHairBlue.webp",
        texthair: "Tezuka Hair Blue"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0e4f34222f2eda09e74_TezukaHairBlack.webp",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bff60ffe316aac0747b6_TezukaHairBlack.webp",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cf03413caf1aceb57712_TezukaHairBlack.webp",
        texthair: "Tezuka Hair Black"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0eed262dfa87b687684_TezukaHairRed.webp",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bffde0856a8639c266f3_TezukaHairRed.webp",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cf086c0317472377039c_TezukaHairRed.webp",
        texthair: "Tezuka Hair Red"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0d8ef5a48617fe682b9_TezukaHairBlonde.webp",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bff1b70f87b3a141431b_TezukaHairBlonde.webp",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cf05166fc942472bd31a_TezukaHairBlonde.webp",
        texthair: "Tezuka Hair Blonde"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0ebb44d3333e57a7b6c_TezukaHairOrange.webp",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bff08525348c0ba42941_TezukaHairOrange.webp",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cf0650631f491f81d223_TezukaHairOrange.webp",
        texthair: "Tezuka Hair Orange"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a115d262df5172687915_TezukaLongRed.webp",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bffdd8d8355688f0835a_TezukaLongRed.webp",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cf1450631f386281d3f7_TezukaLongRed.webp",
        texthair: "Tezuka Long Red"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a115cfac3b446bc81026_TezukaLongBlack.webp",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7bff75e8f0f7daa15dff4_TezukaLongBlack.webp",
        imagehair3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cf13593db0ccdd377070_TezukaLong.webp",
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
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8d51d8b4658c39c7fe8_RedKatana.webp",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cb52515297646de2187b_RedKatana.webp",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237a8c09973b2fb644db_RedKatana.png",
        textweapon: "Red Katana"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8d8c66b543f5035ff7d_BlackKatana.webp",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cb582b95151e4936dd93_BlackKatana.webp",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82378037f3bf876c5ef9c_BlackKatana.png",
        textweapon: "Black Katana"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8d1c66b54a98535ff31_LongSwordDark.webp",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cb61d8d8352a18f14ca1_LongSwordDark.webp",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82379f173055a0dfaf0d4_LongSwordDark.png",
        textweapon: "Long Sword Dark"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8d73891687c861f5043_Zambatou.webp",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cb650ffe31df560830b0_Zambatou.webp",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237deaf85334a6500985_Zambatou.png",
        textweapon: "Zambatou"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8d6f6fe97cdb3950752_TezukaBatRed.webp",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cb60515297d60ce218de_TezukaBat.webp",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237b68e32668a3db75ba_TezukaBat.png",
        textweapon: "Tezuka Bat"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8e5abd16f45d07a14f7_TezukaBatBlue.webp",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cb5ff4c5ce250746ae3b_TezukaBatBlue.webp",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237d54ac2e6c677377e5_TezukaBatBlue.png",
        textweapon: "Tezuka Bat Blue"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8cfd32ff5f2dbe1674c_BarbarianSword.webp",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cb57548b9f5895bf7a3e_BarbarianSword.webp",
        imageweapon3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82376eaf85351e5500793_BarbarianSword.png",
        textweapon: "Barbarian Sword"
    },
    {
        imageweapon1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8d1e30ffb9b32550285_BarbarianSwordGold.webp",
        imageweapon2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7cb548ca125869a25fec3_BarbarianSwordGold.webp",
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
        imagemask1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a6514e69ff1bc48947cc_TezukaMask.webp",
        imagemask2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7ca559d94b2d86d336a95_TezukaMask(Undercut)-min.webp",
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
        imagehat1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a50cd32ff54078e11b53_FarmersHat.webp",
        imagehat2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7c9de8ca125465f25ce34_FarmersHat(Undercut)-min.webp",
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
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f793f17b71100ae241a1d9_Body1.webp",
        imagebodywoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97c55037f3b08dcde6ccc_Body1.png",
        imagebodywoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97e8a3f7127308952bea0_Body1.png",
        textbodywoman: "Body 1"
    },
    {
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f793f20fdef14bebfba28a_Body2.webp",
        imagebodywoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97c54be8e5c8300e7105d_Body2.png",
        imagebodywoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97e8908987e7079002f6e_Body2.png",
        textbodywoman: "Body 2"
    },
    {
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f793f26fbc68a49ea2d093_Body3.webp",
        imagebodywoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97c504bd9078f00e33081_Body3.png",
        imagebodywoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97e8708987e4287002f43_Body3.png",
        textbodywoman: "Body 3"
    },
    {
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f793efba10576a960981d9_Body4.webp",
        imagebodywoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97c517f75e4830746b8e4_Body4.png",
        imagebodywoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97e861eb4ad2f2cf74c5a_Body4.png",
        textbodywoman: "Body 4"
    },
    {
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f793f39f1bdf28b0607d57_Body5.webp",
        imagebodywoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97c4a5cc936feb3dbbee6_Body5.png",
        imagebodywoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97e88037f3b55bdde96d4_Body5.png",
        textbodywoman: "Body 5"
    },
    {
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f793f5c5790151253a8fb0_Celestial.webp",
        imagebodywoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97c4f5b939fa4e1ab2433_Celestial.png",
        imagebodywoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97e8b3f7127e2e452bec9_Celestial.png",
        textbodywoman: "Celestial"
    },
    {
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f793f78aa42e4160814d2e_Infernal.webp",
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
        imageclotheswoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f799c94e69ffc3b0887fa4_BlackKimono.webp",
        imageclotheswoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9875663db55bac82bd266_BlackKimono.png",
        imageclotheswoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98998037f3b64c9df867b_KimonoBlack.png",
        textclotheswoman: "Black Kimono"
    },
    {
        imageclotheswoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f799c4c66b543f053516dd_PinkKimono.webp",
        imageclotheswoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9875a8c0997e7e7d09694_PinkKimono.png",
        imageclotheswoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9899abc6a9a59c8c41c6b_KimonoPink.png",
        textclotheswoman: "Pink Kimono"
    },
    {
        imageclotheswoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f799c838916844af1e57e5_BlueStrapJacket.webp",
        imageclotheswoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9875a8b497e2f8456a7f0_BlueStrapJacket.png",
        imageclotheswoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9899b9b72422c66ea8ed5_BlueStrapJacket.png",
        textclotheswoman: "Blue Strap Jacket"
    },
    {
        imageclotheswoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f799d87e875b68d3f68771_RedStrapJacket.webp",
        imageclotheswoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9875b9b7242fefbea6807_StrapJacket.png",
        imageclotheswoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9899c60afc258c4b49cb5_RedStrapJacket.png",
        textclotheswoman: "Red Strap Jacket"
    },
    {
        imageclotheswoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f799cb4e69ff4e3d887fa9_RedTechJacket.webp",
        imageclotheswoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9875e7c3cf7bcea65a443_RedTechJacket.png",
        imageclotheswoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9899fbe8e5c550ce80db5_RedTechJacket.png",
        textclotheswoman: "Red Tech Jacket"
    },
    {
        imageclotheswoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f799e838916845801e5982_YellowTechJacket.webp",
        imageclotheswoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9875e08987e392400aeda_YellowTechJacket.png",
        imageclotheswoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9899f1eb4ad8736f7fe57_YellowTechJacket.png",
        textclotheswoman: "Yellow Tech Jacket"
    },
    {
        imageclotheswoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f799ca6fbc682fefa33ae5_BlueTechJacket.webp",
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
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0fa14c3894be91bc890_LongPonytailPink.webp",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e6645927457ab8fb233_PinkLongPonytail.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992c4e00682e26a1586af_PinkLongPonytail.png",
        texthairwoman: "Pink Long Ponytail"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a1158c4daa3727c39bbf_LongPonytailBlonde.webp",
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
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0fd0861472d3cb8fec4_LongPonytailRed.webp",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e6a8c099781e8d11dfc_RedLongPonytail.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992c77c3cf7b25266526a_RedLongPonytail.png",
        texthairwoman: "Red Long Ponytail"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0fa9f1bdf80c76166b9_LongPonytailBlue.webp",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e6363db5572772c510e_BlueLongPonytail.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992c14592746f28901afc_BlueLongPonytail.png",
        texthairwoman: "Blue Long Ponytail"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a115355c8d5258c015ea_YellowBraids.webp",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e747c3cf706306615a2_YellowBraids.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63ea2d0c3b0b2e5a54a46656_YellowBraids.png",
        texthairwoman: "Yellow Braids"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0f96b55586d3d200865_RedBraids.webp",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e715c38f4c7781b63f0_RedBraids.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63ea2d0760030849b8ba33d2_RedBraids.png",
        texthairwoman: "Red Braids"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0de46b9467d337b4c7b_PinkBraids.webp",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e697f75e47274484231_PinkBraids.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992c45b939f0228acc07d_PinkBraids.png",
        texthairwoman: "Pink Braids"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0fabc703d30fbb17a6d_OrangeBraids.webp",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e64c21faaa0c7d2734d_OrangeBraids.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63ea2d043b0b2e302fa464ea_OrangeBraids.png",
        texthairwoman: "Orange Braids"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0dca7c9a1b271105995_BlondeBraids.webp",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e61c21faa5fb9d2733c_BlondeBraids.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63ea2d0619957469e544fa9e_BlondeBraids.png",
        texthairwoman: "Blonde Braids"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a11559810e8440aee6a7_VioletMohawk.webp",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e744bd90747a6e47177_VioletMohawk.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992d1459274b282901be6_VioletMohawk.png",
        texthairwoman: "Violet Mohawk"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0fa355c8dddccc01481_RedMohawk.webp",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e74037f3b7a07dfef1a_RedMohawk.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992d18c09979945d162b2_RedMohawk.png",
        texthairwoman: "Red Mohawk"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0fbd15b50d94babbb3e_PinkMohawk.webp",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e717f75e41b3e48433e_PinkMohawk.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992c5bc6a9aee20c4b291_PinkMohawk.png",
        texthairwoman: "Pink Mohawk"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0fcacfc2120354786c1_OrangeMohawk.webp",
        imagehairwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e98e658b497e183e574d91_OrangeMohawk.png",
        imagehairwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e992c3be8e5c43a6e8c599_OrangeMohawk.png",
        texthairwoman: "Orange Mohawk"
    },
    {
        imagehairwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a0dc8c4daa0e6dc39634_BlondeMohawk.webp",
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
        imagemaskwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a64ac66b54408b35d885_BlueMask.webp",
        imagemaskwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e996ff8b497e419b5822b7_BlueMask.png",
        textmaskwoman: "Blue Mask"
    },
    {
        imagemaskwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a64fc19fdf890ff83ba7_MarronMask.webp",
        imagemaskwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e996fe08987eff7d01d5c3_MarronMask.png",
        textmaskwoman: "Marron Mask"
    },
    {
        imagemaskwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a652c579016e073b9f2e_PinkMask.webp",
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
        imagehatwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a4feabd16f2e3379dde4_Bandana.webp",
        imagehatwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9985d1b2d9e4f5dceaa39_Bandana(LongPonytail).png",
        imagehatwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e99a43eaf85398256998d7_Bandana(LongPonytail)%20(1).png",
        texthatwoman: "Bandana"
    },
    {
        imagehatwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a50114c389140e1bfca5_BucketHatWhite.webp",
        imagehatwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e9985f9b7242796eebab35_BucketHatWhite(Braids).png",
        imagehatwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63ea2ceba6a1d2cc46e973e4_BucketHatWhite(Braids).png",
        texthatwoman: "Bucket Hat White"
    },
    {
        imagehatwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a50292f9f905afa8eb8b_BucketHatMarron.webp",
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
        imageeyewoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f79cbd1d8b46283c9bb71d_BrownEyes.webp",
        imageeyewoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63deccb2d2a0eb80bae280cf_BrownEyes-min.png",
        texteyewoman: "Brown Eyes"
    },
    {
        imageeyewoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f79cbcf34222683ca064d3_BlueEyes.webp",
        imageeyewoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579bd4e03f12d4b8e99d3_BlueEyes-min.png",
        texteyewoman: "Blue Eyes"
    },
    {
        imageeyewoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f79cbe7b7110e1ff422361_GreenEyes.webp",
        imageeyewoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579bfcb847d5c08e7264c_GreenEyes-min.png",
        texteyewoman: "Green Eyes"
    },
    {
        imageeyewoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f79cbfd6198a7762097688_LavanderEyes.webp",
        imageeyewoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579bf5e84cdf9ef8ef841_LavanderEyes-min.png",
        texteyewoman: "Lavander Eyes"
    },
    {
        imageeyewoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f79ccb54526fc467ce774b_RedEyes.webp",
        imageeyewoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579c2ab482492e78b0346_RedEyes-min.png",
        texteyewoman: "Red Eyes"
    },
    {
        imageeyewoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f79cc49f1bdf477a613360_PinkEyes.webp",
        imageeyewoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e579c30a9c2e837d739b4b_PinkEyes-min.png",
        texteyewoman: "Pink Eyes"
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
    document.getElementById("imageeyewoman1").src = slidesEyeWoman[currentSlideEyeWoman].imageeyewoman1;
    document.getElementById("imageeyewoman2").src = slidesEyeWoman[currentSlideEyeWoman].imageeyewoman2;
    document.getElementById("texteyewoman").textContent = slidesEyeWoman[currentSlideEyeWoman].texteyewoman;
};

document.getElementById("previouseyewoman").addEventListener("click", previousSlideEyeWoman);
document.getElementById("nexteyewoman").addEventListener("click", nextSlideEyeWoman);

const slidesWeaponWoman = [
    {
        imageweaponwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8d51d8b4658c39c7fe8_RedKatana.webp",
        imageweaponwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8e707380addb1bba84_RedKatana.png",
        imageweaponwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237a8c09973b2fb644db_RedKatana.png",
        textweaponwoman: "Red Katana"
    },
    {
        imageweaponwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8d8c66b543f5035ff7d_BlackKatana.webp",
        imageweaponwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8954ac2e2a0d7316e3_BlackKatana.png",
        imageweaponwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82378037f3bf876c5ef9c_BlackKatana.png",
        textweaponwoman: "Black Katana"
    },
    {
        imageweaponwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8d1c66b54a98535ff31_LongSwordDark.webp",
        imageweaponwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8baed3c676073abe73_LongSwordDark.png",
        imageweaponwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82379f173055a0dfaf0d4_LongSwordDark.png",
        textweaponwoman: "Long Sword Dark"
    },
    {
        imageweaponwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8d73891687c861f5043_Zambatou.webp",
        imageweaponwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d9a54ac2e1dd8731733_Zambatou.png",
        imageweaponwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237deaf85334a6500985_Zambatou.png",
        textweaponwoman: "Zambatou"
    },
    {
        imageweaponwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8d6f6fe97cdb3950752_TezukaBatRed.webp",
        imageweaponwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8faed3c6e1163abedc_TezukaBat.png",
        imageweaponwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237b68e32668a3db75ba_TezukaBat.png",
        textweaponwoman: "Tezuka Bat"
    },
    {
        imageweaponwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8e5abd16f45d07a14f7_TezukaBatBlue.webp",
        imageweaponwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d90037f3b144ec57c15_TezukaBatBlue.png",
        imageweaponwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e8237d54ac2e6c677377e5_TezukaBatBlue.png",
        textweaponwoman: "Tezuka Bat Blue"
    },
    {
        imageweaponwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8cfd32ff5f2dbe1674c_BarbarianSword.webp",
        imageweaponwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d88bc6a9a75a0aa4089_BarbarianSword.png",
        imageweaponwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82376eaf85351e5500793_BarbarianSword.png",
        textweaponwoman: "Barbarian Sword"
    },
    {
        imageweaponwoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63f7a8d1e30ffb9b32550285_BarbarianSwordGold.webp",
        imageweaponwoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e81d8a5cc9360adcc2fe58_BarbarianSwordGold.png",
        imageweaponwoman3: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e82374c21faaf557b8b7e2_BarbarianSwordGold.png",
        textweaponwoman: "Barbarian Sword Gold"
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
    document.getElementById("imageweaponwoman1").src = slidesWeaponWoman[currentSlideWeaponWoman].imageweaponwoman1;
    document.getElementById("imageweaponwoman2").src = slidesWeaponWoman[currentSlideWeaponWoman].imageweaponwoman2;
    document.getElementById("imageweaponwoman3").src = slidesWeaponWoman[currentSlideWeaponWoman].imageweaponwoman3;
    document.getElementById("textweaponwoman").textContent = slidesWeaponWoman[currentSlideWeaponWoman].textweaponwoman;
};

document.getElementById("previousweaponwoman").addEventListener("click", previousSlideWeaponWoman);
document.getElementById("nextweaponwoman").addEventListener("click", nextSlideWeaponWoman);
