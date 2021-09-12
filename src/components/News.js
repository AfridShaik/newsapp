import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    articles = [
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "https://www.engadget.com/about/editors/jon-fingas",
          "title": "Tesla rolls out Full Self Driving 10 beta with more confident decision making | Engadget",
          "description": "Tesla has released a Full Self Driving 10 beta with what looks to be a smarter, more confident AI and better visuals..",
          "url": "https://www.engadget.com/tesla-full-self-driving-10-beta-145035031.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/b83e0b30-1309-11ec-876f-feaa47043738",
          "publishedAt": "2021-09-11T14:52:21.7143712Z",
          "content": "If Tesla's last big Full Self Driving beta was about enabling more semi-autonomous features off the highway, its newest release is focused more on helping you trust those features. Electreknotes Tesl… [+1391 chars]"
        },
        {
          "source": {
            "id": "bloomberg",
            "name": "Bloomberg"
          },
          "author": null,
          "title": "Tesla Raises the Price of Its Model Y Performance Car in China",
          "description": "",
          "url": "https://www.bloomberg.com/news/articles/2021-09-11/tesla-raises-the-price-of-its-model-y-performance-car-in-china",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/b83e0b30-1309-11ec-876f-feaa47043738",
          "publishedAt": "2021-09-11T06:28:00+00:00",
          "content": ""
        },
        {
          "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
          },
          "author": "Connie Loizos",
          "title": "Tesla should say something",
          "description": "Last weekend, a reader wrote to this editor, politely asking why tech companies should speak up about the abortion law that Texas passed last week. “What does American Airlines have to do with abortion?” said the reader, suggesting that companies can’t possib…",
          "url": "https://techcrunch.com/2021/09/10/tesla-should-say-something/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/03/Austin.jpg?w=600",
          "publishedAt": "2021-09-11T05:37:56Z",
          "content": "Last weekend, a reader wrote to this editor, politely asking why tech companies should speak up about the abortion law that Texas passed last week.\r\nWhat does American Airlines have to do with aborti… [+4856 chars]"
        },
        {
          "source": {
            "id": "next-big-future",
            "name": "Next Big Future"
          },
          "author": "Brian Wang",
          "title": "Foundational Stronger Magnet Made by Commonwealth Fusion Systems | NextBigFuture.com",
          "description": "Commonwealth Fusion Systems and MIT’s Plasma Science and Fusion Center (PSFC) have demonstrated a magnet with a record-breaking 20 Tesla magnetic field. This",
          "url": "https:https://nextbigfuture.s3.amazonaws.com/uploads/2021/09/20teslasuperconmagnet.jpeg",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/b83e0b30-1309-11ec-876f-feaa47043738",
          "publishedAt": "2021-09-10T15:59:44Z",
          "content": "Commonwealth Fusion Systems and MITs Plasma Science and Fusion Center (PSFC) have demonstrated a magnet with a record-breaking 20 Tesla magnetic field. This is the core technology that they planned t… [+3172 chars]"
        },
        {
          "source": {
            "id": "next-big-future",
            "name": "Next Big Future"
          },
          "author": "Brian Wang",
          "title": "Ford Versus Tesla and Chinese EV makers | NextBigFuture.com",
          "description": "Sandy Munro describes how Tesla's cars are about 30% more efficient than the Ford Mach E and the Volkswagen ID4.",
          "url": "https://www.nextbigfuture.com/2021/09/ford-versus-tesla-and-chinese-ev-makers.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/b83e0b30-1309-11ec-876f-feaa47043738",
          "publishedAt": "2021-09-09T15:33:04Z",
          "content": "Brian Wang is a Futurist Thought Leader and a popular Science blogger with 1 million readers per month. His blog Nextbigfuture.com is ranked #1 Science News Blog. It covers many disruptive technology… [+593 chars]"
        },
        {
          "source": {
            "id": "next-big-future",
            "name": "Next Big Future"
          },
          "author": "Brian Wang",
          "title": "Tesla China August Production 20% Over Estimates | NextBigFuture.com",
          "description": "Tesla China had August production of 44,200 which is about 20% over analyst expectations. There had been a rumor two weeks ago that Tesla China had increased",
          "url": "https://www.nextbigfuture.com/2021/09/tesla-china-august-production-20-over-estimates.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/b83e0b30-1309-11ec-876f-feaa47043738",
          "publishedAt": "2021-09-08T21:43:23Z",
          "content": "Tesla China had August production of 44,200 which is about 20% over analyst expectations. There had been a rumor two weeks ago that Tesla China had increased model Y production to 1000 per week inste… [+2352 chars]"
        }
      ]
      
    constructor(){
        super();
        console.log("I am a constructor ");
        this.state = {
            articles: this.articles,
            loading : false
        }
    }

    async componentDidMount(){
      console.log("cdm")
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d60f7caa2c494e2fa7c8615f4a3fe066";
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log()
    }

    render() {
        return (
            <div className = "container my-4">
                <h2>News Lion</h2>
               <div className="row">                    
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key= {element.url} >
                            <Newsitem rel="noreferrer" title ={element.title.slice(0,45)} description = {element.description.slice(0,88)} imageUrl= {element.urlToImage} newsUrl ={element.url} />
                        </div>
                    })}                    
                </div>
            </div>
        )
    }
}
