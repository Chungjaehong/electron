	fs = require('fs');

    filepath = "C:/";
	content = "";

    writeFile = function(content,filepathCustom){

        filepath = filepath + filepathCustom;

        fs.writeFile(filepath, content, function (err) {
            if(err){
                console.log(err);
                return;
            }

        }); 
    }
