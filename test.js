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
