import React from "react";

const user = {
    name : "Hedy Lamarr",
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90

}

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
]

function ShoppingList(){
    const listItems = products.map(product =>
        <li
        key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
        >
            {product.title}
        </li>
        )

        return (
            <ul>{listItems}</ul>
        )
}

function Profile(){
    return(
        <>
            <h1>{user.name}</h1>
            <img 
            className="avatar"
            src={user.imageUrl}
             alt={"Photo of " + user.name}
             style={{
                width: user.imageSize,
                height: user.imageSize
             }}

             />
        </>
    );
}

function Button(){
    return (
        <button>I"m a  button</button>
    );
}

function AboutPage(){
    return(
        <>
            <h1>About</h1>
            <p>Hello There <br /> How do you do?</p>
            <img src="" className="avatar" alt="" />
        </>
    );
}

export default function MyApp(){
    return (
        <div>
            <h1>Welcome to my app</h1>
            <Button />
            <AboutPage/>
            <Profile />
            <ShoppingList />
        </div>
    );
}