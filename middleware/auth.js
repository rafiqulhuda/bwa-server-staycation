const isLogin = (req, res, next)=>{
    if(req.session.user == null || req.session.user == undefined){
        req.flash('alertMessage', 'Session login telah habis, silahkan login kembali');
        req.flash('alertStatus', 'danger');
        res.redirect('/admin/signin');
    }
    next();
}

module.exports = isLogin;