'use strict';

import Model from '../../models/admin/admin'

class Common {
    constructor(model) {
        Object.assign(this, {
            model,
        })
    }
    
    async checkAuth(id, password) {
        var user = await Model.findById(id);
        if (user && user.password === password) {
            return true;
        } else {
            return false;
        }
    }
}

export default new Common(Model)