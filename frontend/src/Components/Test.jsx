const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Button(){
    return(
        <>
        {user.name}
        <button>
            hello
        </button>
        <img src={user.imageUrl} alt="" />
        </>
    )
}
function Test(){
    const products = [
        { id: 1, title: 'Apple', isFruit: true },
        { id: 2, title: 'Carrot', isFruit: false },
        { id: 3, title: 'Banana', isFruit: true }
    ];
    const listItems = products.map(product =>
        <li
            key={product.id}
  
        >
            {product.title}
        </li>
    );

    return (
        <>
            <ul>{listItems}</ul>
            <Button/>
            <p className="hello">Hello</p>
        </>
    );
}
export default Test