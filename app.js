import { Platform } from './models'
import config from './config.json'
import WechatAPI from 'wechat-api'
import moment from 'moment'

const units = {
    day: 1000 * 60 * 60 * 24,
    hour: 1000 * 60 * 60,
    minute: 1000 * 60,
    second: 1000
}

const getInterval = () => {

    let interval = units.hour;
    if (units.hasOwnProperty(config.unit))
        interval = units[config.unit];

    interval *= config.interval;

    return interval;
}

const syncPlatform = async (p) => {

    let api = new WechatAPI(p.appId, p.appSecret, (cbGet) => {
        let { credits: { accessToken = {} } } = p;
        //if (accessToken.expired && accessToken.expired >= moment(new Date()).valueOf() + 60 * 1000)
        cbGet(null, p.credits.accessToken);
    }, (token, cbSave) => {

    })


}

const run = async () => {

    const platforms = await Platform.find({}).exec();
    platforms.forEach(async p => {
        console.log(`-> synchronizing users for platform: ${p.name}`)
        await syncPlatform(p);
        console.log(`-> platform ${p.name} synchronized.`)
    })

}


setInterval(async () => {

    await run();

}, getInterval());


