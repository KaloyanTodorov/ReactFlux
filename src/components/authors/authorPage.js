"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
    getinitalState: function() {
        return {
            authors: []
        };
    },

    componentWillMount: function() {
        this.setState({authors: AuthorApi.getAllAuthors()});
    },

    render: function(){
        var createAuthorrow = function (author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#author/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <h1>Authors</h1>

                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.state.authors.map(createAuthorrow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Authors;