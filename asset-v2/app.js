/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "Khram", this.version = "2", this.date = "2022", this.folder = "asset-v2/", this.looptime = 6545, this.bpm = 110, this.totalframe = 192, this.nbpolo = 7, this.nbloopbonus = 4, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 38, this.recminloop = 5, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#1c0d0d", this.col0 = "#EB4B4B", this.col1 = "#C32D2D", this.col2 = "#9B2323", this.col3 = "#691E1E", this.col4 = "#371919", this.animearray = [{
        name: "1_pinat",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "2_baraban",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "3_bongi",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "4_obod",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "5_blokirovat",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "6_basovyy",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "7_vibroshlepok",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "8_sheyker",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "effet4_tululou",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "effet5_tumttt",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "11_zashchitnik",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "12_pianino",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "13_piloobraznyy",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "14_skripka",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "15_truba",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "coeur1_oaaah",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "coeur2_cougou",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "coeur3_porticoeur",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "voix1_isit",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "voix2_uare",
        color: "828282",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Satisfied",
        src: "v2-b1-satisfy-hb.mp4",
        code: "1,2,5,11,12",
        sound: "bonus-satisfy",
        aspire: "aspire"
    }, {
        name: "Little Miss",
        src: "v2-b2-miss-hb.mp4",
        code: "2,4,6,7,15",
        sound: "bonus-miss",
        aspire: "aspire"
    }, {
        name: "Why this world",
        src: "v2-b3-world-hb.mp4",
        code: "3,5,8,13,14",
        sound: "bonus-world",
        aspire: "aspire"
    }];
    for (var o = 0, n = this.animearray.length; o < n; o++) {
        var i = this.animearray[o].name;
        this.animearray[o].soundA = i + "_a", this.animearray[o].soundB = this.animearray[o].uniqsnd ? i + "_a" : i + "_b", this.animearray[o].anime = i + "-sprite.png", this.animearray[o].animeData = i + ".json"
    }
};
