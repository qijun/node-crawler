import express from 'express';
import db from './mongodb/db.js';
import config from 'config-lite';
import router from './routes/index.js';
import cookieParser from 'cookie-parser'
import session from 'express-session';
import connectMongo from 'connect-mongo';

const app = express();

app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin);
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  	res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
	  	res.send(200);
	} else {
	    next();
	}
});

// const MongoStore = connectMongo(session);
// app.use(cookieParser());
// app.use(session({
// 	  	name: 'SID',
// 		secret: 'SID',
// 		resave: true,
// 		saveUninitialized: false,
// 		cookie:{
// 			httpOnly: true,
// 		    secure:   false,
// 		    maxAge:   365 * 24 * 60 * 60 * 1000,
// 		},
// 		store: new MongoStore({
// 	  	url: config.url
// 	})
// }));

router(app);

// app.use(expressWinston.errorLogger({
//     transports: [
//         new winston.transports.Console({
//           json: true,
//           colorize: true
//         }),
//         new winston.transports.File({
//           filename: 'logs/error.log'
//         })
//     ]
// }));

app.use((err, req, res, next) => {
	res.status(404).send('未找到当前路由');
});


app.listen('8001');