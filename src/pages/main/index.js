import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

export default class Main extends Component {
  // Para criar variaveis reativas, deve-se declara-las no méthodo state através de um listening pelo methodo render()
  state = {
    products: []
  };

  // Métodos que são própios do React, temos que criar funcoes desta forma
  componentDidMount() {
    this.loadProducts();
  }

  // Função própria - Arrow functions são utilizadas para conseguir referenciar outros methodos e variaveis da classe
  loadProducts = async () => {
    const response = await api.get(`/products`);

    this.setState({ products: response.data.docs });
    console.log(response.data.docs);
  };

  render() {
    const { products } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <a href="#">Acessar</a>
          </article>
        ))}
      </div>
    );
  }
}
