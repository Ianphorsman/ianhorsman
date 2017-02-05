class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            blogPost: this.props.blogPost,
        }
    }

    getPost(path) {
        let successHandler = (data) => {
            this.setState({
                blogPost: data.blogPost
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




    
  render () {
    return(
        <div>
            <header>
                <MainMenu
                    getPost={this.getPost.bind(this)}
                />
            </header>
            <main>
                <BlogPost
                    blogPost={this.state.blogPost}
                />
            </main>
            <footer>
            </footer>
        </div>
    );
  }
}

