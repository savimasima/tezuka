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
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e60616741fbacc493cd787_UndercutPink.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63dece88371ddda272106819_PinkUndercut-min.png",
        imagehair3: "",
        texthair: "Pink Undercut"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e60701fe7d2f9579f97567_UndercutYellow.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e60734b5e1d23b94aa65eb_YellowUndercut-min.png",
        imagehair3: "",
        texthair: "Yellow Undercut"
    },
    {
        imagehair1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e6071647c1e76cc5bfae0f_UndercutBlue.png",
        imagehair2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e60733974a6c79fc5d2260_TezukaHairBlonde-min.png",
        imagehair3: "",
        texthair: ""
    }
];

let currentSlideHair = 0;

const previousSlideHair = () => {
    currentSlideHair = currentSlideHair - 1;
    if (currentSlideHair < 0) {
        currentSlideHair = slidesHair.length - 1;
    }
    updateSlideHair();
};

const nextSlideHair = () => {
    currentSlideHair = currentSlideHair + 1;
    if (currentSlideHair >= slidesHair.length) {
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