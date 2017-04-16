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
                        <li className="dropdown" data-color="light-blue">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                Coding Challenges<span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a type="button" onClick={this.props.getPost.bind(null, 'coderbyte_algorithm')}>Coderbyte</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown" data-color="cranberry">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                Machine Learning<span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a type="button" onClick={this.props.getPost.bind(null, 'mlp')}>MLP's</a>
                                </li>
                                <li>
                                    <a type="button" onClick={this.props.getPost.bind(null, 'vectorized_mlp')}>Vectorized MLP</a>
                                </li>
                                <li>
                                    <a type="button" onClick={this.props.getPost.bind(null, 'conv_net')}>Convolutional Layers</a>
                                </li>
                                <li>
                                    <a type="button" onClick={this.props.getPost.bind(null, 'rnn')}>Recurrent Neural Nets</a>
                                </li>
                                <li>
                                    <a type="button" onClick={this.props.getPost.bind(null, 'tensorflow_tutorial_1')}>Tensorflow Tutorial 1</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown" data-color="light-green">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                Datasets<span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a type="button" onClick={this.props.getPost.bind(null, 'pandas_tutorial')}>Pandas Tutorial 1 - Fatal Police Shootings</a>
                                </li>
                                <li>
                                    <a type="button" onClick={this.props.getPost.bind(null, 'pandas_tutorial_2')}>Pandas Tutorial 2 - Doctors' Prescription Behaviour</a>
                                </li>
                                <li>
                                    <a type="button" onClick={this.props.getPost.bind(null, 'pandas_tutorial_3')}>Pandas Tutorial 3 - Queuing Big Data</a>
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

