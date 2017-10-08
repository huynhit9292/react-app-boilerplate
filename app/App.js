import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import KanbanBoardContainer from './KanbanBoardContainer';
// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchTerm: 'React'
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ searchTerm: event.target.value });
//   }

//   render() {
//     return (
//       <div>
//         Search Term: <input
//           type="search"
//           value={this.state.searchTerm}
//           onChange={this.handleChange}
//         />
//       </div>
//     );
//   }
// }
// const cardsList = [
//   {
//     id: 1,
//     title: 'Read the Book',
//     description: 'I should read the whole book',
//     status: 'in-progress',
//     tasks: []
//   },
//   {
//     id: 2,
//     title: 'Write some code',
//     description: 'Code along with the samples in the book',
//     status: 'todo',
//     tasks: [
//       {
//         id: 1,
//         name: 'ContactList Example',
//         done: true
//       },
//       {
//         id: 2,
//         name: 'Kanban Example',
//         done: false
//       },
//       {
//         id: 3,
//         name: 'My own experiments',
//         done: false
//       }
//     ]
//   }
// ];
// const cardsList = [
//   {
//     id: 1,
//     title: 'Read the Book',
//     description: 'I should read the book',
//     color: '#BD8D31',
//     status: 'in-progress',
//     tasks: []
//   },
//   {
//     id: 2,
//     title: 'Write some code',
//     description: 'Code along with the samples ... at [github](https://github.com/pro-react) i am a man from the star world and i will kill all of you',
//     color: '#3A7E28',
//     status: 'todo',
//     tasks: [
//       { id: 1, name: 'ContactList Example', done: true },
//       { id: 2, name: 'Kanban Example', done: false },
//       { id: 3, name: 'My own experiments', done: false }
//     ]
//   }
// ];

// const contacts = [
//   { name: 'Cassio Zen', email: 'cassiozen@gmail.com' },
//   { name: 'Dan Abramov', email: 'gaearon@somewhere.com' },
//   { name: 'Pete Hunt', email: 'floydophone@somewhere.com' },
//   { name: 'Paul O’Shannessy', email: 'zpao@somewhere.com' },
//   { name: 'Ryan Florence', email: 'rpflorence@somewhere.com' },
//   { name: 'Sebastian Markbage', email: 'sebmarkbage@here.com' }
// ];
// class ContactsAppComponent extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       contacts: []
//     }
//   }

//   componentDidMount(){
//     fetch('./contacts.json')
//     // .then((response) => response.json())
//     .then((responseData) => {
//       console.log(JSON.parse(responseData));
//       this.setState({contacts: responseData});
//     })
//     .catch((error) => {
//       console.log('Error fetching and parsing data', error);
//     });
//   }
//   render(){
//     return (
//       <ContactsApp contacts={this.state.contacts} />
//     );
//   }
// }
// class ContactsApp extends Component {
//   constructor() {
//     super();
//     this.state = {
//       filterText: ''
//     };
//   }
//   handleUserInput(searchTerm) {
//     this.setState({filterText: searchTerm});
//   }
//   render() {
//     return (
//       <div>
//         <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
//         <ContactList
//           contacts={this.props.contacts}
//           filterText={this.state.filterText}
//         />
//       </div>
//     );
//   }
// }

// class SearchBar extends Component {
//   render() {
//     return (<input
//       type="search"
//       placeholder="search"
//       value={this.props.filterText}
//       onChange={(e) => {this.props.onUserInput(e.target.value)}}
//     />);
//   }
// }


// class ContactList extends Component {
//   render() {
//     const filteredContacts = this.props.contacts.filter(
//       contact => contact.name.indexOf(this.props.filterText) !== -1
//     );
//     return (
//       <ul>
//         {filteredContacts.map(
//           contact => (<ContactItem
//             key={contact.email}
//             name={contact.name}
//             email={contact.email}
//           />)
//         )}
//       </ul>
//     );
//   }
// }

// class ContactItem extends Component {
//   render() {
//     return <li>{this.props.name} - {this.props.email}</li>;
//   }
// }

render(<KanbanBoardContainer />, document.getElementById('root'));


// render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
