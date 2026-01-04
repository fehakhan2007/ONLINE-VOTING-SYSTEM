let YashikaVotes = 0;
let FehaVotes = 0;
function VoteYashika() {
    YashikaVotes++;
    document.getElementById("YashikaVotes").innerText = YashikaVotes;
}
function VoteFeha() {
    FehaVotes++;
    document.getElementById("FehaVotes").innerText = FehaVotes;
}
function showResult() {
    let resultText ="";
    if (YashikaVotes > FehaVotes) {
        resultText ="Yashika is Winner";
    } 
    else if (FehaVotes > YashikaVotes)
         {
        resultText = "Feha is Winner";
    } 
    else {
        resultText ="Match Draw";
    }
    document.getElementById("result").innerText = resultText;
}