class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            blogPost: this.props.blogPost,
            blogPostList: this.props.blogPostList,
            routeToBlog: this.props.routeToBlog,
            routeToBlogPostList: this.props.routeToBlogPostList,
            blogPostData: this.props.blogPostData,
            enableSplash: this.props.enableSplash,
        }
    }

    getBlogPostList(path) {
        let successHandler = (data) => {
            this.setState({
                blogPostList: data.blogPostList,
                routeToBlogPostList: data.routeToBlogPostList,
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

    showBlogPostList() {
        if (this.state.routeToBlogPostList) {
            return (
                <BlogPostList
                    blogPostList={this.state.blogPostList}
                />
            )
        }
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
                    getBlogPostList={this.getBlogPostList.bind(this)}
                    blogPostData={this.state.blogPostData}
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
                {this.showBlogPostList()}
            </main>
            <footer>
            </footer>
        </div>
    );
  }
}

