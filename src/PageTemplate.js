class PageTemplate {
  page() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
    <title>Team Profile</title>
</head>
<body>
<nav>
<div class="nav-wrapper red lighten-1">
  <a href="#" class="brand-logo center">My Team</a>
</div>
</nav>

<div class="container">
<div class="row" style="display:flex; flex-wrap: wrap; justify-content:center;">
`;
  }

  footer() {
    return `</div>
</div>

</body>
</html>
`;
  }
}
module.exports = PageTemplate;
