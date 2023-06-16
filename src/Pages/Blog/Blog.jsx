import React from 'react';

const Blogs = () => {
    return (
        <div className="mx-28 mt-20 mb-20">
            <h1 className="text-xl font-bold"> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p>Access tokens are short-lived tokens that are used to access protected resources. They are typically issued for a limited period of time, such as 30 minutes or an hour.
                Refresh tokens are long-lived tokens that can be used to obtain new access tokens. They are typically issued for a period of weeks or months. Refresh tokens are typically stored in the browser local storage or a secure database.</p>
            <h1 className="text-xl mt-10 font-bold"> Compare SQL and NoSQL databases</h1>
            <p>SQL and NoSQL are two different types of databases. SQL databases are relational databases, while NoSQL databases are non-relational databases. SQL databases are based on the relational model, which organizes data into tables. Each table has a set of columns and rows. NoSQL databases do not have a fixed schema.NoSQL databases are often use for storing large amounts of unstructured data.</p>
            <h1 className="text-xl mt-10 font-bold"> What is express js? What is Nest JS ?</h1>
            <p>Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building dynamic web applications.
                Nest.js is a framework built on top of Express.js that provides a more opinionated and structured approach to building web applications.</p>
            <h1 className="text-xl mt-10 font-bold"> What is MongoDB aggregate and how does it work?</h1>
            <p>MongoDB aggregate is a feature that allows you to perform complex operations on your data. It is a powerful tool that can be used to filter, group, sort, and transform your data in a variety of ways.
                To use MongoDB aggregate, you need to create an aggregation pipeline. An aggregation pipeline is a sequence of stages that are applied to your data in order to produce the desired results. Each stage performs a specific operation on the data, such as filtering, grouping, or sorting.</p>
        </div>
    );
};

export default Blogs;