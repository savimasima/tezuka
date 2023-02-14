const slidesBodyWoman = [
    {
        imagebodywoman1: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e5210104666606f6031023_Body1-min%20(1)-min-min.png",
        imagebodywoman2: "https://uploads-ssl.webflow.com/63c2918923be3c4921dc1f40/63e97c55037f3b08dcde6ccc_Body1.png",
        imagebodywoman3: "",
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
