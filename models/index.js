import mongoose from 'mongoose'
import config from './config'

import Platform from './platform'

mongoose.connect(config.db, err => {
    if (err) {
        console.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
    }
})


export {
    Platform
}

