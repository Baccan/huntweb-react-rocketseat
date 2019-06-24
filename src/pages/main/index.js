import React, { Component } from "react";
import api from "../../services/api";

export default class Main extends Component {
  // Métodos que são própios do React, temos que criar funcoes desta forma
  componentDidMount() {
    this.loadProducts();
  }

  // Função própria - Arrow functions são utilizadas para conseguir referenciar outros methodos e variaveis da classe
  loadProducts = async () => {
    const response = await api.get(`/products`);

    console.log(response.data.docs);
  };

  render() {
    return <h1>Hello Rocketseat</h1>;
  }
}
