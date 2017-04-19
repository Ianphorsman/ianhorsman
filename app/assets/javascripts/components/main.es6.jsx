class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            blogPost: this.props.blogPost,
            routeToBlog: this.props.routeToBlog,
            enableSplash: this.props.enableSplash,
        }
    }

    getPost(path) {
        let successHandler = (data) => {
            this.setState({
                blogPost: data.blogPost,
                routeToBlog: data.routeToBlog,
            })
        }
        let errorHandler = (data) => {
        }
        $.ajax({
            method: 'GET',
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            dataType: 'json',
            contentType: 'application/json',
            accepts: 'application/json',
            url: '/home/show/' + path + '.json',
            success: successHandler.bind(this),
            error: errorHandler.bind(this)
        })
    }

    showPost() {
        if (this.state.routeToBlog) {
            return (
                <BlogPost
                    blogPost={this.state.blogPost}
                />
            )
        }
    }

    renderMenu() {
        if (this.state.enableSplash) {
            return(
                <Splash

                />
            )
        } else {
            return(
                <MainMenu
                    getPost={this.getPost.bind(this)}
                />
            )
        }
    }




    
  render () {
    return(
        <div>
            <header>
                {this.renderMenu()}
            </header>
            <main>
                {this.showPost()}
            </main>
            <footer>
            </footer>
        </div>
    );
  }
}

