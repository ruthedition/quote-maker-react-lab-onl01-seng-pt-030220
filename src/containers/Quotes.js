import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote, downvoteQuote, upvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => {
                return <QuoteCard 
                  key={quote.id} 
                  quote={quote} 
                  removeQuote={this.props.removeQuote} 
                  downvoteQuote={this.props.downvoteQuote} 
                  upvoteQuote={this.props.upvoteQuote} 
                />
              })}
              
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeQuote: (id) => dispatch(removeQuote(id)),
    downvoteQuote: (id) => dispatch(downvoteQuote(id)),
    upvoteQuote: (id) => dispatch(upvoteQuote(id))
  }
}



//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
