class BlogPost extends React.Component {
  render () {
    return(
        <div dangerouslySetInnerHTML={{ __html: this.props.blogPost }}>
        </div>
    );
  }
}

