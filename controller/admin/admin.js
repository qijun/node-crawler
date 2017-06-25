'use strict';

import AdminModel from '../../models/admin/admin'
import Cities from '../../models/dict/cities'
import formidable from 'formidable'

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

    async checkPassword(req,res,next){
        const form=new formidable.IncomingForm();
        form.parse(req,async (err,fields,files)=>{
            if(err){
                res.send({
                    status:0,
                    type: 'FORM_DATA_ERROR',
                    message: '表单信息错误'
                })
                return
            }
            //const json=fields;
            res.send({
					status: 0,
					type: 'GET_ERROR_PARAM',
					message: err.message,
				})
            return
        })

    }

}

export default new Admin()