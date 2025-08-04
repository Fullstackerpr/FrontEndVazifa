import { Component } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import Popup from "../components/ui/Popup";
import { books } from "../static";

export default class Add extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      author: "",
      price: "",
      data: books,
      isShow: false,
      updateItem: null,
      search: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, author, price, data, updateItem } = this.state;
    if (updateItem) {
      const updateData = data.map((item) =>
        item.id === updateItem.id
          ? { ...item, title, description, author, price }
          : item
      );
      this.setState({
        data: updateData,
        updateItem: null,
        title: "",
        description: "",
        author: "",
        price: "",
        isShow: false,
      });
    } else {
      const newTodo = {
        id: Date.now(),
        title,
        description,
        author,
        price,
        isCompleted: false,
      };
      this.setState({
        data: [...data, newTodo],
        title: "",
        description: "",
        author: "",
        price: "",
        selectBook: "",
        isShow: false,
      });
    }
  };

  handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      const { data } = this.state;
      this.setState({ data: data.filter((item) => item.id !== id) });
    }
  };

  handleUpdate = (todo) => {
    this.setState({
      title: todo.title,
      description: todo.description,
      author: todo.author,
      price: todo.price,
      updateItem: todo,
      isShow: true,
    });
  };

  handleShow = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    const { title, description, author, price, data, search } = this.state;

    const filteredData = data.filter(
      (item) =>
        item.title.toLowerCase().includes(search?.toLowerCase?.()) ||
        item.author.toLowerCase().includes(search?.toLowerCase?.()) 
        // item.price.toString().includes(search?.toLowerCase?.() || "")
    );

    return (
      <div>
        <div className="container flex justify-between items-center h-[60px] rounded-[10px] bg-cyan-200 px-10">
          <Link
            to={"/"}
            className="hover:text-blue-800 hover:underline font-bold text-gray-600 flex"
          >
            <AiFillHome size={24} className="mr-2 mt-[1px] size-[20px]" /> Go
            Home
          </Link>
          <div>
            <label
              htmlFor=""
              className="font-bold size-[24] text-gray-600 pr-2"
            >
              Search
            </label>
            <input
              className="border-2 border-gray-600 pl-3 w-[500px] h-[35px] rounded-2xl outline-none"
              type="text"
              name=""
              id=""
              placeholder="Search..."
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
            />
          </div>
          <button
            onClick={this.handleShow}
            className="border-2 border-gray-600 font-bold w-[100px] h-[35px] rounded-4xl text-[20px] cursor-pointer hover:bg-gray-500 hover:text-white hover:border-0"
          >
            +
          </button>
        </div>

        <Popup isShow={this.state.isShow} onClose={this.handleShow}>
          <div>
            <form
              onSubmit={this.handleSubmit}
              className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4"
            >
              <h1 className="text-xl font-bold text-center text-gray-700">
                📚 Book Form
              </h1>

              <input
                required
                type="text"
                placeholder="Enter book title"
                value={title}
                onChange={(e) => this.setState({ title: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <textarea
                rows="3"
                placeholder="Enter your description"
                value={description}
                onChange={(e) => this.setState({ description: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              ></textarea>

              <input
                required
                type="text"
                placeholder="Enter book author"
                value={author}
                onChange={(e) => this.setState({ author: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                required
                type="number"
                placeholder="Enter book price"
                value={price}
                onChange={(e) => this.setState({ price: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <div className="flex justify-between pt-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={this.handleShow}
                  className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Popup>

        <div className="container mt-10 overflow-x-auto rounded-lg shadow-md bg-white p-4">
          <table className="min-w-full text-sm text-left text-gray-800 border-collapse border border-gray-300">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2 border border-gray-300">#</th>
                <th className="px-4 py-2 border border-gray-300">Title</th>
                <th className="px-4 py-2 border border-gray-300">
                  Description
                </th>
                <th className="px-4 py-2 border border-gray-300">Author</th>
                <th className="px-4 py-2 border border-gray-300">Price</th>
                <th className="px-4 py-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((todo, index) => (
                <tr
                  key={todo.id}
                  className="hover:bg-gray-100 border-t border-gray-300"
                >
                  <td className="px-4 py-2 border border-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {todo.title}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {todo.description}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {todo.author}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    ${todo.price}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 space-x-2 flex">
                    <button
                      onClick={() => this.handleUpdate(todo)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => this.handleDelete(todo.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
