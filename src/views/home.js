import React from 'react';

function Home(props) {
    return (
        <>
            <div className="jumbotron">
                <h1 className="display-3">Estoque</h1>
                <p className="lead">Gerencie seu estoque de produtos!</p>
                <hr className="my-4" />
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Cadastar</a>
                </p>
            </div>
        </>
    )
}

export default Home;