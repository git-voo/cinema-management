const renameFiles = (files, actor, element)=>{

  return files?  files.forEach(file => {
        switch (file.fieldname) {
            case element:actor[element] = file.filename
                
                break; 
        }
    }) 
    
    : false;

}


module.exports = renameFiles;