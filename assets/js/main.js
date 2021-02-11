let stateInput = document.getElementById('bundeslandInfo')
let stateOutput = document.getElementById('bundeslandInfoErgebnis')

function check() {
    switch (stateInput.value) {
        case "Baden-Württemberg":
            stateOutput.innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
            break;
        case "Bayern":
            stateOutput.innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
            break;
        case "Berlin":
            stateOutput.innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
            break;
        case "Brandenburg":
            stateOutput.innerHTML = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
            break;
        case "Bremen":
            stateOutput.innerHTML = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"
            break;
        case "Hamburg":
            stateOutput.innerHTML = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
            break;
        case "Hessen":
            stateOutput.innerHTML = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
            break;
        case "Mecklenburg-Vorpommern":
            stateOutput.innerHTML = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
            break;
        case "Niedersachsen":
            stateOutput.innerHTML = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
            break;
        case "Nordrhein-Westfalen":
            stateOutput.innerHTML = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
            break;
        case "Rheinland-Pfalz":
            stateOutput.innerHTML = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
            break;
        case "Saarland":
            stateOutput.innerHTML = " Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt"
            break;
        case "Sachsen":
            stateOutput.innerHTML = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
            break;
        case "Sachsen-Anhalt":
            stateOutput.innerHTML = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
            break;
        case "Schleswig-Holstein":
            stateOutput.innerHTML = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
            break;
        case "Thüringen":
            stateOutput.innerHTML = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
            break;
        default:
            stateOutput.innerHTML = "Ein solches Bundesland gibt es in Deutschland nicht."
    }

}



let list = document.getElementById('mylist')
let masse = document.getElementById('masse')
let briefPost = "<b>Brief und Postkarte</b>L: 10 - 23,5 cm<br>B: 7 - 12,5 cm<br>H: bis 1 cm "
let twoKg = "<b>DHL Paket 2 kg</b><br>bis 60 x 30 x 15 cm"
let fiveKg = "<b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm"
let tenKg = "<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm "

function showtxt() {
    switch (list.value) {
        case "0":
            masse.innerHTML = briefPost;
            break;
        case "1":
            masse.innerHTML = twoKg
            break;
        case "2":
            masse.innerHTML = fiveKg
            break;
        case "3":
            masse.innerHTML = tenKg
            break;
        default:
            masse.innerHTML = "Extra große Größe"
    }
}



