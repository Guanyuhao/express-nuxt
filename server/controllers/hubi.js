import Config from '../config/index'
import axios from 'axios'
const base = 'https://api.huobipro.com'
var  huobi = {
    depth:'/market/depth'
}


export const huobiDepth = async(req,res,next) => {
    //?symbol=1&type=10
    let { symbol, type } = req.query
    console.log(base+huobi.depth)
    
    // symbol:symbol||'btcusdt',
    // type:type||'step0'
    // const { data } = await axios.get('https://api.huobipro.com/market/depth?symbol=btcusdt&type=step0')

    res.json(true)
    
}       