import React, {Component} from 'react'
import s from './ArticlePage.scss';

const Comment = (props)=>{
    return <div>

    </div>
}

class CommentSection extends Component{
    constructor(props){
        super(props)

        this.state = {
            isLoading: true,
            comments: []

        }
    }
}


class ArticlePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            article: {},
        }
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
                    console.log(doc)
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
        
        fetch(
            'https://healthcivic.herokuapp.com/getCom/CMS-2018-0090-0001')
                .then(
                    (res)=>{
                        return res.json()
                    }
                ).then(
                    (doc)=>{
                        console.log(doc)
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
        return <div>
            
            {/* article page for {this.props.match.params.id} */}
            <h1> {this.state.article.rule} </h1>
            <p>{this.state.article.content}</p>


            <CommentSection/>
        </div>
    }
}

export default ArticlePage