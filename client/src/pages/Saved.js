// import React, { Component } from 'react';
// import SavedArticlesBarCard from "../components/SavedArticlesBarCard";
// import API from "../utils/API";



// class Saved extends Component {

//     componentDidMount() {
//         this.getSavedArticles()
//     };

//     getSavedArticles = () => {
//         API.getSaved()
//             .then((res) => {
//                 this.setState({
//                     savedArticles: res.data
//                 });
//             })
//     }

//     deleteArticles = id => {
//         API.deleteArticles(id)
//             .then(res => this.getArticles())
//             .catch(err => console.log(err));
//     };

//     render() {
//         return (
//             <div>
//                 {this.state.savedArticles.map((savedArticle, i) => (
//                     <SavedArticlesBarCard
//                         id={savedArticle.id}
//                         key={i}
//                         title={savedArticle.title}
//                         deleteBook={this.deleteBook}
//                     />
//                 ))}
//             </div>
//         )
//     }
// }

// export default Saved;