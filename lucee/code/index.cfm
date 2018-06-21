<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- META SECTION -->
        <title>CTD - Intranet</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- END META SECTION -->

        <!-- CSS INCLUDE -->
        <link rel="stylesheet" href="./css/bootstrap.min.css" type="text/css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather|Source+Sans+Pro" />
        <link rel="stylesheet" href="./css/rebuild.css" type="text/css" />
        <!-- END CSS INCLUDE -->
    </head>
    <body>

        <div class="container-fluid">
            
            <div id="app">
                <eli-header></eli-header>
                <eli-nav></eli-nav>

                <div class="bodyThing">

                    <router-view></router-view>

                </div>

                <eli-footer></eli-footer>
            </div>

        </div>
    
    <!-- START SCRIPTS -->
    <script src="./js/libs/jquery.min.js" type="text/javascript"></script>
    <script src="./js/libs/bootstrap.min.js" type="text/javascript"></script>
    <script src="./js/libs/vue.js"></script>
    <script src="./js/libs/vue-router.js"></script>
    <script type="module" src="./js/components/EliHeader.js"></script>
    <script type="module" src="./js/components/EliNav.js"></script>
    <script type="module" src="./js/components/Pages/OpsPage.js"></script>
    <script type="module" src="./js/components/InfoTable.js"></script>
    <script type="module" src="./js/components/EliFooter.js"></script>
    <script type="module" src="./js/eli.js"></script>    
    <!-- END SCRIPTS -->   

    </body>
</html>