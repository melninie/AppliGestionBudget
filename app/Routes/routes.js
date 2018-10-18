var CheckLog=require('../CheckLogin');
var Promo = require('../Models/promosModel');

module.exports = function(app, passport) {

	// =====================================
	// PAGE CONNEXION ========
	// =====================================

	app.get('/', function(req, res) {
        res.status(200).render('login.ejs', { message: req.flash('loginMessage') });
	});

	app.get('/login', function(req, res) {
		res.status(200).render('login.ejs', { message: req.flash('loginMessage') });
	});

	// Connexion
	app.post('/login', function(req, res) {
		var returnTo = req.session.returnTo||'redirectByRole';
		passport.authenticate('local-login', {
            successRedirect : returnTo,
            failureRedirect : '/login',
            failureFlash : true
		})(req, res	);
	});

    // après envoi du formulaire login, redirectByRole redirige le profil actif vers la page correposdant à son role
    app.get('/redirectByRole', function(req, res) {
        res.status(200).redirect("mes-comptes");
    });

	app.get('/admin/users/create', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res) {
        var query = Promo.ObtAllPromos(function (err, rows) {
            if (err)
			{
				res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/admin/users/"});
				return false;
            }
             if(rows.length<=0)
             {
                 res.status(404).render('errorRessource.ejs', {page_title:"Error", role:req.user.roleU, ressource:"/admin/users/create"});
                 return false;
             }
            res.status(201).render('Users/createUser.ejs', {page_title:"createUser", promos:rows, chemin:"/admin/users/"});
        });
	});

    // =====================================
    // PROFIL ==============================
    // =====================================
	app.get('/profil', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res) {
		res.status(200).render('profil.ejs', { user : req.user });
	});

    // =====================================
    // MES COMPTES =========================
    // =====================================
    app.get('/mes-comptes', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res) {
        res.status(200).render('admin.ejs', {user : req.user});
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        req.session.returnTo=null;
        res.status(200).redirect('/');
    });
};
