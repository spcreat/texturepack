// forgive me if the code is messy twin
const __VERSION = "1.0.0";

// this is taken from https://stackoverflow.com/a/64072170
const digit="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
toB64=x=>x.toString(2).split(/(?=(?:.{6})+(?!.))/g).map(v=>digit[parseInt(v,2)]).join("")
fromB64=x=>x.split("").reduce((s,v)=>s*64+digit.indexOf(v),0)

const tp_items = [
    // Categories
    {
        name: "Misc",
        items: [
            { name: "Custom Logo", description: "Replaces the default GD logo with a blue and green version", include_paths: ["GJ_LaunchSheet-uhd.png", "GJ_LaunchSheet-uhd.plist"], image: "webcontent/0misc/customlogo_help.png" },
            { name: "Mini Icons", description: "Custom icons for when the \"Default Mini Icon\" setting is enabled in GD", include_paths: ["icons/player_00-uhd.png", "icons/player_ball_00-uhd.png"], image: "webcontent/0misc/miniicons_help.png" },
            { name: "Alternate Glow", description: "Gives all icons a custom golden glow texture. With this option enabled, make your secondary color black for your duals to have it automatically!", include_paths: [], image: "webcontent/0misc/altglow_help.png" },
            { name: "Menu Loop", description: "Changes the main menu music to <a href=\"https://www.newgrounds.com/audio/listen/627275\" target=\"_blank\">NeXsard - Not dead YET!</a>", include_paths: ["menuLoop.mp3"], image: "webcontent/0misc/menuloop_help.png" }
        ]
    },
    {
        name: "Cubes",
        items: [
            { name: "Main Cube", include_paths: ["icons/player_35-uhd.png"], image: "webcontent/1cubes/35.png" },
            { name: "Cube 1", include_paths: ["icons/player_01-uhd.png"], image: "webcontent/1cubes/1.png" },
            { name: "Cube 3", include_paths: ["icons/player_03-uhd.png"], image: "webcontent/1cubes/3.png" },
            { name: "Cube 12", include_paths: ["icons/player_12-uhd.png"], image: "webcontent/1cubes/12.png" },
            { name: "Cube 16", include_paths: ["icons/player_16-uhd.png"], image: "webcontent/1cubes/16.png" },
            { name: "Cube 23", include_paths: ["icons/player_23-uhd.png"], image: "webcontent/1cubes/23.png" },
            { name: "Cube 30", include_paths: ["icons/player_30-uhd.png"], image: "webcontent/1cubes/30.png" },
            { name: "Cube 37", include_paths: ["icons/player_37-uhd.png"], image: "webcontent/1cubes/37.png" },
            { name: "Cube 132", include_paths: ["icons/player_132-uhd.png"], image: "webcontent/1cubes/132.png" },
            { name: "Cube 133", include_paths: ["icons/player_133-uhd.png"], image: "webcontent/1cubes/133.png" },
            { name: "Cube 348", include_paths: ["icons/player_348-uhd.png"], image: "webcontent/1cubes/348.png" },
            { name: "Cube 352", include_paths: ["icons/player_352-uhd.png"], image: "webcontent/1cubes/352.png" },
            { name: "Cube 459", include_paths: ["icons/player_459-uhd.png"], image: "webcontent/1cubes/459.png" },
        ]
    },
    {
        name: "Ships",
        items: [
            { name: "Main Ship", include_paths: ["icons/ship_22-uhd.png"], image: "webcontent/2ships/22.png" },
            { name: "Ship 1", include_paths: ["icons/ship_01-uhd.png"], image: "webcontent/2ships/1.png" },
            { name: "Ship 10", include_paths: ["icons/ship_10-uhd.png"], image: "webcontent/2ships/10.png" },
            { name: "Ship 17", include_paths: ["icons/ship_17-uhd.png"], image: "webcontent/2ships/17.png" },
            { name: "Ship 19", include_paths: ["icons/ship_19-uhd.png"], image: "webcontent/2ships/19.png" },
            { name: "Ship 33", include_paths: ["icons/ship_33-uhd.png"], image: "webcontent/2ships/33.png" },
            { name: "Ship 129", include_paths: ["icons/ship_129-uhd.png"], image: "webcontent/2ships/129.png" },
        ]
    },
    {
        name: "Balls",
        items: [
            { name: "Main Ball", include_paths: ["icons/player_ball_30-uhd.png"], image: "webcontent/3balls/30.png" },
            { name: "Ball 1", include_paths: ["icons/player_ball_01-uhd.png"], image: "webcontent/3balls/1.png" },
            { name: "Ball 9", include_paths: ["icons/player_ball_09-uhd.png"], image: "webcontent/3balls/9.png" },
            { name: "Ball 11", include_paths: ["icons/player_ball_11-uhd.png"], image: "webcontent/3balls/11.png" },
            { name: "Ball 62", include_paths: ["icons/player_ball_62-uhd.png"], image: "webcontent/3balls/62.png" },
            { name: "Ball 117", include_paths: ["icons/player_ball_117-uhd.png"], image: "webcontent/3balls/117.png" },
        ]
    },
    {
        name: "UFOs",
        items: [
            { name: "Main UFO", include_paths: ["icons/bird_94-uhd.png"], image: "webcontent/4ufos/94.png" },
            { name: "UFO 1", include_paths: ["icons/bird_01-uhd.png"], image: "webcontent/4ufos/1.png" },
            { name: "UFO 18", include_paths: ["icons/bird_18-uhd.png"], image: "webcontent/4ufos/18.png" },
            { name: "UFO 28", include_paths: ["icons/bird_28-uhd.png"], image: "webcontent/4ufos/28.png" },
            { name: "UFO 35", include_paths: ["icons/bird_35-uhd.png"], image: "webcontent/4ufos/35.png" },
            { name: "UFO 86", include_paths: ["icons/bird_86-uhd.png"], image: "webcontent/4ufos/86.png" },
            { name: "UFO 149", include_paths: ["icons/bird_149-uhd.png"], image: "webcontent/4ufos/149.png" },
        ]
    },
    {
        name: "Waves",
        items: [
            { name: "Main Wave", include_paths: ["icons/dart_01-uhd.png"], image: "webcontent/5waves/1.png" },
            { name: "Wave 17", include_paths: ["icons/dart_17-uhd.png"], image: "webcontent/5waves/17.png" },
        ]
    },
    {
        name: "Robots",
        items: [
            { name: "Main Robot", include_paths: ["icons/robot_20-uhd.png"], image: "webcontent/6robots/20.png" },
            { name: "Robot 1", include_paths: ["icons/robot_01-uhd.png"], image: "webcontent/6robots/1.png" },
        ]
    },
    {
        name: "Spiders",
        items: [
            { name: "Main Spider", include_paths: ["icons/spider_66-uhd.png"], image: "webcontent/7spiders/66.png" },
            { name: "Spider 1", include_paths: ["icons/spider_01-uhd.png"], image: "webcontent/7spiders/1.png" },
            { name: "Spider 15", include_paths: ["icons/spider_15-uhd.png"], image: "webcontent/7spiders/15.png" },
        ]
    },
    {
        name: "Swings",
        items: [
            { name: "Main Swing", include_paths: ["icons/swing_04-uhd.png"], image: "webcontent/8swings/4.png" },
            { name: "Swing 1", include_paths: ["icons/swing_01-uhd.png"], image: "webcontent/8swings/1.png" },
            { name: "Swing 2", include_paths: ["icons/swing_02-uhd.png"], image: "webcontent/8swings/2.png" },
        ]
    },
    {
        name: "Jetpacks",
        items: [
            { name: "Main Jetpack", include_paths: ["icons/jetpack_02-uhd.png"], image: "webcontent/9jetpacks/2.png" },
        ]
    }
];

async function AddZipFile(_zip, filename, filepath = undefined)
{
    if (filepath == undefined) filepath = filename;
    let file = await fetch("content/"+filename).then(r => r.blob());
    _zip.file(filepath, file);
}

async function GenerateZipDownload() {
    let dlButton = document.querySelector(".download-button");
    dlButton.disabled = true;

    let includedFiles = ["pack.png"];
    let counts = [0,0,0,0,0,0,0,0,0,0];
    let glowOption = false;

    let cards = document.querySelectorAll(".option-card");
    cards.forEach(card => {
        if (card.classList.contains("toggled")) {
            let category = parseInt(card.dataset.categoryind);
            if (tp_items[category].items[card.dataset.ind].name == "Alternate Glow") glowOption = true;
            includedFiles.push(...tp_items[category].items[card.dataset.ind].include_paths);
            counts[category]++;
        }
    })
    
    dlButton.innerHTML = `Preparing... (0/${includedFiles.length})`;

    let zip = new JSZip();
    for (let i=0;i<includedFiles.length;i++)
    {
        let file = includedFiles[i];
        if (!glowOption) file = file.replace("icons/", "icons_noglow/");
        await AddZipFile(zip, file, includedFiles[i]);
        dlButton.innerHTML = `Preparing... (${i+1}/${includedFiles.length})`;
    }

    let countsString = "";
    counts.forEach(count => {
        countsString += toB64(count);
    })
    
    zip.file("pack.json", `
        {
            "textureldr": "1.8.2",
            "name": "spcreat pack [${countsString}]",
            "id": "spcreat.pack${countsString}",
            "version": "${__VERSION}",
            "author": "spcreat"
        }
        `);

    const zipData = await zip.generateAsync({
        type: "blob",
        streamFiles: true
    });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(zipData);
    link.download = `spcreatpack_v${__VERSION}_[${countsString}].zip`;
    link.click();
    
    dlButton.innerHTML = `Download`;
    dlButton.disabled = false;
}

function loadPreset(presetString, reverse)
{
    let pairs = presetString.split(";");

    let cards = document.querySelectorAll(".option-card");
    cards.forEach(card => {
        let myPair = card.dataset.categoryind + "," + card.dataset.ind;
        let shouldBeToggled = pairs.includes(myPair);
        if (reverse == "true") shouldBeToggled = !shouldBeToggled;
        if (shouldBeToggled) card.classList.add("toggled");
        else card.classList.remove("toggled");
    })

    document.querySelector("#edit-section").classList.remove("is-hidden");
}

function populateItems()
{
    let cards = document.querySelectorAll(".preset-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            cards.forEach(card => {
                card.classList.remove("toggled"); //.getElementsByTagName('img')[0]
                card.querySelector(".card-image").classList.add("is-collapsed");
            })
            card.classList.add("toggled");

            loadPreset(card.dataset.preset, card.dataset.presetreverse);
        })
    })

    const tabsSelector = document.querySelector("#tabs-selector > ul");
    const tabsContent = document.querySelector("#tabs-content");

    for (let i=0;i<tp_items.length;i++)
    {
        let tp_category = tp_items[i];



        // Setup tab selectors
        let tabSelector = document.createElement("li");
        let tabSelectorInner = document.createElement("a");

        tabSelectorInner.textContent = tp_category.name;
        let htmlTabName = "tab-"+tp_category.name.toLowerCase();
        tabSelector.setAttribute("data-target", htmlTabName);
        if (i == 0) tabSelector.classList.add("is-active");

        tabSelector.addEventListener("click", () => {
            let tabs = document.querySelectorAll(".tabs li");
            let tabContentBoxes = document.querySelectorAll("#tabs-content > div");

            tabs.forEach(item => item.classList.remove("is-active"));
            tabSelector.classList.add("is-active");

            const target = tabSelector.dataset.target;
            tabContentBoxes.forEach(box => {
                if (box.getAttribute("id") === target)
                {
                    box.classList.remove("is-hidden");
                }
                else
                {
                    box.classList.add("is-hidden");
                }
            })
        })

        tabSelector.appendChild(tabSelectorInner);
        tabsSelector.appendChild(tabSelector);



        // Setup tabs
        let tab = document.createElement("div");
        tab.setAttribute("id", htmlTabName);
        if (i != 0) tab.classList.add("is-hidden");
        tabsContent.appendChild(tab);

        let columns = null;

        for (let j=0;j<tp_category.items.length;j++)
        {
            let tp_item = tp_category.items[j];

            if (j%4==0) // Only create a new "columns" element if we're past the limit per column
            {
                columns = document.createElement("div");
                columns.classList.add("columns", "is-centered");
                tab.appendChild(columns);
            }

            let column = document.createElement("div");
            column.classList.add("column", "is-one-quarter");
            columns.appendChild(column);

            let button = document.createElement("button");
            button.classList.add("toggle-card", "option-card", "opacify");
            button.setAttribute("data-categoryind", i);
            button.setAttribute("data-ind", j);
            let imageHTML = "";
            let nameHTML = "";
            let descHTML = "";
            if (Object.hasOwn(tp_item, "image")) imageHTML = `
                <div class="card-image">
                    <img src="${tp_item.image}" draggable="false"/>
                </div>
            `;
            if (Object.hasOwn(tp_item, "name")) nameHTML = `
                <p class="title is-4">${tp_item.name}</p>
            `;
            if (Object.hasOwn(tp_item, "description")) descHTML = `
                <p class="subtitle is-6">${tp_item.description}</p>
            `;
            button.innerHTML = `
                <div class="card">
                    ${imageHTML}
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                ${nameHTML}
                                ${descHTML}
                            </div>
                        </div>
                    </div>
                </div>
            `;

            button.addEventListener("click", function (e) {
                if (!this.classList.contains("toggled")) this.classList.add("toggled");
                else this.classList.remove("toggled");

                let cards = document.querySelectorAll(".preset-card");
                cards.forEach(card => {
                    card.classList.remove("toggled");
                })
            });

            column.appendChild(button);
        }
    }
}