
// html skeleton provid er
function template(title, content = "", state = {}){
    let scripts = ` <script>
                        window.__STATE__ = ${JSON.stringify(state)}
                    </script>
                    <script src="assets/js/main.js"></script>
                `
    let page = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta property="og:image" content="http://localhost/google-map-react/assets/images/logo_for_social.jpg">
                    <meta property="og:title" content="facebook title">
                    <meta property="og:description" content="some description">
                    <title> ${title} </title>
                    <meta name="description" content="">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
                    <link href="assets/styles/style.css" rel="stylesheet">
                </head>
                <body>
                    
                    <div id="root" class="wrap-inner">
                        ${content}
                    </div>
                    </div>
                    ${scripts}
                </body>
              `;

  return page;
}

module.exports = template;
