function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni=soruMetni;
    this.cevapSecenekleri=cevapSecenekleri;
    this.dogruCevap=dogruCevap;
}
Soru.prototype.cevapKonrtolEt=function(cevap){
    return cevap==this.dogruCevap;
}

let sorular=[
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-CSS açılımı aşağıdakilerden hangisinde doğru olarak verilmiştir ?", { a: "Custom Style Sheets", b: "Custom Style Shet", c: "Custom Style Shets",d:"Custom Styles Sheets" }, "a"),
    new Soru("3-Kenar içi sol boşluğu hangi özellik yardımıyla ayarlanır?", { a: "margin-left", b: "padding-left", c: "let-margin",d:"left-padding" }, "d"),
    new Soru("4-Üst üste çakışan ögelerin hangisinin altta, hangisinin üstte olacağını hangi özelliği kullanarak ayarlarız ?", { a: "K index", b: "z index", c: "x index",d:"n index" }, "b")
];