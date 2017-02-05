class MainMenu extends React.Component {
    
  render () {
    return(
        <div className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu" aria-expanded="false">
                        <span className="sr-only">Toggle Navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Ian Horsman</a>
                </div>
                <div className="navbar-collapse collapse" id="main-menu">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                Posts<span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a type="button" onClick={this.getPost('pandas_tutorial')}>Pandas Tutorial</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

