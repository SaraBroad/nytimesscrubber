import React, { Component } from 'react';
import SavedArticlesBarCard from "../components/SavedArticlesBarCard";

// componentDidMount() {
//     this.scrubArticles
// }

//   getSavedArticles = () => {
//     API.getArticles()
//       .then(res =>
//         this.setState({ articles: res.data, title: "", stateYear: "", endYear: "" })
//       )
//       .catch(err => console.log(err));
//   };


class Saved extends Component {
    render() {
        return (
            <div>
                <SavedArticlesBarCard />
           </div>
        )
    }
}

export default Saved;