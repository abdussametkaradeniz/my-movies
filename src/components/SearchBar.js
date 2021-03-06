import React from "react";

class SearchBar extends React.Component {
    
    /* state={
        searchQuery:""
    } */

    handleFormSubmit=(event)=>{
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5 mt-3">
                    <div className="col-12">
                        <input 
                            onChange={this.props.searchMovieProp} 
                            type="text" 
                            className="form-control" 
                            placeholder="Search a movie"
                            //value={this.state.searchQuery}
                        />
                    </div>
                </div>
            </form>
        )
    }
}
export default SearchBar;
