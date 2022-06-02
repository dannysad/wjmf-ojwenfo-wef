module.exports = {
        TOKEN: '', //Bot tokeni kanks
        playing: 'Umut Bayraktar ❤️ Music Bot',
        mongoDB: "", //Mongo db Nasıl alınır bilmion mu    https://youtu.be/s_-gJn9GDus
 opt: {
        DJ: {
            enabled: false, //Sadece dj rolüne sahip kişilerin kullanmasını istiyor isen **true** yap
            roleName: 'DJ', //dj rolünün ismi BAK İD DEĞİL İSMİ GECE GECE
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Dokanma
        },
            
        voiceConfig: {
            leaveOnEnd: false, //müzik bitince sesten çıktın mı
            autoSelfDeaf: false, //dokanma

            leaveOnTimer:{ //dokanma
                status: true, //doqanma
                time: 10000, //kaç saniyede çıksın bence doqanma 1000=1 saniye
            }
        }, 

        maxVol: 100, //max % kaç ses olsun qanqs cans manqs
        loopMessage: false,

        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //dokanma öpmim seni
                highWaterMark: 1 << 25 //dokanma öpmim seni
            }
            }
        }
}
