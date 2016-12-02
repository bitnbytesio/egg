module.exports._init = function (c) {

    c.command('test')
        .description('Sample CLI command.')
        .action(function () {
            console.log('Sample CLI command.');
        });

};