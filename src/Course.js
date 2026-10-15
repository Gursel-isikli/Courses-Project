function Course({id,content,title,price,removeOneCourse}){
   
    // console.log(id);
    // console.log(content);
    return(
        <div className="card">
            <div className="cardTitlePrice">
                  <h2 className="cardTitle">{title}</h2>
                  <h4 className="cardPrice">{price} Euro</h4>
            </div>
            <p>{content}</p>
            <button className="cardDeleteBtn" onClick={() => removeOneCourse(id) }>Delete</button>
        </div>
    )
}

export default Course;