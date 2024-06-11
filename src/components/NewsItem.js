// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
   let {title,discription,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
       <div className="card">
        <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
       <span className="badge rounded-pill bg-danger ">
    {source}
  </span>
  </div>
  <img src={!imageUrl?"https://images.mid-day.com/images/images/2023/jan/Luxe-Keto1_d.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel ="noreferrer" href={newsUrl}target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem