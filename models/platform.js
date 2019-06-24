import mongoose from 'mongoose'

mongoose.model('Platform', new mongoose.Schema({
    /**
     * 微信平台名称
     */
    name: { type: String },

    appId: { type: String, unique: true },

    appSecret: { type: String },
    /**
     * 验证信息
     * accessToken: {
                value: '',
                expired: 15254845
            },
            jsapiTicket: {
                value: '',
                expired: 12165413
            }
    */
    credits: { type: Object, default: {} }

},));

const Platform = mongoose.model('Platform')

export default Platform