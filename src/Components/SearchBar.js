import React from 'react'

class SearchBar extends React.Component{
    state={term:''}
    onSubmitVal = e=>{
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }
    render(){
        return <div className="row red">
        <div className="col offset-m3 m5 offset-l3 l6 s12 card">
          <div className="row">
              <form onSubmit={this.onSubmitVal}>
            <div className="input-field col s12 blue-text">
              <i className="material-icons prefix red-text">textsms</i>
              <input type="text" id="autocomplete-input" value={this.state.term} onChange={e=>this.setState({term:e.target.value})} className="autocomplete"/>
              <label htmlFor="autocomplete-input">Search Video</label>
            <button type='submit' className='btn red right'>Search</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    }
}
export default SearchBar