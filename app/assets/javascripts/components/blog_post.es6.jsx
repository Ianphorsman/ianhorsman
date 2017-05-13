class BlogPost extends React.Component {

    getAnimationClassName() {
        return "fade-long-" + this.props.mainAnimationContext
    }
  render () {
    return(
        <div className={this.getAnimationClassName()} dangerouslySetInnerHTML={{ __html: this.props.blogPost }}>
        </div>
    );
  }
}

