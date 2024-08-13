'use strict';

function printProgressBar(progress, update) {
    const progressInc = Math.floor(progress / 5);
    const progressBar = ''.concat('#'.repeat(progressInc), ' '.repeat(20 - progressInc));
    const spinnerState = update % 4;
    let spinner = ' ';

    switch (spinnerState) {
        case 0: spinner = '|';
                break;
        case 1: spinner = '/';
                break;
        case 2: spinner = '-';
                break;
        case 3: spinner = '\\';
                break;
    }

    process.stdout.write(`\rProgress: (${spinner}) [${progressBar}] ${progress}%`);
}

async function updateProgressBar() {
    return new Promise(async (resolve) => {
        let progress = 0;
        let update = 0;

        while (progress <= 100) {
            printProgressBar(progress, update);
            await new Promise((resolve) => {
                setTimeout(resolve, 250);
            });
            progress += 5;
            update++;
        }

        resolve();
    });
}

(async function() {
    await updateProgressBar();
    process.stdout.write('\nComplete\n');
})();
