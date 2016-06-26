const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// Clock Test
const clock = require('./Modules/clock.js');

let win;

app.on('ready', function(){
	console.log("READY");
	createWindow();

	// Clock Test
	clock.someFunction();
});

function createWindow(){
	win = new BrowserWindow({
		width: 800,
		height: 600
	});

	win.loadURL(`file://${__dirname}/index.html`);
	win.webContents.openDevTools();
	win.on('closed', function(){
		win = null;
	});
}

/**
 * Ensure application stops running when it is closed.
 */
app.on('window-all-closed', function(){
	if( process.platform !== 'darwin'){
		app.quit();
	}
});

app.on('active', function(){
	if( win === null ){
		createWindow();
	}
});