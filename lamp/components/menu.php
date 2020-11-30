<!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">

    <title>
      FakeID</title>
  </head>
  <header>
    <h1>FakeID</h1>
    <div class="menu-right">
      <a href="index.php" class=<?=$pageTitle == 'home' ? 'active': ''?>>Overview</a>
      <a href="create.php" class=<?=$pageTitle == 'create' ? 'active': ''?>>Create</a>
    </div>
  </header>
  <body>