import { Component } from "react" 
import "./index.css"

class Expencess extends Component   {
    state = { 
        description : "", 
        amount : 0, 
        date : "",
    }  

    const addDescription = event => (
        this.setState({description : event.target.value}) 
         description = setLocalStorgae(this.description)
    

    const addAmount = event => (
        this.setState({amount : event.target.value})
        amount = setLocalStorgae(this.amouunt)
    )

    const addDate = event => (
        this.setState({amount : event.target.value})
        date = setLocalStorgae(this.date)
    );

    render() { 
        const {description, amount, date} = this.state
        return ( 
            <li> 
                <form>  
                    <input onClick={addDescription} id="description"> {description} </input>  
                    <label> description </label>
                    <input onClick={addAmount} id="amount"> {amount} </input>  
                    <label> description </label>
                    <input onClick={addDate} id="date"> {date} </input>  
                    <label> description </label>
                </form>
            </li>
        )
    }
}  

export default Expencess