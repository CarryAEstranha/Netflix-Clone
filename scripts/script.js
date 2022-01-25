const sliderMedia = [
    {
        name: "Jornada nas Estrelas: A Nova Geração",
        link: "https://www.netflix.com/watch/70177863?trackId=200257858",
        image: "./assets/series/star trek next generation.jpg",
    },
    {
        name: "Arquivo 81",
        link: "https://www.netflix.com/watch/80232824?trackId=15035895",
        image: "./assets/series/arquivo 81.jpg"
    },
    {
        name: "O Mar da Tranquilidade",
        link: "https://www.netflix.com/watch/81246517?trackId=15035895",
        image: "./assets/series/o mar da tranquilidade.jpg"
    },
    {
        name: "Ozark",
        link: "https://www.netflix.com/watch/80117807?trackId=15036064&tctx=3%2C3%2C2bdc19a6-5577-4bab-927c-2002c45c89fd-126163438%2C0a7f69ff-8a1a-418d-891b-c825d8ec28f5_64190619X54XX1643084753447%2C0a7f69ff-8a1a-418d-891b-c825d8ec28f5_ROOT%2C%2C%2C",
        image: "./assets/series/ozark.jpg"
    },
    {
        name: "Cowboy Bebop",
        link: "https://www.netflix.com/watch/81039511?trackId=15035895",
        image: "./assets/series/cowboy bebop.jpg"
    },
    {
        name: "Não Olhe Para Cima",
        link: "https://www.netflix.com/watch/81252357?trackId=15035895&tctx=3%2C6%2C2bdc19a6-5577-4bab-927c-2002c45c89fd-126163438%2C0a7f69ff-8a1a-418d-891b-c825d8ec28f5_64190619X54XX1643084753447%2C0a7f69ff-8a1a-418d-891b-c825d8ec28f5_ROOT%2C%2C%2C",
        image: "./assets/series/não olhe para cima.jpg"
    },
    {
        name: "The Walking Dead",
        link: "https://www.netflix.com/watch/70210887?trackId=15036064",
        image: "./assets/series/the walking dead.jpg"
    },
    {
        name: "Seinfeld",
        link: "https://www.netflix.com/watch/80132845?trackId=15035895",
        image: "./assets/series/seinfeld.jpg"
    }
];

window.onload = () => {
    const slider = document.getElementById("media-slider");

    sliderMedia.forEach((media) => {
        const anchor = document.createElement("a");
        const image = document.createElement("img");

        anchor.href = media.link;
        anchor.target = "_blank";
        image.src = media.image;

        anchor.appendChild(image);
        slider.appendChild(anchor);
    });
};

function openNewWindow(param) {
    if (param === 0) {
        window.open(
            "https://www.netflix.com/watch/80117711?trackId=13752289",
            "_blank"
        );
    } else {
        window.open(
            "https://www.themoviedb.org/tv/73021-disenchantment?language=pt-BR",
            "_blank"
        );
    }
}