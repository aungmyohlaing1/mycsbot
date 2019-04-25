const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready' , () => {
    console.log("Connected as " + bot.user.tag)

    bot.user.setActivity("For You", {type: "Listening"})

    bot.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
    })
    

    
})

bot.on('message', (rm) => {
    if (rm.author == bot.user) {
        return
    }
    rm.channel.send("Message received, "+ rm.author.toString() +": " + rm.content)
    if (rm.content.startsWith(";")){
        processCommand(rm) 
    }
    
    
})
function processCommand(rm){
let fullCommand = rm.content.substr(1)//remove first Character
let splitCommand = fullCommand.split(" ")
let primaryCommand = splitCommand[0]
let arguments = splitCommand.slice(1) 

console.log(`Pirmary command ${primaryCommand}`)

if(primaryCommand == 'help' || primaryCommand == 'Help' || primaryCommand == 'mm' || primaryCommand == 'Mm'){
    console.log('help')
    helpCommand(arguments, rm)
}
else if(primaryCommand == 'vpt'|| primaryCommand == 'Vpt'){
    console.log('vpt')
    viewproteamCommand(arguments, rm)
} 
else if(primaryCommand == 'vps'|| primaryCommand == 'vps'){
    console.log('vps')
    viewprosettingCommand(arguments, rm)
}
else if (primaryCommand == 'tour' ||primaryCommand == 'Tour'){
    console.log('tour')
    tourCommand(arguments, rm)
}
else if (primaryCommand == 'vm' || primaryCommand == 'Vm'){
    console.log('vm')
    viewmatchesCommand(arguments, rm)
}
else if (primaryCommand == 'play' || primaryCommand == 'Play'){
    console.log('play')
    playCommand(arguments, rm)
}
else if (primaryCommand == 'map' || primaryCommand == 'Map'){
    console.log('vm')
    viewmapCommand(arguments, rm)
}
else if (primaryCommand == 'trade'|| primaryCommand == 'Trade' ){
    console.log('bet')
    betCommand(arguments, rm)
}
else if (primaryCommand == 'hibot' ||primaryCommand == 'Hibot'){
    console.log('hi')
    startCommand(arguments, rm)
}
else if (primaryCommand == 'astralis'|| primaryCommand == 'Astralis' ){
    console.log('as')
    asCommand(arguments, rm)
}
else if (primaryCommand == 'liquid'|| primaryCommand == 'Liquid' ){
    console.log('liq')
    liqCommand(arguments, rm)
}
else if (primaryCommand == 'navi'|| primaryCommand == 'Navi' ){
    console.log('navi')
    naviCommand(arguments, rm)
}
else if (primaryCommand == 'ence'|| primaryCommand == 'Ence' ){
    console.log('Ence')
    enceCommand(arguments, rm)
}
else if (primaryCommand == 'faze'|| primaryCommand == 'Faze' ){
    console.log('faze')
    fazeCommand(arguments, rm)
}
else if (primaryCommand == 'Mibr'|| primaryCommand == 'mibr' ){
    console.log('mibr')
    mibrCommand(arguments, rm)
}
else if (primaryCommand == 'ranegades'|| primaryCommand == 'Ranegades' ){
    console.log('ran')
    ranCommand(arguments, rm)
}
else if (primaryCommand == 'nip'|| primaryCommand == 'Nip' ){
    console.log('nip')
    nipCommand(arguments, rm)
}
else if (primaryCommand == 'fnatic'|| primaryCommand == 'Fnatic' ){
    console.log('fnatic')
    fnCommand(arguments, rm)
}
else if (primaryCommand == 'vitality'|| primaryCommand == 'Vitality' ){
    console.log('vit')
    vitCommand(arguments, rm)
}
else if (primaryCommand == 'mirage' ||primaryCommand == 'Mirage'){
    console.log('mirage')
    miCommand(arguments, rm)
}
else if (primaryCommand == 'dust2' ||primaryCommand == 'Dust2'){
    console.log('dust2')
    d2Command(arguments, rm)
}
else if (primaryCommand == 'inferno' ||primaryCommand == 'Inferno'){
    console.log('inferno')
    inCommand(arguments, rm)
}
else if (primaryCommand == 'nuke' ||primaryCommand == 'Nuke'){
    console.log('Nuke')
    nukeCommand(arguments, rm)
}
else if (primaryCommand == 'cache' ||primaryCommand == 'Cache'){
    console.log('cache')
    cacheCommand(arguments, rm)
}
else if (primaryCommand == 'cobblestone' ||primaryCommand == 'Cobblestone'){
    console.log('cobblestone')
    csCommand(arguments, rm)
}
else if (primaryCommand == 'overpass' ||primaryCommand == 'Overpass'){
    console.log('overpass')
    opCommand(arguments, rm)
}
else if (primaryCommand == 'train' ||primaryCommand == 'Train'){
    console.log('train')
    trainCommand(arguments, rm)
}
else if (primaryCommand == 'season' ||primaryCommand == 'Season'){
    console.log('season')
    sCommand(arguments, rm)
}

}

function startCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("What's up!! What do you want to do? \n If you doesn't know commands type `;help`")
    }
    
}
function helpCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send
        ("View CSGO Pro teams  `;vpt` \n Tournaments  `;tour`\n View prosettings and Configs `;vps` \n View CSGO matches  `;vm` \n Play CSGO on third party  `;play` \n  View Csgo Maps  `;map` \n CSGO trading site  `;trade` \n \n Don't forget `;`")
    } 
}
function viewproteamCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send
        ("Top 10 CSGO Teams \n Astralis `;astralis` \n Liquid `;liquid` \n NAVI `;navi` \n Ence `;ence` \n Faze `;faze` \n Mibr `;mibr` \n Ranegades `;ranegades` \n NiP `;nip` \n Finatic `;finatic` \n Vitality `;vitality` \n \n For Search for more teams 'https://www.hltv.org/ranking/teams/2019/april/15 \n If you want ot go back to menu Type  `;mm`");
    }
}
function tourCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send
        ("Major \n 2013 DreamHack Counter-Strike: Global Offensive Championship \n EMS One Katowice 2014\n ESL One Cologne 2014\n DreamHack Winter 2014\nESL One Katowice 2015\n ESL One Cologne 2015\nDreamHack Open Cluj-Napoca 2015\nMLG Major Championship: Columbus\nESL One Cologne 2016\nELEAGUE Major 2017\nPGL Major Kraków 2017\nELEAGUE Major: Boston 2018\nFACEIT Major: London 2018\nIntel Extreme Masters Season XIII – World Championship Major\nStarLadder & i-League Berlin Major 2019\n The details and history of majot tournamnets can be found at https://en.wikipedia.org/wiki/Counter-Strike:_Global_Offensive_Major_Championships \n\n\n Minor tournments can be found at https://liquipedia.net/counterstrike/Minor_Tournaments \n\n If you want ot go back to menu Type  `;mm`");
    }
}

function viewprosettingCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("https://prosettings.net/cs-go-pro-settings-gear-list/ \n If you want ot go back to menu Type  `;mm`");
    }
}
function viewmatchesCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("HLTV https://www.hltv.org \n EgamersWorld https://egamersworld.com/counterstrike/latest \n Twitch https://www.twitch.tv/directory/game/Counter-Strike%3A%20Global%20Offensive \n Esportslivecore http://esportlivescore.com/g_csgo.html \n If you want ot go back to menu Type  `;mm`");
    }
}
function playCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("ESEA https://play.esea.net/ \n CEVO http://cevo.com/hub/csgo/ \n Faceit https://www.faceit.com/en/csgo \n If you want ot go back to menu Type  `;mm`");
    }
}
function viewmapCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Mirage `;mirage` \n Dust2 `;dust2` \n Inferno `;inferno` \n Nuke `;nuke` \n Cache `;cahce` \n CobbleStone `;cobblestone` \n Overpass `;overpass` \n Train `;train` \n Season `;season` \n If you want ot go back to menu Type  `;mm`");
    }
}
function betCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Top CSGO trusted item trading sites \n EGB.COM  https://egb.com/ \n GG.BET https://ggbetpromo.com/csgo_eng/ \n Rivalry https://www.rivalry.com/vip?affiliate=tgg \n If you want ot go back to menu Type  `;mm`");
    }
}
function asCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Astralis is a Danish organization owned by players of the former Danish Team SoloMid/Questionmark lineup, with the help of their manager, Frederik realition Byskov. The rights to the Astralis name were obtained from the original founders of the Finnish Counter-Strike team. \n \n Tournament results \n \n 1st - IEM Katowice Major 2019 \n1st - FACEIT Major: London 2018 \n1st — ELEAGUE CS:GO Premier 2018 \n3-4th — MLG Major Championship: Columbus \n5-8th — ESL One Cologne 2016 \n \nFor more facts 'https://en.wikipedia.org/wiki/Astralis' \n If you want ot go back to menu Type  `;mm`");
    }
}
function liqCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Team Liquid is a professional team, founded in the Netherlands in 2000. Originally a Brood War clan, the team switched to StarCraft2 during the SC2 Beta in 2010, and became one of the most successful foreign teams. On January 13, 2015, it was announced that the team had formed a Counter-Strike: Global Offensive division \n \n  Tournament results \n \n 2nd - Blast Pro Series Sáo Paolo 2019 \n 3rd/4th - IEM Katowice 2019 \n 1st - I Buy Power Masters 2019 \n 1st - Supernova Malta 2018 \n 3rd/4th - Faceit Major 2018 \n \nFor more facts 'https://en.wikipedia.org/wiki/Team_Liquid' \n If you want ot go back to menu Type  `;mm`");
    }
}
function naviCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Natus Vincere (Latin: born to win, often abbreviated as Na'Vi or NaVi) is a leading multi-game esports organization from Ukraine. It is the first team in Counter-Strike history to win three major tournaments in one calendar year - Intel Extreme Masters, Electronic Sports World Cup and World Cyber Games 2010. \n \n Tournament results \n\n 1st - StarSeries & i-League CS:GO Season 7 2019\n 1st - BLAST Pro Series: Copenhagen 2018 \n 2nd - FACEIT Major: London 2018\n 1st - ESL One: Cologne 2018\n 1st - CS:GO Asia Championships 2018 \n \n For more facts'https://liquipedia.net/counterstrike/Natus_Vincere' \n If you want ot go back to menu Type  `;mm`");
    }
}
function enceCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("ENCE eSports was first founded in April 2013 by Petri 'Procyon' Hämälä of Peliliiga, Toni 'Chibulis' Jarkima, formerly of eXelon Gaming and Teemu 'wabbit' Hiilinen of SEUL. On April 13, it was announced that the team known as TOOMUCHVIDEOGAMES would join the organization as their first CS:GO team.  The relationship between the players and the organization soon broke down, however, mostly stemming from the looming instability of the roster, and the team was finally removed from ENCE in late May. \n \n Tournament Results \n \n 5-8th - StarSeries & i-League CS:GO Season 7 2019 \n 3rd - BLAST Pro Series: São Paulo 2019 \n 2nd - Intel Extreme Masters XIII - Katowice Major 2019 \n 1st - Europe Minor Championship - Katowice 2019 \n 1st - DreamHack Open Winter 2018 \n \n For more facts'https://liquipedia.net/counterstrike/ENCE' \n If you want ot go back to menu Type  `;mm`");
    }
}
function fazeCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("FaZe Clan first came onto the scene with the acquisition of the roster of G2 Esports. The team's first tournament under FaZe would be at DreamHack Leipzig 2016, where they would start in Group A up against Gabriel 'FalleN' Toledo's Luminosity Gaming in a Best-of-one. Their first match of the tournament would go well for the Europeans, with a 16-9 victory on Inferno, with Håvard 'rain' Nygaard top-fragging with an HLTV rating of 1.64. \n \n for more facts and tournment results 'https://liquipedia.net/counterstrike/FaZe_Clan' \n If you want ot go back to menu Type  `;mm`");
    }
}
function mibrCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("MIBR (also known as Made in Brazil) is a Brazilian Counter-Strike: Global Offensive team owned by Immortals'https://liquipedia.net/counterstrike/Immortals' \n For more facts and tournments 'https://liquipedia.net/counterstrike/MIBR' \n If you want ot go back to menu Type  `;mm`");
    }
}
function ranCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Renegades is a professional gaming organization, founded in March 2015 under the name 'Misfits'. Originally a League of Legends team, the organisation rebranded as Renegades on June 18 2015, and picked up the former Vox Eminor roster for their own CS:GO squad. On August 30 2016, Jonas Jerebko bought the Renegades organization from Christopher 'MonteCristo' Mykles. He is the third NBA player to publicly acquire a stake in an esports organization after Rick Fox (Echo Fox) and Shaquille O'Neal (NRG Esports).\n \n For more facts and tournement results 'https://liquipedia.net/counterstrike/Renegades' \n If you want ot go back to menu Type  `;mm`");
    }
}
function nipCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Ninjas in Pyjamas ' NiP' is a Swedish eSports organization which was founded in 2000. The team competed in Counter-Strike 1.6 until their dissolution in 2007. In 2012, the team returned with a now heavily renowned Counter-Strike: Global Offensive squad. \n \n For more facts and tournement results 'https://liquipedia.net/counterstrike/Ninjas_in_Pyjamas' \n If you want ot go back to menu Type  `;mm`");
    }
}
function fnCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Fnatic first emerged into Valve's new Counter-Strike title: Counter-Strike: Global Offensive on November 19th, 2012, by carrying over 4/5 of their players from the Counter-Strike 1.6 squad they had at the time, consisting of Michael 'Friis' Jørgensen, Andreas 'MODDII' Fridh, Finn 'karrigan' Andersen, and Martin 'trace' Heldt. . \n \n For more facts and tournement results 'https://liquipedia.net/counterstrike/Fnatic' \n If you want ot go back to menu Type  `;mm`");
    }
}
function vitCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Team Vitality is a French esports organization which entered Counter-Strike: Global Offensive in early October 2018. \n \n For more facts and tournement results 'https://liquipedia.net/counterstrike/Team_Vitality' \n If you want ot go back to menu Type  `;mm`");
    }
}
function miCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Mirage\n \nhttps://www.tobyscs.com/files/de_mirage-map-callouts.jpg \n \n Smoking tricks on mirage \n https://www.youtube.com/watch?v=_bOFeh5gEJQ \n \n Playing Tricks for mirage \n https://www.youtube.com/watch?v=U40q0RDg9MM \n \n If you want ot go back  Type  `;map`")
    }
    
}
function d2Command(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Dust 2 \n \n https://www.tobyscs.com/files/de_dust2-map-callouts.jpg \n \n Best tips and trick for Dust 2 map \n https://www.youtube.com/watch?v=PBlBFqu5kVI \n \nIf you want ot go back  Type  `;map`")
    }
    
}
function inCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Inferno \n \n https://www.tobyscs.com/files/de_inferno-map-callout.jpg \n If you want ot go back  Type  `;map`")
    }
    
}
function nukeCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Nuke \n \n https://www.tobyscs.com/files/de_nuke-map-callout.jpg \n If you want ot go back  Type  `;map`")
    }
    
}
function cacheCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Cahce \n \n  https://www.tobyscs.com/files/de_cache-map-callouts.jpg \n If you want ot go back  Type  `;map`")
    }
    
}
function csCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("CobbleStone \n \n https://www.tobyscs.com/files/de_cbble-map-callouts.jpg \n If you want ot go back  Type  `;map`")
    }
    
}
function opCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Overpass \n \n https://www.tobyscs.com/files/de_overpass-map-callouts.jpg \n If you want ot go back  Type  `;map`")
    }
    
}
function trainCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Train \n \n https://www.tobyscs.com/files/de_train-map-callouts.jpg \n If you want ot go back  Type  `;map`")
    }
    
}
function sCommand(arguments, rm){
    if (arguments.length == 0){
        rm.channel.send("Season \n \n https://www.tobyscs.com/files/de_season-map-callouts.jpg \n If you want ot go back  Type  `;map`")
    }
    
}










bot.login("NTYyOTA4MjIzNTE1MTMxOTE1.XKRq8Q.qyyiccVtbbErlrBvDW34sfE-jok")