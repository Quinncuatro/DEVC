export default {
  template: `
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><router-link class="navLink" to="/">Home</router-link></li>
        <li class="divider-vertical"></li>
        <li><router-link class="navLink" to="/resources_IT">IT</router-link></li>
        <li class="divider-vertical"></li>
        <li><router-link class="navLink" to="/personnel_corner">HR</router-link></li>
        <li class="divider-vertical"></li>
        <li><router-link class="navLink" to="/forms">Forms</router-link></li>
        <li class="divider-vertical"></li>
        <li><router-link class="navLink" to="/resources_ops">Operations</router-link></li>
        <li class="divider-vertical"></li>
        <li><router-link class="navLink" to="/whats_new">What's New</router-link></li>
        <li class="divider-vertical"></li>
        <li><router-link class="navLink" to="/courtFamily">Court Family</router-link></li>
        <li class="divider-vertical"></li>
        <li><router-link class="navLink" to="/chambers">Chambers</router-link></li>
        <li class="divider-vertical"></li>
        <li><router-link class="navLink" to="/jury">Jury</router-link></li>
        <li class="divider-vertical"></li>
        <li><router-link class="navLink" to="/nextgen">NextGen</router-link></li>
        <li class="divider-vertical"></li>
        <li><router-link class="navLink" to="/sphider/search.php">Search</router-link></li>
        <li class="divider-vertical"></li>
      </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
  `
}