import { Component } from "react";

export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const {data, loading, error} = this.state;

    return (
        <div className="container mt-[50px] grid grid-cols-4 gap-2">
            {data?.recipes?.map((item) => (
                <div key={item.id}>
                    <img src={item.image} width={300} alt="" />
                    <h3>{item.name}</h3>
                </div>
            ))}
        </div>
    )
  }
}
