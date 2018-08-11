import React, {Component} from 'react';
import s from './ArticleList.scss';
import arrow_up from './arrow_up.png';
import arrow_down from './arrow_down.png';
import cn from 'classnames'

const ArticleListItem = (props)=>{
    return <div className={s.listItem}>
        <h2> {props.article.title} </h2>
        <button className={s.good} onClick={()=>console.log()} > <img className={s.arrow} src={arrow_up}/> {props.article.likes}  </button>
        <button className={s.bad} onClick={()=>console.log()} > <img className={s.arrow} src={arrow_up}/> {props.article.dislikes} </button>
    </div>
}

class ArticleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [
                {
                    id: 0,
                    title: "New Proposed Law", 
                    likes: 10, 
                    dislikes: 5
                },
                {
                    id: 1,
                    title: "Water is illegal", 
                    likes: 50, 
                    dislikes: 5
                },
                {
                    id: 2,
                    title: "Sharks must pay taxes now", 
                    likes: 10002, 
                    dislikes: 5244
                },
                {
                    id: 3,
                    title: "Chicken declared first", 
                    likes: 10, 
                    dislikes: 522
                },
                {
                    id: 4,
                    title: "Eggs must pay health insurance", 
                    likes: 50, 
                    dislikes: 54
                },
                {
                    id: 5,
                    title: "Lawmakers retire from making dumb policies", 
                    likes: 2002, 
                    dislikes: 5244
                }
            ],
            isLoading: true
        }
    }

    sortArticles=(query)=>{
        let new_article_order = this.state.articles;
        for(let i; i<3; i++){
            console.log(new_article_order[i][query])
        }
        const compare = (a,b)=>{
            if (a[query] < b[query])
                return -1;
            else if (a[query] > b[query])
                return 1;
            else
                return 0;
        }
        
        new_article_order.sort(compare)
        this.setState({
            articles: new_article_order
        })     
    }

    //When the subject of the article list changes again
    // componentDidUpdate(){
        //fetch
    // }

    // componentWillMount(){
        // fetch(this.props.subject)
    // }


    render(){
        return <div className={s.ArticleList}>
            <h1> {this.props.subject} </h1>
            <button onClick={()=>console.log(this.state.articles)}> Check </button>
            <button onClick={this.sortArticles.bind(this, 'likes')}> Sort by Likes </button>
            <button onClick={this.sortArticles.bind(this, 'dislikes')}> Sort by Dislikes </button>
            <button onClick={this.sortArticles.bind(this, 'title')}> Sort by Likes </button>
            
            {this.state.articles.map((article)=>{
                return <ArticleListItem article={article}/>
            })}
        </div>
    }
}

export default ArticleList