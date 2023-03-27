console.log("example to read file line by line ");
            const f = require('fs');
            const readline = require('readline');
            var user_file = "./D200.csv";
            var r = readline.createInterface({
                input:f.createReadStream(user_file)
            });


                r.on('line',function(text){
                    console.log(text)
                })
            
