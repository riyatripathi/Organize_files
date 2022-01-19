let fs = require("fs");
let path = "./SUN";
fun(path);

function fun(path){
	fs.readdir(path, (err, files) => {
		    files.forEach(file => {
		    console.log(file);
		   	if(fs.statSync(`${path}/${file}`).isDirectory()){
		   		fun(`${path}/${file}`);
		   	}else{
		   		const extension = file.split(".").pop();
		   		const dir = `${extension}FILES`;
		   		if (!fs.existsSync(`${path}/${dir}`)){
			    	fs.mkdirSync(`${path}/${dir}`);
				}
				const currpath = path+`/${file}`;
				const newpath = `${path}/${dir}/${file}`;
		   		fs.rename(currpath, newpath, function(err) {
			    if(err) console.log('ERROR: ' + err);
				     console.log('File Move Successfully.');
				});
		   	}
		});
	});
}
