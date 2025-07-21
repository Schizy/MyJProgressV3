<?php

use Castor\Attribute\AsTask;

use function Castor\io;
use function Castor\capture;
use function Castor\check;
use function Castor\exit_code;
use function Castor\notify;
use function Castor\run;

#[AsTask(description: 'Welcome to Castor!')]
function hello(): void
{
    $currentUser = capture('whoami');

    io()->title(sprintf('Hello %s!', $currentUser));
}

#[AsTask(description:'php -S localhost:8000 -t back/public')]
function api()
{
    io()->title('PHP Server starting...');
    run('php -S localhost:8000 -t back/public');
}

#[AsTask(description:'npm run dev (vite)')]
function dev()
{
    io()->title('Vite Server starting...');
    run('npm run dev');
}

#[AsTask(description: 'docker compose up -d', aliases: ['u', 'up'], namespace:'docker')]
function up()
{
    io()->title('Starting Docker Compose...');

    checkDocker();

    notify('docker UP', 'title');
    run('docker compose up -d');

    io()->success('Project started successfully!');
}

#[AsTask(description: 'docker compose down -v --remove-orphans', aliases: ['d', 'down'], namespace:'docker')]
function down()
{
    run('docker compose down -v --remove-orphans');

    notify('docker DOWN');
}

function checkDocker(): void
{
    check(
        'Check if docker is running',
        'docker is not running. Please start Docker first!',
        fn () => exit_code('docker stats --no-stream &> /dev/null') === 0,
    );
}
