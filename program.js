process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
        case '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
        case '/ver':
        	process.stdout.write('Node version: ' + process.version);
        	break;
        case '/lang':
        	process.stdout.write('Language: ' + process.env.lang);
        	break;
        default:
            process.stderr.write('Wrong instruction! /ver; /lang; /exit');
        }
    }
});