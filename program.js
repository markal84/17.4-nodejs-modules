process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function(){
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.toString().trim();
        if(instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit;
        } else if(instruction === '/version') {
            process.stdout.write('Nodejs version: ' + process.versions.node +'\n' + 'User system language is: ' + process.env.lang +'\n');
        } else {
            process.stderr.write('Wrong instruction!\n');
        }
    }    
});