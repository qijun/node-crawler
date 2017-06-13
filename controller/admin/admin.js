'use strict';

import AdminModel from '../../models/admin/admin'
import Cities from '../../models/dict/cities'

class Admin {
	constructor(){
		//super()
    }
    async test(req, res, next){
        //const city = Cities.findOne();
        res.send({
            data: 1,
            status: 0,
			type: 'FORM_DATA_ERROR',
			message: '表单信息错误'
        })
        

    }

}

export default new Admin()