import Config from '../config/index'
import axios from 'axios'

let {globalConfig,API,ServerBaseUrl} = Config

let {browser} = API

export const blockTest = async(req,res,next) => {
    
    const { data } = await axios.get(ServerBaseUrl+browser.test)
    
    res.json(data)
}