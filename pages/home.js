import React from 'react';
import Menu from '../components/menu';
import Router from 'next/router';

function home(props) {

    return (
        <div>   
            <Seo title="Alex Ricardo" description="Sem Descrição"/>
            <Menu />
            <h1>Home 2</h1>
            <button onClick={() => Router.push("/sobre")}>Sobre</button>
        </div>
    );
}

export default home;