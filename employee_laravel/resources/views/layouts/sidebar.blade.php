<section class="sidebar">
    <ul class="sidebar-menu" data-widget="tree">
        <li class="treeview active menu-open {{ (Request::segment(5) == 'master') ? 'active' : '' }}">
            <a href="#">
                <i class="fa fa-home" aria-hidden="true"></i><span> Departement</span>
                <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>

            <ul class="treeview-menu">
                <li class=" {{ (Request::path() == 'admin/departements') ? 'active' : '' }} menu-sidebar">
                    <a href="{{ url('admin/departements') }}"><i class="fa fa-circle-o"></i>Departement</a>
                </li>
                <li class=" {{ (Request::path() == 'employees') ? 'active' : '' }} menu-sidebar">
                    <a href="{{ url('employees') }}"><i class="fa fa-circle-o"></i>Employee</a>
                </li>
                <li class=" {{ (Request::path() == 'absensi') ? 'active' : '' }} menu-sidebar">
                    <a href="{{ url('absensi') }}"><i class="fa fa-circle-o"></i>Absensi</a>
                </li>
            </ul>
        </li>
        
    </ul>
</section>
    