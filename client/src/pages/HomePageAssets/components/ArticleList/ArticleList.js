import React, {Component} from 'react';
import s from './ArticleList.scss';
import {Link} from 'react-router-dom';
import Loader from '../Loader/Loader';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import ButtonLayout from '../ButtonLayout/ButtonLayout';
import {Carousel} from 'react-bootstrap';

const ArticleListItem = (props)=>{
    return <div className={props.styling}>
        <img className={s.img} src={`https://source.unsplash.com/random/400x300/?${props.article.title.split(' ')[0]}`} />
        <div className={s.content}>
            <h2 className={s.title}>
                <Link className={s.link} to={`/article/${props.article.id}`} >{props.article.title} </Link>
            </h2>
            <h4 className={s.body}> {props.article.body.substring(0,200) + "..."} </h4>
            {/* <ButtonLayout article={props.article}/> */}
        </div>
    </div>
}

class ArticleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: 'Featured',
            articles: [
                {
                    id: 0,
                    title: "New Proposed Law", 
                    likes: 10, 
                    neutral: 40,
                    dislikes: 5,
                    body: 'Qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
                },
                {
                    id: 1,
                    title: "Water is illegal", 
                    likes: 50, 
                    dislikes: 5,
                    neutral: 40,
                    body: 'At vero eos et accusamus et iusto oum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
                },
                {
                    id: 2,
                    title: "Sharks must pay taxes now", 
                    likes: 10002, 
                    dislikes: 5244,
                    neutral: 40,
                    body: 'Atleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
                },
                {
                    id: 3,
                    title: "Chicken declared first", 
                    likes: 10, 
                    dislikes: 522,
                    neutral: 40,
                    body: 'Atleniti atque corrupti quos dolores et quas molestias excepturi sin'
                },
                
                {
                    id: 9,
                    title: "Computer software can no longer farm for coins ", 
                    likes: 2002, 
                    dislikes: 5244,
                    neutral: 40,
                    body: 'Atleniti atque corrupti quos dolores et quas molestias excepturi sin'
                },
                {
                    id: 10,
                    title: "Machines restricted from learn deeper than the Marianna's Trench", 
                    likes: 2002, 
                    dislikes: 5244,
                    neutral: 40,
                    body: 'Atleniti atque corrupti quos dolores et quas molestias excepturi sin'
                },
                {
                    id: 4,
                    title: "Potato must pay health insurance", 
                    likes: 50, 
                    dislikes: 54,
                    neutral: 40,
                    body: 'Atleniti atque corrupti quos dolores et quas molestias excepturi sin'
                },
                {
                    id: 5,
                    title: "Environmental decision for retiring.", 
                    likes: 2002, 
                    dislikes: 5244,
                    neutral: 40,
                    body: 'Atleniti atque corrupti quos dolores et quas molestias excepturi sin'
                },
                {
                    id: 6,
                    title: "Last day procrastinating from making dumb policies", 
                    likes: 50, 
                    dislikes: 54,
                    neutral: 40,
                    body: 'Atleniti atque corrupti quos dolores et quas molestias excepturi sin'
                },
                {
                    id: 7,
                    title: "Chair declared first", 
                    likes: 10, 
                    dislikes: 522,
                    neutral: 40,
                    body: 'Atleniti atque corrupti quos dolores et quas molestias excepturi sin'
                },
                {
                    id: 8,
                    title: "Snails must pay health insurance", 
                    likes: 50, 
                    dislikes: 54,
                    neutral: 40,
                    body: 'Atleniti atque corrupti quos dolores et quas molestias excepturi sin'
                },
                {
                    id: 11,
                    title: "Chairs on it's last legs", 
                    likes: 2002, 
                    dislikes: 5244,
                    neutral: 40,
                    body: 'Atleniti atque corrupti quos dolores et quas molestias excepturi sin'
                },
                
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
            filter: query,
            articles: new_article_order
        })     
    }

    render(){
        return <div className={s.ArticleList}>
            {/* <h1> {this.props.subject} Articles </h1> */}

            {/* <button onClick={this.sortArticles.bind(this, 'likes')}> Sort by Likes </button>
            <button onClick={this.sortArticles.bind(this, 'dislikes')}> Sort by Dislikes </button>
            <button onClick={this.sortArticles.bind(this, 'title')}> Sort by Likes </button> */}
            {/* <h1> FEATURED </h1> */}
            {/* <Carousel className={s.carosel}>
                <Carousel.Item> */}
                    {/* <FeaturedItem article={this.state.articles[0]} /> */}
                {/* </Carousel.Item>
                <Carousel.Item>
                    <FeaturedItem article={this.state.articles[1]} />
                </Carousel.Item>
                <Carousel.Item>
                    <FeaturedItem article={this.state.articles[2]} />
                </Carousel.Item>
            </Carousel> */}

            {/* <hr style={{"margin" : "40px"}}/> */}
            
            <h2 className={s.gridTitle}> Recent Rules and Proposals </h2>
            <div className={s.grid}>
                {this.state.articles.slice(3).map((article, index)=>{
                    return <ArticleListItem styling={s.listItem} article={article}/>
                })}
            </div>
        </div>
    }
}

export default ArticleList