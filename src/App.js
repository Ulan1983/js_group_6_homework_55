import React, {Component} from 'react';
import './App.css';
import RenderIngr from "./Components/RenderIngr/RenderIngr";
import RenderImage from "./Components/RenderImage/RenderImage";

class App extends Component {

    state = {
        ingredients: [
            {name: 'Meat', count: 0},
            {name: 'Cheese', count: 0},
            {name: 'Salad', count: 0},
            {name: 'Bacon', count: 0}
        ],
        totalPrice: 20

    };

    addIngredient = ingr => {
        const ingredients = [...this.state.ingredients];

        const ingredientName = this.state.ingredients.findIndex(i => i.name === ingr.name);
        ingredients[ingredientName].count ++;
        let totalPrice = this.state.totalPrice;
        totalPrice += ingr.price;
        this.setState({ingredients, totalPrice})
    };

    removeIngredient = ingr => {
        const ingredientName = this.state.ingredients.findIndex(i => i.name === ingr.name);
        const ingredients = [...this.state.ingredients];
        ingredients[ingredientName].count --;
        let totalPrice = this.state.totalPrice;
        totalPrice -= ingr.price;
        this.setState({ingredients, totalPrice})

    };

    render() {
        return (
            <div className="App">
                <div className="ingredients">
                    <span>Ingredients</span>
                        <RenderIngr
                            ingredientApp={this.state.ingredients}
                            totalPriceAdd={this.state.totalPrice}
                            onAdd={this.addIngredient}
                            onRemove={this.removeIngredient}
                        />
                </div>
                <div className="burger">
                    <span>Burger</span>
                        <RenderImage
                            ingredientCount={this.state.ingredients}
                            totalPrice={this.state.totalPrice}
                        />
                </div>
            </div>
        );
    }
}

export default App;
