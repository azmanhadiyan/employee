<!-- Logo -->

<a href="#" class="logo">
    <!-- mini logo for sidebar mini 50x50 pixels -->
    <span class="logo-mini"><b>A</b>ZZ</span>
    <!-- logo for regular state and mobile devices -->
    <span class="logo-lg" style="text-transform:uppercase;"><b>Employee Management</b></span>
</a>
<!-- Header Navbar: style can be found in header.less -->
<nav class="navbar navbar-static-top">
    <!-- Sidebar toggle button-->
    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    </a>

    <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
            <!-- Messages: style can be found in dropdown.less-->
            <!-- Tasks: style can be found in dropdown.less -->

            <li class="dropdown user user-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <!-- <img src="../../../images/user.jpg" class="user-image" alt="User Image"> -->
                    <span class="hidden-xs" style="text-transform:uppercase;">{{\Auth::user()->name}}</span>
                </a>
                <ul class="dropdown-menu">
                    <!-- User image -->
                    <li class="user-header">
                        <p style="text-transform:uppercase;">
                            {{\Auth::user()->name}}
                        </p>

                    </li>
                    <!-- Menu Footer-->
                    <li class="user-footer">
                        <div class="pull-left">
                            <a href="{{ url('user_page/request_form') }}"
                                class="btn btn-default btn-flat menu-sidebar">About</a>
                        </div>
                        <div class="pull-right">
                            <a href="{{ url('logout') }}" class="btn btn-default btn-flat menu-sidebar">Sign out</a> 
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>

</nav>
