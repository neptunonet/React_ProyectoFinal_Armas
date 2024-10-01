import { Link } from "react-router-dom";

const Item = ({ wine_name, img, sale_price, category, id }) => {
    return(
      <article className={`item`}>
        <Link to={`/detalle/${id}`}>
          <picture className="item__picture">
            <img className="item__picture--img item__picture--img--1" src={`/img${img.front}`} alt={`${wine_name} - Figura`} />
            <img className="item__picture--img item__picture--img--2" src={`/img${img.back}`} alt={`${wine_name} - Caja`} />
          </picture>
          <div className="item__info">
            <h3 className="item__info--title">{category}</h3>
            <h4 className="item__info--item">{wine_name}</h4>
            <p className="item__info--price">$ {sale_price} .-</p>
          </div>
        </Link>
      </article>
    );
};

export default Item;