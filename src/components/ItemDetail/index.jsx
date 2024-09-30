import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";

const ItemDetail = ({ id, wine_name, img, sale_price, vineyard, category }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const increase = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  const decrease = () => {
    setQuantity(prevQuantity => prevQuantity > 0 ? prevQuantity - 1 : 0);
  }

  const handleAddToCart = () => {
    if (quantity > 0) {
      console.log('Añadiendo al carrito:', { id, wine_name, img, sale_price, vineyard, category }, quantity);
      addToCart({ id, wine_name, img, sale_price, vineyard, category }, quantity);
    } else {
      console.log('No se puede agregar cantidad 0 al carrito');
    }
  };

  return (
    <section className="item-detail">
      <picture className="item-detail__picture">
        <img className="item-detail__picture--img item-detail__picture--img--1" src={`/img${img?.front}`} alt={`${wine_name} - Figura`} />
        <img className="item-detail__picture--img item-detail__picture--img--2" src={`/img${img?.back}`} alt={`${wine_name} - Caja`} />
      </picture>
      <article className="item-detail__info">
        <p className="item-detail__info--licence">{category}</p>
        <h2 className="item-detail__info--name">{wine_name}</h2>
        <p className="item-detail__info--description">{vineyard}</p>
        <p className="item-detail__info--price">$ {sale_price}</p>
        <div className="item-detail__form--container">
          <button className="item-detail__form--btn" type="button" onClick={decrease}>-</button>
          <input className="item-detail__form--input" type="text" value={quantity} readOnly />
          <button className="item-detail__form--btn" type="button" onClick={increase}>+</button>
        </div>
        <button className="item-detail__form--submit" type="button" onClick={handleAddToCart}>
          Agregar al Carrito
        </button>
      </article>
    </section>
  );
};

export default ItemDetail;


// import { useContext, useState } from "react";
// import { CartContext } from "../../context/cartContext";

// const ItemDetail = ({ id, wine_name, img, sale_price, vineyard, category }) => {
//   let [ quantity, setQuantity ] = useState(0);
//   const { addToCart } = useContext(CartContext);

//   const increase = () => {
//     setQuantity(quantity++)
//   }

//   const decrease = () => {
//     quantity < 1 ? setQuantity(0) : setQuantity(quantity--)
//   }

//   // const addItemToCart = () => {
//   //   addItem({id, wine_name, img, sale_price, vineyard, category, quantity})
//   // }

//   const handleAddToCart = () => {
//     addToCart(item, quantity);
//   };


//   return (
//     <section className="item-detail">
//       <picture className="item-detail__picture">
//           <img className="item-detail__picture--img item-detail__picture--img--1" src={`/img${img?.front}`} alt={`${wine_name} - Figura`} />
//           <img className="item-detail__picture--img item-detail__picture--img--2" src={`/img${img?.back}`} alt={`${wine_name} - Caja`} />
//       </picture>
//       <article className="item-detail__info">
//           <p className="item-detail__info--licence">{category}</p>
//           <h2 className="item-detail__info--name">{wine_name}</h2>
//           <p className="item-detail__info--description">{vineyard}</p>
//           <p className="item-detail__info--price">$ {sale_price}</p>
//           <div className="item-detail__form--container">
//               <button className="item-detail__form--btn" type="button" onClick={decrease}>-</button>
//               <input className="item-detail__form--input" type="text" value={quantity} />
//               <button className="item-detail__form--btn" type="button" onClick={increase}>+</button>
//           </div>
//           <input className="item-detail__form--submit" type="button" value="Agregar al Carrito" onClick={handleAddToCart} />
//       </article>
//     </section>
//   );
// };

// export default ItemDetail;