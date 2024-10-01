import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

import ItemList from "../../components/ItemList";
import Spinner from "../../components/Spinner";

const Store = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fallback, setFallback] = useState({
    visible: false,
    message: ''
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);

    const itemsCollection = category
      ? query(collection(db, 'items'), where('category', '==', category))
      : collection(db, 'items');

    getDocs(itemsCollection)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          setFallback({ visible: true, message: "No encontramos resultados" });
        } else {
          const itemsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setItems(itemsData);

          // Extraer categorías únicas de los items
          const uniqueCategories = [...new Set(itemsData.map(item => item.category))];
          setCategories(uniqueCategories);
        }
      })
      .catch((err) => {
        console.error("Error al consultar los datos: ", err);
        setFallback({ visible: true, message: "No pudimos cargar los datos" });
      })
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <main className="store">
      {loading ? (
        <Spinner />
      ) : fallback.visible ? (
        <p>{fallback.message}</p>
      ) : (
        <>
          <aside className="store__aside">
            <h3>Categorías</h3>
            <ul>
              <li>
                <Link to="/tienda">Todas</Link>
              </li>
              {categories.map((cat, index) => (
                <li key={index}>
                  <Link to={`/tienda/${cat}`}>{cat}</Link>
                </li>
              ))}
            </ul>
          </aside>
          <section className="store__content">
            <h2>{category ? `Categoría: ${category}` : 'Todos los productos'}</h2>
            <ItemList className="store__items" items={items} />
          </section>
        </>
      )}
    </main>
  );
}

export default Store;

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "../../services/firebaseConfig";

// import ItemList from "../../components/ItemList";
// import Spinner from "../../components/Spinner";

// const Store = () => {
//  const { category } = useParams();

//  let [ items, setItems ] = useState([]);
//  let [ loading, setLoading ] = useState(false);
//  let [ fallback, setFallback ] = useState({
//     visible: false,
//     message: ''
//  });

//  useEffect(() => {
//     setLoading(true);

//     const itemsCollection = category
//     ? query(collection(db, 'items'), where('category', '==', category))
//     : collection(db, 'items');

//     getDocs(itemsCollection)
//     .then ((snapshot) => {
//       if (snapshot.size === 0) {
//         setFallback({visible: true, message: "No encontramos resultados"});
//       } else {
//         setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
//       }
//     })
//     .catch((err) => {
//            console.error("Errror al consultar los datos: ",err);
//            setFallback({visible: true, message: "No pudimos cargar los datos"});
//      })
//     .finally(() => setLoading(false))
//   }, []);

//   return (
//     <main className="store">
//      { loading
//       ? <Spinner />
//       : fallback.visible
//         ? (
//             <p>{fallback.message}</p>
//           )
//         : (
//           <>
//             <aside className="store__aside">
//               <p>filtros</p>
//             </aside>
//             <ItemList className="store__items" items={items}/>
//           </>
//         )
//     }
//     </main>
//   );
// }

// export default Store;