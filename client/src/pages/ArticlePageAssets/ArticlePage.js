import React, {Component} from 'react'
import s from './ArticlePage.scss';
import Header from '../HomePageAssets/components/Header/Header'
import cn from 'classnames'
import Footer from '../HomePageAssets/components/Footer/Footer'

class Comment extends Component{
    constructor(props) {
        super(props)

        this.state = {
            isExpanded: false,
            test : ""
        }

    }


    render(){
        return <div className={s.comment }>
            <div className={cn(s.text, (this.state.isExpanded ? s.isExpanded : ""))}>
                {this.props.comment.content}
                
                <div className={s.expandHandle} onClick={()=>{
                    this.setState({isExpanded:!this.state.isExpanded})}
                    }></div>
            </div>
            <div className={s.commentFooter}>
                <span className={s.date}> Posted: {this.props.comment.date}  </span>
                <div className={s.sentiment}>
                    <span style={{"color":"forestgreen"}}> <strong> Good: {this.props.comment.pos}% </strong> </span>
                    <span style={{"color": "grey"}}> <strong> Neutral: {this.props.comment.neu}%  </strong> </span>
                    <span style={{"color": "palevioletred"}}> <strong> Negative: {this.props.comment.neg}% </strong></span>
                </div>
            </div>
        </div>
    }
}

class CommentSection extends Component{
    constructor(props){
        super(props)

        this.state = {
            isLoading: true,
            comments: []
        }

    }

    addArticle = (newArticle)=>{
        let n = this.state.comments;
        n.unshift(newArticle);
        this.setState({
            comments: n
        })
    }


    componentWillMount(){
        fetch(
        'https://healthcivic.herokuapp.com/getCom/CMS-2018-0090-0001')
            .then(
                (res)=>{
                    return res.json()
                }
            ).then(
                (docs)=>{
                    let doc_arr = [];
                    for( let i in docs){
                        doc_arr.push(docs[i])
                    }
                    this.setState({
                        comments: doc_arr,
                        isLoading: false
                    })
                }
            ).catch(
                (err)=>{
                    console.log(err)
                }
            )
    }

    render(){
        return <div>
            <div className={s.topComment}> 
                <h1> Most Recent Comment </h1>
                    <Comment comment = {this.state.comments.length !=0 ? this.state.comments[0] : {}} />    
            </div>
            <hr/>
            {this.state.comments.splice(1).map((comment)=>{
                return <Comment comment={comment} />
            })}
        </div>
    }
    
}


class ArticlePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            article: {},
        }
        this.commentBox = React.createRef();
        this.commentSection = React.createRef();
    }

    
    handleSubmission=(e)=>{
        e.preventDefault();

        
        const text = this.commentBox.current.value;
        const article={
            content: text,
            neg: 0,
            neu: 0,
            pos: 0,
            date: "8-12-18"
        }
        console.log("adding article", article)
        this.commentSection.current.addArticle(article);
    }

    componentWillMount(){
        fetch(
            'https://healthcivic.herokuapp.com/getDoc/CMS-2018-0090-0001')
            .then(
                (res)=>{
                    return res.json()
                }
            ).then(
                (doc)=>{
                    // console.log(doc)
                    this.setState({
                        article: doc,
                        isLoading: false
                    })
                }
            ).catch(
                (err)=>{
                    console.log(err)
                }
            )
    }
    

    render(){
        return <div className={s.page}>
            <Header/>
            <div className={s.page_content}>
                <h1 className={s.title}> {this.state.article.rule} </h1>
                <p className={s.body}>{this.state.article.content}</p>

                <hr/><hr/>

                <form onSubmit={this.handleSubmission}>
                    <textarea ref={this.commentBox} className={s.commentBox} placeholder="MAKE YOUR VOICE HEARD!"/> <br/>
                    <button type="submit"> Submit </button> 
                </form>

                <hr/><hr/>
                    
                <CommentSection ref={this.commentSection}/>
            </div>

            <Footer/>
        </div>
    }
}

export default ArticlePage