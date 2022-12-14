import EvolutionRequirements from "./EvolutionRequirements";

export enum Level {
    Fresh,
    InTraining,
    Rookie,
    Champion,
    Ultimate
}

export enum Type {
    Data,
    Vaccine,
    Virus
}

export enum DigimonName {
    Botamon = "Botamon",
    Poyomon = "Poyomon",
    Punimon = "Punimon",
    Yuramon = "Yuramon",
    Koromon = "Koromon",
    Tanemon = "Tanemon",
    Tokomon = "Tokomon",
    Tsunomon = "Tsunomon",
    Agumon = "Agumon",
    Betamon = "Betamon",
    Biyomon = "Biyomon",
    Elecmon = "Elecmon",
    Gabumon = "Gabumon",
    Kunemon = "Kunemon",
    Palmon = "Palmon",
    Patamon = "Patamon",
    Penguinmon = "Penguinmon",
    Airdramon = "Airdramon",
    Angemon = "Angemon",
    Bakemon = "Bakemon",
    Birdramon = "Birdramon",
    Centarumon = "Centarumon",
    Coelamon = "Coelamon",
    Devimon = "Devimon",
    Drimogemon = "Drimogemon",
    Frigimon = "Frigimon",
    Garurumon = "Garurumon",
    Greymon = "Greymon",
    Kabuterimon = "Kabuterimon",
    Kokatorimon = "Kokatorimon",
    Kuwagamon = "Kuwagamon",
    Leomon = "Leomon",
    Meramon = "Meramon",
    Mojyamon = "Mojyamon",
    Monochromon = "Monochromon",
    Nanimon = "Nanimon",
    Ninjamon = "Ninjamon",
    Numemon = "Numemon",
    Ogremon = "Ogremon",
    Seadramon = "Seadramon",
    Shellmon = "Shellmon",
    Sukamon = "Sukamon",
    Tyrannomon = "Tyrannomon",
    Unimon = "Unimon",
    Vegiemon = "Vegiemon",
    Whamon = "Whamon",
    Andromon = "Andromon",
    Digitamamon = "Digitamamon",
    Etemon = "Etemon",
    Giromon = "Giromon",
    HKabuterimon = "HKabuterimon",
    Mamemon = "Mamemon",
    Megadramon = "Megadramon",
    MegaSeadramon = "MegaSeadramon",
    MetalGreymon = "MetalGreymon",
    MetalMamemon = "MetalMamemon",
    Monzaemon = "Monzaemon",
    Phoenixmon = "Phoenixmon",
    Piximon = "Piximon",
    SkullGreymon = "SkullGreymon",
    Vademon = "Vademon",
}

export class Digimon {
    constructor(
        public readonly name: DigimonName,
        public readonly level: Level,
        public readonly type: Type,
        public readonly req: EvolutionRequirements,
        public readonly evolutionPath: Array<DigimonName>,
        public readonly digimonBonus?: DigimonName,
        ) {
    }
}